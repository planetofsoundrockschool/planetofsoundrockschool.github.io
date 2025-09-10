const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { execSync } = require('child_process');
const fs = require('fs');
const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');

module.exports = function(eleventyConfig) {
  // Configure Markdown-it with options
  let markdownItOptions = {
    html: true, // Enable HTML tags in Markdown
  };

  const md = markdownIt(markdownItOptions)
    .use(markdownItAttrs);

  eleventyConfig.setLibrary("md", md);

  // Add custom Markdown filter for Nunjucks - this prevents empty p tags
  eleventyConfig.addNunjucksFilter("markdown", function (value) {
    if (!value || typeof value !== 'string' || value.trim() === '') {
      return ''; // Return empty string instead of empty p tags
    }
    return md.render(value);
  });

  // Add cache-busting filter using Git commit hash or file modification time
  eleventyConfig.addFilter("cacheBust", function(url) {
    try {
      // Try to get Git commit hash for the file
      const filePath = `src${url}`;
      if (fs.existsSync(filePath)) {
        try {
          // Get the last commit hash that modified this file
          const gitHash = execSync(`git log -1 --format="%h" -- "${filePath}"`, { encoding: 'utf8' }).trim();
          if (gitHash) {
            return `${url}?v=${gitHash}`;
          }
        } catch (gitError) {
          // Fall back to file modification time if git fails
          console.warn('Git not available for cache busting, using file mtime');
        }
        
        // Fallback: use file modification time
        const stats = fs.statSync(filePath);
        const mtime = Math.floor(stats.mtime.getTime() / 1000);
        return `${url}?v=${mtime}`;
      }
    } catch (error) {
      console.warn(`Cache busting failed for ${url}:`, error.message);
    }
    
    // Ultimate fallback: use current timestamp (for build time)
    return `${url}?v=${Date.now()}`;
  });
  // Add HTML transform to clean up empty p tags during development
  eleventyConfig.addTransform("cleanEmptyParagraphs", function(content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      // Remove various forms of empty p tags with multiple passes
      let cleaned = content;
      let previousContent;
      
      // Keep cleaning until no more changes
      do {
        previousContent = cleaned;
        cleaned = cleaned
          // Basic empty p tags
          .replace(/<p>\s*<\/p>/g, '')
          .replace(/<p[^>]*>\s*<\/p>/g, '')
          .replace(/<p><\/p>/g, '')
          // Empty p tags with whitespace variations
          .replace(/<p>\s+<\/p>/g, '')
          .replace(/<p[^>]*>\s+<\/p>/g, '')
          // Empty p tags with non-breaking spaces
          .replace(/<p>\s*&nbsp;\s*<\/p>/g, '')
          .replace(/<p[^>]*>\s*&nbsp;\s*<\/p>/g, '')
          // P tags incorrectly wrapping div elements (CRITICAL FIX)
          .replace(/<p>\s*(<div[^>]*>)/g, '$1')
          .replace(/(<\/div>)\s*<\/p>/g, '$1')
          // P tags between elements (common Markdown/Nunjucks issue)
          .replace(/><p><\/p></g, '>')
          .replace(/><p>\s*<\/p></g, '>')
          .replace(/><p><\/p>\n/g, '>\n')
          .replace(/><p>\s*<\/p>\n/g, '>\n')
          // P tags at line boundaries
          .replace(/\n<p><\/p>/g, '')
          .replace(/\n<p>\s*<\/p>/g, '')
          .replace(/<p><\/p>\n/g, '')
          .replace(/<p>\s*<\/p>\n/g, '')
          // P tags with only whitespace characters
          .replace(/<p>[\s\r\n\t]*<\/p>/g, '')
          .replace(/<p[^>]*>[\s\r\n\t]*<\/p>/g, '')
          // Multiple consecutive p tags
          .replace(/(<p><\/p>)+/g, '')
          .replace(/(<p>\s*<\/p>)+/g, '')
          // P tags between card elements (specific to Bootstrap cards)
          .replace(/(<\/div>)\s*<p><\/p>\s*(<div)/g, '$1\n$2')
          .replace(/(<\/card-body>)\s*<p><\/p>\s*(<div)/g, '$1\n$2')
          // Clean up extra whitespace and empty lines
          .replace(/\n\s*\n\s*\n/g, '\n\n')
          // Remove p tags that contain only HTML comments
          .replace(/<p>\s*<!--[^>]*-->\s*<\/p>/g, '')
          // Final cleanup of any remaining edge cases
          .replace(/\s*<p>\s*<\/p>\s*/g, ' ');
      } while (cleaned !== previousContent && cleaned.includes('<p></p>'));
      
      return cleaned;
    }
    return content;
  });
  
  // Add navigation plugin
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  
  // Add global data for environment variables
  eleventyConfig.addGlobalData("env", {
    context: process.env.CONTEXT || "development",
    deployPrimeUrl: process.env.DEPLOY_PRIME_URL || "",
    url: process.env.URL || `http://localhost:${process.env.PORT || 8080}`,
    isPreview: process.env.CONTEXT === "deploy-preview"
  });
  
// Copy static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/_images");
  
  // Copy admin files for Decap CMS
  eleventyConfig.addPassthroughCopy("src/admin");
  
  // Watch for changes in CSS and JS files
  eleventyConfig.addWatchTarget("src/css/");
  eleventyConfig.addWatchTarget("src/js/");
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};

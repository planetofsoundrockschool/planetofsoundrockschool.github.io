const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
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
          // Empty p tags with non-breaking spaces
          .replace(/<p>\s*&nbsp;\s*<\/p>/g, '')
          .replace(/<p[^>]*>\s*&nbsp;\s*<\/p>/g, '')
          // P tags incorrectly wrapping div elements (CRITICAL FIX)
          .replace(/<p>\s*(<div[^>]*>)/g, '$1')
          .replace(/(<\/div>)\s*<\/p>/g, '$1')
          // P tags between elements (common Markdown issue)
          .replace(/><p><\/p></g, '>')
          .replace(/><p>\s*<\/p></g, '>')
          .replace(/><p><\/p>\n/g, '>\n')
          .replace(/><p>\s*<\/p>\n/g, '>\n')
          // P tags at line boundaries
          .replace(/\n<p><\/p>/g, '')
          .replace(/\n<p>\s*<\/p>/g, '')
          .replace(/<p><\/p>\n/g, '')
          .replace(/<p>\s*<\/p>\n/g, '')
          // Multiple consecutive p tags
          .replace(/(<p><\/p>)+/g, '')
          .replace(/(<p>\s*<\/p>)+/g, '')
          // Clean up extra whitespace
          .replace(/\n\s*\n\s*\n/g, '\n\n');
      } while (cleaned !== previousContent);
      
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

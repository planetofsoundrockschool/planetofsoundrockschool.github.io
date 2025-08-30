const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
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

#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Recursively finds and cleans empty <p> tags from HTML files
 */
function cleanEmptyParagraphs(htmlContent) {
  // Remove various forms of empty p tags
  let cleaned = htmlContent
    .replace(/<p>\s*<\/p>/g, '') // <p></p>
    .replace(/<p[^>]*>\s*<\/p>/g, '') // <p class="something"></p>
    .replace(/<p>\s*&nbsp;\s*<\/p>/g, '') // <p>&nbsp;</p>
    .replace(/<p[^>]*>\s*&nbsp;\s*<\/p>/g, '') // <p class="something">&nbsp;</p>
    .replace(/<p><\/p>/g, '') // <p></p> without spaces
    .replace(/><p><\/p></g, '>') // Remove p tags between elements
    .replace(/><p><\/p>\n/g, '>\n') // Remove p tags with newlines
    .replace(/\n\s*\n\s*\n/g, '\n\n'); // Remove excessive line breaks
  
  // Keep cleaning until no more changes (sometimes nested)
  while (cleaned !== htmlContent) {
    htmlContent = cleaned;
    cleaned = htmlContent
      .replace(/<p>\s*<\/p>/g, '')
      .replace(/<p[^>]*>\s*<\/p>/g, '')
      .replace(/<p><\/p>/g, '')
      .replace(/><p><\/p></g, '>')
      .replace(/><p><\/p>\n/g, '>\n');
  }
  
  return cleaned;
}

/**
 * Recursively find all HTML files in a directory
 */
function findHtmlFiles(dir) {
  let results = [];
  
  try {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        results = results.concat(findHtmlFiles(filePath));
      } else if (file.endsWith('.html')) {
        results.push(filePath);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }
  
  return results;
}

/**
 * Process all HTML files in the _site directory
 */
function processHtmlFiles() {
  const siteDir = path.join(__dirname, '..', '_site');
  
  if (!fs.existsSync(siteDir)) {
    console.log('❌ _site directory not found. Run `npm run build` first.');
    return;
  }
  
  console.log('🧹 Cleaning empty <p> tags from HTML files...');
  
  const files = findHtmlFiles(siteDir);
  let cleanedCount = 0;
  
  files.forEach(filePath => {
    try {
      const originalContent = fs.readFileSync(filePath, 'utf8');
      const cleanedContent = cleanEmptyParagraphs(originalContent);
      
      if (originalContent !== cleanedContent) {
        fs.writeFileSync(filePath, cleanedContent, 'utf8');
        cleanedCount++;
        console.log(`✨ Cleaned: ${path.relative(siteDir, filePath)}`);
      }
    } catch (error) {
      console.error(`❌ Error processing ${filePath}:`, error.message);
    }
  });
  
  console.log(`✅ Cleaned ${cleanedCount} file(s) of empty <p> tags`);
}

// Run the script
if (require.main === module) {
  processHtmlFiles();
}

module.exports = { cleanEmptyParagraphs, processHtmlFiles };

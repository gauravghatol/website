const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../client/src/pages/departments/Electrical.jsx');

// Read the file
let content = fs.readFileSync(filePath, 'utf8');

// Find curriculum: ( that comes AFTER "+ Add Semester"
const addSemesterPos = content.indexOf('+ Add Semester');
if (addSemesterPos === -1) {
  console.log('[ERROR] Could not find "+ Add Semester" button');
  process.exit(1);
}

// Find the closing ), after "+ Add Semester"
const closingPos = content.indexOf('    ),', addSemesterPos);
if (closingPos === -1) {
  console.log('[ERROR] Could not find closing ),');
  process.exit(1);
}

// Find "Scheme and Syllabus" which marks the real curriculum section
const schemePos = content.indexOf('Scheme and Syllabus');
if (schemePos === -1) {
  console.log('[ERROR] Could not find "Scheme and Syllabus"');
  process.exit(1);
}

// Find curriculum: ( just before "Scheme and Syllabus"
const curriculumPos = content.lastIndexOf('curriculum: (', schemePos);
if (curriculumPos === -1) {
  console.log('[ERROR] Could not find real curriculum section');
  process.exit(1);
}

// Extract the parts
const before = content.substring(0, closingPos + 6); // Include ),\n\n
const after = content.substring(curriculumPos);

console.log('[INFO] Removing hardcoded content:');
console.log(`  From position: ${closingPos + 6}`);
console.log(`  To position: ${curriculumPos}`);
console.log(`  Removing ${curriculumPos - (closingPos + 6)} characters`);

const newContent = before + '\n\n    ' + after;

// Write back
fs.writeFileSync(filePath, newContent, 'utf8');

console.log('[OK] Successfully cleaned up course outcomes section');
console.log(`  Old file size: ${content.length} characters`);
console.log(`  New file size: ${newContent.length} characters`);
console.log(`  Saved ${content.length - newContent.length} characters`);


/**
 * Cleanup script: removes orphan department sub-pages from MongoDB.
 * Only the 7 main department pageIds should exist under category "departments".
 * Run: node scripts/cleanupOrphanDeptPages.js
 */
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const PageContent = require('../models/PageContent');

dotenv.config({ path: path.join(__dirname, '../.env') });

const VALID_DEPT_PAGEIDS = [
  'departments-cse',
  'departments-it',
  'departments-entc',
  'departments-electrical',
  'departments-mechanical',
  'departments-mba',
  'departments-applied-sciences',
];

async function cleanup() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');

  // Find orphan department pages
  const orphans = await PageContent.find({
    category: 'departments',
    pageId: { $nin: VALID_DEPT_PAGEIDS },
  }).select('pageId pageTitle');

  if (orphans.length === 0) {
    console.log('No orphan department pages found. All clean!');
  } else {
    console.log(`Found ${orphans.length} orphan department page(s):`);
    orphans.forEach((p) => console.log(`  - ${p.pageId} (${p.pageTitle})`));

    const result = await PageContent.deleteMany({
      category: 'departments',
      pageId: { $nin: VALID_DEPT_PAGEIDS },
    });
    console.log(`Deleted ${result.deletedCount} orphan page(s).`);
  }

  await mongoose.disconnect();
  console.log('Done.');
}

cleanup().catch((err) => {
  console.error(err);
  process.exit(1);
});

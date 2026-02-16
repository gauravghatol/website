const mongoose = require('mongoose');
const PageContent = require('./models/PageContent');
require('dotenv').config();

async function checkElectricalPO() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('[OK] Connected to database\n');
    
    const elecPage = await PageContent.findOne({ pageId: 'departments-electrical' });
    
    if (!elecPage) {
      console.log('[ERROR] Electrical department page not found in database');
      process.exit(1);
    }
    
    console.log('=== ELECTRICAL DEPARTMENT PAGE ===');
    console.log('Page ID:', elecPage.pageId);
    console.log('Page Title:', elecPage.pageTitle);
    
    console.log('\n--- Vision/Mission/PEO/PSO Data ---');
    console.log('Has vision:', !!elecPage.templateData?.vision);
    console.log('Has mission:', !!elecPage.templateData?.mission);
    console.log('Has PEOs:', !!elecPage.templateData?.peos);
    console.log('Has POs:', !!elecPage.templateData?.pos);
    console.log('Has PSOs:', !!elecPage.templateData?.psos);
    
    console.log('\nNumber of POs:', elecPage.templateData?.pos?.length || 0);
    
    if (elecPage.templateData?.pos && elecPage.templateData.pos.length > 0) {
      console.log('\n--- Program Outcomes (First 3) ---');
      elecPage.templateData.pos.slice(0, 3).forEach((po, i) => {
        console.log(`\n${i+1}. ${po.t}`);
        console.log(`   ${po.d ? po.d.substring(0, 80) + '...' : 'No description'}`);
      });
      console.log('\n[OK] Program Outcomes ARE stored in database and editable via admin panel');
    } else {
      console.log('\n[WARNING] Program Outcomes NOT YET saved to database');
      console.log('They will use default values from frontend until admin edits them');
    }
    
    process.exit(0);
  } catch (error) {
    console.error('[ERROR]', error.message);
    process.exit(1);
  }
}

checkElectricalPO();

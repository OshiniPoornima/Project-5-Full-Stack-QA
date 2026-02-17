const { chromium } = require('playwright');

(async () => {
  // Launch browser
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  console.log('🚀 Starting test: Login to OrangeHRM');
  
  // Step 1: Navigate to OrangeHRM
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  console.log('✓ Navigated to OrangeHRM');
  
  // Step 2: Fill username
  await page.fill('input[name="username"]', 'Admin');
  console.log('✓ Entered username');
  
  // Step 3: Fill password
  await page.fill('input[name="password"]', 'admin123');
  console.log('✓ Entered password');
  
  // Step 4: Click login button
  await page.click('button[type="submit"]');
  console.log('✓ Clicked login button');
  
  // Step 5: Wait for dashboard to load
  await page.waitForTimeout(3000);
  
  // Step 6: Verify we're on dashboard
  const url = page.url();
  if (url.includes('dashboard')) {
    console.log('✅ TEST PASSED: Login successful! Dashboard loaded.');
  } else {
    console.log('❌ TEST FAILED: Dashboard not loaded. Current URL:', url);
  }
  
  // Take screenshot as evidence
  await page.screenshot({ path: 'login-success.png' });
  console.log('📸 Screenshot saved');
  
  // Close browser
  await browser.close();
  console.log('🏁 Test completed');
})();
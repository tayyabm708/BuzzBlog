const { Builder, By, until } = require('selenium-webdriver');

(async function loginTest() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://localhost:3000');
    
    await driver.findElement(By.id('login-link')).click();
    await driver.findElement(By.name('email')).sendKeys('testuser@example.com');
    await driver.findElement(By.name('password')).sendKeys('password123');
    await driver.findElement(By.css('button[type="submit"]')).click();
    
    await driver.wait(until.elementLocated(By.id('dashboard')), 10000);
    console.log('✅ Login test passed!');
  } catch (error) {
    console.error('❌ Login test failed:', error);
    process.exit(1);
  } finally {
    await driver.quit();
  }
})();

// javascript
const wdio = require('webdriverio');
const opts = {
    port: 4723,
    desiredCapabilities: {
      platformName: "iOS",
      platformVersion: "11.2",
      deviceName: "iPhone 6s",
      app:"/Users/nnagulavancha/Downloads/wl_pih.app",
      automationName: "XCUITest",
      bundleId: "com.incomm.wl-pih"
    }
  };
  
  const client = wdio.remote(opts);
  client
  .init()
  .click("~App")
  .end();
  
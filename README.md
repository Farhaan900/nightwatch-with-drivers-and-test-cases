# Nightwatch.js

#### [Homepage](https://nightwatchjs.org) | [Getting Started](https://nightwatchjs.org/gettingstarted) | [Developer Guide](https://nightwatchjs.org/guide) | [API Reference](https://nightwatchjs.org/api) | [About](https://nightwatchjs.org/about)
***
Automated end-to-end testing framework powered by [Node.js](http://nodejs.org/) and using [W3C Webdriver](https://www.w3.org/TR/webdriver/) (formerly [Selenium](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol)).

Nightwatch is a complete and integrated solution for end-to-end testing of web applications and websites, and also for Node.js unit and integration testing. 

[Changelog](https://github.com/nightwatchjs/nightwatch/releases) | [Mailing List](https://groups.google.com/forum/#!forum/nightwatchjs) | [nightwatch.js tag on StackOverflow](https://stackoverflow.com/questions/tagged/nightwatch.js)
***

##Drivers already present in the driver folder
##Example test cases present in the test folder 


### TO Download WebDriver

Nightwatch uses a [WebDriver](https://www.w3.org/TR/webdriver/) compatible server to control the browser. WebDriver is a W3C specification and industry standard which provides a platform and HTTP protocol to interact with a browser.
   
Nightwatch includes support for automatically managing the following services:
#### ChromeDriver 
- for running tests against the Chrome browser;
- download url: [https://sites.google.com/a/chromium.org/chromedriver/downloads](https://sites.google.com/a/chromium.org/chromedriver/downloads).

Starting with __version 75__, Chromedriver has [W3C Webdriver](https://www.w3.org/TR/webdriver1) protocol enabled by default. If you'd like to stick to the JSONWire for now adjust the `chromeOptions`:
```js
desiredCapabilities : {
  browserName : 'chrome',
  chromeOptions: {
    w3c: false
  }
}
```

#### GeckoDriver
- for running tests against the Mozilla Firefox browser;
- download url: [https://github.com/mozilla/geckodriver/releases](https://github.com/mozilla/geckodriver/releases).
 
#### Selenium Standalone Server 
- allows managing multiple browser configurations in one place and also to make use of the [Selenium Grid](https://github.com/SeleniumHQ/selenium/wiki/Grid2) service;
- the selenium server jar file `selenium-server-standalone-3.x.x.jar` can be downloaded from the Selenium releases page: https://selenium-release.storage.googleapis.com/index.html

> It's important to note that, while the Selenium Server was required with older Nightwatch versions (`v0.9` and prior), starting with version `1.0` Selenium is no longer necessary.

Specific WebDriver setup guides can be found on the [Docs website](http://nightwatchjs.org/gettingstarted/#browser-drivers-setup). Legacy Selenium drivers setup guides along with debugging instructions can be found on the [**Wiki**](https://github.com/nightwatchjs/nightwatch/wiki).


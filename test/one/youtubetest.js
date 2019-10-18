module.exports = {
  'Searching nightwatch in youtube': function (browser) {
    browser
      .url("http://www.youtube.com/")
      .pause(2000)
      .setValue('#search' , "Nightwatch js")
      .pause(2000)
      .keys(browser.Keys.ENTER)
      .pause(2000)
      .click('#img', function(result) {
        this.assert.strictEqual(result.status, 0);
      })
      .pause(2000)
  },
  after: function (browser) {
    browser
      .end();
  }
};
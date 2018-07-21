/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* All tests are within the $() function to ensure they don't run until the DOM is ready. */
$(
  (function() {
    describe("RSS Feeds", function() {
      /* Check that the allFeeds variable has been defined and that it is not empty. */
      it("are defined", function() {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
      });

      /* Loop through each feed in the allFeeds object and check that it has a URL defined and that the URL is not empty. */
      it("URL property should not be empty", function() {
        for (let x = 0; x < allFeeds.length; x++) {
          expect(allFeeds[x].url).toBeDefined();
          expect(allFeeds[x].url.length).not.toBe(0);
        }
      });

      /* Check that allFeeds object has a name defined and that the name is not empty. */

      it("should have a name defined", function() {
        for (let x = 0; x < allFeeds.length; x++) {
          expect(allFeeds[x].name).toBeDefined();
          expect(allFeeds[x].name.length).not.toBe(0);
        }
      });
    });

    describe("The menu", function() {
      it("should be hidden by default", function() {
        /* Check that the menu element is hidden by default - check that the class menu-hidden is true */
        expect($("body").hasClass("menu-hidden")).toBe(true);
      });

      it("should change visibility when menu icon is clicked", function() {
        /* Check that the menu changes visibility when the menu icon is clicked. Check 1) does the menu display when clicked and 2) does it hide when clicked again. Creates a click event to test that clicking 'menu-icon-link' will toggle the menu-hidden class */

        // testing that clicking the menu (app.js line 100) opens the menu, toggling menu-hidden
        $(".menu-icon-link").click();
        expect($("body").hasClass("menu-hidden")).toBe(false);

        // Testing that clicking the menu icon closes the menu again, toggling menu-hidden
        $(".menu-icon-link").click();
        expect($("body").hasClass("menu-hidden")).toBe(true);
      });
    });

    /* Check that at least a single .entry element within the .feed container. This is an asynchronous test, and uses beforeEach and done() */
    describe("Initial Entries", function() {
      beforeEach(function(done) {
        loadFeed(0, function() {
          done();
        });
      });

      it("should display at least one .entry element within .feed", function() {
        let feed = $(".feed .entry");
        // checks to see that at least one entry exists in the feed
        expect(feed.length).toBeGreaterThan(0);
      });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe("New Feed Selection", function() {
      beforeEach(function(done) {
        // let feed0, feed1;

        // Load feed0 and retrieve the HTML of feed innerHTML, then store the HTML
        loadFeed(0, function(){
        feed0 = document.querySelector('.feed').innerHTML;

        // Retrieve the HTML of feed 1 with innerHTML, then load the feed and store the HTML
        loadFeed(1, function() {
        feed1 = document.querySelector('.feed').innerHTML;

        // Resets the page to the original feed
        loadFeed(0, function(){
        });
        done();
        });
      });
    });

      it("should change content when a new feed is loaded", function() {
        // When a new feed loads, feed0 and feed1 are not the same - this test checks the innerHTML of each loaded feed and compares them to ensure they are not the same.
        expect(feed0).not.toBe(feed1);
      });

    });
  })());

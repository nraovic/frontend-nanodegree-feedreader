/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* New test suite named "RSS Feeds" */
    describe('RSS Feeds', function() {
        /* First test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it("URLs are defined and not empty", function () {
            for (feed of allFeeds) {
                var feedURL = feed.url;
                expect(feedURL).toBeDefined();
                expect(feedURL.length).not.toBe(0);
            }
        });
        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it("names are defined and not empty", function () {
            for (feed of allFeeds) {
                var feedName = feed.name;
                expect(feedName).toBeDefined();
                expect(feedName.length).toBeGreaterThan(0);
            }
        });
    });

    /* New test suite named "The menu" */
    describe("The menu", function() {
        /* Test that ensures the menu element is
         * hidden by default. 
         */
        const body = document.body;
        it("is hidden", function() {
            expect(body.className).toBe('menu-hidden');
        });
         /* Test that ensures the menu changes
          * visibility when the menu icon is clicked. 
          * It has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('changes visibility when the menu icon is clicked', function(){
            const menuIcon = $('.menu-icon-link');
            $(menuIcon).click(); //triger click event first time
            expect(body.className).not.toBe('menu-hidden');
            $(menuIcon).click(); //triger click event second time
            expect(body.className).toBe('menu-hidden');
        });
    });
    /* New test suite named "Initial Entries" */
    describe("Initial Entries", function() {
        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        /* Check the number of entries in feed when loadFeed function is completed */
        /* Use beforeEach and done() because loadFeed is an asynchronous function */
        let numberOfEntries;
        beforeEach(function (done) {
            loadFeed(0, function () {
                numberOfEntries = $('.feed').find(".entry").length;
                done();
            });
        });
        it("there is at least a single .entry element within the .feed container", function(done) {
            expect(numberOfEntries).toBeGreaterThan(0);
            done();
        });
    });

    /* New test suite named "New Feed Selection" */
    describe("New Feed Selection", function() {
        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        /* Run loadFeed(0) and loadFeed(1) and get first link in each feed */
        /* Use beforeEach and done() because loadFeed is an asynchronous function */
        let entryLinks = []; // array of entry links to be obtained when loadFeed function is completed
        beforeEach(function (done) {
            for (let i = 0; i <= 1; i++) {
                loadFeed(i, function () {
                    //get first entry link in the feed
                    let link = $('.entry-link').first().attr("href");
                    entryLinks.push(link);
                    done();
                });
            }
        });
        it("the content changes when a new feed is loaded by the loadFeed function", function (done) {
            // Compare first entry links in feed(0) and feed(1);
            expect(entryLinks[0]).not.toEqual(entryLinks[1]);
            done();
        });
    })

});

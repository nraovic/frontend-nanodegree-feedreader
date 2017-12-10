/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
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


        /* TODO: Write a test that loops through each feed
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


    /* TODO: Write a new test suite named "The menu" */
    describe("The menu", function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        //this doesnt work var body = $('body').attr('class') because the output is the string 'menu-hidden'
        const body = document.body;
        it("is hidden", function() {
            expect(body.className).toBe('menu-hidden');
        });
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('changes visibility when the menu icon is clicked', function(){
            var menuIcon = $('.menu-icon-link');
            $(menuIcon).click(); //triger click event first time
            expect(body.className).not.toBe('menu-hidden');
            $(menuIcon).click(); //triger click event first time
            expect(body.className).toBe('menu-hidden');
        });
    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe("Initial Entries", function() {
        let numberOfEntries;
        //check the number of entries in feed when loadFeed function is completed
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

        //Doesn't work because it Doesn't recognize spec inside Timeout func
        /*
        setTimeout(function() {
            it("there is at least a single .entry element within the .feed container", function (done) {
                console.log($('.feed').find(".entry").length);
                expect(numberOfEntries).toBeGreaterThan(0);
            }, 2000);
        })
        */
    });
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    describe("New Feed Selection", function() {
        let entryLinks = [];
        //Run loadFeed(0) and loadFeed(1) and get first link in each feed
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
            //compare first entry links in feed(0) and feed(1);
            expect(entryLinks[0]).not.toEqual(entryLinks[1]);
            done();
        });
    })

});

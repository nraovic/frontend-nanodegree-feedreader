# Project Overview

This project uses [Jasmine](http://jasmine.github.io/) to test a pre-existing web-based application that reads RSS feeds. The application is tested against its content and functionality with a number of tests.

## How to run the application

You can run the application [here](https://nraovic.github.io/frontend-nanodegree-feedreader/)
Or download the repository to your computer, unzip it and run index.html

## Tests included

The following tests are included in the application:

1. `"RSS Feeds"` test suite - a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
2. `"RSS Feeds"` test suite - a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
3. `"The menu"` test suite - a test that ensures the menu element is hidden by default.
4. `"The menu"` test suite - a test that ensures the menu changes visibility when the menu icon is clicked.
5. `"Initial Entries"` test suite - a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
6. `"New Feed Selection"` test suite - a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
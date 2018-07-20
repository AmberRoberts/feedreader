# Feed Reader Testing FEND Project 4

## Table of Contents

* [Project Overview](https://github.com/AmberRoberts/feedreader#project-overview)
* [Why this Project?](https://github.com/AmberRoberts/feedreader#why-this-project)
* [What I Learned](https://github.com/AmberRoberts/feedreader#what-i-learned)
* [How to Run Tests](https://github.com/AmberRoberts/feedreader#how-to-run-tests)
* [Resources I Used for Reference](https://github.com/AmberRoberts/feedreader#resources-i-used-for-reference)

# Project Overview

This project uses [Jasmine](http://jasmine.github.io/) to run a series of tests on a web-based application that reads RSS feeds.

## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!


## What I Learned

I learned how to use Jasmine to write a number of tests against a pre-existing application. These test the underlying business logic of the application as well as the event handling and DOM manipulation.

* Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.
* Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.


## How to run tests

Open the index.html file in your browser and the tests will run automatically. You may click on the name of each test to run it independently. The tests included are:

* ensuring RSS Feeds
  * are defined
  * the URL property should not be empty
  * the name should be defined
* The menu
  * should be hidden by default
  * should change visibility when menu icon is clicked
* Initial Entries
  * should display at least one .entry element within .feed
* New Feed Selection
  * should change content when a new feed is loaded

### The tests should:
* Run independently of one another
* Use callbacks to ensure the feeds are loaded before they are tested
* Pass the  tests written


## Resources I Used for Reference
* Slack channels for Project 4, FEND, and explainittomelikeim5
* [Jasmine Cheatsheet](https://devhints.io/jasmine)
* [Jasmine Beginner Test Setup Video](https://www.youtube.com/watch?v=g0q8pCsCB4o&list=PL_noPv5wmuO9op-OQ22SbHcqFGGHA6iIZ&index=2)
* Comparing feeds reference for obtaining HTML:
  * [jQuery documentation](http://api.jquery.com/html/)
  * [Go make Things Vanilla JS HTML walkthrough](https://gomakethings.com/two-ways-to-get-and-set-html-content-with-vanilla-javascript/)
  * [StackOverflow thread re: testing elements](https://stackoverflow.com/questions/42916548/using-karma-jasmine-how-to-test-do-elements-and-javascript)

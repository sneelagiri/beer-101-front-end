# 🍺Beer Brands 101 Front-End🍺

[Link to the back-end here](https://github.com/sneelagiri/beer-brands-101-back-end)

## Requirements
Connect to the BreweryDB API. Your task is to list beer brands
per country, provide a search field for them by name and filter/group them by country and by
type. Try to use the most efficient methods of calling the api’s endpoints and sorting and filtering
the data.

Note that the breweryDB exposes a limited data-set and most beers and breweries will be
American with some noteworthy exceptions.

You get to pick the JS framework of your choice -- of course you’re also allowed to not use a
framework at all (that is discouraged though! :)

Bonus points for efficient employment of general-purpose JS libraries such as Lodash, RxJS,
Ramda or similar. Showing when -- and when not -- to use these is highly appreciated!

* JS framework of your choice.
* Usage of typescript is preferred.
* Points for using general libraries like rxjs, ramda, lodash.
* Optionally create a minimal NodeJS server as adapter- and caching-layer for the API
data.
* Use GIT, please provide us with a link to your repository when done and include a
README describing the decisions you made to accomplish the assignment.

## Languages, Frameworks, and Tools Used:

### Front-End: 
JavaScript, TypeScript, React, Bootstrap, Superagent, and Lodash

### Back-End: 
Node.js, TypeScript, Express, CORS, Superagent, Node-Cache, and Lodash     

## Decisions Taken to Accomplish the Goals of the Assignment

**JS framework chosen:** 

React 

**Why?**
 
* Component-driven
* Uses Virtual DOM for quick and easy rendering without reload
* Can easily pass data to other components via props

**Steps taken:**

Back-end

1. Explored BreweryDB API docs
2. Made [minimal NodeJS server](https://github.com/sneelagiri/beer-brands-101-back-end) using Express to send requests to the API
3. Decided that the '/breweries' endpoint with the 'withLocations' query is the most efficient method of calling the API's endpoints to get the data that I need
4. Used Node-Cache to cache the data and shorten the http request time on the front-end

Front-end

5. Used npx create-react-app --template typescript to get a react-app template
6. Used superagent to fetch data from the back-end
7. Made use of Lodash map and uniq to identify countries that the breweries are from
8. Only looked at the first location of every brewery because the first record pointed to the main brewery/headquarters for every brand
9. Used Lodash map with If Statements and React-Bootstrap cards to display cards of brands based on country
10. Used Lodash filter to identity breweries which only belonged to a specific country
11. Used Lodash filter to identity breweries which met a specific condition (e.g. is an organic brand)

Considerations: 
* Decided to not use RxJS because the number of events occuring is low and there is isn't a strong need to process the events in sequence
* RxJS would be beneficial when using the full dataset and when more async events are being handled 
* Solution can easily be scaled via implementation of pagination in both the front-end and in sending requests to the API

I am completely open to feedback and suggestions on how to improve my code.





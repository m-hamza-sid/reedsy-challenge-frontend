# Reedsy Task

## Deployed Solution
The solution is deployed at:

Vue App: https://reedsy-task-client-library.vercel.app/ - Might take a few seconds to load due to free hosting.

Styling Page: https://reedsy-task-vue.vercel.app/

Note: The deployed vue app doesn't display images as the server provided injects localhost url 
to the json payload, which is not compatible with the hosting url of the actual demo deployed server.

## Question/Answers

### Tell us about one of your commercial projects with Vue.js or AngularJS.
To answer the question the very first project that I did in AngularJs was back
in 2013, the application was a realtime IOT fleet surveillance application, with
general management and fleet tracking features.

### 2.1. What kind of front end projects do you enjoy working on? Why?
My personal favorite are realtime systems since they require the async thought process, 
however over the years I've worked with ecommerce systems to media players so exact business
domain doesn't matter, but I do enjoy refactoring legacy projects to bona fide clean architecture
based systems.

### 2.2. Which are your favorite features of HTML5? How have you used them before?
The Html5 video/audio and the accompanying Media Source Extensions (MSE) is till date my favorite,
during my time at Joyn GmBH which is essentially Netflix of Germany, I with one other team member
wrote the whole web media player which is currently live at https://www.joyn.de.

### 2.3. Explain the difference between creating a DOM element setting innerHTML and using createElement.
createElement() is a method of Document Interface representing an HTMLDocument in the case of "text/html" 
content. innerHTML is a property of Element base class containing a string representation  of the markup of 
the element's content.

The child elements created by createElement() are appended to some parent element in the dom tree, existing
references to the child nodes of that parent are preserved, same is the case with event handlers. Since
the nodes attributes are explicitly set, html injection attacks are minimised.

When the child elements are created by setting the innerHTML property of some parent element all the DOM nodes 
are re-parsed and recreated from the new string representation that is set. Any references to previous child 
nodes are invalid since they aren't the ones that show up after re-creation. Setting innerHTML will also not 
automatically reattach event handlers to the new elements it creates.

### 2.4. Compare two-way data binding vs one-way data flow.
#### Two-way data binding
Two-way data binding refers to the ability to "bind" changes to an object's properties so to reflect changes 
in the UI AND vice versa. Can be achieved with getters and setters methods.

A simple implementation in vanilla js is below

```
const data = { value: '' };

<input id="inputEl" placeholder="Enter a number..." type="text" />
const el = document.getElementById('inputEl');

Object.defineProperty(data, 'prop', {
  get: function() {
    return this.value;
  },
  set: function(value) {
    this.value = value;
    el.value = value;
    printVal();
  }
});
function display(el) {
  el.innerText = data.prop;
}

// Any time "data.prop" is set, either in any event listner or programmatically in code 
// the part of code linked to its data for both display and interative changes 
// will receive the same value.

```

#### One-way data flow
One-way data flow could be considered as a more general topic, the simplest case of one-way data binding is
interpolation where an object's value is displayed, if that object is updated in the underlying data source,
then the display reflects that.

On a more broader level, props in vue/react follow one-way data flow, i.e. from parent to child.
Android's Model-View-Intent is another example of one way data flow which is essentially the same as handling
events from view.


### 2.5. Why is asynchronous programming important in JavaScript?
In client side (especially), the ability to not freeze and wait for the completion of task is desirable.
To make it possible we need some implementation patterns which fall under the asynchronous programming 
umbrella. A typicall implementation of this style of programming is using callbacks(functions that are
called when the actions complete), and an event loop which schedules such callbacks to be called when 
appropriate, one after the other, so that their execution does not overlap.

## Notes
Repo is a simple mono repo, please install all dependencies from root of the project.

----------------------------------------------------

# Front end Engineer Challenge (ORIGINAL REQUIREMENTS)

Submit all the answers by creating a **private** GitHub repository and sharing it with **reedsyapplications**. Alternatively, you can submit a zipped folder with all the answers.
Your submission should include markdown and code and each answer should be in it's own folder.

The estimated time to accomplish every task sits between 10 and 15 hours, depending on your experience.


## 1. About you

Tell us about one of your commercial projects with Vue.js or AngularJS.


## 2. General

##### 2.1. What kind of front end projects do you enjoy working on? Why?

##### 2.2. Which are your favorite features of HTML5? How have you used them before?

##### 2.3. Explain the difference between creating a DOM element setting `innerHTML` and using `createElement`.

##### 2.4. Compare two-way data binding vs one-way data flow.

##### 2.5. Why is asynchronous programming important in JavaScript?


## 3. Styling

Given the HTML file **front-end/q3/q3.html**, implement the styling so the page matches the image below.

![Styling](./front-end/q3/images/result.jpg "Styling")

#### Bonus
- Implement styling rules that consider different screen sizes.

**Notes:**
- The footer should stick to the bottom when scrolling;
- You can, and should, use a CSS pre-processor, such as SASS or LESS;
- Avoid changing the template, your answer should only style the given HTML.


## 4. SPA

Using Vue.js, implement an SPA that gets information from a server (explained below) and has the following pages:


### Books list

Display all available books returned from the API.
- Synopsis should be truncated at 200 characters.
- Book's title and cover should link to the book's individual page.
- Though the upvote functionality is not required, the upvote state should be represented.

![Books list](./front-end/q4/images/books-list.png "Books list")


### Book page

Display a single book information, highlighting the cover and displaying the full synopsis.

![Book page](./front-end/q4/images/book.png "Book page")

The upvote functionality is **not** required, the UI should only reflect if a book has been upvoted yet or not.
For this question, you **don't** have to replicate the example screens above, feel free to implement any design that you'd like.


**Important notes:**
- Do not change or submit the server code, your answer should focus on the client application only;
- Add test coverage as you see fit;
- You may use TypeScript instead of plain JS;
- Use a CSS pre-processor;
- Your app must be responsible for all of it's dependencies and they should be installed via `yarn` or `npm install`. The app must run by using either `yarn start` or `npm start`.


#### Bonus

- Implement text search on the books list (for title and synopsis)
- Add pagination on the books list
- Add a comments section on the book page


### Server

In order to solve this problem, a simple server is provided, which you should use to get the data.
Head into `front-end/q4/server` and install the server dependencies using:

```bash
yarn install
```

or

```bash
npm install
```

Run the server using:

```bash
yarn server
```

or

```bash
npm run server
```

The server should be running on port `3000`.

#### Available routes

#### http://localhost:3000/books

Returns a list of books, with their info.

#### http://localhost:3000/books/SLUG

Returns the book information for the given SLUG (404 otherwise).

# Feedback
## The following is the feedback I received:

```
As feedback the team mentioned:
Answers for Q1 and Q2 were pretty good, with a good English level and communication. As an improvement, we would have liked Q1 to be a bit more elaborate and 2.4 to contain a comparison between both approaches.

Q3 looked pretty similar to the image and had a fixed footer as required. However, the goal of this question is to assess attention to detail, and things were not quite as close as we expect. Code-wise, the LESS code was too monolithic, with too many hardcoded values and too deeply nested.

In Q4, we liked the modularization and general structure of the project, the implementation of bonuses and other additional features such as a 404 page or a "back" button. There was a good showcase of unit tests, and we also appreciated the usage of modern tools and the fuzzy search feature.

However, the application didn't run with "npm start" as instructed, and some functionalities didn't quite work as they should or didn't match our expectations. To name some, search only looks for books in the current page, synopsis truncation doesn't take into account texts that are shorter than the limit.

Other details have also penalized the test, such as: having installed and configured Cypress to only have a single smoke test, or having implemented internationalization, and then leaving the translation files half empty.
```

## My Request for objective feedback - No response received.

```
It looks to me that the response to each of my answers is not based on any objective measure.

For Q1, can the team give me an example what do they mean by "a bit more elaborate". Candidates are not mind readers, if the team was expecting a comparison couldn't that be hinted in the question?

For Q3. Since the test is live, can you please ask the team to give me an accurate feedback as to what actually is not close to the provided image? I was not given any typography instructions, but other than that, I take my designing skills very seriously so would like to know what is exactly meant by "were not quite close as we expect" does the team has an example of what IS close?. I was given an HTML page to style which itself doesn't require any component driven design, so the LESS code reflects that. A value is a variable if its used more than one time in the exact same way, which was not the case in the given html page.

For Q4, the application run with "npm run dev", is the team kidding me? Just the usage of different word is an issue? The search was a bonus thing, I just implemented it with the shortest development time as this way of client side searching is not done in real world. For Synopsis, the upper limit is set, why lower limit matters, were any functional requirements given that had an effect on the results?
I integrated Cypress and localisation just to show off the knowledge of these chores, how something which is not part of official requirements is being used to penalise the solution?

Can the team please answer my above questions?
```
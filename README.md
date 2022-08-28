# Reedsy Task

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
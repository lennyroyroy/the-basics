---
id: lesson-2
title: 🍱 Lesson 2 Tutorial 🍱
---


## _The Box Model_

<!-- Remix Button -->

---

<!-- Remix Button -->
<a href="https://glitch.com/edit/#!/remix/box-model-document" target="_blank">
  <img src="https://cdn.glitch.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Fremix%402x.png?1513093958726" alt="remix this" height="33">
</a>

**Remix the project to start a new Glitch session!**

---



### Create a **div tag**
Create a `<div>` tag and add text

```html
<div>A div tag with text</div>
```

---

### Create a **parent & child element**
Create a new `<div>` and add a `<p>` tag **_inside_**

```html
<div>
	<p>A p tag, as the direct child of a div</p>
</div>
```
---

### Create a **CSS Class**
* Create a `<div>` with an `<p>` tag inside
* Add `class="example1"`	inside the p tag
```html

// Example on how to place the class, not real code //

<p --------- class="example1" ----------- >

// Place the class="example1" after the p, but before the final >
// This is called an attribute
// The p tag as an attribute called "class" with a value of "example1"

```

```html
<div>
	<p class="example1">This is a p tag with a class name</p>
</div>
```

---


### Multiple elements with **the same class name**
Create a `<div>` with three `<p>` elements, each with the same class name `class="example2"`

```html
<div>
	<p class="example2">First p tag with the same class name.</p>
	<p class="example2">Second p tag with the same class name.</p>
	<p class="example2">Third p tag with the same class name.</p>
</div>

```


---

### Embedding **two divs**
* Create a `<div>` with a class of `class="parent"`
* Create another `<div>` as a child, and give it the class `class="child"`

```html
<div class="parent">
	<div class="child">
		The Box Model
	</div>
</div>
```

---

### The difference between **IDs & Classes - HTML side**
* Create a `<div>` with a class of `class="color-quiz"`
* Create four `<p>` tags as childern, the first `<p>` tag with a class of `class="one"`
* The next three `<p>` tags get a class of `two` `three` and `four` each (check example)
* Next to each `<p>` tag class, add an id of `id="one"`
* The next three `<p>` tags get an id of `two` `three` and `four` each (check example)
```html

<div class="color-quiz">
	<p class="one" id="one">What color is this?</p>
	<p class="two" id="two">What color is this?</p>
	<p class="three" id="three">What color is this?</p>
	<p class="four" id="four">What color is this?</p>
</div>
```


## **CSS Styles**
---

### Add styles to **native body tag**
* Create a CSS rule for the body tag
* Give the body a `margin:0px` & `background-color:#f5f6fa;` 

```css
body{
	margin:0px;
	background-color: #f5f6fa;
}
```

---

### Add styles to **custom classes**
* Create a rule called `.example1`
* Give this class the following property
	* `color:#ff5252;`

```css
.example1{
	color:#ff5252;
}
```

**Add another rule for `example2`** 

```css
.example2{
	color:#34ace0;
}
```
* Check your page, pay attention to the three `<p>` tags with the `example2` class
* Add `display:inline`
* What changed?

```css
.example2{
	color:#34ace0;
	display: inline;
}
```
---

### **Paddings & Margins**
* Create a rule called `.parent`
* Add the following rules, one by one. Check the page with each one to see the change

```css
.parent{
	border:solid #ff5252 2px;
	margin-top:100px;
	margin-right: 100px;
	margin-bottom: 100px;
	margin-left: 100px;
	padding-top:100px;
	padding-right:100px;
	padding-bottom:100px;
	padding-left:100px;
}
```

* Create a rule called `.child`
* Add the following rules, one by one. Check the page with each one to see the change

```css
.child{
	border:solid #34495e 2px;
	margin-top:50px;
	margin-right:50px;
	margin-bottom:50px;
	margin-left: 50px;
	padding-top:50px;
	padding-right:50px;
	padding-bottom:50px;
	padding-left:50px;
}

```
---

### The difference between **IDs & Classes - CSS side**
* Create a comment `/* Classes */`
* Create four rules
	* `.one`
	* `.two`
	* `.three`
	* `.four`
* Create a comment `/* IDs */`
* Create four rules
	* `#one` 
	* `#two` 
	* `#three` 
	* `#four`
* In the  `/* Classes */` section, add the following

```css
.one{
	color: #ff5252;
}
.two{
	color: #34495e;
}

.three{
	color: black;
}

.four{
	color: #ff793f;
}
```

* Check your page, note the text colors selected are now appearing
* In the `/* IDs */` section, add the following

```css
#one{
	border:solid #e84118 1px;
	color:lime;
}
#two{
	border:solid #192a56 1px;
	color: lime;
}
#three{
	border:solid #2f3640 1px;
	color: lime;
}
#four{
	border:solid #fbc531 1px;
	color: lime;
}
```

 _What Changed?_

---

### Order of CSS rules affect **hierarchy**
In the `/* Classes */` section, and above the `/* IDs */` section, add the following

```css
.one{
	color: orange;
}
.two{
	color: blue;
}

.three{
	color: yellow
}

.four{
	color: green;
}
```

_notice the colors do not change_<br>
This is because the ID's are more powerful & CSS will listen to the rule with the strongest hierarchical power.

*Add the following to overide any CSS rule or hierarchy*

```css
.two{
	color: #34495e;
	border:none !important;
}

/* The !important attribute should be used as a last resort, but it does get the job done */
```

_What changed?_

**Now add the follwing, and play around with classes/ids and the !important attribute**

```css
.color-quiz p{
	color: #e84118 !important;
}

```

_Can you figure out what is happening here?_


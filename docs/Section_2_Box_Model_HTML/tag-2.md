---
id: tag-2
title: Cheat Sheet (IDs & Classes)
---




```html
<div></div> => container of elements

<section></section> => container of elements

<element class="class-name"></element> => add a class

<element id="id-name"></element> => add a class
```
    

## CSS
---

## CSS rule syntax

```css
element{
	propertyname = "value";
}
```
---

## Referencing native tags   
```css    
body{
	propertyname = "value";
}
```
* native tags can be written as simply `body`
    
--- 

## Example of native tags

* using these tag will target every element of that type, might be better to use classes

```css
body
p
h1
h2
...
div
section
```
---

## ID and Class Reference

```css
.classname{
	propertyname = "value";
}

/* class names are referenced with a . */
```
    
```css
#idname{
	propertyname = "value";
}

/* id names are referenced with a # */
```

---

## Properties & Values

### margin 
* takes pixels, ems, rems etc
* controls the area surrounding the element
* can be used to position an element on the page
* can take negative values (be careful)

```css

/*Examples of margin*/
element{
    margin:10px;  /*Adds 10 pixels to all sides at once*/
    margin-top:10px ;
    margin-right:10px;
    margin-bottom:10px ;
    margin-left:10px;
    margin: 10px 20px; /*Adds 10px to top/bottom 20px to left/right*/

    margin-right:-10px; 
    margin: auto;
    margin:inherit;
}
```

**Dive deeper on margin**
<br>
* <a href="https://www.w3schools.com/css/css_margin.asp" target="_blank">w3 Schools: margin</a>

* <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/margin" target="_blank">MDN</a>
* <a href="https://htmldog.com/guides/css/beginner/margins/" target="_blank">More Info</a>

---

<a href="https://nulab.com/blog/tech/css-basics-for-engineer-boxmodel/" target="_blank"><img src="https://d19ta9rijs3cxg.cloudfront.net/wp-content/uploads/2016/03/4.png"></a>

### padding 
* controls the area within 

```css

/*Examples of padding*/
element{
    padding:10px;  /*Adds 10 pixels to all sides at once*/
    padding-top:10px ;
    padding-right:10px;
    padding-bottom:10px ;
    padding-left:10px;
    padding: 10px 20px; /*Adds 10px to top/bottom 20px to left/right*/

    padding-right:-10px; 
    padding: auto;
    padding:inherit;
}
```

**Dive deeper on padding**
<br>
* <a href="https://www.w3schools.com/css/css_padding.asp" target="_blank">w3 Schools: padding</a>

---

### background-color
* sets the background color of the element

```css
element{
	background-color: red;
	background-color: blue;
	background-color: #ff0000;
	background-color: #0000ff;
	background-color: rgb(255, 0, 0);
	background-color: rgb(0, 0, 255);
}


/*Quiz: with so many background-color properties, what color will this element be?*/

```
---

### color
* sets the color of the text

```css
element{
	color: red;
	color: blue;
	color: #ff0000;
	color: #0000ff;
	color: rgb(255, 0, 0);
	color: rgb(0, 0, 255);
}

```

---

### display
* very important property which sets the behavior of an element

```css
div{
	display: block;
}

/* Most elements are block by default */
/* It starts on a new line, and takes up the whole width */

```


```css
div{
	display: inline;
}

/* Any height and width properties will have no effect */
```

```css
div{
	display: inline-block; 
	display: flex;
	display: none /* Hides an element from view*/
}

```
---

### border


```css
div{
	border: solid red 1px;
}

/* applies a solid, red border around that element that is 1 pixel thick */
```

---

### extra: using selectors

```css
.color-quiz p{
    color: #e84118 !important;
}

/*This will select all the <p> tags within the element with the "color-quiz" class */
```




















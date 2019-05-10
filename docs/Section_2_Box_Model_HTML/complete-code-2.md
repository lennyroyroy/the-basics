---
id: complete-code-2
title: **Completed Code Version**
---



---

<!-- View Source Button -->
<a href="https://glitch.com/edit/#!/the-basics-2" target="_blank">
  <img src="https://cdn.glitch.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Fview-source%402x.png?1513093958802" alt="view source" height="33">
</a>

---


# index.html
```html
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"> 
</head>
<body>

<div>A div tag with text</div>

<div>
	<p>A p tag, as the direct child of a div</p>
</div>

<div>
	<p>p tag with an image underneath, within the same div</p>
	<img src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/05/22224952/beagle-puppy-in-large-cushion-chair.jpg" width="200px" height="200px"/>	
</div>

<div>
	<p class="example1">This is a p tag with a class name</p>
</div>


<div>
	<p class="example2">First p tag with the same class name.</p>
	<p class="example2">Second p tag with the same class name.</p>
	<p class="example2">Third p tag with the same class name.</p>
</div>


<div class="parent">
	<div class="child">
		The Box Model
	</div>
</div>


<div class="color-quiz">
	<p class="one" id="one">What color is this?</p>
	<p class="two" id="two">What color is this?</p>
	<p class="three" id="three">What color is this?</p>
	<p class="four" id="four">What color is this?</p>
</div>
</body>
</html>


```


# style.css

```css
/* Standard Styles */
body{
	font-family: 'Roboto', sans-serif;
	font-size: 1.35em;
	line-height: 1.5;
}
/* Ignore */



body{
	margin:0px;
	background-color: #f5f6fa;
}

.example1{
	color:#ff5252;
}

.example2{
	color:#34ace0;
	display: inline;
}

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

.color-quiz{
	color: black;
}

/* Classes */

.one{
	color: #ff5252;
}
.two{
	color: #34495e;
	border:none !important;
}

.three{
	color: black;
}

.four{
	color: #ff793f;
}


.one{
	color: orange;
}
.two{
	color: blue;
	border:none !important;
}

.three{
	color: yellow
}

.four{
	color: green;
}

/* IDs */


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

.color-quiz p{
	color: #e84118 !important;
}




```


---
id: lesson-2-parent-child
title: Lesson 2 - HTML Structure	
---

---

### Write code on Glitch!
<!-- Remix Button -->
<a href="https://glitch.com/edit/#!/remix/basic-template-1" target="_blank">
  <img src="https://cdn.glitch.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Fremix%402x.png?1513093958726" alt="remix this" height="33">
</a>
<br>
<br>

_This button will open a glitch file which you can edit._

**Make sure you sign into Glitch! First things first!**

---

## HTML Structure 

---

### Intro

---

In the last lesson, we created lots of different HTML elements. These elements sometimes behave differently from each other, while others are easier to drop in without thinking too much. There are a few rules that govern how HTML behaves in our projects, in this lesson I will try to take you through some of the big ones starting with the concept of element grouping.


```html
<section>

	<p> This is a child element </p>

</section>
```

In the example above we created a `<section>` tag, and hit the `enter` key to give ourselves some room *inside* that element. Essentially we created box called `<section>` and inside of this box we placed a `<p>` with a text message into this box. The two elements are now linked in a few interesting ways. Anything we do to the `section` element will have an effect on the `p` element. 

The `section` element is the **parent** element, and it has one *child* and that is the `p` tag.


*Dive Deeper:*
(Audio Tag: read above and add context )
<audio controls>
  <source src="https://ia802807.us.archive.org/29/items/acidplanet-audio-01317796/01317796.mp3" type="audio/mp3">
  Your browser does not support the audio tag.
</audio> 

---


### Nesting Elements

---

There is no limit to how many children you can add to a parent element in HTML. Things can get a little wonky after awhile, but if you remain consistent and thoughtful with your organization of elements, controlled complexity is not a bad thing. 

Here are a few examples of HTML structure, see if the concept discussed above helps you understand these examples better. 


```HTML
<section></section>




```


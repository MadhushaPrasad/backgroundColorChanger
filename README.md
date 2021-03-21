<h2>What Is This ?</h2>

Ths is NPM for Change BG Color when web page is Scrolling.

<h3>Installation</h3>

`npm i bg-color-change`

Then...
do this tasks in js file.
```
import {BGChange} from 'bg-color-change';
window.addEventListener('scroll', BGChange);
```
import css file as this
```
<link rel="stylesheet" href="node_modules/bg-color-change/index.css">
```
<br>

Style Apply 

```
.page
``` 
style class to what is need to change color when scrolling.
<br>


```
<header>
        <div class="intro-text">
            <h1>Programming Lover</h1>
            <p>Change Colour Smoothly</p>
        </div>
</header>

<section class="page02">
    <h1>Welcome to next Background Section</h1>
    <p></p>
    <img src="img/pexels-olia-danilevich-4974920.jpg" alt="programming Image">
</section>

<section class="otherSec">
    <h1>Other Section</h1>
    <p></p>
    <p></p>
</section>
```
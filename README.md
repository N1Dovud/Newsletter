# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### Links

- Solution URL: [Git Repo](https://github.com/N1Dovud/Newsletter)
- Live URL: [Git live Page](https://n1dovud.github.io/Newsletter)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript

### What I learned


```css
.error-input:hover, .error-input:focus, .error-input:active {
    outline: none;
}
#success > * {
    margin-bottom: 2rem;
}
li {
    list-style-type: none;
    padding-left: 34px;
    margin-top: 1rem;
    position: relative;
}
li::before {
    position: absolute;
    content: "";
    background: url("/assets/images/icon-list.svg");
    top: 0;
    left: 0;
    width: 21px;
    height: 21px;
}

```
```html
<picture>
  <source srcset="/assets/images/illustration-sign-up-mobile.svg" media="(max-width: 600px)">
  <img src="/assets/images/illustration-sign-up-desktop.svg" alt="sign up desktop">
</picture>
```
### Continued development

I learned about outline property of css, which I did not know about before. I learned how to use the picture tag and solve all the hard problems that came with it. I managed to create a custom marker of list items using before pseudo selector. Most importantly, I did not stop. I finished the project within the day regardless of how difficult it was. I was flooded with problems. HTML root element was 0.2 pixels larger than the viewport width. Picture element was spawning over a large area when it was supposed to match perfectly. There was a horizontal scrolling which took me a lot of time to figure out why. I am quite new to javascript and yet it was the easiest part. I hope I will not run into these problems in the future.


## Author

- Frontend Mentor - [N1Dovud](https://www.frontendmentor.io/profile/N1Dovud)
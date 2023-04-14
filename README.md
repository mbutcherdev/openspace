<!-- PROJECT SHIELDS -->

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![GNU License][license-shield]][license-url]

# Open|Space, a portfolio project by Matthew Butcher

## About

---

A vanilla HTML / CSS / JavaScript project to practice my abilities and learn new skills.  
The project aims to be a central location for information about our solar system, and the space industry as a whole.  
Currently in development and likely to change multiple times before completion.

## Previews

---

Home Page:

<p align="center">
    <img src="/previews/homepage.png" alt="Open|Space Homepage">
</p>

Planets Page:

<p align="center">
    <img src="/previews/planets.png" alt="Open|Space Planets Page">
</p>
Responsive Planets Page:

<p align="center">
<img src="/previews/planets_responsive.png" alt="Open|Space Responsive Planets Design">
</p>

---

## Technologies

- [![HTML][html.com]][html-url]
- [![CSS][css.com]][css-url]
- [![JavaScript][javascript.com]][javascript-url]

## Features

- Responsive design
- Carousel for planets
- Pulls planet data from JSON
- Uses DOM manipulation to create planet cards and descriptions

## To Do:

- Rockets
  - Create JSON file to pull rocket data in a similar manner to planets
  - Create carousel for rockets
  - Pull upcoming launches from a public API
- Satellites
  - Create JSON file to pull satellite data in a similar manner to planets
  - Create carousel for satellites
  - Implement a "live tracker" for current orbital satellites
- Rovers
  - Create JSON file to pull rover data in a similar manner to planets
  - Create carousel for rovers
  - Implement a position for current rovers

## Challenges

- Responsiveness
  - The project is mainly designed as a desktop application, with certain elements being hidden on mobile devices.
  - The carousel for the planets is a challenge to make responsive, due to how I have currently implemented scrolling.
  - Getting the layout is an ongoing development as I learn more about CSS, media queries and responsive design.
- Carousel
  - The carousel was having issues due to initially using vh units, it caused it to "jump" between each card
  - The buttons were displaying differently per browser, so I included a normalize css file to fix this
  - Buttons jumped too far when animated due to an incorrect translateY, this is now fixed and is much smoother

---

# Images/Icon Attribution

### Home Page:

https://iconduck.com/illustrations/173229/mars-rover  
https://iconduck.com/emojis/38057/satellite  
https://iconduck.com/icons/114147/rocket  
https://iconduck.com/emojis/36084/globe-showing-asia-australia

### Planets Page:

https://www.nasa.gov/

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/mbutcherdev/openspace?style=for-the-badge
[contributors-url]: https://github.com/mbutcherdev/openspace/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/mbutcherdev/openspace?style=for-the-badge
[forks-url]: https://github.com/mbutcherdev/openspace/network/members
[stars-shield]: https://img.shields.io/github/stars/mbutcherdev/openspace?style=for-the-badge
[stars-url]: https://github.com/mbutcherdev/openspace/stargazers
[issues-shield]: https://img.shields.io/github/issues/mbutcherdev/openspace?style=for-the-badge
[issues-url]: https://github.com/mbutcherdev/openspace/issues
[license-shield]: https://img.shields.io/github/license/mbutcherdev/openspace?style=for-the-badge
[license-url]: https://github.com/mbutcherdev/openspace/blob/master/LICENSE.txt
[css.com]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[css-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
[html.com]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[html-url]: https://developer.mozilla.org/en-US/docs/Web/HTML
[javascript.com]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[javascript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript

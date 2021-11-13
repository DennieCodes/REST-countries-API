# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

### Screenshot

![](./design/desktop-preview.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Netlift: Rest countries API](https://denniedev-react-countries-api.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Responsive styling
- [React](https://reactjs.org/) - JS library
- [Axios](https://axios-http.com/)
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

This was a great challenge and project and allowed me the opportunity to cement everything that I've learned in React in a real project.

Some of the things that I had to utilize and implement for this challenge includes:

1. Async API calls.
2. Storing consumed API in sitewide Context
3. Parsing and displaying data in a directory and in individual pages.
4. Creating a custom select dropdown component
5. Using react-router-dom to dynamically link country pages and also to their border country pages.
6. Parsing country directory by search input field
7. Parsing country directory by region selection from select dropdown control.
8. Structuring the React component architecture according to single responsibility function
9. Utilized css in js via styled components

### Continued development

Although the project is effectively completed there are some refactors that I am planning as this project offers a lot of opportunities for reuse
for many REST Api type projects.

One of the refactors that I would like to impelment is to make dynamic API calls on the various pages instead of the single call which stores all
of the country data to state. There were some issues with the previous API link which was terminated and required a search for an alternative so
I tried to avoid calling the API repeatedly during development.

## Author

- Website - [Oculareo](https://github.com/Oculareo)
- Frontend Mentor - [@Oculareo](https://www.frontendmentor.io/profile/Oculareo)
- Twitter - [@DennieDev](https://twitter.com/DennieDev)

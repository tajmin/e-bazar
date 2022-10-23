<a name="readme-top"></a>

<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="src/images/logo.png" alt="Logo" width="120">
  </a>

  <h1 align="center">E-Bazr</h1>
  
  E-Bazr is an full-stack e-commerce web application based on  `Ract.js`.
  <br />
  
  ### <a href="https://e-bazr.netlify.app/">View Live</a> :large_blue_diamond: <a href="https://github.com/tajmin/e-bazar/issues">Report Bug</a>
  <br />
</div>

## :bookmark_tabs: Table of Contents

  <ol>
    <li>
      <a href="#1-about">About</a>
    </li>
    <li>
      <a href="#2-tech-stack">Tech Stack</a>
    </li>
    <li>
      <a href="#3-getting-started">Getting Started</a>
      <ul>
        <li><a href="#31-prerequisites">3.1 Prerequisites</a></li>
        <li><a href="#32-installation">3.2 Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#4-branches-explained">Branches Explained</a>
       <ul>
        <li><a href="#41-main">4.1 main</a></li>
        <li><a href="#42-v2-styled-components">4.2 V2-Styled-Components</a></li>
         <li><a href="43-v3-reducers">4.3 V3-Reducers</a></li>
         <li><a href="44-v4-redux">4.4 V4-Redux</a></li>
         <li><a href="45-v5-redux-thunk">4.5 V5-Redux-Thunk</a></li>
         <li><a href="46-v6-redux">4.6 V6-Redux-Saga</a></li>
      </ul>
    </li>
    <li><a href="#features">Features</a></li>
    <li><a href="#Future-updates">Future Updates </a></li>
  </ol>

<br />

## 1. About

![Product Name Screen Shot](https://i.ibb.co/mGVphpL/hero.jpg)

<p align="right"><a href="#readme-top">Back to Top :arrow_heading_up:</a></p>

## 2. Tech Stack

[![Package - react](https://img.shields.io/github/package-json/dependency-version/tajmin/e-bazar/react?style=for-the-badge&logo=react&logoColor=%2361dafb&color=%23000)](https://www.npmjs.com/package/react)
[![Package - react-router-dom](https://img.shields.io/github/package-json/dependency-version/tajmin/e-bazar/react-router-dom?style=for-the-badge&logo=react-router&logoColor=%23fff&color=%23F44250)](https://www.npmjs.com/package/react-router-dom)
[![Package - sass](https://img.shields.io/github/package-json/dependency-version/tajmin/e-bazar/sass?style=for-the-badge&logo=sass&logoColor=%23bf4080&color=%23bf4080)](https://www.npmjs.com/package/sass)
[![Package - firebase](https://img.shields.io/github/package-json/dependency-version/tajmin/e-bazar/firebase?style=for-the-badge&logo=firebase&logoColor=%23FFCB2E&color=%23FFCB2E)](https://www.npmjs.com/package/firebase)
[![Package - stripe](https://img.shields.io/github/package-json/dependency-version/tajmin/e-bazar/stripe?style=for-the-badge&logo=stripe&logoColor=white&color=%23635bff)](https://www.npmjs.com/package/stripe)
[![Package - swiper](https://img.shields.io/github/package-json/dependency-version/tajmin/e-bazar/swiper?style=for-the-badge&logo=swiper&logoColor=white&color=%23007aff)](https://www.npmjs.com/package/swiper)
![Styled Components](https://img.shields.io/badge/styled--components-%5E5.3.5-%23DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%5E4.2.0-%23593d88?style=for-the-badge&logo=redux&logoColor=white)
![React-Redux](https://img.shields.io/badge/react--redux-%5E8.0.2-%23764abc?style=for-the-badge&logo=redux&logoColor=white)
![Redux-Persist](https://img.shields.io/badge/redux--persist-%5E6.0.0-%23764abc?style=for-the-badge&logo=redux&logoColor=white)
![Reselect](https://img.shields.io/badge/reselect-%5E4.1.6-%23764abc?style=for-the-badge&logo=redux&logoColor=white)
![Redux-Thunk](https://img.shields.io/badge/redux--thunk-%5E2.4.1-%239f80d0?style=for-the-badge&logo=redux&logoColor=white)
![Redux-Saga](https://img.shields.io/badge/redux--saga-%5E1.2.1-%2386d46b?style=for-the-badge&logo=redux-saga&logoColor=white)

<p align="right"><a href="#readme-top">Back to Top :arrow_heading_up:</a></p>

## 3. Getting Started

Getting started with e-bazr is fairly easy and simple. Follow the instructions as stated below -

### 3.1 Prerequisites

- You need to have `Node.js` installed on your computer beforehand to run this project. Follow [this link](https://nodejs.org/en/download/) to install `Node.js` on your computer.
- To test `Stripe` payment and simulate the credit-card transaction, you need to run the project on `Netlify CLI`. To install `Netlify CLI`, [click here](https://docs.netlify.com/cli/get-started/). Also, you need to have your own `stripe` secret keys that you need to store on a `.env` file locally.

### 3.2 Installation

To test `Stripe` payment and simulate the credit-card transaction, skip step 3.

1. Clone the repo

   ```sh
   git clone https://github.com/tajmin/e-bazar.git
   ```

2. Install `npm` packages

   ```sh
   npm install
   ```

3. Start the development server

   ```sh
   npm start
   ```

4. To test `stripe` transaction, first login to your `Netlify` account

   ```sh
   netlify login
   ```

   after successful login, run this

   ```sh
   netlify dev
   ```

 <p align="right"><a href="#readme-top">Back to Top :arrow_heading_up:</a></p>
 
 ## 4. Branches Explained
 
 There are currently [6 branches](https://github.com/tajmin/e-bazar/branches) in the repository. These are: <br />
  1.  `main` 
  2.  `V2-Styled-Components`
  3.  `V3-Reducers`
  4.  `V4-Redux`
  5.  `V5-Redux-Thunk`
  6.  `V6-Redux-Saga`
  
  While the core features and functionality of the project remain the same for each branch, the architechture differs from each other. Each branch is built on different philosophies, and hence uses different packages. In the following few paragraphs, this is explained briefly -
  
  ### 4.1 `main`
  The `main` branch incorporates the `React` `Context API`. Everything from `authentication` to `cart` functionality is implemented by the extensive use of `context`. For styling, the `SASS` preprocessor scripting language is used.
  
  ### 4.2 `V2-Styled-Components`
  This branch incoprates everything from the `main` branch except the styling principle. Instead, this leverages the idea of `Styled Components`.
  
  ### 4.3 `V3-Reducers`
  The `V3-Reducers` branch leverages from the `useReducer` hook of `React.js`, which can be evident in `userContext`, `cartContex`, and `categoriesContext`.
  
  ### 4.4 `V4-Redux`
  In this branch, the `Context API` is replaced with `redux` for state management. As a result, all core funcitonalities leverage from the `redux` philosophy of `store`, `root-reducer`, `selector` functions, and `action`s.
  
  ### 4.5 `V5-Redux-Thunk`
  The `Redux Thunk` `middleware` is integrated and used to handle all of asynchronous behaviors of the project.
  
  ### 4.6 `V6-Redux-Saga`
  As the branch name suggests, it uses `Redux Saga` middleware for asynchronous actions.

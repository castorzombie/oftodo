import { css } from 'styled-components';

const layout = css`
/*** B ***/
html {
    line-height: 1.15;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%
    box-sizing: border-box;
}
*, *:before, *:after {
    box-sizing: inherit;
}

html, body {
    height: 100%;
}

body {
    box-sizing: border-box;
    margin:0;
    font-family: 'Open Sans', sans-serif;
    font-size:1rem;
}

/* Layout */
.container {
    background: white;
    min-height: calc(100vh - 250px);
    max-width: auto;
    margin: 0;
}

.main {
    min-height: calc(100vh - 100px);
}

.square {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.todo-list {
    width: 100%;
    min-height: calc(100vh - 250px);
    max-width: auto;
    margin: 0rem;
    padding: .5rem;
    box-sizing: border-box;
}

.todo-form {
    background-color: #f5f0c6;
    border-color: #ddcd45;
    color: #ddcd45;
    min-height: 150px;
    max-width: auto;
    margin: 0rem;
    padding: .5rem;
    width: 100%
}

.container-flex {
    /* Flex parent */
    display:flex;
    flex-direction: column;
    justify-content: space-between;
}
@media screen and (min-width: 768px) {
    .container-flex {
        /* Flex parent */
        flex-direction: row
    }
}

/*Header*/
.header {
    height: 50px;
    background-color: #084E8A;
    color: #fff;
    padding:0 20px;
    /* Flex parent */
    justify-content: space-between;
    align-items: center;
    text-align: center;
}
.logo {
    /* Flex child */
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 20%;
    max-width: 80%;
    display: block;
    margin: 0 auto;
    order: unset;
}

/*Main*/
.section-flex {
    /* flex child*/
    flex: 0 1 70%;
}
.aside-flex {
    background-color: #EBF5FA;
    /* flex-child */
    flex: 0 1 30%;
}
.todoForm {
    align-self: flex-end;
}
.article-flex h3 { text-transform: uppercase; display: inline-block; padding-right: 1rem}
.wrapp {padding: .5rem;}

/*Footer*/
.footer {
    background:#007ACE;
    color: #fff;
    min-height: 50px;
    align-items: center;
}
.footer h2 {
    width: 100%;
    text-align: center;
}
.footer-section {
    /* Flex child */
    flex: 0 1 33%;
}


/**** E ****/

  h1 {
    font-size: 2rem
  }
  h2 {
    font-size: 1.5rem
  }
  h3 {
    font-size: 1rem
  }
  h4 {
    font-size: .5rem
  } 

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: sans-serif;
    font-size: 100%;
    line-height: 1.15;
    margin: 0
  } 
  ul, menu, dir {
    display: block;
    list-style-type: disc;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
}

p { 
    padding: .2rem 0 .2rem 0;
}
.wrapp  p {font-size: .8rem;}
.checkB { 
    margin-left: 1rem;
}

`;

export default layout;
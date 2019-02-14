/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const TodoItem = styled.article`
background-color: #deefff;
border: 2px solid #0071de;
padding: .5rem;
margin: .5rem 0;
box-sizing: border-box;
color: #0071de;
border-bottom-left-radius: 15px 255px;
border-bottom-right-radius: 225px 15px;
border-top-left-radius: 255px 15px;
border-top-right-radius: 15px 225px;
`;

export const Boton = styled.button`
padding: .2em 1em;
border: 1px solid blue;
box-shadow: 15px 28px 25px -18px rgba(0,0,0,.2);
transition: all 235ms ease-in-out 0s;
align-self: center;
background-color: #c1c0bd;
border: 2px solid #41403e;
color: #41403e;
cursor: pointer;
display: inline-block;
font-size: 1rem;
outline: 0;
border-bottom-left-radius: 15px 255px;
border-bottom-right-radius: 225px 15px;
border-top-left-radius: 255px 15px;
border-top-right-radius: 15px 225px;
margin: .4rem 0;
`;

export const Date = styled.span`
color: #0071de;
font-size: .7em;
`;

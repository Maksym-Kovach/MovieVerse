import './assets/plain-css.css';

import React from 'react';
import { createRoot } from 'react-dom/client';

import Movie from './pages/Movie';
const domElement = document.querySelector('#root-c3');
const root = createRoot(domElement);

root.render(
    <Movie/>,
);

// {
// property1: 4,
// prop: "str"
// handleClick: () => {return 12;}
// children: 'Custom content'
// }

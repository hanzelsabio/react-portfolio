import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Home from '../src/pages/Home.jsx'

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css'; // Your main styles

import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/aos/dist/aos.css';
import '../node_modules/glightbox/dist/css/glightbox.min.css';
import '../node_modules/swiper/swiper-bundle.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)

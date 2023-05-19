import React from 'react'

import {Route, Routes} from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from "./Components/Navbar";
import Home from  "./Pages/Home";
import ExcerciseDetail from "./Pages/ExcerciseDetail";
import Footer from './Components/Footer';

import './App.css';


const App = () => {
  return (
   <Box width="400px" sx={{width: {xl: '1488px'}}} m="auto" >
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<ExcerciseDetail />} />
    </Routes>
    <Footer />
   </Box>
  )
}

export default App;
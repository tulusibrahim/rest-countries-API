import logo from './logo.svg';
import './App.css';
import { Box, ChakraProvider, Flex, Image, Input, InputGroup, InputLeftAddon, InputLeftElement, Select, Text } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/home';
import Country from './components/country'
import Header from './components/header';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/country/:name' element={<Country />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;

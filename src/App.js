import React, { useState, useEffect } from "react";
import HomePage from './components/HomePage';
import Form from './components/Form';
import Nav from './components/Nav';

const App = () => {
  return (
    <>
      <Nav />
      <HomePage />
      <Form />
    </>
  );
};
export default App;

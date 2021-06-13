import React, { useState, useEffect } from "react";
import HomePage from './components/HomePage';
import Form from './components/Form';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <HomePage />
      <Form />
    </>
  );
};
export default App;

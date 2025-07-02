import React from 'react';
import {Routes, Route} from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Content from './components/content';

function App() {
  return (
    <div className="App">
    <Header/>
    <Content/>
    <Footer/>
    </div>
  );
}

export default App;

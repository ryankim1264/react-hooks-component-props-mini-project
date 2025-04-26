import React from "react";
import blogData from "../data/blog";
import Header from './Header';
import About from "./About";

console.log(blogData);

function App() {
  return (
    <div className="App">
     <Header/>
     <About about="Welcome to my blog where I share coding tips, life updates, and more!" />
    </div>
  );
}

export default App;

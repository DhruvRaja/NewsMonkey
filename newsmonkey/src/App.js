import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App(props) {


  const[mode,setMode]=useState('light')
  const[labletext,setlabletext]=useState("Enable Dark Mode")
  const[back,setBack]=useState('light')



  const togglemode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='black'
      setlabletext("Enable Light Mode")
      setBack('dark')
      
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      setlabletext("Enable Dark Mode")
      setBack('light')
     
    }
  }




  return (
    <Router>
      <div>
        <NavBar togglemode={togglemode} mode={mode}  labletext={labletext} back={back}/>
        <Routes>
          <Route
            exact
            path="/"
            element={<News key="genral" catagory="general" mode={mode} back={back} />}
          />
          <Route
            exact
            path="/science"
            element={<News key="science" catagory="science"  mode={mode}  back={back}/>}
          />
          <Route
            exact
            path="/sports"
            element={<News key="sports" catagory="sports" mode={mode}  back={back}/>}
          />
          <Route
            exact
            path="/technology"
            element={<News key="technology" catagory="technology" mode={mode}  back={back}/>}
          />
          <Route
            exact
            path="/entertainment"
            element={<News key="entertainment" catagory="entertainment"mode={mode}  back={back}/>}
          />
          <Route
            exact
            path="/health"
            element={<News key="health" catagory="health" mode={mode}  back={back}/>}
          />
          <Route
            exact
            path="/bussiness"
            element={<News key="bussiness" catagory="business"mode={mode}  back={back} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

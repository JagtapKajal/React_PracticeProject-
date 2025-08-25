import React from "react";
import User from "./User";
import Student from "./components/Student";
import ConditonalStmt from "./components/ConditonalStmt";
import Event from "./components/Event";
import Counter from "./components/Counter";
import Map from "./components/Map";
import Filter from "./components/Filter";
import FetchDataAPI from "./components/FetchDataAPI";
import FormHandling from "./components/FormHandling";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Team from "./Pages/Team";
import Product from "./Pages/Product";
import DynamicRouting from "./Pages/DynamicRouting";
import Course_Details from "./Pages/Course_Details";
import Navbar from "./components/Navbar";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementBy10 } from "./Redux/counterSlice";

const App = () => {
  // this is redux command
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  return (
    <>
      {/* <User/>  parent component */}
      {/* <Student name="John" age={20} marks={88} gender="male" /> */}

      {/* <Student name="Alice" age={21} marks={98} gender="male" /> */}

      {/* <ConditonalStmt name="Kajal" age={22} pancard={true} price={150000} /> */}
      {/* <Event/> */}

      {/* <Counter/> */}

      {/* <Map/> */}

      {/* <Filter/> */}

      {/* <FetchDataAPI/> */}

      {/* <FormHandling/> */}

      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/team" element={<Team />} />

          {/* Course list page */}
          <Route path="/courses" element={<DynamicRouting />} />

          {/* Course details page */}
          <Route path="/courses/:id" element={<Course_Details />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>

      <h1>{counter}</h1>
    </>
  );
};

export default App;

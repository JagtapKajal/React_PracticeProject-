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

const App = () => {
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
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/COntact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Team " element={<Team />} />
          <Route path="/DynamicRouting " element={<Team />} />
          
          <Route path="/cources/:id " element={<CourcesR />} />
        </Routes>
      </Router>
      <DynamicRouting/>
    </>
  );
};

export default App;

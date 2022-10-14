import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home";

import AppStyles from "./App.module.css";

function App() {
    return (
        <div className={AppStyles.container}>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </div>
    );
}

export default App;

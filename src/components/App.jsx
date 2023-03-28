import React from 'react';
import AppRoutes from "./Routes/Routes";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";

const App = () => {
    return (
        <div className="app">
            <Header/>

            <div className="container">
                <AppRoutes/>
                <Sidebar/>
            </div>

            <Footer/>



        </div>
    );
};

export default App;
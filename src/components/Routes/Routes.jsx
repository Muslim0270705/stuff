import React from 'react';
import {Route,Routes} from "react-router-dom";
import Home from "../Home/Home";

import {ROUTES} from "../../utils/routes"
import SingleProduct from "../Products/SingleProduct";

const AppRoutes = () => (
    <Routes>
        <Route index element={<Home/>}/>
        <Route path={ROUTES.PRODUCT} elment={<SingleProduct/>}/>
    </Routes>
)
export default AppRoutes;
import React from 'react';
import {Route,Routes} from "react-router-dom";
import Home from "../Home/Home";

import { ROUTES } from "../../utils/routes"


import SingleProduct from "../Products/SingleProduct";
import Undefined from "../Undefined/Undefined";

const AppRoutes = () => (
    <Routes>
        <Route index element={<Home/>}/>
        <Route path={ROUTES.PRODUCT} element={<SingleProduct />}/>
        <Route path={ROUTES.UNDEFINED} element={<Undefined/>}/>
    </Routes>
)
export default AppRoutes;
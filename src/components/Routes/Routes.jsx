import React from 'react';
import {Route,Routes} from "react-router-dom";
import Home from "../Home/Home";

import { ROUTES } from "../../utils/routes"


import SingleProduct from "../Products/SingleProduct";
import Undefined from "../Undefined/Undefined";
import Profile from "../Profile/Profile";

import SingleCategory from "../Categories/SingleCategory";
import Cart from "../Cart/Cart";
import Favorites from "../Favorites/Favorites";

const AppRoutes = () => (
    <Routes>
        <Route index element={<Home/>}/>
        <Route path={ROUTES.PRODUCT} element={<SingleProduct />}/>
        <Route path={ROUTES.UNDEFINED} element={<Undefined/>}/>
        <Route path={ROUTES.PROFILE} element={<Profile/>}/>
        <Route path={ROUTES.CART} element={<Cart/>}/>
        <Route path={ROUTES.CATEGORY} element={<SingleCategory/>}/>
        <Route path={ROUTES.FAVORITES} element={<Favorites/>}/>
    </Routes>
)
export default AppRoutes;
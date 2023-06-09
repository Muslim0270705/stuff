import React, {useEffect} from 'react';
import Poster from "../Poster/Poster";
import Products from "../Products/Products";
import {useDispatch, useSelector} from "react-redux";
import Categories from "../Categories/Categories";
import Banner from "../Banner/Banner";
import {filterByPrice} from "../../features/Products/ProductSlice";

const Home = () => {
    const dispatch = useDispatch()
    const {products : {list,filtered},categories} = useSelector((state) => state)

    useEffect(() => {
        if(!list?.length) return ;
        dispatch(filterByPrice(201))
    },[dispatch,list?.length])
    return (
        <>
            <Poster/>
            <Products products={list} amount={5} title='В тренде'/>
            <Categories products={categories?.list} amount={5} title='Стоит посмотреть'/>
            <Banner/>
            <Products products={filtered} amount={5} title='Менее 200$'/>
        </>
    );
};

export default Home;
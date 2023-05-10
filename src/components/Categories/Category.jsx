import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { useGetProductsQuery } from "../../features/api/apiSlice";

import styles from "../../styles/Category.module.css";

import Products from "../Products/Products";

const Category = () => {
    const { id } = useParams();
    const { list } = useSelector(({ categories }) => categories);

    const defaultValues = {

        price_gte: 0,
        price_lte: 2000,
        title_like: "",
    };

    const defaultParams = {
        ...defaultValues,
        "category.id" : id,
        _limit: 5,
        _start: 0

    };

    const [isEnd, setEnd] = useState(false);
    const [cat, setCat] = useState(null);
    const [items, setItems] = useState([]);
    const [values, setValues] = useState(defaultValues);
    const [params, setParams] = useState(defaultParams);

    const { data = [], isLoading, isSuccess } = useGetProductsQuery(params);

    useEffect(() => {
        if (!id) return;

        setValues(defaultValues);
        setItems([]);
        setEnd(false);
        setParams({ ...defaultParams});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    useEffect(() => {
        if (isLoading) return;

        if (!data.length) return setEnd(true);

        setItems((_items) => [..._items, ...data]);
    }, [data, isLoading]);

    useEffect(() => {
        if (!id || !list.length) return;

        const category = list.find((item) => item.id === id * 1);

        setCat(category);
    }, [list, id]);
    console.log()
    const handleChange = ({ target: { value, name } }) => {
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setItems([]);
        setEnd(false);
        setParams({ ...defaultParams, ...values });
    };

    const handleReset = () => {
        setValues(defaultValues);
        setParams(defaultParams);
        setEnd(false);
    };

    return (
        <section className={styles.wrapper}>
            <h2 className={styles.title}>{cat?.name}</h2>

            <form className={styles.filters} onSubmit={handleSubmit}>
                <div className={styles.filter}>
                    <input
                        type="text"
                        name="title_like"
                        onChange={handleChange}
                        placeholder="Product name"
                        value={values.title_like}
                    />
                </div>
                <div className={styles.filter}>
                    <input
                        type="number"
                        name="price_gte"
                        onChange={handleChange}
                        placeholder="0"
                        value={values.price_gte}
                    />
                    <span>Price from</span>
                </div>
                <div className={styles.filter}>
                    <input
                        type="number"
                        name="price_lte"
                        onChange={handleChange}
                        placeholder="0"
                        value={values.price_lte}
                    />
                    <span>Price to</span>
                </div>

                <button type="submit" hidden />
            </form>

            {isLoading ? (
                <div className="preloader">Loading...</div>
            ) : !isSuccess || !items.length ? (
                <div className={styles.back}>
                    <span>No results</span>
                    <button onClick={handleReset}>Reset</button>
                </div>
            ) : (
                <Products
                    title=""
                    products={items}
                    style={{ padding: 0 }}
                    amount={items.length}
                />
            )}

            {!isEnd  && (
                <div className={styles.more}>
                    <button
                        onClick={() =>
                            setParams({ ...params, _start: params._start + params._limit })
                        }
                    >
                        See more
                    </button>
                </div>
            )}
        </section>
    );
};

export default Category;
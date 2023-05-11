import React, {useEffect, useState} from 'react';

import styles from "../../styles/Product.module.css"
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/routes";
import {useDispatch} from "react-redux";
import {addItemToCart,addItemToFavorites} from "../../features/user/userSlice";


const SIZES = ["Red","Green","Dark"]
const Gb = [128,256,512]

const Product = (item) => {
    const {images,title,price,description} = item
    const [currentImage,setCurrentImage] = useState()
    const [currentSize,setCurrentSize] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        if(!images.length)return;
        setCurrentImage(images[0])

    },[images])

    const addToCart = () => {
        dispatch(addItemToCart(item))
    }
    const addToFavorites = () => {
        dispatch(addItemToFavorites(item));
    };
    return (
        <section className={styles.product}>
            <div className={styles.images}>
                <div
                    className={styles.current}
                    style={{background: `url(${currentImage}) center/cover`}}
                />
                <div className={styles["images-list"]}>
                    {images.map((image,i) => (
                        <div
                            key={i}
                            className={styles.image}
                            style={{backgroundImage: `url(${image})`}}
                            onClick={() => setCurrentImage(image)}
                        />
                    ))}
                </div>
            </div>

                <div className={styles.info}>
                    <h1 className={styles.title}>{title}</h1>
                    <div className={styles.price}>{price}$</div>
                    {item.category.name  === "Phone" || item.title === "AirPods Max" || item.title === "JBL T710" || item.title  === "Sony WH-1000XM5" ?<>

                        <div className={styles.sizes}>
                            <span>Color:</span>
                            <div className={styles.list}>
                                {SIZES.map((size,i) => (
                                    <div
                                        onClick={() => setCurrentSize(size)}
                                        className={`${styles.size} ${currentSize === size ? styles.active : ''}`}
                                        key={i}
                                    >
                                        {size}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {item.category.name  === "Phone" ? <div className={styles.sizes}>
                            <span>Gb:</span>
                            <div className={styles.list}>
                                {Gb.map((size,i) => (
                                    <div
                                        onClick={() => setCurrentSize(size)}
                                        className={`${styles.size} ${currentSize === size ? styles.active : ''}`}
                                        key={i}
                                    >
                                        {size}
                                    </div>
                                ))}
                            </div>
                        </div> : ""}

                    </>: ""}

                    <p className={styles.description}>{description}</p>
                    <div className={styles.actions}>
                        <button onClick={addToCart} disabled={!currentSize } className={styles.add}>
                            Add to cart
                        </button>
                        <button color={styles.favourite} onClick={addToFavorites}>
                            Add to favorites
                        </button>
                    </div>
                    <div className={styles.bottom}>
                        19 people purchased

                    <Link to={ROUTES.HOME}>
                        Return to store
                    </Link>
                    </div>
                </div>
        </section>
    );
};

export default Product;
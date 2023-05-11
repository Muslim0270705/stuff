import React from 'react';

import styles from "../../styles/Home.module.css"

import bannerImg from "../../images/banner.png"

const Banner = () => (

        <section className={styles.banner}>
            <div className={styles.left}>
                <p className={styles.content}>
                    НОВЫЙ ГОД

                    <span>
                        РАСПРОДАЖА
                    </span>
                </p>
                <button content={styles.more}>
                    Узнать больше
                </button>
            </div>
            <div
                className={styles.right}
                style={{backgroundImage : `url(${bannerImg})`}}
            >
                <p className={styles.discount}>
                    сэкономить до <span> 50% </span>выключенный
                </p>
            </div>
        </section>

);

export default Banner;
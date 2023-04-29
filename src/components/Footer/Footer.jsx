import React from 'react';
import styles from "../../styles/Footer.module.css"
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/routes";
import Logo from "../../images/logo.svg";
const Footer = () => {
    return (
        <section className={styles.footer}>
            <div className={styles.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={Logo} alt=""/>
                </Link>
            </div>
            <div className={styles.rights}>
                Developer by
                 <a
                    href="https://github.com/Muslim0270705"
                    target="_blank"
                    rel="noreferrer"
                >
                    _Muslim
                </a>
            </div>
            <div className={styles.socials}>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                    <svg className='icon'>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
                    </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <svg className='icon'>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
                    </svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer">
                    <svg className='icon'>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default Footer;
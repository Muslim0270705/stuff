import React, {useEffect, useState} from 'react';
import styles from "../../styles/Header.module.css"
import {Link, useNavigate} from "react-router-dom";
import {ROUTES} from "../../utils/routes";
import Logo from "../../images/logo.svg";
import AVATAR from "../../images/avatar.jpg"
import {useDispatch, useSelector} from "react-redux";
import {toggleForm} from "../../features/user/userSlice";
import {useGetProductsQuery} from "../../features/api/apiSlice";
const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [searchValue,setSearchValue] = useState("")
    const [values,setValues] = useState({
        user:{
            name: "Гость", avatar: "data:image/png;base64,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"
        }

    })

    const {currentUser,cart,favorites} = useSelector(({user}) => user)
    console.log(favorites)
    const handleClick = () => {
        if(!currentUser) dispatch(toggleForm(true))
        else navigate(ROUTES.PROFILE)
    }

    const handleSearch = ({target:{value}}) => {
        setSearchValue(value)
    }

    const {data,isLoading} = useGetProductsQuery({title_like:searchValue})

    useEffect(() => {
        if(!currentUser) return;
        setValues(currentUser);
    },[currentUser])


    return (
        <section className={styles.header} style={{background:"transparent"}}>
            <div className={styles.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={Logo} alt=""/>
                </Link>

            </div>
            <div className={styles.info}>
                <div className={styles.user} onClick={handleClick}>
                    <div
                        className={styles.avatar}
                        style={{backgroundImage: `url(${values.user.avatar})`}}
                    />
                    <div className={styles.username}>
                        {values.user.name}
                    </div>
                </div>
                <form className={styles.form}>
                    <div className={styles.icon}>
                        <svg className='icon'>
                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
                        </svg>
                    </div>
                    <div className={styles.input}>
                        <input
                               type="search"
                               name="search"
                               placeholder="Искать что угодно..."
                               autoComplete="off"
                               onChange={handleSearch}
                               value={searchValue}
                        />
                    </div>

                    {searchValue && <div className={styles.box}>
                        {isLoading ? "Loading" : !data.length ? "No result" : (
                            data.map(({title,images,id}) => {
                                return (
                                    <Link key={id}
                                          onClick={() => setSearchValue("")}
                                          className={styles.item}
                                          to={`/products/${id}`}>
                                        <div
                                            className={styles.image}
                                            style={{backgroundImage : `url(${images[0]})`}}
                                        />
                                        <div className={styles.title}>
                                            {title}
                                        </div>
                                    </Link>
                                )
                            })
                        )}
                    </div>}

                </form>
                <div className={styles.account}>
                    <Link to={ROUTES.FAVORITES} className={styles.cart}>
                        <svg className='icon-cart'>
                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
                        </svg>
                        {!!favorites.length && <span className={styles.count}>{favorites.length}</span> }
                    </Link>
                    <Link to={ROUTES.CART} className={styles.cart}>
                        <svg className='icon-cart'>
                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
                        </svg>
                        {!!cart.length && <span className={styles.count}>{cart.length}</span> }
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Header;
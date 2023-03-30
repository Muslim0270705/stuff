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
        name: "Guest", avatar: AVATAR
    })

    const {currentUser,cart} = useSelector(({user}) => user)

    const handleClick = () => {
        if(!currentUser) dispatch(toggleForm(true))
        else navigate(ROUTES.PROFILE)
    }

    const handleSearch = ({target:{value}}) => {
        setSearchValue(value)
    }

    const {data,isLoading} = useGetProductsQuery({title:searchValue})

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
                        style={{backgroundImage: `url(${values.avatar})`}}
                    />
                    <div className={styles.username}>
                        {values.name}
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
                               placeholder="Search for anyting..."
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
                    <Link to={ROUTES.HOME} className={styles.favourites}>
                        <svg className='icon-fav'>
                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
                        </svg>
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
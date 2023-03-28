import React from 'react';

import '../../styles/Undefined.css'


import {Link} from "react-router-dom";

const Undefined = () => {



    return (
        <section className='undefined'>
            <h1 className="undefined__title">
                Продукт не найден
                <Link style={{color:"#6c3eb8"}} to={'/'}>
                    Главная
                </Link>
            </h1>
        </section>
    );
};

export default Undefined;
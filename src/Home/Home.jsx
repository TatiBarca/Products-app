// import { Link } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import s from './style.module.css'

export const Home = () =>{
    return (
        <div className={s.homeNav}>
            <Link to='/products' className={s.home}>Products</Link>
            <Link to='/details' className={s.home}>Details</Link>
            
        </div>
    )
}
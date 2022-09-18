import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import s from './style.module.css'



export const Details = () => {

    const params = useParams();
    console.log(useParams())

    const getId = () => params.id;

    let [item, setItem] = useState({});

    useEffect(() => {

        const detail = async () => {
            try {
                const res = await fetch('https://dummyjson.com/products/'+getId());
                const json = await res.json(item);
                console.log(json);
                setItem(json)
            } catch (error) {
                console.log('error', error)
            }
        }
        detail();
    }, [])


    return (
        <div>
            
            <h1>{item.title}</h1>
            <h2>{item.description}</h2>
            <div className={s.imagesBlock}>
            {item.images?.map((detail, index) => {
                return (
                    <div key={index}>
                        <img className={s.img} src={detail} alt="img" />
                    </div>
                )
            })}
            </div>
            
            
        </div>
    )
}
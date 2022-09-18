import React, { useEffect } from "react";
import s from './style.module.css';
import { useState } from "react";
import {Link} from 'react-router-dom';

// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}



    
    export  function BasicTable() {

        let [products, setProducts] = useState([]);

        const fetchNum = async () => {
            try {
                const res = await fetch('https://dummyjson.com/products');
                const json =await res.json(products);
                console.log(json);
                setProducts(json.products)
            } catch (error) {
                console.log('error', error)
            }
        }


        useEffect(() => {
    
        //     fetch('https://dummyjson.com/products')
        //         .then(res => res.json())
        //         .then(json => console.log(json));

        // }, [])
    
        
        fetchNum();
    }, [])


        return (
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell align="right">Brand</TableCell>
                    <TableCell align="right">Price&nbsp;</TableCell>
                    <TableCell align="right">Discount&nbsp;</TableCell>
                    <TableCell align="right">More Options</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((item) => (
                    <TableRow key={item.title} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">{item.title}</TableCell>
                        <TableCell align="right">{item.brand}</TableCell>
                        <TableCell align="right">{item.price}</TableCell>
                        <TableCell align="right">{item.protein}</TableCell>
                        <TableCell align="right"><button className={s.btnProduct}><Link to={'/details/'+item.id} className={s.link}>View</Link>
                            </button><button className={s.btnProduct}>Add to Cart</button></TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
            );
        }










// export const Products = () => {

//     let [products, setProducts] = useState([]);

//     useEffect(() => {

//     //     fetch('https://dummyjson.com/products')
//     //         .then(res => res.json())
//     //         .then(json => console.log(json));
//     // }, [])

//     const fetchNum = async () => {
//         try {
//             const res = await fetch('https://dummyjson.com/products');
//             const json =await res.json(products);
//             console.log(json);
//             setProducts(json.products)
//         } catch (error) {
//             console.log('error', error)
//         }
//     }
//     fetchNum();
// }, [])

//     return (
//         <div>
//             <table>
//             <tbody>
//             <tr>
//                     <th>Title</th>
//                     <th>Brand</th>
//                     <th>Price</th>
//                     <th>Discount</th>
//                 </tr>
//                 {products.map((items) => {
//                     return(
//                         <tr>
//                             <td>{items.title}</td>
//                             <td>{items.brand}</td>
//                             <td>{items.price}</td>
//                             <td>{items.discount}</td>
//                         </tr>
//                     )
//                 })}
//             </tbody>
                
//             </table>
//         </div>
//     )
// }
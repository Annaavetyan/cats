import React, {useEffect} from 'react';
import {useState} from 'react'
import axios from "axios";
import storage from "../storage";
import { Link } from "react-router-dom";

const SideBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        const newCategories = storage.get('categories');

        setCategories(newCategories)
    },[])

    return (
        <div className='sidebar'>
            <ul className= 'sidebar-list'>
                {categories.map((category, index) => {

                    return (
                        <li key={index} className='sidebar-item'>
                            <Link to={`${category.name}`}>{category.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}


export default SideBar
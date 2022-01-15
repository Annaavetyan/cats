import React, {useEffect} from 'react';
import SideBar from "../SideBar/SideBar";
import axios from "axios";
import storage from "../storage";

const Layout = (props) => {

    useEffect(() => {
        getCategories()
        getCatImages()
    }, [])

    const getCategories = async () => {
        await axios.get("https://api.thecatapi.com/v1/categories").then((resp) => {
            storage.set('categories',resp.data);
        })
    }
    const getCatImages  = async () => {
        await axios.get("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=1 ").then((resp)=>{
            storage.set('images',resp.data);
        })
    }
    return (
        <div className='layout'>
            <SideBar/>
            {props.children}
        </div>
    )
}

export default Layout;
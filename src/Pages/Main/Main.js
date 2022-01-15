import React, {useEffect, useState} from 'react';
import storage from "../../storage";


const Main = () => {
    const [mainImages, setMainImages] = useState([]);

    useEffect(() => {
        const newImages = storage.get('images');

        setMainImages(newImages)
    }, [])

    return (
        <div className='main-page'>
            <div className='image-list'>
                {
                    mainImages?.map((image, index) => {
                        return (
                            <div key={index} className='image-box'>
                                <img src={image['url']}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Main
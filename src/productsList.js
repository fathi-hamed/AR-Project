import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import VirtualTryOn from './VirtualTryOn';

const images = require.context('./assets/images', true);
const imageList = images.keys().map(image => images(image));

const ProductsList = () => {
    const [showComponent, setShowComponent] = useState(false);
    const toggleComponent = () => {
        setShowComponent(!showComponent);
    };

    return (
        <>
            <div style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.2)' }}>
                <h1 style={{ textAlign: 'center' }}>Virtual Try-On - Prototype</h1>
            </div>
            <div className='containerAll' >
                {imageList.map((image, index) => (
                    <div className='container' >
                        <img className='img' style={{ display: 'center', margin: '0 auto', width: '30%', height: '180px' }} key={index} src={image} alt={`image-${index}`} />
                        <div className='button'>
                            <button onClick={toggleComponent} >
                                {showComponent ? 'Try On' : 'Try On'}
                            </button>
                            {showComponent && <VirtualTryOn uri={image} />}
                        </div>
                    </div>

                ))}

            </div>


        </>
    );
};

export default ProductsList;
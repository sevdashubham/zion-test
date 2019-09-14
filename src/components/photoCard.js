import React from 'react';
import './photoCard.css';

const PhotoCard = ({src, imageName}) => {

    return (
        <div className="product-card-master">
            <div className="image-product-container">
                <h4>{imageName}</h4>
            <img
                src={src}
                alt={imageName}/>
            </div>
        </div>
    )
};

export default PhotoCard

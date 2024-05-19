import React from 'react';
import '../styles/itemMenu.css';

function ItemMenu({ image, title, description }) {
    return (
        <div className="item-menu">
            <img src={image} alt={title} className="item-menu-image" />
            <div className="description-container">
            <h3 className="item-menu-title">{title}</h3>
            <p className="item-menu-description">{description}</p>
            <button className=" btn item-menu-button">Order Delivery</button>
            </div>
        </div>
    );
}

export default ItemMenu;
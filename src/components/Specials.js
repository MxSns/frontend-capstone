import React from 'react';
import ItemMenu from './ItemMenu.js';
import '../styles/general.css';
import '../styles/specials.css';
import bruchetta from '../assets/images/bruchetta.svg';
import greekSalad from '../assets/images/legreekSalad.webp';
import lemonDessert from '../assets/images/lemonDessert.webp';

function Specials() {
    return (
        <div className="specialsContainer">
            <div className="specialsTitle">
                <h2>Specials</h2>
                <button className="btn">Online Menu</button>
            </div>
            <div className="specialsMenu">
                <ItemMenu
                    image={greekSalad}
                    title="Greek Salad"
                    description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese."
                />
                <ItemMenu
                    image={bruchetta}
                    title="Bruchetta"
                    description="Our Bruchetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables."
                />
                <ItemMenu
                image={lemonDessert}
                title="Lemon Cake"
                description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                />
            </div>
        </div>
    );
}

export default Specials;
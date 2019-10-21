import React from 'react';

import { Link } from 'react-router-dom';

const Items = () => (
    <div>
        <ul>
            <li>
                <Link to="/shop/item/1">Item 1</Link>
            </li>
        </ul>
        <div>
            <div>Collection Name</div>
            <div>
                <div>
                    <img alt="item pic"></img>
                    <span>Name</span>
                    <span>Price</span>
                </div>
            </div>
        </div>
    </div>
);

export default Items;

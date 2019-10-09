import React from "react";

import { Link } from "react-router-dom";

export const Items = () => (
    <div>
        <ul>
            <li>
                <Link to='/shop/item/1'>Item 1</Link>
            </li>
        </ul>
        <div>
            <div>Collection Name</div>
            <div>
                <img alt='Item image'></img>
                <div>
                    <span>Description</span>
                    <span>Price</span>
                </div>
            </div>
        </div>
    </div>
);
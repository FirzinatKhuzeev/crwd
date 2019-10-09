import React from "react";

import { Link } from "react-router-dom";

export const Items = () => (
    <div>
        <ul>
            <li>
                <Link to='/item/1'>Item 1</Link>
            </li>
        </ul>
    </div>
);
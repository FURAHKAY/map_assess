
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/sidebar.css";
import places from "../Icon/place.json";
import Pin from '../Icon/Pin.js';
import { slide as Menu } from 'react-burger-menu';
function Sidebar() {
    //displays side panel

    return (
        <Menu>

            <Pin />
            {places.map(place => <div key={place.store}
            >{place.store}</div>)}

        </Menu>

    );
}


export default Sidebar;
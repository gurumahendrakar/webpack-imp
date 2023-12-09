import React from "react";
import { render } from "react-dom";
import "./global.css"


const App = ()=>{
    return <div>
        <ul>
            <li>Name</li>
        </ul>
    </div>
}
render(App(),document.querySelector("body"))
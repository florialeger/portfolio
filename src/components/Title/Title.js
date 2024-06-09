import React from "react";
import './Title.css';

function Title ({title}) {
    return (
        <section className="title-container">
            <h1 className="title">{title}</h1>
            <div className="underline-title"></div>
        </section>
    );
};

export default Title;
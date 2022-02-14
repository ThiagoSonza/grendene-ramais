import React from "react";

function Title({ label, children }) {

    return (
        <div className="title">
            <h1 className="text-2xl"> {label} </h1>

            {children}
        </div>
    )

}

export default Title
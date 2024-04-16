import React from 'react'
import "./Backdrop.scss"

function Backdrop({children}) {
    return (
        <>
        <div className="backdrop-container">
            {children}
        </div>
        </>
    )
}

export default Backdrop

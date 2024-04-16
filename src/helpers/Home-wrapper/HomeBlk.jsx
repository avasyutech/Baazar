import React, {Children} from 'react';
import "./HomeBlk.scss";

function HomeBlk({children,className}) {
    return (
        <div className={`spacing-container ${className}`}>
            {children}
        </div>
    )
}

export default HomeBlk

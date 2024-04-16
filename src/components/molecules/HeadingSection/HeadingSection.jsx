import React from "react";
import "./HeadingSection.scss";
import ViewAll from "../../atoms/ViewAll/ViewAll";

function HeadingSection({heading, viewColor, identifier}) {
    return (
        <div className="heading-section__top-section" id={identifier}>
            <div className="heading-section__heading-blk">
                <h3 className="heading-section__heading-blk__label">{heading}</h3>
            </div>
            <div className="heading-section__view-all-btn">
                <ViewAll variant={viewColor} />
            </div>
        </div>
    );
}

export default HeadingSection;

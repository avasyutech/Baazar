import React from "react";
import PropTypes from "prop-types";
import "./Rating.scss";

export default function Rating({ value }) {
  const total_stars = 5;
  var star_percentage = (value / total_stars) * 100;
  return (
    <div className="ratings-container">
      <div className="inner-stars" style={{width: `${star_percentage}%` }}></div>
    </div>
  );
}

Rating.propTypes = {
  value: PropTypes.number,
};

Rating.defaultProps = {
  value: 4.5,
};

import React from 'react';
import './Season.css'

function getSeason (lat, month) {
    if (month > 2 && month < 9) {
        return lat > 0 ? "summer": "winter"
    }
    else {
        return lat > 0 ? "winter": "summer"

    }
}

function SeasonDisplay(props) {
    const season = getSeason(props.lat, new Date().getMonth());
    const text = season === "winter" ? "Burr, it is chilly": "Let's hit the beach";
    const icon = season === "winter" ? "snowflake": "sun";

    return (
      <div className={`season-display ${season}`}>
          <i className={`icon-right massive ${icon} icon`} />
          <h1>{text}</h1>
          <i className={`icon-left massive ${icon} icon`} />
      </div>
    );
}

export default SeasonDisplay;
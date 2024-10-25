import React, { useState } from 'react';

function Bars(props) {
    const { data, xScale, yScale, height, hoveredStation, setHoveredStation } = props;

    // Function to determine the color of the bar
    const getColor = (hoveredStation, station) => {
        return station === hoveredStation ? 'red' : 'steelblue'; // Red for hovered, steelblue for others
    };

    if (data) {
        return (
            <g>
                {/* Draw all bars */}
                {data.map((d, i) => (
                    <rect
                        key={i}
                        x={xScale(d.station)} // X position based on station name
                        y={yScale(d.start)} // Y position based on the number of riders starting
                        width={xScale.bandwidth()} // Bar width
                        height={height - yScale(d.start)} // Bar height
                        fill={getColor(hoveredStation, d.station)} // Dynamic color based on selection
                        stroke="black" // Optional: Outline to make the bars more distinct
                        strokeWidth={1}
                        onMouseEnter={() => setHoveredStation(d.station)}  // Update hovered station on mouse enter
                        onMouseOut={() => setHoveredStation(null)}  // Reset hovered station on mouse out
                    />
                ))}
            </g>
        );
    } else {
        return <g></g>;
    }
}

export default Bars;

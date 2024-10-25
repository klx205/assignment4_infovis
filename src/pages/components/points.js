import React, { useState } from 'react';

function Points(props) {
    const { data, xScale, yScale, height, width, hoveredStation, setHoveredStation, setTooltipX, setTooltipY } = props;

    const handleMouseEnter = (event, station) => {
        setHoveredStation(station);  // Update hovered station
        setTooltipX(event.pageX);  // Set X position for tooltip
        setTooltipY(event.pageY);  // Set Y position for tooltip
    };

    const handleMouseOut = () => {
        setHoveredStation(null);  // Reset hover
    };

    // Function to determine the color of the point
    const getColor = (hoveredStation, station) => {
        return station === hoveredStation ? 'red' : 'steelblue'; // Red for hovered, steelblue for others
    };

    // Function to determine the radius of the point
    const getRadius = (hoveredStation, station) => {
        return station === hoveredStation ? 10 : 5; // Radius 10 for hovered, 5 for others
    };

    if (data) {
        return (
            <g>
                {hoveredStation && (
                    <rect
                        x={0}
                        y={0}
                        width={width}
                        height={height}
                        fill="yellow"
                        pointerEvents="none" // Prevent the rectangle from capturing events
                    />
                )}

                {/* Draw all points */}
                {data.map((d, i) => (
                    <circle
                        key={i}
                        cx={xScale(d.tripdurationS)} // X position based on trip duration start
                        cy={yScale(d.tripdurationE)} // Y position based on trip duration end
                        r={getRadius(hoveredStation, d.station)} // Dynamic radius based on selection
                        fill={getColor(hoveredStation, d.station)} // Dynamic color based on selection
                        stroke="black" // Black outline
                        strokeWidth={1} // Thickness of the outline
                        onMouseEnter={(event) => handleMouseEnter(event, d.station)}  // Capture mouse event and station
                    onMouseOut={handleMouseOut}
                    />
                ))}

                {hoveredStation &&
                    data
                        .filter((d) => d.station === hoveredStation)
                        .map((d, i) => (
                            <circle
                                key={`selected-${i}`}
                                cx={xScale(d.tripdurationS)}
                                cy={yScale(d.tripdurationE)}
                                r={10} // Larger radius for the selected point
                                fill="red" // Highlight color
                                stroke="black" // Black outline
                                strokeWidth={1} // Outline thickness
                                pointerEvents="none" // Prevent the selected circle from re-triggering events
                            />
                        ))}
            </g>
        );
    } else {
        return <g></g>;
    }
}

export default Points;

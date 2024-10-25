import { select, axisBottom } from 'd3';
import { useEffect, useRef } from 'react';

function XAxis(props) {
    const { xScale, height, width, axisLable } = props;
    const axisRef = useRef();

    useEffect(() => {
        if (xScale) {
            const xAxis = axisBottom(xScale);
            select(axisRef.current).call(xAxis)
                .selectAll("text") // Select all the tick labels
                .style("text-anchor", "end") // Align the labels to the end after rotation
                .attr("transform", "rotate(-45)") // Rotate the labels 45 degrees
                .attr("dx", "-0.5em") // Adjust horizontal offset
                .attr("dy", "-0.5em"); // Adjust vertical offset
        }
    }, [xScale]);

    return (
        <g ref={axisRef} transform={`translate(0, ${height})`}>
            <text
                x={width / 2}
                y={50}  // Position the label below the axis
                textAnchor="middle"
                style={{ fontSize: '15px' }}    
            >
                {axisLable}
            </text>
        </g>
    );
}

export default XAxis;

import { select, axisLeft } from 'd3';
import { useEffect, useRef } from 'react';

function YAxis(props) {
    const { yScale, height, axisLable } = props;
    const axisRef = useRef();

    useEffect(() => {
        if (yScale) {
            const yAxis = axisLeft(yScale);
            select(axisRef.current).call(yAxis);
        }
    }, [yScale]);

    return (
        <g ref={axisRef}>
            <text
                transform={`translate(-50, ${height / 2}) rotate(-90)`}  // Adjusted positioning
                textAnchor="middle"
                style={{ fontSize: '15px' }}
            >
                {axisLable}
            </text>
        </g>
    );
}

export default YAxis;

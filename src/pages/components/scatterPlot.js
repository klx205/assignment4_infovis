import Points from './points';
import XAxis from './xAxis';
import YAxis from './yAxis';

function ScatterPlot(props) {
    const { offsetX, offsetY, data, xScale, yScale, height, width, hoveredStation, setHoveredStation, setTooltipX, setTooltipY } = props;

    return (
        <g transform={`translate(${offsetX}, ${offsetY})`}>
            {/* Pass hoveredStation and setHoveredStation to Points */}
            <Points 
                data={data} 
                xScale={xScale} 
                yScale={yScale} 
                height={height} 
                width={width}
                hoveredStation={hoveredStation}  // Pass the hovered station state
                setHoveredStation={setHoveredStation}  // Pass the setter function
                setTooltipX={setTooltipX}  // Pass the setter function for X position
                setTooltipY={setTooltipY}  // Pass the setter function for Y position
            />
            <YAxis yScale={yScale} height={height} axisLable={"Trip duration end in"} />
            <XAxis xScale={xScale} height={height} width={width} axisLable={"Trip duration start from"} />
        </g>
    );
}

export default ScatterPlot;

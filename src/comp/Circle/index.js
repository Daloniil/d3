import {useEffect, useRef, useState} from "react";
import {select} from "d3";

export const Circle = () => {
    const [data, setData] = useState([20, 60, 100, 140, 180])
    const svgRef = useRef()
    const maxRadius = Math.max(...data);
    const padding = 20;

    const maxCX = Math.max(...data.map(value => value * 2));
    const maxCY = Math.max(...data.map(value => value * 2));

    const svgWidth = maxCX + maxRadius + padding;
    const svgHeight = maxCY + maxRadius + padding;

    useEffect(() => {
        const svg = select(svgRef.current)

        svg.selectAll('circle').data(data)
            .join(('circle'))
            .attr('r', value => value)
            .attr('cx', value => value * 2)
            .attr('cy', value => value * 2)
            .attr('stroke', 'red')
    }, [data]);

    return (
        <>
            <svg ref={svgRef} width={svgWidth} height={svgHeight}></svg>
            <button onClick={() => setData(data.map(value => value + 5))}>Update</button>
        </>
    )
}

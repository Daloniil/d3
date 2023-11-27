import {useEffect, useRef, useState} from "react";
import {select, line, curveCardinal} from "d3";

export const Chart = () => {
    const [data, setData] = useState([20, 30, 10, 40, 50, 25, 70])
    const svgRef = useRef()

    useEffect(() => {
        const svg = select(svgRef.current)
        const myLine = line()
            .x((value, index) => index * 50)
            .y((value) => 150 - value)
            .curve(curveCardinal)

        svg.selectAll("path")
            .data([data])
            .join("path")
            .attr("d", value => myLine(value))
            .attr('fill', 'none')
            .attr('stroke', 'blue')

    }, [data]);

    return (
        <>
            <svg ref={svgRef}></svg>
            <button onClick={() => setData(data.map(value => value + 5))}>Update</button>
        </>
    )
}

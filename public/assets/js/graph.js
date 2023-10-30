import * as d3 from 'd3';

const s1 = '/assets/image/graph/ok.png';
const s2 = '/assets/image/graph/ok2.png';
const s3 = '/assets/image/graph/ok3.png';
const s4 = '/assets/image/graph/ok5.png';

export const drawPieChart = (svgElement, data) => {
    const width = 340; // 1/2 of 500
    const height = 250; // 1/2 of 500
    const hoverOffset = 15; // 1/2 of 30

    const svg = d3.select("#pieChart").attr("width", width).attr("height", height);
    svg.selectAll("*").remove();

    const g = svg.append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const defs = svg.append('defs');
    data.forEach((d, i) => {
        const pattern = defs.append("pattern")
            .attr("id", `pattern-${i}`)
            .attr("width", 1)
            .attr("height", 1)
            .attr("patternUnits", "objectBoundingBox");

        let imgX = -1.25; // 1/2 of -2.5
        let imgY = 0;
        let imgWidth = 150; // 1/2 of 300
        let imgHeight = 150; // 1/2 of 300

        if (d.imageUrl === s2) {
            imgWidth = 77.5; // 1/2 of 155
            imgHeight = 75; // 1/2 of 150
            imgX = 2.5; // 1/2 of 5
            imgY = -14.75; // 1/2 of -29.5
        } else if (d.imageUrl === s3) {
            imgWidth = 75; // 1/2 of 150
            imgHeight = 75; // 1/2 of 150
            imgX = -5.75; // 1/2 of -11.5
            imgY = 0.5; // 1/2 of 1
        } else if (d.imageUrl === s4) {
            imgWidth = 75; // 1/2 of 150
            imgHeight = 75; // 1/2 of 150
            imgX = -24.5; // 1/2 of -49
            imgY = 3.5; // 1/2 of 7
        }

        pattern.append("image")
            .attr("xlink:href", d.imageUrl)
            .attr("width", imgWidth)
            .attr("height", imgHeight)
            .attr("x", imgX)
            .attr("y", imgY);
    });

    const arc = d3.arc().innerRadius(0).outerRadius(75); // 1/2 of 150
    const pie = d3.pie().value(d => d.value);
    const arcs = pie(data);

    g.selectAll('path')
        .data(arcs)
        .enter()
        .append('path')
        .attr('fill', (d, i) => `url(#pattern-${i})`)
        .attr('d', arc)
        .attr('class', 'shiny-shadow')
        .on('mouseover', function (event, d) {
            const [x, y] = arc.centroid(d);
            d3.select(this)
                .transition()
                .duration(200)
                .attr('transform', `translate(${x * hoverOffset / 75}, ${y * hoverOffset / 75})`);
        })
        .on('mouseout', function () {
            d3.select(this)
                .transition()
                .duration(200)
                .attr('transform', 'translate(0, 0)');
        });

    const radius = 90; // 1/2 of 180
    const labelDistance = 80; // 1/2 of 160

    g.selectAll('polyline')
        .data(arcs)
        .enter().append('polyline')
        .attr('class', 'label-line')
        .attr('points', function (d) {
            const angle = (d.startAngle + d.endAngle) / 2 + Math.PI / 2;
            const startX = -Math.cos(angle) * radius;
            const startY = -Math.sin(angle) * radius;
            const endX = -Math.cos(angle) * labelDistance;
            const endY = -Math.sin(angle) * labelDistance;
            return [startX, startY, endX, endY];
        })
        .style('fill', 'none');

    g.selectAll('text')
        .data(arcs)
        .enter().append('text')
        .attr('class', 'label-text')
        .text(d => d.data.label)
        .attr('transform', function (d) {
            const angle = (d.startAngle + d.endAngle) / 2 + Math.PI / 2;
            const x = -Math.cos(angle) * (labelDistance + 17.5); // 1/2 of 35
            const y = -Math.sin(angle) * (labelDistance + 17.5); // 1/2 of 35
            return `translate(${x}, ${y})`;
        })
        .attr('fill', 'white')
        .style('font-size', '10px')
        .style('text-anchor', d => {
            const angle = (d.startAngle + d.endAngle) / 2 * 180 / Math.PI;
            return (angle > 90 && angle < 270) ? 'start' : 'end';
        })
        .style('alignment-baseline', 'middle');
}
 
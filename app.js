// D3 Scatterplot Assignment

// Students:
// =========
// Follow your written instructions and create a scatter plot with D3.js.

//Set Area for plot using SVG

var svgWidth = 960;
var svgHeight = 660;

var margin = {
    top:20, 
    right:20, 
    bottom:30, 
    left:40
};

// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// create svg container
var svg = d3.select("body").append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth);

// Append a group to the SVG area and shift ('translate') it to the right and to the bottom
var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// setup x 
var xValue = function(d) { return d.HIV;}, // data -> value
xScale = d3.scale.linear().range([0, width]), // value -> display
xMap = function(d) { return xScale(xValue(d));}, // data -> display
xAxis = d3.svg.axis().scale(xScale).orient("bottom");

// setup y
var yValue = function(d) { return d["Education (g)"];}, // data -> value
yScale = d3.scale.linear().range([height, 0]), // value -> display
yMap = function(d) { return yScale(yValue(d));}, // data -> display
yAxis = d3.svg.axis().scale(yScale).orient("left");

//Retrieve Data from CSV
d3.csv("./HIVTEST_Education.csv", function (error, data){
    if (error) throw error;

    // Print the data
    console.log(hivTest);

    data.forEach(function(d){
    d.HIV=+D.HIV;
    d["Education (g)"] = +d["Education (g)"];
    })

// don't want dots overlapping axis, so add in buffer to data domain
  xScale.domain([d3.min(data, xValue)-1, d3.max(data, xValue)+1]);
  yScale.domain([d3.min(data, yValue)-1, d3.max(data, yValue)+1]);

// Create scale functions
var yLinearScale = d3.scaleLinear()
    .range([height, 0]);

var xLinearScale = d3.scaleLinear()
    .range([0, width]);

var bottomAxis = d3.axisBottom(xLinearScale);

var leftAxis = d3.axisLeft(yLinearScale);

var currentAxisLabelX = "HIV";

// Create tooltip
var toolTip = d3.tip()
    .attr("class", "tooltip")
    .html(function(d) {
        var state = d.abbr;
        var HIV = +d.HIV;
        var Education = +d.Education;
        return (d.State + "<br> In HIV Tested: " + HIV + "%<br> Education less then College or Associates: " + Education + "%");
    });

chart.call(toolTip);

chart
.append("g")

};

//Resources: D3 Documentation for Scatter Plots:  http://bl.ocks.org/weiglemc/6185069

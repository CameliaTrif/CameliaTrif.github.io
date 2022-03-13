anychart.onDocumentReady(() => {
    var sliceSize = 1;
    var data = [
        {
            x: "Red", value: sliceSize, fill: {
                color: "#Fe0000"
            }
        },
        {
            x: "Orange Red", value: sliceSize, fill: {
                color: "#ff4601"
            }
        },
        {
            x: "Orange", value: sliceSize, fill: {
                color: "#ff8002"
            }
        },
        {
            x: "Yellow Orange", value: sliceSize, fill: {
                color: "#ffb304"
            }
        },
        {
            x: "Yellow", value: sliceSize, fill: {
                color: "#fee002"
            }
        },
        {
            x: "Yellow green", value: sliceSize, fill: {
                color: "#7ac142"
            }
        },
        {
            x: "Green", value: sliceSize, fill: {
                color: "#05a750"
            }
        },
        {
            x: "Blue Green", value: sliceSize, fill: {
                color: "#07a999"
            }
        },
        {
            x: "Blue", value: sliceSize, fill: {
                color: "#1250ff"
            }
        },
        {
            x: "Blue Violet", value: sliceSize, fill: {
                color: "#7209a7"
            }
        },
        {
            x: "Violet", value: sliceSize, fill: {
                color: "#bb00fe"
            }
        },
        {
            x: "Red Violet", value: sliceSize, fill: {
                color: "#cb02ae"
            }
        },
    ];

    // create the chart
    var chart = anychart.pie();

    // set the chart title
    chart.title("Complementary color wheel");
    chart.labels(false);
    // add the data
    chart.data(data);

    // display the chart in the container
    chart.container('pie-container');
    chart.draw();
})

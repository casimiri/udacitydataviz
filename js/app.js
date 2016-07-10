
var svg = dimple.newSvg('#chartTitanic', 600,400);
 		//Import Dataset
 		d3.csv("data/titanic_data.csv", function(data){
        var chart = new dimple.chart(svg, data);
        chart.addCategoryAxis("x", ["Pclass","Sex"]);
        chart.addMeasureAxis("y", "Survived");
        chart.addSeries("Sex", dimple.plot.bar);
        svg.append("text")
         .attr("x", chart._xPixels() + chart._widthPixels() / 2)
         .attr("y", chart._yPixels() - 20)
         .style("text-anchor", "middle")
         .style("font-weight", "bold")
         .text("Survival Rate per class ");
    chart.addLegend(65, 10, 510, 20, "right");
    chart.draw();
    });
/*
var svg = dimple.newSvg("#chartTitanic", 800, 600);
    var data = [
      { "Word":"Hello", "Awesomeness":2000 },
      { "Word":"World", "Awesomeness":3000 }
    ];
    var chart = new dimple.chart(svg, data);
    chart.addCategoryAxis("x", "Word");
    chart.addMeasureAxis("y", "Awesomeness");
    chart.addSeries(null, dimple.plot.bar);
    chart.draw();

*/
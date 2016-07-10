
//used for SVG width and height
var w=600, h=400;

//mapping SVG objects to html DIV elements by Id
var svgRateGenderClass = dimple.newSvg('#chartRateGenderClass', w,h);
var svgRateGender = dimple.newSvg('#chartRateGender', w,h);
var svgRateSibSp = dimple.newSvg('#chartRateSibSp', w,h);

//Draw chart for survival rate per Gender
d3.csv("data/titanic_data.csv", function(data){
  var chart = new dimple.chart(svgRateGender, data);

  var xAxis = chart.addCategoryAxis("x", "Sex");
  xAxis.title = "Gender"

  var yAxis = chart.addMeasureAxis("y", "Survived");
  yAxis.title = "Survival Rate"
  yAxis.tickFormat = "%";

  mySeries = chart.addSeries("Sex", dimple.plot.bar);
  //to use average instead of the default sum for the series aggregation 
  mySeries.aggregate = dimple.aggregateMethod.avg

  svgRateGender.append("text")
   .attr("x", chart._xPixels() + chart._widthPixels() / 3)
   .attr("y", chart._yPixels() - 20)
   .style("text-anchor", "middle")
   .style("font-weight", "bold")
   .text("Survival Rate per Gender");

  chart.addLegend(65, 10, 510, 20, "right");

  chart.draw();
});


//Draw chart for survival rate per gender per passenger class
d3.csv("data/titanic_data.csv", function(data){
  var chart = new dimple.chart(svgRateGenderClass, data);

  var xAxis = chart.addCategoryAxis("x", ["Pclass","Sex"]);
  xAxis.title = "Gender per Passenger Class"

  var yAxis = chart.addMeasureAxis("y", "Survived");
  yAxis.title = "Survival Rate"
  yAxis.tickFormat = "%";

  mySeries = chart.addSeries("Sex", dimple.plot.bar);
  //to use average instead of the default sum for the series aggregation 
  mySeries.aggregate = dimple.aggregateMethod.avg

  svgRateGenderClass.append("text")
   .attr("x", chart._xPixels() + chart._widthPixels() / 3)
   .attr("y", chart._yPixels() - 20)
   .style("text-anchor", "middle")
   .style("font-weight", "bold")
   .text("Survival Rate per Gender per Passenger Class");

  chart.addLegend(65, 10, 510, 20, "right");

  chart.draw();
});

//Draw chart for survival rate per gender per Number of Siblings/Spouses Aboard
d3.csv("data/titanic_data.csv", function(data){
  var chart = new dimple.chart(svgRateSibSp, data);

  var xAxis = chart.addCategoryAxis("x", ["SibSp","Sex"]);
  xAxis.title = "Gender per Number of Siblings/Spouses Aboard"

  var yAxis = chart.addMeasureAxis("y", "Survived");
  yAxis.title = "Survival Rate"
  yAxis.tickFormat = "%";

  mySeries = chart.addSeries("Sex", dimple.plot.bar);
  //to use average instead of the default sum for the series aggregation 
  mySeries.aggregate = dimple.aggregateMethod.avg

  svgRateSibSp.append("text")
   .attr("x", chart._xPixels() + chart._widthPixels() / 3)
   .attr("y", chart._yPixels() - 20)
   .style("text-anchor", "middle")
   .style("font-weight", "bold")
   .text("Survival Rate per Gender per Nbr of Siblings/Spouses");

  chart.addLegend(65, 10, 510, 20, "right");

  chart.draw();
});
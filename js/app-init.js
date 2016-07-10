
//used for SVG width and height
var w=600, h=400;

//mapping SVG objects to html DIV elements by Id
var svgGenderClass = dimple.newSvg('#chartGenderClass', w,h);
var svgGender = dimple.newSvg('#chartGender', w,h);
var svgSibSp = dimple.newSvg('#chartSibSp', w,h);
var svgParch = dimple.newSvg('#chartParch', w,h);

//Draw chart for survival per Gender
d3.csv("data/titanic_data.csv", function(data){
  var chart = new dimple.chart(svgGender, data);

  var xAxis = chart.addCategoryAxis("x", "Sex");

  var yAxis = chart.addMeasureAxis("y", "Survived");

  mySeries = chart.addSeries("Sex", dimple.plot.bar);

  chart.addLegend(65, 10, 510, 20, "right");

  chart.draw();
});


//Draw chart for survival per gender per passenger class
d3.csv("data/titanic_data.csv", function(data){
  var chart = new dimple.chart(svgGenderClass, data);

  var xAxis = chart.addCategoryAxis("x", ["Pclass","Sex"]);

  var yAxis = chart.addMeasureAxis("y", "Survived");

  mySeries = chart.addSeries("Sex", dimple.plot.bar);

  chart.addLegend(65, 10, 510, 20, "right");

  chart.draw();
});

//Draw chart for survival per gender per Number of Siblings/Spouses Aboard
d3.csv("data/titanic_data.csv", function(data){
  var chart = new dimple.chart(svgSibSp, data);

  var xAxis = chart.addCategoryAxis("x", ["SibSp","Sex"]);

  var yAxis = chart.addMeasureAxis("y", "Survived");

  mySeries = chart.addSeries("Sex", dimple.plot.bar);

  chart.addLegend(65, 10, 510, 20, "right");

  chart.draw();
});


//Draw chart for survival per gender per Number of Parents/Children Aboard
d3.csv("data/titanic_data.csv", function(data){
  var chart = new dimple.chart(svgParch, data);

  var xAxis = chart.addCategoryAxis("x", ["Parch","Sex"]);

  var yAxis = chart.addMeasureAxis("y", "Survived");

  mySeries = chart.addSeries("Sex", dimple.plot.bar);

  chart.addLegend(65, 10, 510, 20, "right");

  chart.draw();
});
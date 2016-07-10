# Udacity Data Visualization 
##Survivors of the Titanic
####By: Casimir COMPAORE, Data Analyst Nanodegree

##Summary 
The sinking of the RMS Titanic is one of the most infamous shipwrecks in history, where 1502 out of 2224 passengers and crew were killed. Although there was some element of luck involved in surviving the sinking, some groups of people were more likely to survive than others, such as women, and the upper-class. This visualization aims to emphasis the difference survival chance across categories, so that the viewers can compare it easily.

##Design 
The original data is already cleaned. 

####Chart Selections:

A bar chart is easy to understand and good for comparison. We will only use bar chars for visualization.
The following three bar charts are used to show the differences in survival rate:

####Bar chart for survival rate per Gender: 
x position: passenger gender.
y position: the count of passengers.
color hue: survived or perished.

####Bar chart for survival rate per Gender per Passenger Class:
x position: Gender grouped by Passenger Class.
y position: the percentage of survived per gender per passenger class of passengers.
color hue: Gender.

####Bar chart for survival rate per Gender per Number of Siblings/Spouses Aboard:
x position: Gender grouped by Number of Siblings/Spouses Aboard.
y position: the percentage of survived per gender per pNumber of Siblings/Spouses Aboard.
color hue: Gender.

####Library Selecting

dimple.js is the primary visual library used in creating these charts. One of the advantages of dimple.js is that it is  easy to create visuals in few lines of code. D3.js is required by dimple.js and is explicitly used to load the data from a CSV file.

##Feedback

##Resources
Titanic data set: https://www.kaggle.com/c/titanic-gettingStarted

dimple js examples: http://dimplejs.org/examples_index.html

D3 js : https://d3js.org/

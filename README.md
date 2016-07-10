# Udacity Data Visualization 
##Survivors of the Titanic
####By: Casimir COMPAORE, Data Analyst Nanodegree

##Summary 
The sinking of the RMS Titanic is one of the most infamous shipwrecks in history, where 1502 out of 2224 passengers and crew were killed. Although there was some element of luck involved in surviving the sinking, some groups of people were more likely to survive than others, such as women, and the upper-class. This visualization aims to emphasis the difference survival chance across categories, so that the viewers can compare it easily.

##Design 
The original data is already cleaned. 

####Chart Selections:

While exploring the data, I believed that female passengers will have a better survival rate than male passengers. I also want to highlight the fact that the better a passenger's class, the luckier the passenger got to survive. I am then dealing with comparative data.
I have tried Pie, line charts, and scatter plots, but they are appealing for comparative data. 

As we have a comparative data that we would like to represent through a chart then a bar chart would be the best option. This type of chart is one of the more familiar options as it is easy to interpret. These charts are useful for displaying data that is classified into nominal (female, male passengers) or odinal categories (1st class, 2nd class, 3rd class).

We will then only use bar chars for the visualization.
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

I have received feedbacks from three people and have taken corrective actions as explained below.

####Feedback1: To display percentage of survival instead of count
I initially displayed the count of survivors for the three charts. But the count doesn't provive information with regards to the population. I have then changed the charts to display percentage of survivors. Please visit initial charts from index-init.html.

####Feedback2: Add titles for axis and chart
I initially didn't display human readable title for the axis. The default variable names were displayed. And each chart were missing a descriptive title. I have then added descriptive titles to the charts axis and to each chart itself. Please visit initial charts from index-init.html.

####Feedback3: Remove extra chart
I initially drew a chart for survivors per Number of Siblings/Spouses and an additional chart for survivors per Number of Parents/Children. But these two charts look alike and no additional information was added. I then decided to keep only the first chart. Please visit initial charts from index-init.html.

##Resources
Titanic data set: https://www.kaggle.com/c/titanic-gettingStarted

dimple js examples: http://dimplejs.org/examples_index.html

D3 js : https://d3js.org/

#Read the titanic data in csv format

titanic_data <- read.csv("/Users/casimircompaore/Downloads/titanic_data.csv")
str(titanic_data)
summary(titanic_data)

sum(titanic_data["Survived"])
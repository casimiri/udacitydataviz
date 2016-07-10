#Read the titanic data in csv format

titanic_data <- read.csv("/Users/casimircompaore/Downloads/titanic_data.csv")
str(titanic_data)
summary(titanic_data)

nbr_rows <- nrow(titanic_data)

sum(titanic_data["Survived"]) / nrow(titanic_data)

titanic_data$Adult <- titanic_data$Age > 18
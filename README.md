# Naive Bayes Algorithm

In machine learning, naive Bayes classifiers are a family of simple probabilistic classifiers based on applying Bayes' theorem with strong (naive) independence assumptions between the features.

# Probabilistic Model

posterior = prior x likelihood / evidence

|   Weather     |   Transport Method    |
|---------------|-----------------------|
|   Cloudy      |   Car                 |
|   Sunny       |   Bike                |
|   Rainy       |   Car                 |
|   Windy       |   Car                 |
|   Windy       |   Bike                |
|   Sunny       |   Car                 |
|   Windy       |   Car                 |
|   Sunny       |   Bike                |
|   Rainy       |   Car                 |
|   Sunny       |   Car                 |
|   Windy       |   Car                 |


What are the probability that Bob will take choose 'Bike' on a 'Windy' day?

prior = Probability that Bob will choose a Bike on given he does not know the weather.

prior = 3 / 11 = 0.27

likelihood = Probability that Bob will choose a Bike on given he does know it's 'Windy'.

likelihood = 1 / 3 = 0.33

evidence = Probability that is going to be 'Windy'.

evidence = 4 / 11 = 0.36

posterior = prior x likelihood / evidence
posterior = 0.27 x 0.33 / 0.36 = 0.25

# Gaussian naive Bayes

posterior = (1 / sqrt(2 x PI x variance)) x exp((-x - mean) ^ 2 / (2 x variance))





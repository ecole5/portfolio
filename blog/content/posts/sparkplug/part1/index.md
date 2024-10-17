---
title: "SparkPlug Part 1: The Genesis of Big Data Framework"
date: 2020-11-19T03:17:42.000Z
draft: false
summary: "How GeoPredict evolved into a big data framework."
cover:
  image: cover.png #because we are naming url part1 relative name does not work with routing system

---



The world is undergoing a big data revolution- a new age gold rush. Never in the history of human civilization has there been such an abundance of data. Remarkably, however, most of this data goes to waste. Many organizations find themselves today in a situation analogous to sitting on vast reserves of gold-rich ore but not knowing how to extract it. The difficulty with big data lies in both variety and scale. Firstly, there is no perfect cookie-cutter solution. Every data set requires a unique methodology that accounts for its domain-specific features. Secondly, real-world big data implementations must scale across compute clusters to handle massive volume and velocity, thus adding significant complexity.

Having just finished developing GeoPredict, an ML recommender agent for shopping trip prediction, I was familiar with one side of the big data coin. GeoPredict addressed the specificity of the mobility domain, but it did not scale. If GeoPredict were to be of any real value to my partner, it would need to be capable of making near real-time predictions for millions of users simultaneously. To accomplish this in an economically viable way, I knew I needed to enable GeoPredict to scale horizontally across commodity hardware. Also, I needed a way to integrate my solution with my partner's system quickly.

  

**Scaling GeoPredict**

The key to horizontally scaling is to distribute the computation across a cluster.  Luckily many big data engines exist that help abstract away the enormous complexity of designing these parallel applications. After researching my options, I landed on the Spark engine. It offers better performance than modern Hadoop MapReduce and has broad adoption in the industry. Given that I already knew SQL, I implemented GeoPredict as a series of database operations using the SparkSQL library with the PySpark API.

To achieve interoperability, I completely decoupled my system from my partner's by implementing a microservice architecture with a RESTful API. I went ahead and encapsulated different functions of GeoPredict into routes of the API and designed a way to submit each route to the Spark cluster for on-demand computation. 

  

**Towards A Framework**

When I had finished implementing the architecture, I needed a way to make it easy for my partner to deploy the system. I found Spark cluster configuration quite tedious, so I decided to containerize the entire underlying distributed computing architecture with Docker.

After finishing my work and demonstrating the system to my supervisor and partner, I had a revelation.  More so than a way to scale GeoPredict, I had developed an architecture and deployment strategy that could be broadly applied across the industry. I called this framework **SparkPlug**.

To realize the vision of a framework, as opposed to a specific implementation, I developed the SparkPlug CLI. The CLI provides a user-friendly way to build out the SparkPlug architecture and automates the containerized infrastructure's deployment and configuration.

By providing an interoperable architecture and a containerized deployment strategy, SparkPlug makes it possible to bring data solutions to market rapidly. SparkPlug enables data scientists with limited programming experience to create commercial solutions to big data problems.

In the next few articles, we will dive into the details of the three central components of SparkPlug: Architecture, Deployment Strategy and SparkPlug CLI.

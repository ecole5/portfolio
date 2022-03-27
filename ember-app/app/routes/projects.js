import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return [
      {
        title: "GeoPredict",
        pic: ["pandas", "jupyter", "python"],
        body:
          "<p class='card-text'>GeoPredict is a novel recommender system for shopping trip prediction. The system combines shopping history with timely contextual clues to deliver probabilistic forecasts of future movement to commercial locations. GeoPredict is built using specially trained Markov Chains and borrows techniques from many disciplines across the AI landscape.</p><p class='card-text'>GeoPredict was initially developed in Python using the Pandas library and has since been redeveloped using the SparkPlug framework to handle big data and enable interoperability.</p><p class='card-text'>At the request of my partner, the source code remains proprietary. However, I have been cleared to provide a detailed technical rundown of my development process which you may find below.</p>",
      },
      {
        title: "SparkPlug",
        pic: ["docker", "spark", "swarm", "unix", "ec2", "hadoop"],
        body:
          "<p class='card-text'>SparkPlug is a framework for the rapid development and deployment of distributed Spark applications. By providing an interoperable architecture and a containerized deployment strategy SparkPlug makes it possible to rapidly bring data solutions to market without a great deal of programming expertise.</p><p class='card-text'>SparkPlug applications are built and deployed using an easy to use command line interface that provides blueprinting, service management and configuration. SparkPlug applications are implemented with a Microservice Architecture in which big data tasks running on the cluster are exposed via a RESTful API. Through the containerization of the entire architecture (including Spark and Hadoop clusters), SparkPlug enables instant out go the box deployment and easy scaling.</p><p class='card-text'>While the project repository is not available due to an intellectual property agreement further information about SparkPlug and its development can be found below.</p>",
      },
      {
        title: "Unity Minigame Portal",
        pic: ["unity", "csharp", "lamp"],
        body:
          "<p class='card-text'>In this project, I developed a series of mini-games in Unity 3D and built a customizable portal to access them. Undertaken as part of a design course, the development of this application was meant to be a learning experience. It turns out that building game objects are an excellent way to understand object-oriented programming and gain practical exposure to composition, inheritance, and polymorphic reuse. Additionally, I had the opportunity to implement design patterns to optimize/standardize the application architecture.</p><p class='card-text'>Given that this project was a learning experience I decided to take things a step further by extending the requirements and exploring the LAMP stack to implement a web service to achieve cloud capabilities throughout the application.</p>", /**<p class='card-text'>The application was designed to be a standalone application for computers and mobile phones. However, I have rebuilt the application using WebGL for use in your browser. As the application was not optimized for WebGL, please give it a minute or two to load.</p><p class='card-text'>To make an account login to the administrator page using the credentials below and select create user:</p><p class='card-text'>Username: admin</p><p class='card-text'>Password: admin</p> */
        slide: ["1", "2", "3", "4", "5", "6", "7"],
        link: "/ugames/play.html",
      },
    ];
  },
});

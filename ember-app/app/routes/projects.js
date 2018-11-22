import Route from '@ember/routing/route';

export default Route.extend({

    model(){
        return [ {
            title: "GeoPredict",
            pic: ["pandas","jupyter", "python"],
            body: "<p class='card-text'> Data is the primary driver of the digital economy and the world’s most valuable commodity. While it is well understood how to capture and store data from Internet-connected sources, processing it is less clear—lots of data goes to waste. One data set which is particularly difficult to process is geolocation data (a set of GPS coordinates of a user device as it moves through space). Enter GeoPredict, a machine learning model I developed using Pandas during my time as a research associate at Western University. GeoPredict mines value from massive sets of geolocation data collected on a continuous basis bya pplying A.I techniques from the field of natural language processing.</p>",
            first: true
        },{
            title: "Scaling Monster",
            pic: ["docker", "spark", "swarm", "unix", "ec2", "hadoop" ],
            body: "<p class='card-text'>Once I finished my summer research effort (GeoPredict) I wondered how to deploy the modelinto a production environment and make it scale. What I came up with is a framework for deploying scalablerecommender systems built on Spark SQL as web-accessible microservices. Through the use ofcontainerization, the implementation of a restFULL API and sophisticated integrated command-line tooling, Idesigned this framework to be highly usable, portable, customizable and interoperable. The framework ismeant to allow data scientist to focus on building ML models using instead of worrying about managingclusters and dealing with pesky configuration.</p>",
          
        },{
            title: "Unity Minigame Suite",
            pic: ["unity", "csharp", "lamp" ],
            body: "<p class='card-text'>During my second year of study, I was tasked with constructing several mini-games with Unity3D and creating a portal for accessing them with an account system. The system I developed features cloud save and global leader boards built with a primitive LAMP architecture.</p><p class='card-text'>Go ahead and try it out yourself.Please be patient upon initial load. To make an account login as an administrator with user account and password:'admin'. </p>",
            slide: ["1", "2", "3","4","5","6","7"]
        

        }];


        

    }

  
});

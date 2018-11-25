import Route from '@ember/routing/route';

export default Route.extend({

    
    model(){
        return [ {
            title: "GeoPredict",
            description: "This series of blog posts details the development of a novel machine learning solution called GeoPredict. I designed GeoPredict with the intent of leveraging large-scale mobility data in a commercially viable manner.",
            posts: [{
                    title: "Part 1: Origins & Data Exploration",
                    text: "In this segment we explore the origins of this effort and the data itself."
                }


            ]
        
            
        },{
            title: "Predict Engine",
            posts: [
                {
                    title: "Part 1",
                    text: "Part 2 conent"

                },{
                    title: "Part 1",
                    text: "Part 2 conent"
                }
            ]
        }];
        

        


        

    }
});

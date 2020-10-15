import Route from "@ember/routing/route";
import RSVP from "rsvp";

export default Route.extend({
  model(params) {

   
  
    var links = this.store.findAll('series-ad').then(function(allSeries){
      var tmp = [];
      allSeries.forEach(function(item){
        if (item.series === params.series_id){
          tmp.push(item.slug);
        }

      });
      return tmp;

    });



  return RSVP.hash({
    post: this.store.findRecord("series-post", params.post_slug),
    links: links,
    series_name: params.series_id,
    slug: params.post_slug
  });
 
  },
});

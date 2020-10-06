import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
    model(params) {

        var allSeries = this.modelFor("projects");


        var currentSeries;
        var links = [];
        var currentPost;
        var i;

        for (i = 0; i < allSeries.length; i++) {
            if (params.series_id == allSeries[i].title) {
                currentSeries = allSeries[i]; //pick the correct series
            }
        }


        for (i = 0; i < currentSeries.posts.length; i++) {
            if (params.post_id == currentSeries.posts[i].title) {
                currentPost = currentSeries.posts[i]; //pick the correct post from the series

            }
            links.push(currentSeries.posts[i].title);


        }
      
        return RSVP.hash({
            post: currentPost,
            links: links,
            series_name: currentSeries.title
        });
    }
});

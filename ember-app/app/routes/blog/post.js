import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
    model(params) {

        var allPosts = this.modelFor("blog");



        var currentPost;
        var i;

        for (i = 0; i < allPosts.length; i++) {
            if (params.post_id == allPosts[i].title) {
                currentPost = allPosts[i]; //pick the correct series
            }
        }
      
        return RSVP.hash({
            this_post:currentPost
        });
    }
});

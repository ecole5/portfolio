import Route from '@ember/routing/route';


export default Route.extend({
    model(params) {
        return this.store.findRecord('post',params.post_slug+'-post'); //use the -post as a convention, posts need custom slug name so they dont get confused with their ads

       
    }
});

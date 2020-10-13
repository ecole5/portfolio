import Route from "@ember/routing/route";

export default Route.extend({
  model(params) {
    return this.store.findRecord("post", params.post_slug); //-post is added in adapter
  },
});

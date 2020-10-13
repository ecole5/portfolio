import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,

  didTransition() {
    this._super(...arguments);
    window.scrollTo(0, 0);
  },
});

Router.map(function () {
  this.route("projects", function () {
    this.route("post", { path: "/:series_id/:post_slug" });
  });
  this.route("blog", function () {
    this.route("post", { path: "/:post_slug" });
  });
  this.route("about");
});

export default Router;

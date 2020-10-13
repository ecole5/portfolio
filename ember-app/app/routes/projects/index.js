import Route from "@ember/routing/route";
import RSVP from "rsvp";

export default Route.extend({
  model() {
    return RSVP.hash({
      projects: this.modelFor("projects"),
      ads: this.store.findAll("series-ad"),
    });
  },
});

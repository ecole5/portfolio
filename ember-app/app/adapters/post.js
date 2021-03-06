import DS from "ember-data";

export default DS.RESTAdapter.extend({
  host: "https://api.cosmicjs.com/v1/ce7e3a20-0a5c-11eb-b431-097e35ea4704", //add in bucket id

  urlForFindRecord(slug) {
    return (
      this.buildURL() +
      "/object/" +
      slug +
      "-post" + //all the slugs for post have -post because the system wants each object to have a unique slug
      "?read_key=BBENvDAhP5Kc39vFpvO5jZCHA09vSjVz1aKodtTCkHJPJIlsdR"
    );
  },
});

import DS from "ember-data";

export default DS.RESTAdapter.extend({
  host: "https://api.cosmicjs.com/v1/ce7e3a20-0a5c-11eb-b431-097e35ea4704", //add in bucket id

  urlForFindAll(modelName) {
    return (
      this.buildURL() +
      "/object-type/" +
      modelName + //ember does not like camel case and will only use dashes. path for type tries to convert dash to camel, but we are going to match the dash because cosmic does not like capitlas in slugs
      "s" +
      "?read_key=BBENvDAhP5Kc39vFpvO5jZCHA09vSjVz1aKodtTCkHJPJIlsdR"
    );
  },
});

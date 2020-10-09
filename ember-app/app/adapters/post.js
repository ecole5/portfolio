import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'https://api.cosmicjs.com/v1/ce7e3a20-0a5c-11eb-b431-097e35ea4704',  //add in bucket id 

    urlForFindAll(modelName, snapshot) {
      let path = this.pathForType(modelName);
     
      return this.buildURL() + '/object-type/' + path + '?read_key=BBENvDAhP5Kc39vFpvO5jZCHA09vSjVz1aKodtTCkHJPJIlsdR';
    },
    urlForQueryRecord(slug) {
       
      return this.buildURL() + '/object/' + slug + '?read_key=BBENvDAhP5Kc39vFpvO5jZCHA09vSjVz1aKodtTCkHJPJIlsdR';
    }
    //The effect is that every time we query the Data Store for Listings, we tell Ember to fetch them from the response at https://api.cosmicjs.com/v1/cosmic-real-esate/object-type/listingor https://api.cosmicjs.com/v1/cosmic-real-esate\object\listing-slug, depending on whether we're retrieving a single listing or multiple.

});

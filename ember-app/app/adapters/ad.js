import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'https://api.cosmicjs.com/v1/ce7e3a20-0a5c-11eb-b431-097e35ea4704',  //add in bucket id 

    urlForFindAll(modelName) {
        let path = this.pathForType(modelName);
       
        return this.buildURL() + '/object-type/' + path + '?read_key=BBENvDAhP5Kc39vFpvO5jZCHA09vSjVz1aKodtTCkHJPJIlsdR';
      }
});

import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    pic: DS.attr(),
    content: DS.attr(),
    slug: DS.attr(),
    date: DS.attr()

});

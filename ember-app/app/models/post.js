import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    date_modified: DS.attr(),
    date_published: DS.attr(),
    content: DS.attr()

});

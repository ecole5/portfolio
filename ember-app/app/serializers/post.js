import DS from 'ember-data';


    function buildNormalizePost(source) {
        return {
          id: source._id,
          content: source.content,
          title: source.title,
          date_published: source.created_at,
          date_modified: source.modified_at
          
        }
      }
export default DS.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        if (payload.objects) {
          let normalizedPosts = payload.objects.map(function(post) {
            return buildNormalizePost(post)
          });
          payload = {
            posts: normalizedPosts
          };
        } else {
          let normalizedPost = buildNormalizePost(payload.object);
          payload = {
            post: normalizedPost
          }
        }
        return this._super(store, primaryModelClass, payload, id, requestType);
    
      }

});

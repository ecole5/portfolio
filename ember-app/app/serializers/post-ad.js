import DS from 'ember-data';


function buildNormalizePostAd(source) {
    return {
      id: source._id,
      slug: source.slug,
      content: source.content,
      title: source.title,
      pic: source.metadata.pic,
    }
  }
export default DS.RESTSerializer.extend({
normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    if (payload.objects) {
      let normalizedPostAds = payload.objects.map(function(postAd) {
        return buildNormalizePostAd(post)
      });
      payload = {
        postAds: normalizedPostAds
      };
    } else {
      let normalizedPostAd = buildNormalizePostAd(payload.object);
      payload = {
        postAd: normalizedPostAd
      }
    }
    return this._super(store, primaryModelClass, payload, id, requestType);

  }

});

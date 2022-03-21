import DS from 'ember-data';


function buildNormalizeAd(source) {
    return {
      id: source._id,
      slug: source.slug,
      content: source.content,
      title: source.title,
      pic: source.thumbnail,
      date: source.metadata.date,
    }
  }
export default DS.RESTSerializer.extend({
normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    if (payload.objects) {
      let normalizedAds = payload.objects.map(function(ad) {
        return buildNormalizeAd(ad)
      });
      payload = {
        ads: normalizedAds
      };
    } else {
      let normalizedAd = buildNormalizeAd(payload.object);
      payload = {
        ad: normalizedAd
      }
    }
    return this._super(store, primaryModelClass, payload, id, requestType);

  }

});

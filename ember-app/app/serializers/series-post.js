import DS from "ember-data";

function buildNormalizeAd(source) {
  return {
    id: source._id,
    slug: source.slug,
    content: source.content,
    title: source.title,
    series: source.series,
  };
}
export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    if (payload.objects) {
      let normalizedAds = payload.objects.map(function (ad) {
        return buildNormalizeAd(ad);
      });
      payload = {
        seriesPosts: normalizedAds,
      };
    } else {
      let normalizedAd = buildNormalizeAd(payload.object);
      payload = {
        seriesPost: normalizedAd,
      };
    }
    return this._super(store, primaryModelClass, payload, id, requestType);
  },
});

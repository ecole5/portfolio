import DS from "ember-data";

function buildNormalizeSeriesAd(source) {
  return {
    //Change this per the model
    id: source._id,
    slug: source.slug,
    content: source.content,
    title: source.title,
    series: source.metadata.series,
    pic: source.thumbnail,
  };
}
export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    if (payload.objects) {
      let normalizedSeriesAds = payload.objects.map(function (ad) {
        return buildNormalizeSeriesAd(ad);
      });

      //change payload names for model
      payload = {
        seriesAds: normalizedSeriesAds, //the dash becomes camel case becasue you cant use dash in js file. series-ads -> seriesADS
      };
    } else {
      let normalizedSeriesAd = buildNormalizeSeriesAd(payload.object);
      payload = {
        seriesAd: normalizedSeriesAd, //the dash becomes camel case becasue you cant use dash in js file. series-ads -> seriesADS
      };
    }
    return this._super(store, primaryModelClass, payload, id, requestType);
  },
});

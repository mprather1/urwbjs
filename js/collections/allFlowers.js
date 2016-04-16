var app = app || {};

app.FlowersCollection = Backbone.Collection.extend({
  model: app.singleFlower

});

app.EuropeanFlowers = Backbone.Collection.extend({
  model: app.singleFlower
});

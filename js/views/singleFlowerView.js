//Namespace
var app = app || {};

//single model view
app.singleFlowerView = Backbone.View.extend({

  tagName: "article",
  className: "flowerListItem",

  template: _.template( $("#flowerElement").html() ),

  render: function() {
    var flowerTemplate = this.template(this.model.toJSON());
    this.$el.html(flowerTemplate);
    return this;
  },

  events: {
    'mouseover .root': 'addBgColor',
    'mouseout. .root': 'removeBgColor'
  },

  addBgColor: function() {
    this.$el.addBgColor("bgColorImage");
  },

  removeBgColor: function() {
    this.$el.removeBgColor("bgColorImage");
  }

});

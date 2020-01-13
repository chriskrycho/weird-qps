import Route from "@ember/routing/route";

export default Route.extend({
  queryParams: {
    quux: {
      refreshModel: true
    }
  },

  beforeModel() {
    this._super(...arguments);
    console.log("beforeModel");
  },

  model() {
    this._super(...arguments);
    console.log("model");
  },

  afterModel() {
    this._super(...arguments);
    console.log("afterModel");
  }
});

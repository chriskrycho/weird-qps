import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  queryParams: ["foo", "bar", "quux"],
  foo: true,
  bar: undefined,
  quux: [],

  router: service(),

  actions: {
    changeFoo(newValue) {
      this.router.transitionTo("application", {
        queryParams: { foo: newValue }
      });
    },

    changeBar(newValue) {
      this.router.transitionTo("application", {
        queryParams: { bar: newValue }
      });
    },

    changeQuux(newValue) {
      this.router.transitionTo("application", {
        queryParams: { quux: newValue }
      });
    },

    goEmpty() {
      this.router.transitionTo("application", {
        queryParams: {
          foo: true,
          bar: undefined,
          quux: []
        }
      });
    }
  }
});

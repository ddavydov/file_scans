(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  application.module("core", function(module, application, Backbone, Marionette, $, _) {
    var MainRouter, _ref;
    module.views = {};
    module.models = {};
    module.collections = {};
    MainRouter = (function(_super) {
      __extends(MainRouter, _super);

      function MainRouter() {
        _ref = MainRouter.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      MainRouter.prototype.appRoutes = {
        "": "home"
      };

      return MainRouter;

    })(Backbone.Marionette.AppRouter);
    return application.addInitializer(function() {
      return module.router = new MainRouter({
        controller: {
          home: function() {
            return application.contentRegion.show(new module.views.Logs());
          }
        }
      });
    });
  });

}).call(this);

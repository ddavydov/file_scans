(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  application.module("core", function(module, application, Backbone, Marionette, $, _) {
    var _ref;
    return module.collections.Logs = (function(_super) {
      __extends(Logs, _super);

      function Logs() {
        _ref = Logs.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Logs.prototype.url = '/logs';

      Logs.prototype.model = module.models.Log;

      Logs.prototype.fetchData = function(options) {
        var defaults;
        defaults = {
          data: {},
          update: true
        };
        options = _.extend({}, defaults, options);
        _.each(this.models, function(model) {
          return options.data[model.attributes.name] = model.attributes.count;
        });
        return this.fetch(options);
      };

      return Logs;

    })(Backbone.Collection);
  });

}).call(this);

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  application.module("core", function(module, application, Backbone, Marionette, $, _) {
    var _ref;
    return module.models.Log = (function(_super) {
      __extends(Log, _super);

      function Log() {
        _ref = Log.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Log.prototype.idAttribute = 'name';

      Log.prototype.defaults = {
        count: 0,
        data: '',
        name: null
      };

      return Log;

    })(Backbone.Model);
  });

}).call(this);

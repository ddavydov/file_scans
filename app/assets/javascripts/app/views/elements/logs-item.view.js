(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  application.module('core', function(module, application, Backbone, Marionette, $, _) {
    var _ref;
    return module.views.LogsItem = (function(_super) {
      __extends(LogsItem, _super);

      function LogsItem() {
        _ref = LogsItem.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      LogsItem.prototype.template = '/assets/app/templates/elements/logs-item.html';

      LogsItem.prototype.initialize = function(options) {
        return this.model.bind('change', this.onLogModelChange, this);
      };

      LogsItem.prototype.onLogModelChange = function() {
        if (!_.isEmpty(this.model.attributes.data.trim())) {
          this.$el.find('pre').append(this.model.attributes.data);
          return this.$el.find('.log-content').scrollTop(this.el.scrollHeight);
        }
      };

      return LogsItem;

    })(Backbone.Marionette.ItemView);
  });

}).call(this);

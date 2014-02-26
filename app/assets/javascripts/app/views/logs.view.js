(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  application.module('core', function(module, application, Backbone, Marionette, $, _) {
    var _ref;
    return module.views.Logs = (function(_super) {
      __extends(Logs, _super);

      function Logs() {
        _ref = Logs.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Logs.prototype.itemView = module.views.LogsItem;

      Logs.prototype.template = '/assets/app/templates/logs.html';

      Logs.prototype.alignRight = 'db';

      Logs.prototype.className = 'clear';

      Logs.prototype.initialize = function() {
        return this.collection = new module.collections.Logs();
      };

      Logs.prototype.appendHtml = function(collectionView, itemView) {
        if (itemView.model.attributes.name === this.alignRight) {
          return collectionView.$el.find('#rightContent').append(itemView.el);
        } else {
          return collectionView.$el.find('#leftContent').append(itemView.el);
        }
      };

      Logs.prototype.onShow = function() {
        var self;
        self = this;
        self.collection.fetch();
        return setInterval(function() {
          return self.collection.fetchData();
        }, 1000);
      };

      return Logs;

    })(Backbone.Marionette.CompositeView);
  });

}).call(this);

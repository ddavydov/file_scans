(function() {
  var application;

  Backbone.Marionette.TemplateCache.prototype.loadTemplate = function(templateId) {
    var err, msg, template, that, url;
    that = this;
    if (templateId && templateId.length) {
      url = templateId;
      template = '';
      $.ajax({
        url: url,
        async: false,
        success: function(response) {
          return template = response;
        }
      });
    }
    if (!template || template.length === 0) {
      msg = "Could not find template: '" + templateId + "'";
      err = new Error(msg);
      err.name = "NoTemplateError";
      throw err;
    }
    return template;
  };

  application = new Backbone.Marionette.Application();

  application.addRegions({
    contentRegion: "#content"
  });

  application.on("initialize:after", function() {
    return Backbone.history.start({
      pushState: true
    });
  });

  window.application = application;

}).call(this);

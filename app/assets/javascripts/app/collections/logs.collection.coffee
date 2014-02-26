application.module "core", (module, application, Backbone, Marionette, $, _) ->
  class module.collections.Logs extends Backbone.Collection
    url: '/logs'
    model: module.models.Log

    fetchData: (options) ->
      defaults = data: {}, update: true
      options = _.extend {}, defaults, options

      _.each @models, (model) ->
        options.data[model.attributes.name] = model.attributes.count

      @fetch(options)
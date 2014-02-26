application.module "core", (module, application, Backbone, Marionette, $, _) ->
  class module.models.Log extends Backbone.Model
    idAttribute: 'name'
    defaults:
      count: 0
      data: ''
      name: null
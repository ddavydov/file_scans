application.module "core", (module, application, Backbone, Marionette, $, _) ->
  #setup holder for module views, models, and collection classes
  module.views = {}
  module.models = {}
  module.collections = {}
  class MainRouter extends Backbone.Marionette.AppRouter
    appRoutes:
      "": "home"

  application.addInitializer ->
    module.router = new MainRouter
      controller:
        home: ->
          application.contentRegion.show new module.views.Logs()
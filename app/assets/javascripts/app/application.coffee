Backbone.Marionette.TemplateCache.prototype.loadTemplate = (templateId) ->
  that = this;

  if templateId && templateId.length
    url = templateId
    template = ''

    $.ajax
      url: url
      async: false
      success: (response) ->
        template = response

  if !template or template.length is 0
    msg = "Could not find template: '" + templateId + "'"
    err = new Error(msg)
    err.name = "NoTemplateError"
    throw err

  return template

application = new Backbone.Marionette.Application()

application.addRegions
  contentRegion: "#content"

application.on "initialize:after", ->
    Backbone.history.start
      pushState: true

window.application = application

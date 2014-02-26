application.module 'core', (module, application, Backbone, Marionette, $, _) ->
  class module.views.LogsItem extends Backbone.Marionette.ItemView
    template: '/assets/app/templates/elements/logs-item.html'

    initialize: (options) ->
      @model.bind 'change', @onLogModelChange, @

    onLogModelChange: ->
      if !_.isEmpty(@model.attributes.data.trim())
        @$el.find('pre').append(@model.attributes.data)
        @$el.find('.log-content').scrollTop(@el.scrollHeight)
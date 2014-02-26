application.module 'core', (module, application, Backbone, Marionette, $, _) ->
  class module.views.Logs extends Backbone.Marionette.CompositeView
    itemView: module.views.LogsItem
    template: '/assets/app/templates/logs.html'
    alignRight: 'db'
    className: 'clear'

    initialize: ->
      @collection = new module.collections.Logs()

    appendHtml: (collectionView, itemView) ->
      if itemView.model.attributes.name is @alignRight
        collectionView.$el.find('#rightContent').append(itemView.el)
      else
        collectionView.$el.find('#leftContent').append(itemView.el)

    onShow: ->
      self = @
      self.collection.fetch()
      setInterval ->
        self.collection.fetchData()
      , 1000
'use strict';

Omihasi.TvshowsController = Ember.ArrayController.extend({
    actions: {
        createTvshow: function () {
            var name = this.get('newShow');

            if (!name.trim()) {
                return;
            }

            var tvshow = this.store.createRecord('tvshow', {
                name: name,
                season: 1,
                episode: 1,
                currentlyWatching: false
            });

            this.set('newShow', '');

            tvshow.save();
        },

        sortBy: function (sortProperties) {
            this.set('sortProperties', [sortProperties]);
        }
    },

    countWatching: function () {
        return this.filterBy('currentlyWatching', true).get('length');
    }.property('@each.currentlyWatching'),

    countAll: function () {
        return this.filterBy('currentlyWatching', true).get('length') +
            this.filterBy('currentlyWatching', false).get('length');
    }.property('@each.currentlyWatching')
});

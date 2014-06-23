'use strict';

Omihasi.Router.map(function () {
    this.resource('tvshows', { path: '/' }, function () {
        this.route('watching');
    });
});

Omihasi.TvshowsRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('tvshow');
    }
});

Omihasi.TvshowsIndexRoute = Ember.Route.extend({
    model: function () {
        return this.modelFor('tvshows');
    }
});

Omihasi.TvshowsWatchingRoute = Ember.Route.extend({
    model: function () {
        return this.store.filter('tvshow', function (tvshow) {
            return tvshow.get('currentlyWatching');
        });
    },
    renderTemplate: function (controller) {
        this.render('tvshows/index', { controller: controller });
    }
});

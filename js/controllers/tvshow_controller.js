'use strict';

Omihasi.TvshowController = Ember.ObjectController.extend({
    actions: {
        removeShow: function () {
            var show = this.get('model');
            show.deleteRecord();
            show.save();
        },
        decreaseSeason: function () {
            var show = this.get('model');
            var currentSeasonNumber = show.get('season');

            // Only decrease if the season number is not high enough
            // Don't allow 0 or negative values
            if (currentSeasonNumber > 1) {
                show.set('season',  currentSeasonNumber - 1);
                show.save();
            }
        },
        increaseSeason: function () {
            var show = this.get('model');
            var currentSeasonNumber = show.get('season');

            show.set('season', currentSeasonNumber + 1);
            show.save();
        },
        decreaseEpisode: function () {
            var show = this.get('model');
            var currentEpisodeNumber = show.get('episode');

            // Only decrease if the episode number is not high enough
            // Don't allow 0 or negative values
            if (currentEpisodeNumber > 1) {
                show.set('episode',  currentEpisodeNumber - 1);
                show.save();
            }
        },
        increaseEpisode: function () {
            var show = this.get('model');
            var currentEpisodeNumber = show.get('episode');

            show.set('episode', currentEpisodeNumber + 1);
            show.save();
        }
    },
    currentlyWatching: function (key, value) {
        var model = this.get('model');

        if (value === undefined) {
            // property being used as a getter
            return model.get('currentlyWatching');
        } else {
            // property being used as a setter
            model.set('currentlyWatching', value);
            model.save();
            return value;
        }
    }.property('model.currentlyWatching')
});

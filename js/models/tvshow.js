'use strict';

Omihasi.Tvshow = DS.Model.extend({
    name: DS.attr('string'),
    season: DS.attr('number'),
    episode: DS.attr('number'),
    currentlyWatching: DS.attr('boolean')
});

Omihasi.Tvshow.FIXTURES = [
    {
        id: 1,
        name: 'How I Met Your Mother',
        season: 9,
        episode: 11,
        currentlyWatching: true
    },
    {
        id: 2,
        name: 'The Walking Dead',
        season: 4,
        episode: 10,
        currentlyWatching: false
    },
    {
        id: 3,
        name: 'Game Of Thrones',
        season: 4,
        episode: 1,
        currentlyWatching: false
    }
];

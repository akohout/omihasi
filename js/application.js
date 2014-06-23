'use strict';

window.Omihasi = Ember.Application.create();

Omihasi.ApplicationAdapter = DS.LSAdapter.extend({
    namespace: 'omihasi'
});

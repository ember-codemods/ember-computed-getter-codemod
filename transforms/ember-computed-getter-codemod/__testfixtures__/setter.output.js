Ember.Object.extend({
    dateFilterEnd: computed({
        get(key) {
            return "myComputed";
        },

        set(key, value) {
            key = value;
        }
    })
});

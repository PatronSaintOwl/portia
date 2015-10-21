import Ember from 'ember';

export const ICON_CLASSES = {
    date: 'fa fa-calendar',
    geopoint: 'fa fa-map-marker',
    image: 'fa fa-picture-o',
    list: 'fa fa-list',
    number: 'portia-icon portia-icon-number',
    price: 'fa fa-dollar',
    'raw html': 'fa fa-code',
    'safe html': 'portia-icon portia-icon-safe-html',
    sample: 'fa fa-file',
    schema: 'fa fa-database',
    spider: 'portia-icon portia-icon-spider',
    structure: 'fa fa-sitemap',
    text: 'portia-icon portia-icon-text',
    url: 'fa fa-globe'
};

export default Ember.Component.extend({
    classNames: ['structure-list-item'],

    iconClasses: Ember.computed('icon', function() {
        var icon = this.get('icon');
        return ICON_CLASSES[icon] || 'fa';
    }),

    actions: {
        addClicked() {
            if (this.attrs.add && !this.get('addDisabled')) {
                this.attrs.add();
            }
        },

        removeClicked() {
            if (this.attrs.remove && !this.get('removeDisabled')) {
                this.attrs.remove();
            }
        }
    }
});
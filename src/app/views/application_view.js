import Backbone from 'backbone';
import $ from 'jquery';


import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';

const ApplicationView = Backbone.View.extend({
  initialize: function() {
    this.render();

    var body = $('body');
    body.on('click', this.hideModalHandler);
  },

  render: function() {
    return this;
  },

  hideModalHandler: function(event) {
    console.log("hideModal Handler called!");
    $('#contact-details').hide();
  }

});

export default ApplicationView;

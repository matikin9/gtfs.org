var main = function() {

  $('.anchor-row').click(function() {
    window.location = '#' + this.id;
  });

  $('.system-tag-button').click(function(e) {

    // if button is highlighted
    // turn off highlighting
    if ($(this).hasClass('highlight')) {
      $(this).removeClass('highlight');
      $('tr').removeClass('highlight');
    } else {

      // remove all active classes from all rows
      $('tr').removeClass('highlight');
      // remove highlight from buttons
      $('.system-tag-button').removeClass('highlight');
      // add active class to all rows with the class of the button id
      $("." + e.target.id).addClass('highlight');
      // add highlight to button
      $(this).addClass('highlight');
    }
  });

}

$(document).ready(main);

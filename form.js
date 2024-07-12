'use strict'

function collapse_help() {
  var help_message = $( '.form-text.text-muted' );
  $.each(help_message, function(index) {
    var form_label = $( '.form-group label' )[index];
    var help_text = $( this ).html();
    var new_help = $( `<div class="card border-dark mb-2" aria-expanded="false" role="button" data-target=#help_message_${index} aria-controls=help_message_${index} data-toggle="collapse"><div class="card-header"><button type="button" class="btn btn-outline-secondary py-0 px-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/></button> ${form_label.textContent}</div><div class="collapse" id=help_message_${index}><div class="card-body text-dark" aria-expanded="false"><p class="card-text"><small class="form-text text-muted">${help_text}</small></p></div></div></div>` );
    new_help.insertBefore(form_label);
    form_label.textContent = '';
    form_label.hidden = 'true'
    $( this ).remove();
  });
};

/**
 *  Install event handlers
 */
$(document).ready(function() {
  collapse_help();
  $(function () {
    $('[data-toggle="tooltip"]').tooltip({'boundary': $("body")});
  });
});

$(document.links).filter(function() {
    return this.hostname != window.location.hostname;
}).attr('target', '_blank');

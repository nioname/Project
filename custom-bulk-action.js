jQuery(document).ready(function($) {
    console.log('Adding custom bulk action');
    jQuery('<option>').val('send_to_optimum').text('Send to Optimum').appendTo("select[name='action']");
    jQuery('<option>').val('send_to_optimum').text('Send to Optimum').appendTo("select[name='action2']");
    console.log('Custom bulk action added');
});

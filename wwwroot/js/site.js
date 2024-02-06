// Calculator function to find out the estimated cost for soccer tutoring
$('#calculate-cost-btn').click(function () {
    // If the value entered is a number that is above or equal to tutoring, show the cost. If not, ask for valid input
    if ($.isNumeric($('#hours-input').val()) && ($('#hours-input').val() >= 0)) {
        var cost = Math.round(($('#hours-input').val() * 20));
        $('#cost-output').html('$' + cost + ' is your estimated cost for ' + $('#hours-input').val() +
            ($('#hours-input').val() == 1 ? ' hour' : ' hours') + ' of soccer tutoring.');
    }
    else { $('#cost-output').html('Please enter a valid positive number'); }
});

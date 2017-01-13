$(document).ready(function() {
    var nextCount = 0;
    var pair;
    var location;
    var dev;
    var size;
    var date;

    $('.btn-primary').click(function() {
        $('.initial, .pair, .location, .dev, .size, .date').hide();
        if (nextCount === 0) {
            $('.pair').show();
        } else if (nextCount === 1) {
            pair = $("input:radio[name=pair]:checked").val();
            if (pair === "Yes") {
                $('.location').show();
            } else {
                $('.bad').show();
            }
        } else if(nextCount === 2) {
            location = $("input:radio[name=location]:checked").val();
            $('.dev').show();
        } else if (nextCount === 3) {
            dev = $("input:radio[name=dev]:checked").val();
            $('.size').show();
        } else {
            size = $("input:radio[name=size]:checked").val();
            $('.date').show();
            $('.btn-primary').hide();
            $('.btn-success').show();
        }

        nextCount++;
    });

});

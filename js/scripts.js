$(document).ready(function() {
    var nextCount = 0;
    var pair;
    var location;
    var dev;
    var size;
    var date;

    $('.btn-primary').click(function() {
        $('.pair, .location, .dev, .size, .date').hide();
        if (nextCount === 0) {
            $('.pair').slideDown();
            $('.btn-primary').text("Next");
        } else if (nextCount === 1) {
            pair = $("input:radio[name=pair]:checked").val();
            if (pair === "Yes") {
                $('.location').slideDown();
            } else {
                $('.bad').slideDown();
            }
        } else if(nextCount === 2) {
            location = $("input:radio[name=location]:checked").val();
            $('.dev').slideDown();
        } else if (nextCount === 3) {
            dev = $("input:radio[name=dev]:checked").val();
            $('.size').slideDown();
        } else {
            size = $("input:radio[name=size]:checked").val();
            $('.date').slideDown();
            $('.btn-primary').hide();
            $('.btn-success').show();
        }

        nextCount++;
    });

    $('form').submit(function (event) {
        console.log('test')
        event.preventDefault();
        date = $("input:radio[name=date]:checked").val();
        $('.trackRes').show();
        $('.btn-success').hide();
        $('.date').hide();
        $('.locationAns').text(location);

        if (location === "Seattle") {

            if (size === "Established") {
                $('.trackAns').text("Php");
                $('.dateAns').text("February");
            } else {
                $('.trackAns').text('Ruby');
                $('.dateAns').text('March');
            }
        } else {
            $('.locationAns').text(location);
            if (dev === 'Design') {
                $('.trackAns').text('CSS/Design');
                $('.dateAns').text('April');
            } else if (dev === 'Mobile') {
                $('.trackAns').text('Java/Android');
                $('.dateAns').text('February');
            } else {
                if (size === 'Established') {
                    $('.trackAns').text('C#/.Net');
                    $('.dateAns').text('april')
                } else {
                    $('.trackAns').text('Ruby');
                    $('.dateAns').text('March')
                }
            }
        }


    });
});

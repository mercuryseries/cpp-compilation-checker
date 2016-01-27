function flashy(message, link) {
    var template = $($("#flashy-template").html());
    $(".flashy").remove();
    template.find(".flashy__body").html(message).attr("href", link || "#").end()
     .appendTo("body").hide().fadeIn(300).delay(2800).animate({
        marginTop: "-100%"
    }, 300, "swing", function() {
        $(this).remove();
    });
}
function showRight() {
    if (window.screen.height == 568 || window.screen.height == 480 || window.screen.height == 1024
        || window.screen.height == 667) {
        $("#temp").css('display', 'inline-block');
    }
    $("#sideLayout").animate({left: '0%'}, "1000");
    $(document.body).css('overflowY', 'hidden');
}

function operateMenu() {
    if ($("#sideLayout").css('left') == "0%"
        || $("#sideLayout").css('left') == "0"
        || $("#sideLayout").css('left') == "0px") {
        hideRight();
    } else {
        showRight();
    }
}

function hideRight() {
    $("#sideLayout").animate({left: '100%'}, "1000");
    if (window.screen.height == 568 || window.screen.height == 480 || window.screen.height == 1024
        || window.screen.height == 667) {
        $("#temp").css('display', 'none');
    }
    $(document.body).css('overflowY', 'auto');
}
console.log('href='+window.location.href);

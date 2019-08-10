function handleClickBio() {
    $(".bioLink").on("click", function (event) {
        $(".bioPage").css("display", "block");
        $(".projects").hide();
        $(".homePage").hide();
        $(".contactInfo").hide();

    })

}



function handleClickPortfolio() {
    $(".portfolio").on("click", function (event) {
        $(".projects").css("display", "block");
        $(".homePage").hide();
        $(".contactInfo").hide();
        $(".bioPage").hide();
    })

}


function handleClickHome() {
    $(".home").on("click", function (event) {
        $(".homePage").show();
        $(".projects").hide();
        $(".bioPage").hide();
        $(".contactInfo").hide();
    })

}


function handleClickContact() {
    $(".contact").on("click", function (event) {
        $(".homePage").hide();
        $(".projects").hide();
        $(".bioPage").hide();
        $(".contactInfo").css("display", "block");
    })

}



function portfolio() {
    handleClickBio();
    handleClickPortfolio();
    handleClickHome();
    handleClickContact();

}
$(portfolio);
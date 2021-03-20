//Run this function any time a navgroup or Go Back is clicked.
function buttonClickHandler(clicked){
    toggleNavGroups();

    //show/hide the appropriate container
    if(clicked === 'aboutMeEl'){
        showAboutMe();
    }
    else if(clicked === 'myWorkEl'){
        showMyWork();
    }
    else if(clicked=== 'contactEl'){
        showContact();
    }
};

function toggleNavGroups(){
    //toggle state of navgroups
    $("#navgroups").animate({
        opacity: 1,
        left: "+=50",
        height: "toggle"
    }, 1000
    
    );
    hideContentActive();
};

function showAboutMe(){
        //toggle state of navgroups
        $("#about-me").show("slow")
};

function showMyWork(){
    //toggle state of navgroups
    $("#my-work").animate({
        opacity: 1,
        left: "+=50",
        height: "toggle"
    }, 1000
)};

function showContact(){
    //toggle state of navgroups
    $("#contact-me").animate({
        opacity: 1,
        left: "+=50",
        height: "toggle"
    }, 1000
)};

function hideContentInitial(){
    $("#about-me").hide();
    $("#my-work").hide();
    $("#contact-me").hide();
};

function hideContentActive(){
    $("#about-me").hide("slow");
    $("#my-work").hide("slow");
    $("#contact-me").hide("slow");
}


//Event listeners
$("#aboutMeEl").on( "click", function(event){
    var clicked = 'aboutMeEl'
    event.preventDefault();
    buttonClickHandler(clicked);
});
$("#myWorkEl").on("click", function(event){
    var clicked = 'myWorkEl'
    event.preventDefault();
    buttonClickHandler(clicked);
});

$("#contactEl").on("click", function(event){
    var clicked = 'contactEl'
    event.preventDefault();
    buttonClickHandler(clicked);
});

$(".goBack").on("click", function(event){
    event.preventDefault();
    buttonClickHandler();
})

hideContentInitial();
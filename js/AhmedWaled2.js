
/*
    ==================================================
    │  1- Login User And Register User  (_!**!_)     │
    ==================================================
*/


let closePopup = document.querySelector(".close-popup"),
    loginPopup = document.querySelector(".popup"),
    btnRegister = document.querySelector(".register-user"),
    btnLogin = document.querySelector(".login-user"),
    btnSignUp = document.querySelector(".register-user-account button"),
    inp1 = document.querySelector("#username"),
    inp2 = document.querySelector("#email"),
    inp3 = document.querySelector("#pw"),
    inp4 = document.querySelector("#re-pw"),
    divHave = document.querySelector(".login-popup");

    btnSignUp.onclick = function () {

        if(inp1.value == "" || inp2.value == "" || inp3.value == "" || inp4.value == ""){
            alert("Write Information");
        }else {
            btnRegister.remove();
            btnLogin.remove();
            divHave.innerHTML = "<a class='register-user'>Hellow " + inp1.value  + "</a>";
        }

    }

btnRegister.onclick = _ => {
    closePopup.style.display = "block";
    loginPopup.style.display = "block";
}

closePopup.onclick = _ => {
    closePopup.style.display = "none";
    loginPopup.style.display = "none";
}

btnLogin.onclick = _ => {
    closePopup.style.display = "block";
    loginPopup.style.display = "block";
}



/*
    ===========================================
    │  2- settingIcon      (_!**!_)           │
    ===========================================
*/

let settingIcon = document.querySelector("#settingIcon"),
    menu = document.querySelector(".menu"),
    animtionNone = document.querySelector(".an-n"),
    menr = document.querySelector("#menuNone"),
    divNone = document.querySelector(".have-none");

    settingIcon.onclick = _ => {
        menu.style.right             = "0" ;
        settingIcon.style.right      = "20rem" ;
        animtionNone.style.animation = "none" ;
        menr.style.display           = "block"  ;
    };

    menr.onclick = _ => {
        menu.style.right             = "-20rem" ;
        settingIcon.style.right      = "0"  ;
        animtionNone.style.animation = "rotateIcon 2s infinite linear" ;
        menr.style.display           = "none"  ;
    };




/*
    =================================================================
    │ 5- massage with arrow function Es6 Javascript    (_!**!_)     │
    =================================================================
*/

let btnSentMsg  = document.querySelector("#sent-msg"),
    msgPeapole  = document.querySelector("#msg-peapole"),
    divMsgShow  = document.querySelector(".massage"),
    msgTop      = document.querySelector(".msgbox-in-top");
    closeMsgTop = document.querySelector(".msgbox-in-top span")

    divMsgShow.onclick = _ => msgTop.style.top = "0";
    
    closeMsgTop.onclick = _ => msgTop.style.top = "-100%";


/*
    ==========================
    │ jquery    (_!**!_)     │
    ==========================
*/

    $(document).ready(function(){

        $(window).scroll(function () 
{
            if ($(this).scrollTop() > 400) 
            {
            $("#btn-up").css({ opacity: "1" , visibility: "visible" });
            } else 
            {
            $("#btn-up").css({ opacity: "0" , visibility: "hidden" });
            }
});


        $("#btn-up").click(function () 
{
            $("html").animate(
            {
            scrollTop: 0,
            },
            1000
            );
});

$("#main").click(function () {
    $("#mySidenav").toggleClass("toggle-width")
    $("#main").toggleClass("toggle-margin")
})

$(window).scroll(function () 
{
            if ($(this).scrollTop() > 1200) 
            {
            $(".menu-end").css({ bottom: "0" });
            } else 
            {
            $(".menu-end").css({ bottom: "-80px" });
            }
});


    $("#add-teacher").click(function(){
        $(".sec-best-devolpers").append(' <div class="best-devolpers"><hr><img src="images/9c081444f942cc8fe0ddf55631b584e2.jpg" alt="img-best-devolpers"><span>Hamza Nabil ( 5$/in Hour )</span><div class="informain-apot-teacher"> <span class="badge badge-primary">Best Devolpers</span><span class="badge badge-danger">Trusted</span><span class="badge badge-success">Professional</span><span class="badge badge-light black"><i class="fas fa-users"></i> 125,000</span> </div> </div>') 

    });

}); // end jquery //



/* 
    =======================================
    │   End Good Bye        (_!**!_)      │
    =======================================
*/
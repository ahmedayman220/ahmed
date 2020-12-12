
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
    divHave = document.querySelector(".login-popup"),
    btnTakeCourse = document.querySelector(".apout-teacher-price > button");


    btnSignUp.onclick = _ => {
        if(inp1.value == "" || inp2.value == "" || inp3.value == "" || inp4.value == ""){
            alert("Write Information");
        }else {
            btnRegister.remove();
            btnLogin.remove();
            divHave.innerHTML = `<a class='register-user'>Hellow   ${inp1.value}   </a>`;
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

btnTakeCourse.onclick = _ => {
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
    =======================================================================
    │ 3- Functon Show Div When enter to btn in sec overview  (_!**!_)     │
    =======================================================================
*/

let comments    = document.querySelectorAll(".have-div-show"),
    FisrtDiv_Over = document.querySelector(".have-all-things-in-sec-over") 
    divComments = document.querySelector(".fun-onclick-comm"),
    SecoundBtn  = document.querySelector(".wihh") ,
    firstBtn    = document.querySelector(".wih") ;

comments.forEach( function (rest){

    rest.onclick = _ => {
        FisrtDiv_Over.style.opacity = "0";
        divComments.style.display   = "block" ;
        SecoundBtn.style.background = " white" ;
        SecoundBtn.style.border     = "none" ;
        SecoundBtn.style.borderTop  = "4px solid #1f0000" ;
        firstBtn.style.borderTop    = "none" ;
        firstBtn.style.background   = "#f9f9f9" ;
        firstBtn.style.border       = " 1px solid #eee" ;
    };
});


divNone.onclick = _ => {
    FisrtDiv_Over.style.opacity = "1";
    divComments.style.display   = "none" ;
    divNone.style.background    = " white" ;
    divNone.style.border        = "none" ;
    divNone.style.borderTop     = "4px solid #1f0000" ;
    SecoundBtn.style.background = " #f9f9f9" ;
    SecoundBtn.style.borderTop  = "none" ;
};

/*
    ===========================================
    │  Submit Commit      (_!**!_)            │
    ===========================================
*/

let inpComPeapole = document.querySelector("#comment"),
    btnSubmit = document.querySelectorAll("#comment + button"),
    divComPeapole = document.querySelectorAll(".div__com__peapole")


btnSubmit.forEach((hndle) => {
    hndle.onclick = _ => {
        inpComPeapole.value === "" 
        ?
        alert("Write Thing ?!!")
        :
        divComPeapole.forEach((com) => {
            com.innerHTML += 
            `<div id="iam">
                    <i class="fas fa-user"></i>
                    <span>${inpComPeapole.value}</span>  
                    <button onclick=funDelete()>Delete</button>
                </div>`
        })
    }
});



// divComPeapole.innerHTML += 
// `<div id="iam">
//     <i class="fas fa-user"></i>
//     <span>${inpComPeapole.value}</span>  
//     <button onclick=funDelete()>Delete</button>
// </div>`

function funDelete () {
    document.querySelector('#iam').remove();
}

/*
    ========================================================
    │  4- Next And Left In Sec You May Like   (_!**!_)     │
    ========================================================
*/

let nextBtn = document.querySelector(".sec-you-may-like .btn-go-next-div span"),
    firstDiv = document.querySelector(".div-none"),
    newDivShow = document.querySelector(".sec-you-may-like .detailes-on-new-div"),
    leftBtn = document.querySelector(".sec-you-may-like .btn-go-left-div span");

nextBtn.onclick = _ => {
    firstDiv.style.display = "none" ;
    newDivShow.style.right = "10%";
    leftBtn.style.display  = "flex";
};

leftBtn.onclick = _ => {
    firstDiv.style.display = "flex";
    newDivShow.style.right = "-35%";
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
    //   navbar
    $("#main").click(function () {
        $("#mySidenav").toggleClass("toggle-width")
        $("#main").toggleClass("toggle-margin")
    })
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
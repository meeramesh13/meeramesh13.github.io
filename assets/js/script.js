/* book anim, make button that sends to blurbs below --> doesn't work */

let book = document.getElementById("book-anim");

function get0(){
    document.getElementById("book0").style.opacity = "1";    
};
function hide0(){
    document.getElementById("book0").style.opacity = "0";
};

function get1(){
    document.getElementById("book1").style.opacity = "1";    
};
function hide1(){
    document.getElementById("book1").style.opacity = "0";
};

function get2(){
    document.getElementById("book2").style.opacity = "1";    
};
function hide2(){
    document.getElementById("book2").style.opacity = "0";
};

function get3(){
    document.getElementById("book3").style.opacity = "1";    
};
function hide3(){
    document.getElementById("book3").style.opacity = "0";
};

function get4(){
    document.getElementById("book4").style.opacity = "1";    
};
function hide4(){
    document.getElementById("book4").style.opacity = "0";
};

function get5(){
    document.getElementById("book5").style.opacity = "1";    
};
function hide5(){
    document.getElementById("book5").style.opacity = "0";
};

function get6(){
    document.getElementById("book6").style.opacity = "1";    
};
function hide6(){
    document.getElementById("book6").style.opacity = "0";
};

function get7(){
    document.getElementById("book7").style.opacity = "1";    
};
function hide7(){
    document.getElementById("book7").style.opacity = "0";
};

function get8(){
    document.getElementById("book8").style.opacity = "1";    
};
function hide8(){
    document.getElementById("book8").style.opacity = "0";
};

book.onclick = function(){
    book.style.backgroundColor(black);
    get0();
    setTimeout(hide0, 3000);

    get1();
    setTimeout(hide1, 3000);

    get2();
    setTimeout(hide2, 3000);

    get3();
    setTimeout(hide3, 3000);

    get4();
    setTimeout(hide4, 3000);

    get5();
    setTimeout(hide5, 3000);

    get6();
    setTimeout(hide6, 3000);

    get7();
    setTimeout(hide7, 3000);

    get8();
    setTimeout(hide8, 3000);
}

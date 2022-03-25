function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show1");
}
window.onclick = function(event) {
    if (!event.target.matches('.navbarIcon')) {
        var dropdowns = document.getElementsByClassName("dropdown-content1");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show1')) {
                openDropdown.classList.remove('show1');
            }
        }
    }
}

function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show2");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn2')) {
        var dropdowns = document.getElementsByClassName("dropdown-content2");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show2')) {
                openDropdown.classList.remove('show2');
            }
        }
    }
}

function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check[]')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

function onlyOne2(checkbox) {
    var checkboxes = document.getElementsByName('check2[]')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

function onlyOne3(checkbox) {
    var checkboxes = document.getElementsByName('check3[]')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

function onlyOne4(checkbox) {
    var checkboxes = document.getElementsByName('check4[]')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

function myFunction3() {
    var checkBox = document.getElementById("dog1");
    var text = document.getElementById("dog2");
    if (checkBox.checked == true) {
        text.style.display = "flex";
    } else {
        text.style.display = "none";
    }
    var checkBox = document.getElementById("cat1");
    var text = document.getElementById("cat2");
    if (checkBox.checked == true) {
        text.style.display = "flex";
    } else {
        text.style.display = "none";
    }
    var checkBox = document.getElementById("other1");
    var text = document.getElementById("other2");
    if (checkBox.checked == true) {
        text.style.display = "flex";
    } else {
        text.style.display = "none";
    }
}

function yesnoCheck(that) {
    if (that.value == "other") {
        document.getElementById("other2").style.display = "flex";
    } else {
        document.getElementById("other2").style.display = "none";
    }
}

mybutton = document.getElementById("top");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// window.onscroll = function() {

//     myID1 = document.getElementById("message1");

//     var myScrollFunc = function() {
//         var y = document.documentElement.scrollTop;
//         if (y >= 550) {
//             myID1.className = "show"
//         } else {
//             myID1.className = "hide";
//         }
//     };
//     window.addEventListener("scroll", myScrollFunc);


// myID2 = document.getElementById("message2");

// var myScrollFunc2 = function() {
//     var y2 = window.scrollY;
//     if (y2 >= 1050) {
//         myID2.className = "show"
//     } else {
//         myID2.className = "hide";
//     }
// };
// window.addEventListener("scroll", myScrollFunc2);


// myID3 = document.getElementById("message3");

// var myScrollFunc3 = function() {
//     var y3 = window.scrollY;
//     if (y3 >= 1850) {
//         myID3.className = "show"
//     } else {
//         myID3.className = "hide";
//     }
// };
// window.addEventListener("scroll", myScrollFunc3);


// myID4 = document.getElementById("message4");

//     var myScrollFunc4 = function() {
//         var y4 = window.scrollY;
//         if (y4 >= 2450) {
//             myID4.className = "show"
//         } else {
//             myID4.className = "hide";
//         }
//     };
//     window.addEventListener("scroll", myScrollFunc4);
// };
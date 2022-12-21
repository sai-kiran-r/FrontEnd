// This is for validations
function validateInput(object, type, nameType){
    var rName = /^[a-zA-Z]+$/;
    var rEmail = /([\w\.]+)@([\w\.]+)\.(\w+)/;
    var rPhone = /\d{3}-?\d{3}-\d{4}$/;
    var rZip = /^\d{5}$/;
    var rBox = /^[a-zA-Z]+$/;

    var name = 'errorMsg'+nameType;

    switch(type){
        case 1:
            if(!object.value.trim().match(rName)){
                object.style.border = "2px solid red";
                document.getElementById(name).style.display = "block";
                object.value = "";
            }
            else{
                object.style.border = "";
                document.getElementById(name).style.display = "none";
            }
        break;
        case 2:
            if(!object.value.match(rEmail)){
                object.style.border = "2px solid red";
                document.getElementById("errorMsgEmail").style.display = "block";
                object.value = "";
            }
            else{
                object.style.border = "";
                document.getElementById("errorMsgEmail").style.display = "none";
            }
        break;    
        case 3:
            if(!object.value.match(rPhone)){
                object.style.border = "2px solid red";
                document.getElementById("errorMsgPhone").style.display = "block";
                object.value = "";
            }
            else{
                object.style.border = "";
                document.getElementById("errorMsgPhone").style.display = "none";
            }
        break;
        case 4:
            if(!object.value.match(rZip)){
                object.style.border = "2px solid red";
                document.getElementById("errorMsgZip").style.display = "block";
                object.value = "";
            }
            else{
                object.style.border = "";
                document.getElementById("errorMsgZip").style.display = "none";
            }
        break;
        case 5:
            if(!object.value.trim().match(rBox)){
                object.style.border = "2px solid red";
                document.getElementById("errorMsgBox").style.display = "block";
                object.value = "";
            }
            else{
                object.style.border = "";
                document.getElementById("errorMsgBox").style.display = "none";
            }
    }
}
// function capclick(one){
//     if(one.checked){
//         document.getElementById("capp").innerHTML = "Price $3.10";
//     }
//     else{
//         document.getElementById("capp").innerHTML = "";
//     }
// }
// function latclick(one){
//     if(one.checked){
//         document.getElementById("latt").innerHTML = "Price $2.99";
//     }
//     else{
//         document.getElementById("latt").innerHTML = "";
//     }
// }
// function espclick(one){
//     if(one.checked){
//         document.getElementById("espp").innerHTML = "Price $3.00";
//     }
//     else{
//         document.getElementById("espp").innerHTML = "";
//     }
// }
// function iceclick(one){
//     if(one.checked){
//         document.getElementById("icee").innerHTML = "Price $2.50";
//     }
//     else{
//         document.getElementById("icee").innerHTML = "";
//     }
// }
// function blaclick(one){
//     if(one.checked){
//         document.getElementById("blaa").innerHTML = "Price $2.75";
//     }
//     else{
//         document.getElementById("blaa").innerHTML = "";
//     }
// }
function menuOptions(){
    var o = document.getElementById("coffee").value;
    // document.getElementById("")
    if(o == "Cappuccino"){
        document.getElementById("hidden1").style.display = "block";
        document.getElementById("hidden2").style.display = "none";
        document.getElementById("hidden3").style.display = "none";
        document.getElementById("hidden4").style.display = "none";
        document.getElementById("hidden5").style.display = "none";
    }else if(o == "Latte"){
        document.getElementById("hidden2").style.display = "block";
        document.getElementById("hidden1").style.display = "none";
        document.getElementById("hidden3").style.display = "none";
        document.getElementById("hidden4").style.display = "none";
        document.getElementById("hidden5").style.display = "none";
    }else if(o == "Espresso"){
        document.getElementById("hidden3").style.display = "block";
        document.getElementById("hidden1").style.display = "none";
        document.getElementById("hidden2").style.display = "none";
        document.getElementById("hidden4").style.display = "none";
        document.getElementById("hidden5").style.display = "none";
    }else if(o == "IceTea"){
        document.getElementById("hidden4").style.display = "block";
        document.getElementById("hidden1").style.display = "none";
        document.getElementById("hidden2").style.display = "none";
        document.getElementById("hidden3").style.display = "none";
        document.getElementById("hidden5").style.display = "none";
    }else if(o == "BlackTea"){
        document.getElementById("hidden5").style.display = "block";
        document.getElementById("hidden1").style.display = "none";
        document.getElementById("hidden2").style.display = "none";
        document.getElementById("hidden3").style.display = "none";
        document.getElementById("hidden4").style.display = "none";
    }

}
// function displayBox(this){
//     var boxCheck = document.getElementById("boxx");
//     var i;
//     for(i = 0; i < boxCheck.length; i++){
//         if(boxCheck[i].checked){
//             document.getElementById("boxx").style.display = "block";
//             break;
//         }
//         else if(boxCheck[i].checked == false){
//             document.getElementById("boxx").style.display = "none";
//             continue;
//         }
//     }
// }
function displayBox(one){
    if(one.checked){
        document.getElementById("disc").style.display = "block";
    } 
   else{
    document.getElementById("disc").style.display = "none";
    }
}
function mySubmit(){
    table = document.getElementById("tableData");
        var title = document.querySelector('input[name="Title"]:checked');
        var fname = document.getElementById("Firstname");
        var lname = document.getElementById("LastName");
        var email = document.getElementById("Email");
        var num = document.getElementById("Phone");
        var zip = document.getElementById("Zip");
        var here = document.querySelector('input[name="Social"]:checked');
        var drink = document.getElementById("coffee");
        var comment = document.getElementById("Comments");

        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);

        row.insertCell(0).innerHTML = title.value;
        row.insertCell(1).innerHTML = fname.value;
        row.insertCell(2).innerHTML = lname.value;
        row.insertCell(3).innerHTML = email.value;
        row.insertCell(4).innerHTML = num.value;
        row.insertCell(5).innerHTML = zip.value;
        row.insertCell(6).innerHTML = here.value;
        row.insertCell(7).innerHTML = drink.value;
        row.insertCell(8).innerHTML = comment.value;
}
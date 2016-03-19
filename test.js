/**
 * Created by wgm on 16/2/26.
 */

var name = {
    firstname:"alice",
    secondname:"jerry",
    id:"233"
};

var firstname = name.firstname;
document.getElementsByClassName("name").innerHTML(name);

var letter = "letter";
//letter.toUpperCase();


function myfunction(letter){
    alert("welcome" + letter);
}

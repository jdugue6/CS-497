
const btn1 = document.getElementById("btnOne");
const btn2 = document.getElementById("btnTwo");
const btn3 = document.getElementById("btnThree");
const btn4 = document.getElementById("btnFour");
const input1 = document.getElementById("input");

//Traditional func

// btn1.onclick = function inCrementCount(){
//      document.getElementById("paraOne").innerHTML=
//      Number(document.getElementById("paraOne").innerHTML)+1;
// };

//array function:

btn1.onclick = ()=>{
    document.getElementById("paraOne").innerHTML=
     Number(document.getElementById("paraOne").innerHTML)+1;
};
//button color change: different co
let index =0;
const colors =["green", "blue","black","red","purple"];
btn2.onclick = ()=>{
    
    document.getElementById("paraTwo").style.color = colors[index%colors.length];
    index++;
};
//background color 

let indexx =0;
const colorss =["green", "blue","black","red","purple"];
btn3.onclick = ()=>{
    document.getElementById("divBG").style.backgroundColor = colorss[indexx%colors.length];
    
    //document.getElementById("paraThree").style.backgroundColor = colorss[index%colors.length];
    indexx++;
};
btn4.onclick =()=>{
      let a = Number(document.getElementById("numberOne").value);
      let b = Number(document.getElementById("numberTwo").value);
      document.getElementById("paraThree").innerHTML = a*b ;
};
input1.oninput=() =>{
    document.getElementById("paraFour").innerText = input1.value;
}
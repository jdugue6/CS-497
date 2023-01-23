const search1=document.getElementById("Search");
const button1=document.getElementById("btn1");
const button2=document.getElementById("btn2");


search1.oninput = () =>{
    const search1=document.getElementById("Search");
    document.getElementById("searchterm").innerHTML=search1.value;
}
const handleClick=(event)=>{
  if(event.target.getAttribute("class")=="btn btn-outline-secondary"){
    event.target.innerHTML='Dismissed';
    event.target.setAttribute("class", "btn btn-outline-danger");
  }else {
    event.target.setAttribute("class","btn btn-outline-secondary");
    event.target.innerHTML='Dismiss';
  }
}
    
     //Product Data
let requestURL = 'https://fakestoreapi.com/products?limit=10'

fetch(requestURL)
    .then((res) => { return res.json()})
    .then((data) => {
        //console.log(data);
        populateList(data);
    });
    

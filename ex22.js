let requestURL = "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true"
fetch(requestURL)
    .then((data) => {return data.json()}) 
    .then((stuArray) => {console.log(stuArray)     
    populateList(stuArray)
    
    }); 

    function  populateList(student){

        let stringStudent = '';
        
let studentData = document.getElementById("studentData");

student.map((student) => {
    
    stringStudent +=
        `<tr>
            <td> ${student.fname} </td>
            <td>  ${student.lname} </td>
            <td> ${student.address} </td>
            <td>${student.city} </td>
            <td> ${student.tel} </td>
            <td>${student.state} </td>
            <td>${student.zip} </td>
        </tr>`})
    studentData.innerHTML = stringStudent;

    }
//populateList();
    




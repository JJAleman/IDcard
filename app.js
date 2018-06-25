function generateID() {
    let userFirstName =
    document.getElementById("firstName").value;
    console.log(userFirstName);
    document.getElementById("idCard").innerHTML = userFirstName;

    let userLastName =
    document.getElementById("lastName").value;
    console.log(userlastName);
    document.getElementById("idCard").innerHTML = userlastName;

    let userAge =
    parseInt(document.getElementById("Age").value);
    console.log(userAge);
    document.getElementById("idCard").innerHTML = userAge;

    let userPhoneNumber =
    document.getElementById("phonenumber").value;
    console.log(userPhoneNumber);
    document.getElementById("idCard").innerHTML = userPhoneNumber;

    let userAddress =
    document.getElementById("address").value;
    console.log(userAddress);
    document.getElementById("idCard").innerHTML = userAddress;
}
 let btn = document.GetElementById("btm");

 btn.addEventListener('click', idCard);

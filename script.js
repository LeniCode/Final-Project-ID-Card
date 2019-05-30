function idCard(){
    var first = document.getElementById("firstName").value;
    var last = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    var age = parseInt(document.getElementById("age").value);
    var phone = parseInt(document.getElementById("phoneNumber").value);
    var fullName = first + " " + last;

    document.getElementById("postFullName").innerHTML = fullName;
    document.getElementById("postAddress").innerHTML = address;

    var numberArray = []
    numberArray.push(age,phone)

    for(var i=0; i < numberArray.length; i++){
        if (numberArray[i]<100){
            document.getElementById("postAge").innerHTML = "Age: " + numberArray[i];  
        }else if(numberArray[i]>=100){
            document.getElementById("postPhoneNumber").innerHTML ="Phone Number: " + numberArray[i];
        }
    }

  }
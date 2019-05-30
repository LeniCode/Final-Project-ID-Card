function idCard() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var postFullName = firstName + "" + lastName;
    document.getElementByID('postFullName').innerHTML = postFullName;
    
    var address = document.getElementById('address').value;
    document.getElementByID('postAddress').innerHTML = postAddress;
    
    var age = document.getElementById('age').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var numberArray = []
  }
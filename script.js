function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let y = document.forms["myForm"]["lname"].value;
    let z = document.forms["myForm"]["email"].value;
    let user = document.forms["myForm"]["user"].value;
    let pass = document.forms["myForm"]["pass"].value;
    let add = document.forms["myForm"]["add"].value;
    if (x == "") {
      alert("First Name must be filled out");
      return false;
      
      
    } 
    else if (y == "") {
        alert("Last Name must be filled out");
        return false;
      }else if (z == "") {
      alert("E-mail must be filled out");
      return false;
    }else if (user == "") {
      alert("User Name must be filled out");
      return false;
    }else if (pass == "") {
      alert("Password must be filled out");
      return false;
    }else if (add == "") {
        alert("Address must be filled out");
        return false;
      }else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.email.value))
      {
        return (true)
      }else{
        alert("You have entered an invalid email address!")
        return (false)
      }
  }

  
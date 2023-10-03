let signUpButton = document.getElementById("signupButton");
let signUpError = document.getElementById("signUpError");

// let currentUser = {}

signupButton.addEventListener('click',()=>{
    let firstName = document.getElementById("typeFName").value;
    let lastName = document.getElementById("typeLName").value;
    let username = document.getElementById("typeUsername").value;
    let password = document.getElementById("typePassword").value;

    let currentUser = {
        "firstName": firstName,
        "lastName": lastName,
        "username": username,
        "password": password
     }

    fetch("API/Registration.php",{
        "method": "POST",
        "headers": {
            "Content-Type" : "application/json; charset=utf-8"
        },

        "body" : JSON.stringify(currentUser)

        })
        .then(function(response){
            console.log("Success");
            console.log(response.text())
            window.location.href = "http://cop4331groupfifteen.xyz/login_page.html";
            return response.text();
        
        })
        // no data should pass to frontend on registration
        .then(function(data){
            // if(data == "" || data == null){
            //     signUp()
            // }
            // signUp(data=null);
        })
        .catch((error) => {
            signUpError.innerHTML = "Username Already Exists";
        });

});

function signUp(data){
    
    if(data == "" || data == null){
        // sessionStorage.setItem("userID", data.id);
        // Registration should just be rerouted to login to get id
        window.location.href = "http://cop4331groupfifteen.xyz/login_page.html";
    }
    else{
        signUpError.innerHTML = "Username Already Exists";
    }
}

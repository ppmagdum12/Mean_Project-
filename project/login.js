

function admin() {
    let x = document.querySelector("#login");
    let y = document.querySelector("#register");
    let z = document.querySelector("#btn");
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}
function user() {
    let x = document.querySelector("#login");
    let y = document.querySelector("#register");
    let z = document.querySelector("#btn");
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}
function validateuser() {

    let user = document.getElementById("userid").value;

    if (user == "") {
        {
            document.querySelector('#userid1').innerHTML = "** Please Fill the Userid **"
            return false;
        }
    }

    if ((user.length <= 4) || (user.length > 20)) {
        {
            document.querySelector('#userid1').innerHTML = "** Length of the UserId must be beetween 4 to 20 **"
            return false;
        }
    }

    let pass = document.getElementById("password").value;

    if (pass == "") {
        {
            document.querySelector('#password1').innerHTML = "** Please Fill the Password **"
            return false;
        }
    }

    if ((pass.length <= 4) || (pass.length > 20)) {
        {
            document.querySelector('#password1').innerHTML = "** Length of the Password must be beetween 4 to 20 **"
            return false;
        }
    }

}


function validateadmin() {

    let user = document.getElementById("userid2").value;

    if (user == "") {
        {
            document.querySelector('#userid3').innerHTML = "** Please Fill the AdminId **"
            return false;
        }
    }

    if ((user.length <= 4) || (user.length > 20)) {
        {
            document.querySelector('#userid3').innerHTML = "** Length of the AdminId must be beetween 4 to 20 **"
            return false;
        }
    }

    let pass = document.getElementById("password2").value;

    if (pass == "") {
        {
            document.querySelector('#password3').innerHTML = "** Please Fill the Password **"
            return false;
        }
    }

    if ((pass.length <= 4) || (pass.length > 20)) {
        {
            document.querySelector('#password3').innerHTML = "** Length of the Password must be beetween 4 to 20 **"
            return false;
        }
    }


}
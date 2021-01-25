function UserLogin(){
                var name = document.getElementById("name").value;
                var pass = document.getElementById("pass").value;
                var cpass = document.getElementById("cpass").value;
                var mobile = document.getElementById("mobile").value;
                if(name.length<6){
                    document.getElementById("nameerror").innerHTML = "User Name must be minimum of six character";
                }
                var patt = "^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,}$";
                if(pass.match(patt)==null){
                    document.getElementById("passerror").innerHTML = "Password must be alphanumerical and with a special character";
                }
                if(pass!=cpass){
                    document.getElementById("cpasserror").innerHTML = "Password and confirm password must be same";
                }
                if(parseInt(mobile)!=NaN){
                    if(parseInt(mobile)<6000000000 || parseInt(mobile)>10000000000){
                       document.getElementById("mobileerror").innerHTML = "Mobile number must be a valid 10-digit number the first digit to be between 6 to 9 ";
                    }
                }else{
                    document.getElementById("mobileerror").innerHTML = "Mobile number must be a valid 10-digit number the first digit to be between 6 to 9 ";
                }
            }
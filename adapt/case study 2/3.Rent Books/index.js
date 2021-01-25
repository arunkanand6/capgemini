function showStock(){
                document.getElementById("stock").innerHTML = "5";
            }
            function checkName(){
                var ok = true;
                var name = document.getElementById("name").value;
                if(name.length<5){
                    ok = false;
                    document.getElementById("nameerror").innerHTML = "Name should be atleast 5 characters long";
                }
                var x;
                for(x of name){
                    if(x <65 || x > 90){
                        if(x != " "){
                            ok = false;
                            document.getElementById("nameerror").innerHTML = "Name should only contain alphabets and whitespace";
                            break;
                        }
                    }
                }
                if(ok==true){
                    document.getElementById("nameerror").innerHTML = "";
                }
            }
            function checkDate(){
                var date = new Date(document.getElementById("rentdate").value);
                var curdate = new Date();
                var ok = true;
                if(date<curdate){
                    ok = false;
                    document.getElementById("dateerror").innerHTML = "Please select a valid date";
                }
                if(ok==true){
                    document.getElementById("dateerror").innerHTML = "";
                }
            }
            function checkTenure(){
                var tenure = parseInt(document.getElementById("renttenure").value);
                if(tenure==NaN){
                    document.getElementById("tenureerror").innerHTML = "Rent Tenure should be a number";
                }
                var ok = true;
                if(tenure>30){
                    ok = false;
                    document.getElementById("tenureerror").innerHTML = "We cannot rent over 30 days SORRY!!!";
                }
                if(ok==true){
                    document.getElementById("tenureerror").innerHTML = "";
                }
            }
            function checkCount(){
                var count = parseInt(document.getElementById("noofbooks").value);
                if(count==NaN){
                    document.getElementById("counterror").innerHTML = "Rent Tenure should be a number";
                }
                var ok = true;
                if(count>5){
                    ok = false;
                    document.getElementById("counterror").innerHTML = "Rent books count is more than available books";
                }
                if(ok==true){
                    document.getElementById("counterror").innerHTML = " ";
                }
            }
            function rentAmount(){
                var qty = document.getElementById("noofbooks").value;
                var days = document.getElementById("renttenure").value;
                var rpd = 100;
                var rent = qty*days*rpd;
                var name = document.getElementById("name").value;
                if(confirm("The Total rent amount is "+rent)){
                    alert("Thank you for your order Mr/Mrs/Ms: "+name);
                }
            }
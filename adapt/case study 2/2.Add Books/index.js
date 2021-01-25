function dropdownlist(){
                var minage = document.getElementById("minage");
                var maxage = document.getElementById("maxage");
                for(var i = 0; i<=12 ; i++){
                    var option = document.createElement('option');
                    option.innerText = i;
                    minage.add(option);
                }
                for(var i = 0; i<=12 ; i++){
                    var option = document.createElement('option');
                    option.innerText = i;
                    maxage.add(option);
                }
            }
            function login(){
                var name = document.getElementById("name").value;
                var namepat = /[a-z]{3,}/i;
                if(!name.match(namepat)){
                    document.getElementById("nameerror").innerHTML = "Name should be atleast 3 characters long";
                }
                
                var type = document.getElementById("type").value;
                var typepat = /[a-z]{5,}/i;
                if(!type.match(typepat)){
                    document.getElementById("typeerror").innerHTML = "Type should be atleast 5 characters long";
                }
                
                var stock = document.getElementById("stock").value;
                if(parseInt(stock)!=Nan){
                    if(stock<=0){
                        document.getElementById("stockerror").innerHTML = "Quantity should not be zero";
                    }
                }else{
                    document.getElementById("stockerror").innerHTML = "Quantity should be a number";
                }
                
                var price = document.getElementById("price").value;
                if(parseInt(price)!=NaN){
                    if(price<=0){
                        document.getElementById("priceerror").innerHTML = "Price should not be zero";
                    }
                }else{
                    document.getElementById("priceerror").innerHTML = "Price should be a number";
                }
                
                var rent = document.getElementById("rent").value;
                if(parseInt(rent)!=NaN){
                    if(parseInt(rent)<5){
                        document.getElementById("renterror").innerHTML = "Rent should be atleast $5";
                    }    
                }else{
                    document.getElementById("renterror").innerHTML = "Rent should be a number";
                }
                
            }
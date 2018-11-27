/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//create array that will hold all ordered products
    var shoppingCart = [];

function ResetCart(){
    var empty = [];
    shoppingCart = empty;
    displayShoppingCart();
    }

    //this function manipulates DOM and displays content of our shopping cart
function displayShoppingCart(){
        var orderedProductsTblBody=document.getElementById("orderedProductsTblBody");
        //ensure we delete all previously added rows from ordered products table
        while(orderedProductsTblBody.rows.length>0) {
            orderedProductsTblBody.deleteRow(0);
        }

        //variable to hold total price of shopping cart
        var cart_total_price=0;
        //iterate over array of objects
        for(var product in shoppingCart){
            //add new row      
            var row=orderedProductsTblBody.insertRow();
            //create three cells for product properties 
            var cellName = row.insertCell(0);
            var cellDescription = row.insertCell(1);
            var cellPrice = row.insertCell(2);
            cellPrice.align="right";
            //fill cells with values from current product object of our array
            cellName.innerHTML = shoppingCart[product].Name;
            cellDescription.innerHTML = shoppingCart[product].Description;
            cellPrice.innerHTML = shoppingCart[product].Price.toFixed(2);
            cart_total_price+=shoppingCart[product].Price;
        }
        //fill total cost of our shopping cart 
        var temp = ((1.0919 * (cart_total_price.toFixed(2))) + 12.35);
        
        document.getElementById("cart_total").innerHTML="$" + temp.toFixed(2);
        var x = shoppingCart.length;
        document.getElementById("navigationTextCart").innerHTML="Shopping Cart(" + x + ")";
    }


    function AddtoCart(name,description,price){
       //Below we create JavaScript Object that will hold three properties you have mentioned:    Name,Description and Price
       var singleProduct = {};
       //Fill the product object with data
       singleProduct.Name=name;
       singleProduct.Description=description;
       singleProduct.Price=price;
       //Add newly created product to our shopping cart 
       shoppingCart.push(singleProduct);
       //call display function to show on screen
       displayShoppingCart();

        OrderForm();

    }  

    function ResetOrderForm(){
        
    }
    
function problem1(){
    var input1 = document.getElementById('form1').elements[0].value;
    var input2 = document.getElementById('form1').elements[1].value;
	
    var pattern = /^[A-Za-z]+$/;
        
    if (input1.match(pattern))
	document.getElementById('error1').style.visibility = "hidden";
    else
	document.getElementById('error1').style.visibility = "visible";
	
    if (input2.match(pattern))
    	document.getElementById('error2').style.visibility = "hidden";
    else
	document.getElementById('error2').style.visibility = "visible";
}

function problem3(){
    var input1 = document.getElementById('form3').elements[0].value;
    var input2 = document.getElementById('form3').elements[1].value;
	
    var pattern = /^\s*(\d{4}\s?){4}\s*$/;
	
    if (input1.match(pattern))
    	document.getElementById('form3').getElementsByTagName('td')[1].style.visibility = "hidden";
    else
	document.getElementById('form3').getElementsByTagName('td')[1].style.visibility = "visible";
	
    if (input2.match(pattern))
	document.getElementById('form3').getElementsByTagName('td')[3].style.visibility = "hidden";
    else
	document.getElementById('form3').getElementsByTagName('td')[3].style.visibility = "visible";
    }

    //Add some products to our shopping cart via code or you can create a button with onclick event
    //AddtoCart("Table","Big red table",50);
    //AddtoCart("Door","Big yellow door",150);
    //AddtoCart("Car","Ferrari S23",150000);

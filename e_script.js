let cart=[];
let total=0;
function display(name,cost)
{
	cart.push(name+" ");
	total=total+cost;
	document.getElementById("cart_products").innerHTML=cart+"<br>";
	document.getElementById("total_value").innerHTML=total;
}
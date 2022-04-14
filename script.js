function Message1(){
    document.getElementById("result").classList.remove("hidden"); /* remove hidden attribute to show answers */
}

/* making the slide reactive to movement */
function updateRate(){  
    var rateval=document.getElementById("rate").value;  
    document.getElementById("rate_val").innerText=rateval; 
}

function compute()
{   /* error messages for zero and empty inputs */
    var principal = document.getElementById("principal").value;
    if(parseInt(principal)<1){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    if(principal == ""){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
	/* declaring variables and calculation the amount */
    var rate=document.getElementById("rate").value;
    var years=document.getElementById("years").value;

    var interest=principal*years*rate/100;
    var finalamount=interest+parseInt(principal);
	
	/* calculation of endyear */ 
	
    var today = new Date();    
    var calcyear= parseInt(today.getFullYear())+parseInt(years);
    
	/* generating the contect for the answers shown */
    	
	document.getElementById("principalmessage").innerHTML = ""+principal;
	document.getElementById("ratemessage").innerHTML = ""+rate;
	document.getElementById("amountmessage").innerHTML = ""+finalamount;
	document.getElementById("yearmessage").innerHTML = ""+calcyear;
	Message1();

	return false;
}



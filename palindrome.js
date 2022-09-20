

  
  function checkPal(str){
	  
	  let bag="";
	  for(let i=str.length; i>=0; i--){
	  bag=bag+str[i]; 
	  } if (bag==str){
		  console.log("yes")
	  } else {
		  console.log("no")
	  }
	  
	  
  }
  
   checkPal("naman");
  
  
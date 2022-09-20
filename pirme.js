
function prime(num){
	let factors=0;
	for(let i=0; i<=num;i++){
		if(num%i==0){
			factors++;
		}
if(factors==2){
return true;
}else {
	else false;
}
	}
	
	
	let ans=prime(7)
	if(ans==true){
		console.log("is not prime")
	} else {
		console.log("prime")
	}
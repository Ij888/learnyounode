//LESSON2_babySteps
var index = 2;
var sum = 0;

while(process.argv[index]){
	
	sum = sum+ Number(process.argv[index]);
		index++
}
console.log(sum);

//see if you can do this with a for loop
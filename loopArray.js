var pets = ['cat', 'dog', 'rat'];
for(var i=0; i<=pets.length; i++)
{
	pets[i] = pets[i] + 2;
	console.log(i, pets);
	if(i === 10){
		return;
	}
}
console.log(pets);

//
//console.log(pets[7]);
//console.log(pets.length);
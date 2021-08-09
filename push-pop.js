var lastBrench = ['kalam','balam', 'salam'];
lastBrench.push('jamal');
lastBrench.push('karim');
lastBrench.push('Rahim');
// console.log(lastBrench);


var friendsAge = [12,13,14,34,32];
// friendsAge.push(23);
// console.log(friendsAge);

// friendsAge.pop();
// friendsAge.pop( );
// console.log(friendsAge);

// var lastItem = friendsAge.pop();

console.log(friendsAge);
// console.log(lastItem);

// add from beginning
console.log(lastBrench);
// lastBrench.unshift('Jobbar');
// lastBrench.unshift('Rafiq');
// console.log(lastBrench);

// Remove from beginning
// lastBrench.shift();
// lastBrench.shift();
// console.log(lastBrench);

// Remove array item by index position
// console.log(lastBrench);
lastBrench.splice(1,1,'kuddus');
console.log(lastBrench);
friendsAge.splice(2,0,14,24);
console.log(friendsAge);
friendsAge.sort();
console.log(friendsAge);
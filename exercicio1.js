var i, j, k;

for(i = 0; i<= 50; i++){
    if(i%2 == 0){
        console.log(`${i} é par`)
    }
    else{
        console.log(`${i} é impar`)

    }
}

for (let j = 3; j < 100; process.stdout.write(j + ' '), j += 3);

console.log
k = 100;
while(k>=0){
    k -= 2;
    process.stdout.write(k + ' ')
}
var i;
i = 1;

while(i <= 40){
    if(i == 40){
        process.stdout.write("PIM!")
    }
    else if(i % 4 == 0){
        process.stdout.write("PIM ")
    }
    else{
        process.stdout.write(i + ', ')
    }
    i++;
}
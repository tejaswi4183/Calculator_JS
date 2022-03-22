let z='1';
while(z!='0'){
    let x=window.prompt("Enter First Number:");
    var a=parseInt(x);
    let y=window.prompt("Enter Second Number:");
    var b=parseInt(y);
    let choice=window.prompt("Select One Choice :\n 1.Addition \n 2.Substraction \n 3.Multiplication \n 4.Division \n 5.Modulo Division \n");
    switch(choice){
        case '1':
            console.log(`${a} + ${b} = ${a+b}`);
            break;
        case '2':
            console.log(`${a} - ${b} = ${a-b}`);
            break;
        case '3':
            console.log(`${a} * ${b} = ${a*b}`);
            break;
        case '4':
            console.log(`${a} / ${b} = ${a/b}`);
            break;
        case '5':
            console.log(`${a} % ${b} = ${a%b}`);
            break;
        default:
            console.log("Select Correct Option");
            break;
    }
    z=window.prompt("Enter 0 to stop the loop");
    
}
 


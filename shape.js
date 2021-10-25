function figureForming(){
    var sequence = [];
    var gloLoc = 0;

    while(true){
        var room =  prompt("please type your symbol with certain sequence");
        if(room == null)break;
        sequence.push(room);
    }

    var lenSEQ = sequence.length;

    function accessSEQ(){
        if(gloLoc == lenSEQ){gloLoc=1;return sequence[0];}
        gloLoc++;
        return sequence[gloLoc-1];
    }

    var number = prompt("please type the number of your piles")

    let output = "";

    var type =  prompt("please type the shape")

    if(type == "三角形")printTRI(0);
    else if(type == "正方形")printSQUARE(0);
    else if (type == "菱形")printRHO(0);

    function printTRI(n) {
        var i = number-n;
        while(i != 0){
            output = output +" ";
            i-=1;
        }
        var j = n*2 +1;
        while(j != 0){
            output = output+accessSEQ();
            j-=1;
        }
        output = output +"\n";
        if(n+1 == number)return
        return printTRI(n+1);
    }

    function printRHO(n) {
        var numOfDash = Math.abs(n-(number-1)/2);
        while(numOfDash != 0){
            output += "  ";
            numOfDash --;
        }
        numOfDash = Math.abs(n-(number-1)/2);
        var numOfSign = number - (2*numOfDash);
        while(numOfSign != 0){
            output += accessSEQ();
            numOfSign --;
        }
        output += "\n";
        if(n+1 == number)return
        return printRHO(n+1);
    }


    function printSQUARE(n) {
        var j = number;
        while(j != 0){
            output+=accessSEQ();
            j -= 1;
        }
        output+= "\n";
        if(n+1 == number)return
        return printSQUARE(n+1);
    }

    alert(output);

}
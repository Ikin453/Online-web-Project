function figureForming(){
    var sequence = [];
    var gloLoc = 0;

    while(true){
        var room =  prompt("请输入生成图形的组成符号，一次输入一个小节，结束点击cancel");
        if(room == null)break;
        sequence.push(room);
    }
    if(sequence.length == 0)return
    var lenSEQ = sequence.length;

    function accessSEQ(){
        if(gloLoc == lenSEQ){gloLoc=1;return sequence[0];}
        gloLoc++;
        return sequence[gloLoc-1];
    }
    var type =  prompt("请输入生成图像的形状 ps:正方形/菱形/三角形")
    var number = prompt("请输入生成图像的层数  ps:菱形层数为奇")

    let output = "";

    

    if(type == "三角形")printTRI(0);
    else if(type == "正方形")printSQUARE(0);
    else if (type == "菱形")printRHO(0);

    function printTRI(n) {
        var i = number-n;
        while(i != 0){
            output = output +"  ";
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
            output+=accessSEQ()+" ";
            j -= 1;
        }
        output+= "\n";
        if(n+1 == number)return
        return printSQUARE(n+1);
    }

    alert(output);

}
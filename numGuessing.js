// console.log("看到我了嘛");
// alert("注意！");
// console.log(confirm("请确定！"));
// console.log(prompt("嘿嘿"));
function numGuessing(){
    let myname = "某人";
    myname = prompt("宁的名字是？");
    let ifplay = confirm("你好，"+myname+"，来玩猜字游戏嘛 (/ω＼)")
    while(ifplay)
    {
        let times = 0;
        let size = prompt("请输入你的范围。eg：100，1000，10000，100000")
        let ans = Math.random()* size;
        ans = Math.ceil(ans);
        let guess = prompt("请输入你猜的数");
        while (guess != ans)
        {
            if(guess<ans)
        {
            guess = prompt("答案比"+guess+"大");
        }else if(guess>ans)
        {
            guess = prompt("答案比"+guess+"小");
        }
        times += 1;
        }
        alert("宁猜对了！共用了"+ times+"次");
        ifplay = confirm("继续进行游戏嘛 =)");
        if(!ifplay)alert("hope playing next time");
        //room = "you have used "+times+" to achieve the goal.";
        //document.getElementById("games").innerHTML=room;
    }
    //room = "hope you playing next time";
    //document.getElementById("games").innerHTML=room;
}
var person ={
    name: myname,
    study: function(){
        console.log("我是玩家。")
    }
}
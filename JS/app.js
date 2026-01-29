let X = 0;
let Y = 0;
let SnakeP = document.getElementById("snake").style;
let AppleP = document.getElementById("apple").style;
let moveAmount = 20;
let groundSpaceX = 10;
let groundSpaceY = 10;
document.getElementsByClassName("container")[0].style.width = (moveAmount * groundSpaceX).toString()+"px";
document.getElementsByClassName("container")[0].style.height = (moveAmount * groundSpaceY).toString()+"px";
SnakeP.transition="top 250ms,left 250ms"
let score = 0;

document.addEventListener("keydown" , (keyEvent) =>{
    if(keyEvent.key=="w"){
        Y -= moveAmount
    if(Y < 0){
        Y = 0
    }
    SnakeP.top = Y.toString()+"px"
    // SnakeP.transition="top 250ms"

    }
})
document.addEventListener("keydown" , (keyEvent) =>{
    if(keyEvent.key=="a"){
        X -= moveAmount
    if(X < 0){
        X = 0
    }
    SnakeP.left = X.toString()+"px"
    // SnakeP.transition="left 250ms"

    }
})
document.addEventListener("keydown" , (keyEvent) =>{
    if(keyEvent.key=="s"){
            Y += moveAmount
    SnakeP.top = Y.toString()+"px"
    // SnakeP.transition="top 250ms"

        if(Y >= ((moveAmount * groundSpaceY)-moveAmount)){
        Y =((moveAmount * groundSpaceY)-(moveAmount*2))
    }

    }
})
document.addEventListener("keydown" , (keyEvent) =>{
    if(keyEvent.key=="d"){
            X += moveAmount
    SnakeP.left = X.toString()+"px"
    // SnakeP.transition="left 250ms"

    if(X >= ((moveAmount * groundSpaceX)-moveAmount)){
        X =((moveAmount * groundSpaceX)-(moveAmount*2))
    }

    }
})
document.addEventListener("keydown" , (keyEvent) =>{
        if((SnakeP.top == (AppleP.top)) && (SnakeP.left == (AppleP.left))){
            document.getElementById("scoreSet").textContent=score
            document.getElementById("apple").style.display="none"
        }

})




function goUp(){
    Y -= moveAmount
    if(Y < 0){
        Y = 0
    }
    SnakeP.top = Y.toString()+"px"
            if((SnakeP.top == (AppleP.top)) && (SnakeP.left == (AppleP.left))){
            document.getElementById("scoreSet").textContent=score
            document.getElementById("apple").style.display="none"
        }

};
function goRight(){
    X += moveAmount
    SnakeP.left = X.toString()+"px"
    if(X >= ((moveAmount * groundSpaceX)-moveAmount)){
        X =((moveAmount * groundSpaceX)-(moveAmount*2))
    }
            if((SnakeP.top == (AppleP.top)) && (SnakeP.left == (AppleP.left))){
            document.getElementById("scoreSet").textContent=score
            document.getElementById("apple").style.display="none"
        }

};
function goLeft(){
    X -= moveAmount
    if(X < 0){
        X = 0
    }
    SnakeP.left = X.toString()+"px"
            if((SnakeP.top == (AppleP.top)) && (SnakeP.left == (AppleP.left))){
            document.getElementById("scoreSet").textContent=score
            document.getElementById("apple").style.display="none"
        }

};
function goDown(){
    Y += moveAmount
    SnakeP.top = Y.toString()+"px"
        if(Y >= ((moveAmount * groundSpaceY)-moveAmount)){
        Y =((moveAmount * groundSpaceY)-(moveAmount*2))
    }
            if((SnakeP.top == (AppleP.top)) && (SnakeP.left == (AppleP.left))){
            document.getElementById("scoreSet").textContent=score
            document.getElementById("apple").style.display="none"
        }


};
function adjustGroundX(){
    groundSpaceX = document.getElementById("ground-x").value;
    document.getElementsByClassName("container")[0].style.transition="width 250ms"

    if(document.getElementById("ground-x").value > 75){
        document.getElementById("ground-x").value = 75
        groundSpaceX = 75
    }
    document.getElementsByClassName("container")[0].style.width = (moveAmount * groundSpaceX).toString()+"px";
};
function adjustGroundY(){
    groundSpaceY = document.getElementById("ground-y").value;
    document.getElementsByClassName("container")[0].style.transition="height 250ms"

    if(document.getElementById("ground-y").value > 23){
        document.getElementById("ground-y").value = 23
        groundSpaceY = 23

    }

    document.getElementsByClassName("container")[0].style.height = (moveAmount * groundSpaceY).toString()+"px";
};

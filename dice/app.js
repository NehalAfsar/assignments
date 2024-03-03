function diceMuve(){
    let dice1 = Math.floor(Math.random()*6)+1;
    let dice2 = Math.floor(Math.random()*6)+1;
    document.querySelector(".img1").setAttribute("src",`./dice${dice1}.jpg`);
    document.querySelector(".img2").setAttribute("src",`./dice${dice2}.jpg`);
    if(dice1<dice2){
        document.querySelector("h1").innerHTML="Win Player 2";
    }else if(dice1>dice2){
        document.querySelector("h1").innerText="Win Player 1";
    }else{
        document.querySelector("h1").innerText="Draw";
    }
}
document.querySelector("body").addEventListener("click",()=>{diceMuve()});
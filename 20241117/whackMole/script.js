//初始宣告變數，作為全域使用利於整個js都能讀取到
const button=document.querySelector('button');
const timeNode=document.querySelector('#time');
const countNode=document.querySelector('#combo');
const animals=document.querySelectorAll('img');

let time, count;

//規劃功能函數
const gameStart=()=>{
//step1:一開始讓btnStart失去作用，沒有click事件也被disable
btn
}


const showIt=(obj)=>{
    //負責將紅色顯示在畫面上
    //console.log(obj);


/*試圖找到指定的圖片，替換為red，並控制幾秒消失返回yellow
如果當下space位置已經是紅色不要覆蓋，想辦法換位置重新安排出場 
*/
if (animals[obj.space].classList>0){
    //因為有class，所以不是黃色代表正在實行某個任務，所以得改位置
 obj.space=Math.floor(Math.random()*9)0;//再重新決定 0~8

/*如果畫面都是red，大家都找不到空間，大家都馬上去找新位置
當下發生無限迴圈不斷找新位置，消能變差
 解決方式:稍微空窗0.1秒，不會這麼頻繁馬上找*/
setTimeout(()=>{
    showIt(obj);
},100);
return;
}else{
animals[obj.space].classList.add('red');
animals[obj.space].src='img/on.png';
setTimeout(()=>{
    animals[obj.space].classList.remove('red');
    animals[obj.space].src='img/state.png';
    },obj.show*1000)

}
}
const getCombo=(space)=>{
    if(animals[space].classList.contains('red')){
//如果是red，計分+1，並讓red to green
 count++;
 countNode.textContent=count;

 animal[space].classList.remove('red');
 animal[space].classList.add('green');
 animal[space].src='img/off.png';
 //因為計分red to green 了，原本這個red to yellow00000000000000000000000000000

 setTimeout(()=>{
    animals[space].classList.remove('green');
    animals[space].src='img/state.png';
 },1000);
}
}

//初始執行區域
btnStart.addEventListener('click',gameStart);
document.onkeydown=function(event){
    console.log(event);
    switch(event.keyCode)[
        case103
    ]
}

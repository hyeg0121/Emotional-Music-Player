const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const deg = 45; //각각의 article 요소가 회전할 각도
const len = lists.length-1 //순번이 0부터 시작하므로 전체 개수에서 1을 뺌
let i = 0;

for(let el of lists){
    let pic = el.querySelector("pic");
    el.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
    pic.style.backgroundImage = `url(../images/imfg${i+1}.jpg)`;
    i++;
}

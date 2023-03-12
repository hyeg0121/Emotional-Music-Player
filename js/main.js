const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const deg = 45; //각각의 article 요소가 회전할 각도
const len = lists.length-1 //순번이 0부터 시작하므로 전체 개수에서 1을 뺌

let i = 0;

let active = 0;

for(let el of lists){
    let pic = el.querySelector(".pic");
    el.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
    pic.style.backgroundImage = `url(./images/img${i+1}.jpg)`;
    i++;
}

//이동 버튼
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");

let num = 0;

prev.addEventListener("click", ()=>{
    num++;
    frame.style.transform = `rotate(${deg * num}deg)`;

    // 현재 패널의 순번이 0
    (active == 0) ? active = len : active--;
    activation(active, lists);
});

next.addEventListener("click", ()=>{
    num--;
    frame.style.transform = `rotate(${deg * num}deg)`;

    // 현재 패널의 순번이 0
    (active == 0) ? active = 0 : active++;
    activation(active, lists);
});

function activation(index, lists){
    for (let el of lists){
        el.classList.remove("on");
    }
    lists[index].classList.add("on");
}


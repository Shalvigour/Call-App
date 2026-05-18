let form = document.querySelector("form");
let forminputs = document.querySelectorAll("form .inp")
let submit = document.querySelector("form .btns-box input")
let form_add = document.querySelector(".form-add")
let close = document.querySelector("form .btns-box div")
let add = document.querySelector(".btn-add .add-form")
let up = document.querySelector(".btn-add .up")
let down = document.querySelector(".btn-add .down")

form.addEventListener("submit", function(event){
    let valid = true;
    for (let inp of forminputs){
        if(inp.value.trim()===""){
            alert(`${inp.placeholder} is still empty`);
            event.preventDefault();
            return;
        }
    }
    let selected = document.querySelector('input[name="category"]:checked')
    saveToLocalStorage({
        imageUrl:forminputs[0].value,
        name:forminputs[1].value,
        city:forminputs[2].value,
        purpose:forminputs[3].value,
        category:selected.value

    });
    form.style.display="none"
    form_add.style.display="flex"
    event.preventDefault();
    form.reset();
    showCards();

});

function saveToLocalStorage(obj){
     if(localStorage.getItem("tasks")===null){
        let old = [];
        old.push(obj);
        localStorage.setItem("tasks",JSON.stringify(old));
     }else{
        let old = localStorage.getItem("tasks");
        old = JSON.parse(old);
        old.push(obj);
        localStorage.setItem("tasks",JSON.stringify(old));
     }
}

close.addEventListener("click",(event)=>{
    form.style.display="none";
    form.reset();
    form_add.style.display="flex";
    showCards();

})

add.addEventListener("click",function(event){
    form.style.display="flex";
    form_add.style.display="none";

})

let stack = document.querySelector(".stack-main");
let tasks = JSON.parse(localStorage.getItem("tasks"));
console.log(tasks);
function showCards(){
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if(tasks!==null){
        tasks.forEach((task)=>{
            let frame1 = document.createElement("div");
            frame1.classList.add("stack");

            let img = document.createElement("div");
            img.classList.add("image");
            img.style.backgroundImage=`url(${task.imageUrl})`;
            frame1.appendChild(img);

            let h3 = document.createElement("h3");
            h3.classList.add("card-name");
            h3.innerText = task.name;
            frame1.appendChild(h3);

            let div1 = document.createElement("div");
            div1.classList.add("card-city");
            

            let p1 = document.createElement("p");
            p1.innerText="City";

            let p2 = document.createElement("p");
            p2.innerText=task.city;

            div1.appendChild(p1);
            div1.appendChild(p2);
            frame1.appendChild(div1);

            let div2 = document.createElement("div");
            div2.classList.add("card-book");

            let p3 = document.createElement("p");
            p3.innerText="Purpose";

            let p4 = document.createElement("p");
            p4.innerText=task.purpose;

            div2.appendChild(p3);
            div2.appendChild(p4);

            frame1.appendChild(div2);
            let div3 = document.createElement("div");
            div3.classList.add("card-btn");

            let button1 = document.createElement("button");
            button1.innerText="Call";

            let button2 = document.createElement("button");
            button2.innerText="Message";

            div3.appendChild(button1);
            div3.appendChild(button2);
            frame1.appendChild(div3);

            stack.appendChild(frame1);

        })
    }
}

up.addEventListener("click",(event)=>{
    upCard();
})

down.addEventListener("click",(event)=>{
    downCard();
})

function upCard(){
    let obj = stack.firstElementChild;
    if(obj){
        stack.appendChild(obj);
    }
}

function downCard(){
    let obj = stack.lastElementChild;
    if(obj){
        stack.prepend(obj);
    }
}



let form = document.querySelector("form");
let forminputs = document.querySelectorAll("form .inp")
let submit = document.querySelector("form .btns-box input")
let form_add = document.querySelector(".form-add")
let close = document.querySelector("form .btns-box div")

console.dir(forminputs[0])
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
})

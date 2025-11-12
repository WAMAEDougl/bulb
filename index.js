const onBtn = document.querySelector("#on")
const offBtn = document.querySelector("#off")
const imgElement =document.querySelector("img")

onBtn.addEventListener('click',()=>handleclick('on'));
offBtn.addEventListener('click',()=>handleclick('off'));

function handleclick(action){
switch (action){
    case "on":{
        imgElement.setAttribute("src", "on.png");
        break;
    }
    default:{
        imgElement.setAttribute("src", "off.jpg");
    }
}
}

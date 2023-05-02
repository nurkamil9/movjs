const btn = document.querySelectorAll("button")
const root = document.querySelector("#root")

const url = 'https://api.sampleapis.com/movies'
const endpoints = {
    animation:"/animation",
    classic:"/classic",
    comedy:"/comedy",
    drama:'/drama',
    horror:"/horror",
    family:"/family",
    mystery:"/mystery",
    western:"/western"
}

function render(params) {
    fetch(url+endpoints.animation)
    .then(req=>req.json())
    .then(data=>{
        console.log(data);
        anim(data)
    })
}

btn[0].onclick=()=>{
    render()
}





function anim(params) {
    root.innerHTML=''
    for (const item of params) {
        root.innerHTML +=`
        <div class="card" style="width: 18rem;">
      <img src=${item.posterURL} class="card-img-top" alt="...">
     <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    
     </div>
     </div>
        
        `
    }
}

function classic(params) {
    fetch(url+endpoints.classic)
    .then(req=>req.json())
    .then(data=>{
        console.log(data);
        anim(data)
    })
}
btn[1].onclick=()=>{
    classic()
}


function comedy(params) {
    fetch(url+endpoints.comedy)
    .then(req=>req.json())
    .then(data=>{
        console.log(data);
        anim(data)
    })
}
btn[2].onclick=()=>{
    comedy()
}

function drama(params) {
    fetch(url+endpoints.drama)
    .then(req=>req.json())
    .then(data=>{
        console.log(data);
        anim(data)
    })
}
btn[3].onclick=()=>{
    drama()
}

function horror(params) {
    fetch(url+endpoints.horror)
    .then(req=>req.json())
    .then(data=>{
        console.log(data);
        anim(data)
    })
}
btn[4].onclick=()=>{
    horror()
}

function family(params) {
    fetch(url+endpoints.family)
    .then(req=>req.json())
    .then(data=>{
        console.log(data);
        anim(data)
    })
}
btn[5].onclick=()=>{
    family()
}

function mystery(params) {
    fetch(url+endpoints.mystery)
    .then(req=>req.json())
    .then(data=>{
        console.log(data);
        anim(data)
    })
}
btn[6].onclick=()=>{
    mystery()
}
function western(params) {
    fetch(url+endpoints.western)
    .then(req=>req.json())
    .then(data=>{
        console.log(data);
        anim(data)
    })
}
btn[7].onclick=()=>{
    western()
}
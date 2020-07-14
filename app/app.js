var names = [];


function setName(data){
    names.push({name:data});
    renderList ()
}

function renderList (){
    var setData = document.getElementById("list");
    setData.innerHTML = ""
    for (let i = 0; i < names.length; i++) {
        setData.innerHTML += `
        <li class="list-group-item">${names[i].name}</li>
        `
    }
}




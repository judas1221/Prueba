let listPhotography = document.querySelector(".galery ul");
let divContainerinput = document.querySelector(".button");
let urlApi ="https://api.unsplash.com/search/photos/" ;
let porfolio="random";
let key_acces ="MGsBFT31HMi6UZnadFDstetf8CL9DZ-0IfNo3RNacNg";
let page = 1;

console.log(divContainerinput);
async function getPhoto(parameter){
    const result = await fetch(`${urlApi}?client_id=${key_acces}&query=${parameter}&page=${page}`);
    console.log(result);
    let baseData = await result.json();
    console.log(baseData);
    return baseData;
}

let images = getPhoto(porfolio);
images.then(baseData =>{
    let resultArray = baseData.results;
    console.log(resultArray);
    for (let value of resultArray) {
        const card = createImagesCard(value);
        listPhotography.innerHTML += card;
    }
}).catch(error => console.log(error));
const createImagesCard = (parameter) => {
    return `<li><img src="${
        parameter.urls.small
    }"></li>`;
}

//efecto colunna o fila
let row = document.getElementById("row");
console.log(row);
row.addEventListener('click',()=>{
    listPhotography.classList.toggle("row");
    listPhotography.classList.toggle("column");
    
});
let column = document.getElementById("column");
console.log(column);
column.addEventListener('click',()=>{
    listPhotography.classList.toggle("column");
    listPhotography.classList.toggle("row");
});

// mostrar mas resultados

let more = document.querySelector("i.button nput");
more.addEventListener('click', ()=>{
    while (page < 85){
        page +=1
        let  moreImages= getPhoto(porfolio);
        moreImages.then(baseData =>{
            let resultArray = baseData.results;
            console.log(resultArray);
            for (let value of resultArray) {
                const card = createImagesCard(value);
                listPhotography.innerHTML += card;
            } 
        }).catch(error => console.log(error));
        break
    }
});

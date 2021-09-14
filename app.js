const images= [

    "./img/1.jpg",
    "./img/2.jpg",
    "./img/3.jpg",
    "./img/4.jpg",
    "./img/5.jpg",
    "./img/6.jpg",
    "./img/7.jpg",
    "./img/8.jpg"
]
let index = 0;

const imgElement = document.getElementById('slider-img')

setInterval(()=>{
    if(index >= images.length){
        index=0;
    }
    const imageUrl= images[index];
    imgElement.setAttribute('src', imageUrl)
    console.log(imageUrl)
    index++;
},2000)
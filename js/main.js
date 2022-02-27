const loadData = async ()=>{
    fetch('https://jsonplaceholder.typicode.com/photos')
   .then(res=> res.json())
   .then(data => getData(data)); 
}
loadData();
const getData=(photos)=>{
    console.log(photos);
    const container = document.getElementById('main');
    photos.forEach(photo => {
        const div =document.createElement('div');
        div.classList.add('image-container')
        div.innerHTML = `
            <img src="${photo.url}" width="100%" alt="">
        `;
        container.appendChild(div)
        
    });
}
const accessKey = '6kI7ONX5Y-41Hl9IleoXY9tbzK0zg6iNw-ebZ8-saQc'

const searchForm = document.querySelector('form');
const imagesContainer = document.querySelector('.images-container');
const searchInput = document.getElementById('search-input');

const loadBtn = document.querySelector('.load-more');

let page = 1;

async function fetchImages(query, pageNo){
    if(pageNo===1){
        imagesContainer.innerHTML = '';
    }
    
    const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=28&page=${pageNo}&client_id=${accessKey}`
    try{
        const response  = await fetch(url);
        const data = await response.json();
        if(data.results.length>0){
            data.results.forEach((image)=>{
                const imageElement = document.createElement('div');
                imageElement.classList.add('imageDiv');
                imageElement.innerHTML = `<img src="${image.urls.regular}"/>`;
    
                const overlayElement = document.createElement('div');
                overlayElement.classList.add('overlay');
    
                const overlayText = document.createElement('h3');
                overlayText.innerText = `${image.alt_description}`;
                overlayElement.appendChild(overlayText);
    
                imageElement.appendChild(overlayElement);
                imagesContainer.appendChild(imageElement);
                if(data.total_pages===pageNo){
                    loadBtn.style.display = 'none';
                }
                else{
                    loadBtn.style.display = 'block';
                }
            });
        }
        else{
            imagesContainer.innerHTML = `<h2>No image found.</h2>`;
            if(loadBtn.style.display === 'block'){
                loadBtn.style.display = 'none';
            }
        }
        
    }catch(error){
        console.error('Error Fetching Images', error);
    }

    
    

}

searchForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const inputValue = searchInput.value.trim();
    if(inputValue!==''){
        page = 1;
        fetchImages(inputValue, page);
    }
    else{
        imagesContainer.innerHTML = `<h2>Please enter a search query.</h2>`;
    }
})

loadBtn.addEventListener('click', ()=>{
    fetchImages(searchInput.value.trim(), ++page);
})


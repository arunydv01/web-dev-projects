let lists = document.querySelector('#book-list ul');

lists.addEventListener(('click'), (e)=>{
    if(e.target.className=='delete'){
        let li = e.target.parentElement;
        li.parentNode.removeChild(li);
    }
})

let addForm = document.forms['add-book'];

addForm.addEventListener(('submit'), (e)=>{
    e.preventDefault();
    let value = addForm.querySelector('input[type="text"]').value;
    console.log(value);

    //create elements
    let Li = document.createElement("li");
    let bookName = document.createElement("span");
    let deleteBtn = document.createElement("span");

    //add content
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    //add classes
    bookName.classList.add("name");
    deleteBtn.classList.add("delete");

    //append the span tags to Li
    Li.appendChild(bookName);
    Li.appendChild(deleteBtn);

    //append Li to ul (lists)
    lists.appendChild(Li);

})

let hideBox =document.querySelector('#hide');

hideBox.addEventListener(('change'), (e)=>{
    if(hideBox.checked==true){
        lists.style.display = "none";
    }
    else{
        lists.style.display = "initial"
    }
})

let searchBar = document.forms['search-books'].querySelector('input');

searchBar.addEventListener(('keyup'), (e)=>{
    const term = e.target.value.toLowerCase();
    const books = lists.getElementsByTagName('li');
    Array.from(books).forEach((book)=>{
        const titleText = book.firstElementChild.textContent.toLowerCase();
        if(titleText.indexOf(term)!=-1){
            book.style.display = "block";
        }
        else{
            book.style.display = "none";
        }
    })

})

const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', (e) => {
  if(e.target.tagName == 'LI'){
    const targetPanel = document.querySelector(e.target.dataset.target);
    Array.from(panels).forEach((panel) => {
      if(panel == targetPanel){
        panel.classList.add('active');
      }else{
        panel.classList.remove('active');
      }
    });
  }
});


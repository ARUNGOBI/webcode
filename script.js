
const url = ("https://www.anapioficeandfire.com/api/books");

const Api= async()=>{
  
    const request =await  fetch(url);
    const response=await  request.json();
    const data= await  response;

  
    data.forEach((element,idx)=>{
    const Listitem = document.getElementById("root");

  
    Listitem.innerHTML+=`
    <div class="main">
    <div class="container">
    <div class="card idx">${idx+1}</div>
    <div class="card"><span> Name</span> :${element.name}</div>
    <div class="card"><span> Isbn:</span> ${element.isbn}</div>
    <div class="card"><span>Page No :</span>  ${element.numberOfPages}</div>
    <div class="card"><span>Author :</span>  ${element.authors}</div>
    <div class="card"><span>Release Date :</span> ${element.released}</div>
    </div>
    </div>
    `
          
});
};

Api()

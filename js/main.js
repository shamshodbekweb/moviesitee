let elMovList = document.querySelector('.movie__list')
let elSel__category = document.querySelector('.sel__category')
let  partMovie = movies.splice(1,900)
partMovie.forEach((item)=>{
    let newLi = document.createElement('li')
    newLi.innerHTML  = `
    <div class="card" style="width: 18rem;">
  <img src="	https://i.ytimg.com/vi/${item.ytid}/hq720.jpg?" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.Title}</h5>
    <p class="card-text">${item.fulltitle}</p>
    <p class="card-text">${item.movie_year}</p>
    <p class="card-text">${item.imdb_rating}</p>
    <a href="https://www.youtube.com/watch?v=${item.ytid}" target="_blank" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    `
    console.log(item.Title);
    elMovList.appendChild(newLi)
});

fnRender(partMovie)
function fnRender(data) {
  elMovList.innerHTML = ''
  data.forEach((item)=>{
    let newLi = document.createElement('li')
    newLi.innerHTML  = `
    <div class="card" style="width: 18rem;">
  <img src="	https://i.ytimg.com/vi/${item.ytid}/hq720.jpg?" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.Title}</h5>
    <p class="card-text">${item.fulltitle}</p>
    <p class="card-text">${item.movie_year}</p>
    <p class="card-text">${item.imdb_rating}</p>
    <a href="https://www.youtube.com/watch?v=${item.ytid}" target="_blank" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    `
    console.log(item.Title);
    elMovList.appendChild(newLi)
});
}
function fnTime(value){
  if(value == 'old'){
    fnRender(partMovie.sort((a,b)=>a.movie_year - b.movie_year));
  }else{
    fnRender(partMovie.sort((a,b)=>b.movie_year - a.movie_year));
  }
}

function fnRating(value) {
  if(value == 'min'){
    fnRender(partMovie.sort((a,b)=>a.imdb_rating - b.imdb_rating));
  }else{
    fnRender(partMovie.sort((a,b)=>b.imdb_rating - a.imdb_rating));
  }
}



  let CategoriesArr = []
  partMovie.forEach((item)=> {
    if(CategoriesArr.includes(item.Categories) == false){
      CategoriesArr.push(item.Categories)
    }
  })
  CategoriesArr.sort().forEach((item)=>{
    let newOption = document.createElement('option')
    newOption.textContent = item
    newOption.value = item
    elSel__category.appendChild(newOption)
  })

function fnCategory(value) {
  fnRender(partMovie.filter((item)=> item.Categories == value));
}


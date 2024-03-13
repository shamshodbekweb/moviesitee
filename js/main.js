elMovList = document.querySelector('.movie__list')
var  partMovie = movies.splice(0,300)
partMovie.forEach((item)=>{
    var newLi = document.createElement('li')
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
})
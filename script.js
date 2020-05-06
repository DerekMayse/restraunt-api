// Display the restaurant's address, aggregate user rating, and average cost for in addition to its name
// Make each restaurant's name a hyperlink to their website
// Style each restaurant as a card, and add a card to each button that says "View Menu". This button should be a hyperlink to the restaurant's menu.



fetch("http://localhost:8088/restaurants")
  .then((response) => response.json())
  .then((restaurants) => {
    restaurants.forEach((restaurant) => {
    //   console.log(restaurant.restaurant);

      document.querySelector("#restaurantNames").innerHTML += `
     
        <div id="card">
        <a id="name" href="${restaurant.restaurant.url}">${restaurant.restaurant.name}</a>
            <h2 id="address">${restaurant.restaurant.location.address}</h2>
        <h3 id="rating">User Rating: ${restaurant.restaurant.user_rating.aggregate_rating}</h3>
         <h4 id="cost">Average Price For Two: ${restaurant.restaurant.average_cost_for_two}</h4>
         <form id ="button" action=${restaurant.restaurant.menu_url}>
         <button type="submit">View Menu</button>
      </form>
        </div>
        `;
      
    });
    document.querySelector("#search").innerHTML = `
    <div class="search-container">
      <form >
       <input id="searchBar" type="text" placeholder="Search.." name="search">
      </form>
      <button type="submit"><i class="fa fa-search" id="searchButton"></i></button>
    `

    document.querySelector("#search").addEventListener("click", function (){
        if(event.target.id ==="searchButton") console.log("click")
       const searchTerm = document.querySelector("#searchBar").value
       console.log(searchTerm)
       fetch(`http://localhost:8088/restaurants/?q=${searchTerm}`)
       .then((response) => response.json())
       .then((restaurants) => { 
        restaurants.forEach((restaurant) => {
            //   console.log(restaurant.restaurant);
        
              document.querySelector("#restaurantNames").innerHTML = `
             
                <div id="card">
                <a id="name" href="${restaurant.restaurant.url}">${restaurant.restaurant.name}</a>
                    <h2 id="address">${restaurant.restaurant.location.address}</h2>
                <h3 id="rating">User Rating: ${restaurant.restaurant.user_rating.aggregate_rating}</h3>
                 <h4 id="cost">Average Price For Two: ${restaurant.restaurant.average_cost_for_two}</h4>
                 <form id ="button" action=${restaurant.restaurant.menu_url}>
                 <button type="submit">View Menu</button>
              </form>
                </div>
                `;
              

       })

    })
  });
document.querySelector("#restaurantNames").addEventListener("click", function () {
  if (event.target.id === "menu"){ console.log("click");}
});

  })
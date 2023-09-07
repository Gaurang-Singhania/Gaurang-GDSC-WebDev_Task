
const url = "https://fakestoreapi.com/products";
let eventsData;
async function f(){
try {
	const response = await fetch(url);
	const result = await response.json();
	console.log(result);
	
const events=result.map((element)=>{
	return element;
})
console.log(events);
ihtml='';
for (var item in events) {
	ihtml += `<div class="upcoming-img-box"><div class="images"><img src="${events[item].image}" alt="movie banner"></div><div class="details category-content"><p>Id:${events[item].id} </p><p>Title:${events[item].title}</p><p>Category:${events[item].category}</p><p>Description:${events[item].description} </p><p>Rate:${events[item].rating.rate}</p><p>Count:${events[item].rating.count}</p></div></div>`;
}
cardContainer.innerHTML = ihtml;

eventsData = events;
console.log(eventsData);

} catch (error) {
	console.error(error);
}
}
f();

document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("searchBar");
    const eventListContainer = document.getElementById("eventList");
  
    searchBar.addEventListener("input", function () {
      const searchTerm = searchBar.value.trim().toLowerCase();
      const matchingEvents = eventsData.filter((event) =>
        event.category.toLowerCase().includes(searchTerm)
      );
      renderEventCards(eventsData);
      renderEventCards(matchingEvents);
    });
  });
  
  function renderEventCards(data) {
    const eventListContainer = document.getElementById("cardContainer");
  
    if (data.length === 0) {
      eventListContainer.innerHTML = "No matching events found.";
    } else {
      let ihtml = "";
      data.forEach((event) => {
        ihtml += `<div class="upcoming-img-box"><div class="images"><img src="${event.image}" alt="movie banner"></div><div class="details category-content"><p>Id:${event.id} </p><p>Title:${event.title}</p><p>Category:${event.category}</p><p>Description:${event.description} </p><p>Rate:${event.rating.rate}</p><p>Count:${event.rating.count}</p></div></div>`;
      });
      eventListContainer.innerHTML = ihtml;
    }
  }
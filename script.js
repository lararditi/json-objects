// Function to render your items
function renderItems(quotes) {
  // The `ul` where the items will be inserted
  const quotesList = document.getElementById("quotes");

  let foodTrue = [];
  let foodFalse = [];

  quotes.forEach(function (item) {
    if (item.food == false) {
      foodFalse.push(item);
    } else if (item.food == true) {
      foodTrue.push(item);
    }
  });


  // Loop through each item in the quotes array

  quotes.forEach(function (item) {

    const listItem = document.createElement("div"); // Make the `div
    listItem.classList.add("quote");

    const button =document.createElement("button"); 
    
    button.addEventListener("click", function(){
      
      var selectedID= document.getElementById("detailbtn"+item.id);
      if (selectedID.style.display == "none") {
        selectedID.style.display = "";
      } else {
        selectedID.style.display = "none";
      }

      // listItem.classList.toggle("is-open")
    })

    listItem.appendChild(button)
    // This can get annoying, so we can use “template literals” instead
    const itemDetails = `
				<div class="data-container">
					<div class="data-point" style=""></div>
					<div class="data-details" id= "detailbtn${item.id}" style="display: none;">
						<h2>${item.unique_quote_id}</h2>
            <p><em>Title: ${item.title}</p>
						<p><em>Author: ${item.author}</p>
						
					</div>
				</div>
			`;

    listItem.insertAdjacentHTML("beforeend", itemDetails); // Which can we then insert

    // You can build logic from your data, too
    if (item.indifferent) {
      // If this is `false`
      listItem.classList.add("indifferent"); // Add this class to the whole `li`
    }

    if (item.food == true) {
      // If this is `true`
      listItem.classList.add("green"); 
    }

    if (item.food == false) {
      // If this is `true`
      listItem.classList.add("yellow"); 
    }

    const noisyDetails = document.createElement("p");
    listItem.appendChild(noisyDetails);

    quotesList.appendChild(listItem); // Then add the whole `li` into the `ul`
   });
 }

// Fetch gets your JSON file.
fetch("data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    // And passes the data to the function, above!
    renderItems(response); 
  });


  // let drawerButtonInfo = document.createElement("div");
  // // add a class to the button element
  // drawerButtonInfo.classList.add("info");
  // // render the value of the record's title
  // // drawerButtonInfo.innerHTML = `${item.unique_quote_id}`;

  // drawerButton.append(quote);
  // container.append(quote);

  // // create drawer toggle function
  // drawerButton.addEventListener("click", () => {
  //   quotes.classList.toggle("is-open");
   

 
       


  // });
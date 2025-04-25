
let btn = document.querySelector(".btn");
let api = "https://random-data-api.com/api/users/random_user?size=1";

async function getRandomUser() {
  try {
    let response = await fetch(api);
    let data = await response.json();
    let container = document.getElementById("div1");
    container.innerHTML = "";

    data.map((user) => {
      let card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${user.avatar}" alt="${user.first_name}">
        <h2>${user.gender}</h2>
        <p>${user.first_name} ${user.last_name}</p>
        <p class="pe">Email: ${user.email}</p>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    console.log("Xatolik:", error);
  }
}

getRandomUser();
btn.addEventListener("click", getRandomUser);

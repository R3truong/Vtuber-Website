document.addEventListener("DOMContentLoaded", async (e) => {
  let nameHTML;
  let agencyHTML;
  let bodyHTML;
  let faceHTML;
  e.preventDefault();
  fetch("http://localhost:3000/vtuber", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      nameHTML = document.getElementById("vtuber-name");
      agencyHTML = document.getElementById("vtuber-agency");
      bodyHTML = document.getElementById("vtuber-body");
      faceHTML = document.getElementById("vtuber-face");
      nameHTML.innerText = data.name;
      agencyHTML.innerText = data.agency;
      bodyHTML.alt = `${data.name}'s full body`;
      bodyHTML.src = data.body;
      faceHTML.alt = `${data.name}'s face`;
      faceHTML.src = data.face;
    })
    .catch((error) => {
      console.log(error);
    });
});

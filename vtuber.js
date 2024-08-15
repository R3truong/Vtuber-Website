document.addEventListener("DOMContentLoaded", () => {
  fetch("api/vtuber")
    .then((response) => response.json())
    .then((data) => {
      const vtuber_name = document.getElementsByClassName("vtuber_name");
      vtuber_name.textContent = data.name;
      console.log(vtuber_name);
      console.log(data.name);
    })
    .catch((error) => {
      console.log(error);
    });
});

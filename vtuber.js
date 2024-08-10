document.addEventListener("DOMContentLoaded", function () {
  fetch("vtuber.php")
    .then((response) => response.text()) // Handle response as text
    .then((data) => {
      console.log("Server Response: Connected"); // Log the response to the console
    })
    .catch((error) => {
      console.error("Fetch error:", error); // Log any errors to the console
    });
});

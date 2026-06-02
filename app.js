let btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let title = document.querySelector(".title").value;
  let body = document.querySelector(".body").value;
  fetch("http://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      title,
      body,
      userId: 1,
    }),
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
});

const name = document.body.querySelector(".main")
const form = document.body.querySelector(".name-form")

form.addEventListener('submit', (event) => {
  event.preventDefault()

  // option: using Fetch API
  const opts = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: event.target[0].value })
  }
  fetch(`http://localhost:3000/api/name`, opts)
    .then(res => res.json())
    .then(data => {
      name.innerText = data.name
    })

  // option: using Axios API
  // axios.post(`http://localhost:3000/api/name`, {
  //   name: event.target[0].value
  // })
  // .then(res => {
  //   name.innerText = res.data.name
  // })
})

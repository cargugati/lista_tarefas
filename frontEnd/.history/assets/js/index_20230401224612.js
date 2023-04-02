window.onload = () => {
  get_username(1)
}

function get_username(id) {
  fetch(`http://localhost:3000/user/${id}`).then((response) => {
    if (response.status === 200) {
      console.log("ok")
      console.log(response)
    } else {
      console.log("nok")
    }
  })
}

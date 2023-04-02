window.onload = () => {
  get_username(1)
}

function get_username(id) {
  fetch(`http://localhost:3000/user/${id}`)
}

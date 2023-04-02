window.onload = () => {
  get_username
}

function get_username(id) {
  fetch(`http://localhost:3000/user/${id}`)
}

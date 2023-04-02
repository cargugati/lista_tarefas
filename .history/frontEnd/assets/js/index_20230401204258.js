window.onload = () => {}

function get_isername(id) {
  fetch(`http://localhost:3000/user/${id}`)
}

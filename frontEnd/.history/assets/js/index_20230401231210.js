let id = 1

window.onload = () => {
  get_username(id)
}

function get_username(id) {
  fetch(`http://localhost:3000/user/${id}`)
    .then((response) => {
      if (response.status === 200) {
        return response.json()
      } else {
        console.log("ERRO!")
      }
    })
    .then((dados) => {
      if (dados.length === 0) {
        console.log("Erro!")
      } else {
        console.log(dados)
        document.querySelector("#username").textContent = dados[0].username
      }
    })
}

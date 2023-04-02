window.onload = () => {
  get_username(1)
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
      if (dados.Length === 0) {
        console.log("Erro!")
      } else {
        console.log(dados)
      }
    })
}

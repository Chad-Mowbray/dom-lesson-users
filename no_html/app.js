console.log("hi")



function createH1() {
  let body = document.querySelector("body")
  let h1 = document.createElement("h1")
  h1.textContent = "Welcome Page"
  body.appendChild(h1)
}


function createContainer() {
  let body = document.querySelector("body")
  let div = document.createElement("div")
  div.id = "container"
  div.style.display = "grid"
  div.style.gridTemplateColumns = "repeat(5, 1fr)"
  div.style.gridTemplateRows = "repeat(5, 1fr)"
  body.appendChild(div)
}

function createBoxes() {
  let container = document.querySelector("#container")
  for(let i = 1; i < 26; i++) {
    let div = document.createElement("div")
    div.style.backgroundColor = "aquamarine"
    div.style.border = "1px solid black"
    div.style.padding = "30px"
    div.style.margin = "4px"
    div.style.textAlign = "center"
    div.textContent = i
    container.appendChild(div)
  }
}

function createColorChangeListner() {
  let container = document.querySelector("#container")
  container.addEventListener("click", (e) => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    e.target.style.backgroundColor = "#" + randomColor;toString(16);
  })
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1
}


function addRandomNameListener() {
  let h1 = document.querySelector("h1")
  let newh2 = document.createElement("h2")
  h1.appendChild(newh2)
  h1.addEventListener("click", async (e) => {
    let resp = await fetch(`https://jsonplaceholder.typicode.com/users/${getRandomInt(10)}`)
    let respJson = await resp.json()
    let name = respJson.name
    console.log(name)
    let h2 = document.querySelector("h2")
    h2.innerText = name
  })
}



window.onload = () => {

  createH1()
  createContainer()
  createBoxes()
  createColorChangeListner()
  addRandomNameListener()

}










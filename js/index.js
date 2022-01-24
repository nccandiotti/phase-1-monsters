"strict"
// ---------DELIVERABLES ------------
//1. When the page loads, show the first 50 monsters. ✅ Each monster's name, age, and description should be shown.✅
//2. Above your list of monsters, you should have a form to create a new monster. ✅You should have fields for name, age, and description, and a 'Create Monster Button'.✅
// When you click the button, the monster should be added to the list and saved in the API.
//3.At the end of the list of monsters, show a button. When clicked, the button should load the next 50 monsters and show them.

// --------DELIVERABLE ONE

// FETCH DATA ✅
fetchMonsterData()
function fetchMonsterData() {
  fetch("http://localhost:3000/monsters")
    .then((response) => response.json())
    .then((monsterArrayObj) => displayMonsters(monsterArrayObj.slice(0, 50)))
}

// SHOW FIRST 50 MONSTERS - NAME, AGE, DESCRIPTION✅
function displayMonsters(monsterArray) {
  const monsterDiv = document.querySelector("#monster-container")
  monsterArray.forEach((monster) => {
    const monsterCard = document.createElement("div")
    monsterCard.innerHTML = `<h4 id = "name">${monster.name}</h4> <p id = "age">${monster.age},</p> <p id = "description">${monster.description}</p>`
    // monsterCard.textContent = `${monster.name}, ${monster.age}, ${monster.description}`
    monsterDiv.appendChild(monsterCard)
    // console.log(monsterArray.length)
  })

  //   monsterCard.textContent = monsterArray.filter((monster) => monster.id <= 50)
}

// --------DELIVERABLE TWO
//2. Above your list of monsters, you should have a form to create a new monster.

// grab section to create monster form✅
const monsterFormDiv = document.querySelector("#create-monster")

// Create form✅
const createMonsterForm = document.createElement("form")
// createMonsterForm.method = "POST"
createMonsterForm.action = "#"
createMonsterForm.id = "createMonsterForm"

// innerHTML for the form✅
createMonsterForm.innerHTML = `
<p>Monster Name</p>
<input id = "monsterName" class = "input" type = "text" name='name' /> <br>
<p>Monster Age</p>
<input id = "monsterAge" class = "input" type = "text" name='age' /> <br>
<p>Monster Description</p>
<input id = "monsterDescription" class = "input" type = "text" name='description' /> <br>
<input type = "submit" value="Create A Monster" id ="createMonsterButton" ></input>`
// Add form to the DOM ✅
monsterFormDiv.appendChild(createMonsterForm)

// grab submit button✅
const monsterButton = document.querySelector("#createMonsterButton")

// add event on the button
monsterButton.addEventListener("click", (e) => {
  e.preventDefault()
  console.log(e.target.input.value)
  //   createNewMonster(e.target.input.value)
})
// You should have fields for name, age, and description, and a 'Create Monster Button'.
// When you click the button, the monster should be added to the list and saved in the API.

// --------DELIVERABLE THREE

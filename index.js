document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')
  const newJokeLi = document.createElement('li')
  let username = document.getElementById('name-input').value
  let joke;

  function fetchJoke(){
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
    .then(jokeData => joke = jokeData.joke)
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    username = document.getElementById('name-input').value
    if(username === "") return;
    fetchJoke()
    newJokeLi.innerHTML += `
    <p><span class="username">${username} says:</span> ${joke}</p>
    `
    jokeList.appendChild(newJokeLi)
  })
})

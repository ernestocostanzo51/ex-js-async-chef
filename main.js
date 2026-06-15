
async function fetchJson(url) {
    const response = await fetch(url);
    const obj = await response.json();
    return obj;
}
async function getChefBirthday(id) { 
    try{
         const ricetta = await fetchJson(`https://dummyjson.com/recipes/${id}`);
         const chef = await fetchJson(`https://dummyjson.com/users/${ricetta.userId}`);
          return chef.birthDate;
    } catch(error){
        throw error
    }
}
getChefBirthday(1)
  .then(birthday => console.log("Data di nascita dello chef:", birthday))
  .catch(error => console.error("Errore:", error.message));

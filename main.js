
async function fetchJson(url) {
    const response = await fetch(url);
    const obj = await response.json();
    return obj;
}


async function getChefBirthday(id) { 
    const ricetta = await fetchJson(`https://dummyjson.com/recipes/${id}`);
    const chef = await fetchJson(`https://dummyjson.com/users/${ricetta.userId}`);
    return { ...ricetta, chef };
}

(async () => {
    const compleanno = await getChefBirthday(1);
    console.log(compleanno);
})();
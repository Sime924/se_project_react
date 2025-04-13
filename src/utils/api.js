const baseUrl = "http://localhost:3001";

function getItems() {
  return fetch(`${baseUrl}/items`).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: $(res.status)`);
  });
}

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject("Error");
}

function addItem(itemData) {
  return fetch("http://localhost:3001/items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(itemData),
  }).then(checkResponse);
}

function deleteCard(id) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: headers,
  }).then(checkResponse);
}

export { getItems, deleteCard, addItem };

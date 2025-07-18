const baseUrl = "http://localhost:3001";

function getItems() {
  return fetch(`${baseUrl}/items`).then(checkResponse);
}

export function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: $(res.status)`);
}

function addItem(itemData) {
  const token = localStorage.getItem("token");
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(itemData),
  }).then(checkResponse);
}

function deleteCard(id) {
  const token = localStorage.getItem("token");
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

function addCardLike(id) {
  const token = localStorage.getItem("token");
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

function removeCardLike(id) {
  const token = localStorage.getItem("token");
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

export { getItems, deleteCard, addItem, addCardLike, removeCardLike };

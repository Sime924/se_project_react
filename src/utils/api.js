const baseUrl = "http://localhost:3001";

function getItems() {
  return fetch(`${baseUrl}/items`).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: $(res.status)`);
  });
}

function addItems(id) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "POST",
    headers: this._headers,
  }).then(this._checkResponse);
}

export { getItems };

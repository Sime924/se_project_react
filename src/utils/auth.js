const baseUrl = "http://localhost:3001";

function signup(userData) {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: json.stringify(userData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Signin error:", error);
      throw new Error("There was a problem with the signin");
    });
}

function signin(email, password) {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response is not ok");
      }
      return response.json();
    })
    .then((data) => {
      localStorage.setItem("token", data.token);
      return data;
    })
    .catch((error) => {
      console.error("Signin error:", error);
      throw new Error("There was a problem with the signin.");
    });
}

const checkTokenValidity = (token) => {
  return fetch(`${baseUrl}/user/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  });
};

export { signup, signin, checkTokenValidity };

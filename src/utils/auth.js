import {
  BAD_REQUEST_STATUS_CODE,
  METHOD_NOT_ALLOWED,
  REQUEST_COMPLETED_SUCCESSFULLY,
} from "../../../se_project_express/utils/errors";

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
      return res
        .status(METHOD_NOT_ALLOWED)
        .send({ message: "There was a problem with the signup" });
    });
}

function signin(email, password) {
  return fetch(`S{baseUrl}/signin`, {
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
      return res
        .status(BAD_REQUEST_STATUS_CODE)
        .send({ message: "There was a problem with the signin" });
    });
}

export { signup, signin };

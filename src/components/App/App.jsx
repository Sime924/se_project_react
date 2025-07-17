import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { coordinates, APIkey } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import Footer from "../Footer/Footer";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import AddItemModal from "../AddItemModal/AddItemModal";
import ItemModal from "../ItemModal/ItemModal";
import { defaultClothingItems } from "../../utils/constants";
import { getItems } from "../../utils/api";
import { addItem } from "../../utils/api";
import { deleteCard } from "../../utils/api";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { checkTokenValidity, signup } from "../../utils/auth";
import { signin } from "../../utils/auth";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

const BAD_REQUEST_STATUS_CODE = 400;

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "clouds",
    isDay: false,
  });

  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleOpenRegisterModal = () => {
    setShowRegisterModal(true);
    console.log("register modal clicked");
  };

  const handleOpenLoginModal = () => {
    setShowLoginModal(true);
  };

  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");
    !isLiked
      ? api
          .addCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err))
      : api
          .removeCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err));
  };

  const handleRegistration = ({ name, avatar, email, password }) => {
    signup({ name, avatar, email, password })
      .then((res) => {
        closeActiveModal();
        setCurrentUser(res);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        res.status(BAD_REQUEST_STATUS_CODE).send({ message: "User not found" });
      });
  };

  const handleSignIn = ({ email, password }) => {
    signin({ email, password })
      .then((res) => {
        closeActiveModal();
        if (res.token) {
          localStorage.setItem("token", res.token);
          checkTokenValidity(res.token).then((userData) => {
            setCurrentUser(userData);
            setIsLoggedIn(true);
          });
        }
      })
      .catch((err) => {
        res.status(BAD_REQUEST_STATUS_CODE).send({ message: "Signin failed" });
      });
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setCurrentUser({});
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
    setShowLoginModal(false);
    setShowRegisterModal(false);
  };

  const handleDeleteCard = () => {
    if (!selectedCard || !selectedCard._id) {
      console.error("no card selected for deleting");
      return;
    }

    deleteCard(selectedCard._id)
      .then(() => {
        console.log("Deleting Item with _id:", selectedCard._id);
        setClothingItems((prevItems) =>
          prevItems.filter((item) => item._id !== selectedCard._id)
        );
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleAddItemModalSubmit = ({ name, imageUrl, weather }) => {
    const newId = Math.max(...clothingItems.map((item) => item._id)) + 1;

    addItem({ name, imageUrl, weather })
      .then((newItem) => {
        setClothingItems((prevItems) => [newItem, ...prevItems]);
        closeActiveModal();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        console.log(data);
        setClothingItems(data.reverse());
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      checkTokenValidity(token);
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, isLoggedIn }}>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page">
          <div className="page__content">
            <Header
              handleAddClick={handleAddClick}
              weatherData={weatherData}
              handleOpenRegisterModal={handleOpenRegisterModal}
              handleShowLoginModal={handleOpenLoginModal}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    onCardLike={handleCardLike}
                    clothingItems={clothingItems}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      handleAddClick={handleAddClick}
                      handleCardClick={handleCardClick}
                      clothingItems={clothingItems}
                      handleSignOut={handleSignOut}
                      handleCardLike={handleCardLike}
                    />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <Footer />
          </div>
          <AddItemModal
            isOpen={activeModal === "add-garment"}
            onClose={closeActiveModal}
            onAddItemModalSubmit={handleAddItemModalSubmit}
          />
          <ItemModal
            activeModal={activeModal}
            card={selectedCard}
            onClose={closeActiveModal}
            handleDeleteCard={handleDeleteCard}
          />
          {showLoginModal && (
            <LoginModal
              isOpen={showLoginModal}
              onClose={closeActiveModal}
              onSignIn={handleSignIn}
              handleSignIn={handleSignIn}
            />
          )}
          {showRegisterModal && (
            <RegisterModal
              isOpen={showRegisterModal}
              onClose={closeActiveModal}
              onSignUp={handleRegistration}
              handleRegistration={handleRegistration}
            />
          )}
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;

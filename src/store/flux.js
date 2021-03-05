import { data } from "jquery";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      peoples: [],
      planets: [],
      favorites: [],
      login: "false",
    },
    actions: {
      loadPeoples: () => {
        fetch("https://3000-silver-landfowl-psjk55on.ws-us03.gitpod.io/peoples")
          .then((response) => {
            if (!response.ok) {
              throw Error(response.statusText);
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
            setStore({ peoples: data });
          })
          .catch((err) => console.error(err));
      },
      loadPlanets: () => {
        fetch("https://3000-silver-landfowl-psjk55on.ws-us03.gitpod.io/planets")
          .then((response) => {
            if (!response.ok) {
              throw Error(response.statusText);
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
            setStore({ planets: data });
          })
          .catch((err) => console.error(err));
      },
      loadFavorites: () => {
        let user_token = sessionStorage.getItem("user_token");
        fetch(
          "https://3000-silver-landfowl-psjk55on.ws-us03.gitpod.io/favorites",
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + user_token,
            },
          }
        )
          .then((response) => {
            if (!response.ok) {
              throw Error(response.statusText);
            }
            return response.json();
          })
          .then((data) => {
            console.log(data)
            setStore({ favorites: data });
            console.log("favorites were added");
          })
          .catch((err) => console.error(err));
      },
      addFavorites: fav => {
        let data = {
          fav_name: fav,
        };

        let user_token = sessionStorage.getItem("user_token");
        fetch(`https://3000-silver-landfowl-psjk55on.ws-us03.gitpod.io/favorites/${fav}`,
          {
            method: "POST",
            headers: {
              Authorization: "Bearer " + user_token,
            },
            body: JSON.stringify(data),
          }
        )
          .then((response) => {
            if (!response.ok) {
              throw Error(response.statusText);
            }
            return response.json();
          })
          .then((datos) => {
            setStore({ favorites: datos });
            console.log("Favorite added");
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      },
      deliteFavorite: fav => {
				let user_token = sessionStorage.getItem("user_token");
				fetch(`https://3000-silver-landfowl-psjk55on.ws-us03.gitpod.io/favorites/${fav}`, {
					method: "DELETE",
					headers: {
						Authorization: "Bearer " + user_token
					}
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						setStore({ favorites: data });
						console.log("Favorite deleted");
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},
      loggedIn: () => {
        let status = sessionStorage.getItem("is_logged");
        status != "true"
          ? setStore({ login: "false" })
          : setStore({ login: status });
      },
      logOut: () => {
        sessionStorage.removeItem("user_token");
        sessionStorage.removeItem("is_logged");
        getActions().loggedIn();
      },
    },
  };
};

export default getState;

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      peoples: [],
      planets: [],
      favorites: [],
    },
    actions: {
      loadPeoples: () => {
        fetch("https://www.swapi.tech/api/people/")
          .then((res) => res.json())
          .then((data) => {
            let people = getStore().peoples;
            for (let i = 0; i < data.results.length; i++) {
              fetch(data.results[i].url)
                .then((res) => res.json())
                .then((dataProp) => {
                  people.push(dataProp.result.properties);
                  setStore({ peoples: [...people] });
                });
            }
          })
          .catch((err) => console.error(err));
      },
      loadPlanets: () => {
        fetch("https://www.swapi.tech/api/planets/")
          .then((res) => res.json())
          .then((data) => {
            let planet = getStore().planets;
            for (let i = 0; i < data.results.length; i++) {
              fetch(data.results[i].url)
                .then((res) => res.json())
                .then((dataProp) => {
                  planet.push(dataProp.result.properties);
                  setStore({ planets: [...planet] });
                });
            }
          })
          .catch((err) => console.error(err));
      },
      addFavorite: (name) => {
        const store = getStore();

        let count = null;
        store.favorites.map((item) => {
          if (item.name == name) {
            count = true;
          }
        });

        if (!count) {
          setStore({
            favorites: [...store.favorites,{ name: name},
            ],
          });
        }
      },

      deliteFavorite: (elem) => {
        const store = getStore();

        const deliteF = store.favorites.filter((item, i) => i != elem);
        setStore({ favorites: deliteF });
      },
    },
  };
};

export default getState;

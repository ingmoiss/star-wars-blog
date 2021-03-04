import { data } from "jquery";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      peoples: [],
      planets: [],
      favorites: [],
    },
    actions: {
      loadPeoples: () => {
        fetch("https://3000-silver-landfowl-psjk55on.ws-us03.gitpod.io/peoples")
          .then(response => {
            if(!response.ok){
              throw Error(response.statusText)
            }
            return response.json();
          })
          .then(data => {
            console.log(data)
            setStore({peoples : data});
          })
          .catch(err => console.error(err));
      },
      loadPlanets: () => {
        fetch("https://3000-silver-landfowl-psjk55on.ws-us03.gitpod.io/planets")
        .then(response => {
          if(!response.ok){
            throw Error(response.statusText)
          }
          return response.json();
        })
        .then(data => {
          console.log(data)
          setStore({planets : data});
        })
        .catch(err => console.error(err));
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

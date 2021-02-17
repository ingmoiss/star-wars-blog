const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      peoples: [],
      planets: [],
      favorites: []
    },
    actions: {
      loadSomeData: () => {
        fetch("https://www.swapi.tech/api/people/")
          .then((res) => res.json())
          .then((data) => setStore({ peoples: data.results }))
          .catch((err) => console.error(err));
      },
    },
  };
};

export default getState;

import { elementType } from "prop-types";


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			Character: [],
			Planets: [],
			Info: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getCharacters: async () => {
				try {

					let response = await fetch("https://www.swapi.tech/api/people?page=1&limit=3", {
						method: "GET"
					});
					const data = await response.json();

					if (data) {
						
						const urls = data.results.map((persona) => persona.url);

						const promesas = urls.map(async (url) => 
						
						{
							let response = await fetch(url, {
								method: "GET"
							});
							let data = await response.json();
							return data;
						});
	

						const promesasDatos = await Promise.all(promesas);


						setStore({ Character: promesasDatos });
					}
				} catch (error) {
					console.error(error);
				}
			},

			getPlanets: async () => {

				try {
					
					let response = await fetch("https://www.swapi.tech/api/planets?page=1&limit=3", {
						method:"GET"
					})
					const data = await response.json();


					if(data)
					{
						const urls = data.results.map((e) => e.url);


						const promesas = urls.map(async (url) => {
	
							const response = await fetch(url, {
								method:"GET"
							})
	
							const data = await response.json();
							return data;
						})

						const promesasPlanets = await Promise.all(promesas)
						setStore({Planets: promesasPlanets})
					}



				} catch (error) {
					console.error(error);
				}
			},

			getInfo: async (type, id) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/${type}/${id}`, {
						method:"GET"
					})
					const data = await response.json();
				} catch (error) {
					console.error(error)
				}
			},


			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;

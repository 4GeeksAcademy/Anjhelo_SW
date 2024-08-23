import { elementType } from "prop-types";


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Character: [],
			Planets: [],
			Data: [],
			Favoritos: [],
			Vehiculos: []
		},
		actions: {
			getCharacters: async () => {
				try {

					let response = await fetch("https://www.swapi.tech/api/people?page=1&limit=8", {
						method: "GET"
					});
					const data = await response.json();

					if (data) {
						
						const urls = data.results.map((persona) => persona.url);

						const promesas = urls.map(async (url) => {
						try {
							let response = await fetch(url, {
								method: "GET"
							});
							if(response.status === "429")
							{
								alert("Reinicie la pagina por favor")
								return; 
							}
							let data = await response.json();
							return data;

						} catch (error) {
							console.error(error)
						}});
	

						const promesasDatos = await Promise.all(promesas);


						setStore({ Character: promesasDatos });
					}
				} catch (error) {
					console.error(error);
				}
			},

			getPlanets: async () => {

				try {
					
					let response = await fetch("https://www.swapi.tech/api/planets?page=1&limit=8", {
						method:"GET"
					})
					const data = await response.json();


					if(data)
					{
						const urls = data.results.map((e) => e.url);


						const promesas = urls.map(async (url) => {
							try {
								const response = await fetch(url, {
									method: "GET"
								});
						
								if (response.status === 429) {
									alert("Reinicie la pagina por favor")
									return; 
								}
						
								const data = await response.json();
								return data;
						
							} catch (error) {
								console.error(error);
								return 
							}
						});

						const promesasPlanets = await Promise.all(promesas)
						setStore({Planets: promesasPlanets})
						
					}



				} catch (error) {
					console.error(error);
				}
			},
			
			
			getVehiculos: async () => {

				try {
					let response = await fetch("https://www.swapi.tech/api/vehicles?page=1&limit=8", {
						method:"GET"
					})
					const data = await response.json();

					if(data)
					{
						const urls = data.results.map((e) => e.url);

						const promesas = urls.map( async(url) => {

							try {
								const response = await fetch(url, {
									method:"GET"
								})

								if(response.status === 429)
								{
									alert("Reinicie la pagina por favor");
									return
								}

								const data = await response.json();
								return data;


							} catch (error) {
								console.log(error)
							}

							
						});
						const promesasVehiculos = await Promise.all(promesas)
						setStore({Vehiculos: promesasVehiculos})
					}



				} catch (error) {
					console.error(error)
				}
			},

			getInfo: async (type, id) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/${type}/${id}`, {
						method:"GET"
					})
					const data = await response.json();
					setStore({ Data: data });
					return

				} catch (error) {
					console.error(error)
				}
			},

			guardarFavorito: async (item) => {
                const favoritos = getStore().Favoritos;    
                setStore({ Favoritos: [...favoritos, item] });
                
            },

			eliminarFavorito: async (id) => {
				const favoritos = getStore().Favoritos;
				const temp = favoritos.filter(fav => fav.result._id !== id);
				setStore({ Favoritos: temp });
			}
		}
	};
};

export default getState;

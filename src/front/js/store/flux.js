const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			user: {},
			survey: {},
			query:{},
			logged: false,
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
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			syncTokenFromSessionStore: () => {
				const token = sessionStorage.getItem("token");
				if(token && token !="" && token !=undefined) {
					setStore({user: token});
				}
			},			

			cleanStore: () => {
				//Eliminamos token de la store y de la sesión del navegador
				console.log("Limpiando store...");
				setStore({user: {}});
				setStore({survey: {}});
				setStore({logged: false});
			},

			signUp:  async (email, password, name, lastName, dni, address, phone) => {
				
				const opts = {
					method: 'POST',
					headers: {
					  "Content-Type": "application/json"
					},
					body: JSON.stringify({
					  "email": email,
					  "password": password,
					  "name": name,
					  "lastName": lastName,
					  "dni": dni,
					  "address": address,
					  "phone": phone
					})
				  };

				//para usar la variable de entorno que tiene la URL del backend, tenemos que poner:
				//fetch(process.env.BACKEND_URL + "/api/hello")
				await fetch(process.env.BACKEND_URL  + "/api/signup", opts)

				.then ((res) => {
					if (!res.ok) {
						console.log("Ha ocurrido un error en el primer paso del fetch ");
					}
					return res.json();
				})
				.then((data) => {
					console.log("Usuario creado (mensaje del front) " + data);
				})
				.catch((error) => {
					console.error("Ha ocurrido un error " + error);
				})
			},


			surveySinDatos: async (objective, medical, message) => {

				const store = getStore();
				console.log("entrando en survey sin datos");
				const opts = {
					method: 'POST',
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + store.user.token
					},
					body: JSON.stringify({
						"id": store.user.id,
						"email":store.user.email,
						"objective": objective,
						"medical": medical,
						"message": message
					})
				};

			fetch('https://3001-4geeksacade-reactflaskh-egdm5hczo2f.ws-eu64.gitpod.io/api/survey/' + store.user.id, opts)
			.then(resp => resp.json())
			.then((data) => {
				console.log("Encuesta registrada");
				setStore({survey: data.survey});
			})
			.catch((error) => {
				console.error("Ha ocurrido un error al registrar la encuesta" + error);
			})

			},

			surveyData: () => {

				const store = getStore();
				
				const opts = {
					method: 'GET',
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + store.user.token		
					}
				};
				fetch ("https://3001-4geeksacade-reactflaskh-egdm5hczo2f.ws-eu64.gitpod.io/api/survey/" + store.user.id, opts)
				.then(resp => resp.json())
				.then(data => {
					console.log("Respuesta del flux surveyData")
					setStore({survey: data.survey})
				})
				.catch(error => console.error ("Ha habido un error al recuperar los datos de la encuesta " + error))

			},

			surveyUpdate: async (objective, medical, message) => {

				//console.log("Entrando en surveyUpdate...")
				const store = getStore();

				const opts = {
					method: 'PUT',
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + store.user.token		
					},
					body: JSON.stringify({
						"id": store.user.id,
						"email":store.user.email,
						"objective": objective,
						"medical": medical,
						"message": message
					})
				}
				fetch (process.env.BACKEND_URL  + "/api/survey/" + store.user.id, opts)
				.then(resp => resp.json())
				.then(data => console.log(data))
				.catch(error => console.error ("Ha habido un error al recuperar los datos de la encuesta " + error))

			},

			login: async (email, password) => {
				
				const opts = {
					method: 'POST',
					headers: {
					  "Content-Type": "application/json"
					},
					body: JSON.stringify({
					  "email": email,
					  "password": password
					})
				  };

				await fetch('https://3001-4geeksacade-reactflaskh-egdm5hczo2f.ws-eu64.gitpod.io/api/login', opts)
				.then((res) => {
						if (!res.ok) {
							alert("Credenciales incorrectas");
							return false;
						}
						return res.json();
					})
				.then((data) => {
					//Añadimos la priopiedad token a data.user y después el objeto es seteado en la store
					//y se compone de todo el serialize + token
					data.user.token = data.token
					setStore({
						user: data.user,
					})
					setStore({logged: true})
					// localStorage.setItem("token", data.token)
					return true;
				})
				
				.catch((error) => {
						console.error("Ha ocurrido un error " + error);
						
				})
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},

			query: () =>{

				const store = getStore();

				const opts = {
					method: 'GET',
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + store.user.token
					}
				}

				fetch (process.env.BACKEND_URL  + "/api/query", opts)
				.then(resp => resp.json())
				.then(data => setStore({query: data}))
				.catch(error => console.error ("Ha habido un error al recuperar los datos de la encuesta " + error))
			},

			deleteMember: (id) => {

				// Traemos la store para poder recuperar el token
				const store = getStore();

				const opts = {
					method: 'DELETE',
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + store.user.token
					}
				}

				fetch (process.env.BACKEND_URL + "/api/deleteMember/" + id , opts)
				.then(resp => resp.json())
				.then(data => {
					setStore({message: data});
					const newQuery = store.query.filter((element)=> element.id !== id )
					setStore({query: newQuery})
				})
				.catch( error => console.error("Error al borrar miembro " + error))
			}

		}
	};
};

export default getState;

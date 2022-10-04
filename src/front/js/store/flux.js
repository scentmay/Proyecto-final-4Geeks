const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			user: {},
			survey: {},
			query:{},
			ejercicio: [],
			entrenoAsignado: [],
			logged: false,
			pass_recover: null,
			flag: null,
			flag_login: null,
			password: null,
			email: null,
			code: null,
			pago: {},  
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
				setStore({email: null});
				setStore({password: null});
				setStore({pass_recover: null});
				setStore({flag: null});
				setStore({flag_login: null});
				localStorage.removeItem("code")
			},
			cleanTraining: () => {
				setStore({entrenoAsignado: []});
			},


			signUp:  async (email, password, name, lastName, dni, address, phone, code) => {
				
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
					  "phone": phone,
					  "code": code
					})
				  };

				//para usar la variable de entorno que tiene la URL del backend, tenemos que poner:
				//fetch(process.env.BACKEND_URL + "/api/hello")
				await fetch(process.env.BACKEND_URL + 'api/signup', opts)

				.then ((res) => {return res.json();})
				.then((data) => {
					console.log(data);
				})
				.catch((error) => {
					console.error("Ha ocurrido un error " + error);
				})
			},


			userUpdate: async (email, userName, lastName, dni, direccion, telefono) => {

				
				const store = getStore();

				const opts = {
					method: 'PUT',
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + store.user.token		
					},
					body: JSON.stringify({
						
						"email":email,
						"userName": userName,
						"lastName": lastName,
						"dni": dni,
						"direccion": direccion,
						"telefono": telefono,
					})
				}
				fetch (process.env.BACKEND_URL + 'api/edituser/' + store.user.id, opts)
				.then(resp => resp.json())
				.then(data => console.log(data))
				.catch(error => console.error ("Ha habido un error al actulizar datos " + error))

			},

			getUser: () =>{

				const store = getStore();

				const opts = {
					method: 'GET',
					headers: {
						"Content-Type": "application/json",
					},
				}

				fetch (process.env.BACKEND_URL + 'api/query', opts)
				.then(resp => resp.json())
				.then(data => setStore({query: data}))
				.catch(error => console.error ("Ha habido un error al recuperar los datos de la encuesta " + error))
			},

			getPago: (id) =>{

				const opts = {
					method: 'GET',
					headers: {
						"Content-Type": "application/json",
					},
				}

				fetch (`https://3001-scentmay-proyectofinal4-tp1jjd7eb1q.ws-eu67.gitpod.io/api/user/${id}/payments`, opts)
				.then(resp => resp.json())
				.then(data => setStore({pago: data.operacion}))
				.catch(error => console.error ("Ha habido un error al recuperar dato del pago " + error))
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

			fetch(process.env.BACKEND_URL + 'api/survey/' + store.user.id, opts)
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
				fetch (process.env.BACKEND_URL + 'api/survey/' + store.user.id, opts)
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
				fetch (process.env.BACKEND_URL + 'api/survey/' + store.user.id, opts)
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

				await fetch(process.env.BACKEND_URL + 'api/login', opts)
				.then((res) => {
						if (!res.ok) {
							setStore({flag_login: false});
							return;
						}
						else {
							setStore({flag_login: true});
							return res.json();
						}
					})
				.then((data) => {
					//Añadimos la propiedad token a data.user y después el objeto es seteado en la store
					//y se compone de todo el serialize + token
					data.user.token = data.token
					setStore({
						user: data.user,
					})
					setStore({logged: true, flag_login: null})
					localStorage.setItem("token", data.token)
				})
				
				.catch((error) => {
						console.error("Ha ocurrido un error " + error);
						
				})
			},

			ejercicios: async (ejercicio) => {

				const store = getStore();
				console.log (ejercicio);

				const options = {
					method: 'GET',
					headers: {
						'X-RapidAPI-Key': '3f3fb32f2bmsh244b58c094eba84p14e6ecjsn14051a9d65ab',
						'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
					}
				};
				
					fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${ejercicio}`, options)
					.then(response => response.json())
					.then(response => { 
						setStore({ejercicio: response});						
						let entreno = [];
						if (store.survey.objective !== 'Acondicionamiento general')
							for (let i = 0; i < 5; i++){
								const posicion = Math.floor(Math.random() * response.length);
								entreno.push(response[posicion])
							}
						else{
							const posicion = Math.floor(Math.random() * response.length);
							entreno = [...store.entrenoAsignado]
							entreno.push(response[posicion])
						}
						setStore({entrenoAsignado: entreno})


					})
					.catch(err => console.error(err));
					console.log(getStore().ejercicio)
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + 'api/hello')
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

				fetch (process.env.BACKEND_URL + 'api/query/', opts)
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

				fetch (process.env.BACKEND_URL + 'api/deleteMember/' + id , opts)
				.then(resp => resp.json())
				.then(data => {
					setStore({message: data});
					const newQuery = store.query.filter((element)=> element.id !== id )
					setStore({query: newQuery})
				})
				.catch( error => console.error("Error al borrar miembro " + error))
			},

			getPassword: (email, dni) => {

				const store = getStore();

				const opts = {
					method: 'POST',
					headers: {
					  "Content-Type": "application/json"
					},
					body: JSON.stringify({
					  "email": email,
					  "dni": dni
					})
				}

				fetch (process.env.BACKEND_URL + 'api/recover_password/', opts)
				.then(resp => {
					if (!resp.ok) {
						setStore({pass_recover: false});
						return;
					}
					else {
						setStore({pass_recover: true});
						return resp.json();
					}
				})
				.then(data => {
					setStore({email: data.email, password: data.password});
				})
				.catch(error => console.error ("Ha habido un error al recuperar la contraseña del usuario " + error))
			},
			changePassword: (pass) => {

				const store = getStore();

				const opts = {
					method: 'PUT',
					headers: {
					  "Content-Type": "application/json"
					},
					body: JSON.stringify({
					  "email": store.email,
					  "password": pass
					})
				}

				fetch (process.env.BACKEND_URL + 'api/new_password/', opts)
				.then(resp => {
					if (!resp.ok) {
						setStore({flag: false});
						return;
					}
					else {
						setStore({flag: true});
						return resp.json();
					}
				})

				.then(data => {
					console.log(data);
					getActions().cleanStore();
				})
				.catch(error => console.error ("Ha habido un error al cambiar la contraseña del usuario " + error))
			},
			setCode: (email, newCode) => {
				//console.log(newCode);
				setStore({code: newCode});
				localStorage.setItem("code", newCode);

				// Colocamos ahora el código en backend para poder comparar cuando el admin se registre
				//posteriormente el código será borrado para que nadie más lo pueda usar
				const store = getStore();

				const opts = {
					method: 'POST',
					headers: {
					  "Content-Type": "application/json",
					  "Authorization": "Bearer " + store.user.token
					},
					body: JSON.stringify({
					  "email": email,
					  "code": store.code
					})
				}

				fetch (process.env.BACKEND_URL + 'api/code/', opts)
				.then(resp => resp.json())
				.then(data => {
					console.log(data);
				})
				.catch(error => console.error ("Ha habido un error al cambiar la contraseña del usuario " + error))
			}
		}
	};
};

export default getState;

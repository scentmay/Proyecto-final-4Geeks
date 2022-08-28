const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			user: {
				"email": "",
				"token": ""
				},
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

			cleanStore: () => {
				//Eliminamos token de la store y de la sesión del navegador
				console.log("Limpiando store...");
				setStore({user: {"email": "","token": ""}});
				sessionStorage.removeItem("token");
				setStore({logged: false});
			},

			signUp:  async (email, password, name, lastName, dni, address, phone) => {
				console.log("Entrando...")
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

				await fetch("https://3001-4geeksacade-reactflaskh-egdm5hczo2f.ws-eu63.gitpod.io/api/signup", opts)

				.then ((res) => {
					if (!res.ok) {
						console.log("Ha ocurrido un error en el primer paso del fetch");
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

				await fetch('https://3001-4geeksacade-reactflaskh-egdm5hczo2f.ws-eu63.gitpod.io/api/login', opts)
				.then((res)=> {
						if (!res.ok) {
							alert("Credenciales incorrectas, mensaje del frontend");
							return false;
						}
						return res.json();
					})
				.then((data) => {
					console.log("this came from the backend", data)
					const store = getStore();
					setStore({user: data})
					setStore({logged: true})
					// //almacenamos el token en la sesión del navegador
					sessionStorage.setItem("token", data.token)
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

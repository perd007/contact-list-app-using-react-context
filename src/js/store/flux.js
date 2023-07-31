const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
		},
		actions: {
			saluda: () => {
				console.log("Hola que tal :)");
			},
			// Use getActions to call a function within a fuction
			addContact: (params) => {
				//obtenemos el store
				const store = getStore();
				//console.log("estoy dentro del action" + params.name)
				//modificamos nuestro arreglo el store con el paremetro desforms 
				setStore({ contacts: [...store.contacts, params] });
				//console.log("en el flux  " + store.contacts)
			},
			//borrar contaco
			deleteContact: (id) => {
				const store = getStore();
				//creamos un array nuevo sin el elemento que es igual al index qe nos paso
				setStore({ contacts: store.contacts.filter((contacto, index) => id != index) });

			},
			editContact: (id, params) => {
				const store = getStore();
				//eliminamos
				setStore({ contacts: store.contacts.filter((contacto, index) => id != index) });
				//agregamos
				setStore({ contacts: [...store.contacts, params] });
			}

		}
	};
};

export default getState;

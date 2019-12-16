import axios from 'axios';

const buscaUsuario = async function usuario (user){

	 // axios.get(`https://api.github.com/users/${user}`)

		//  .then(response => {
		//  	console.log(response.data);
		//  })
		//  .catch(err => {
		// 	console.log('Usuário não existe');
		//  });


	const response = await axios.get(`https://api.github.com/users/${user}`);

	console.log(response);
}

buscaUsuario('diego3g');
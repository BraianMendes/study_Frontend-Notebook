import axios from 'axios';

class Github{

 static async getRepositories(repo) {

 // axios.get(`https://api.github.com/repos/${repo}`)
	// 	 .then(response => {
	// 	 	console.log(response.data);
	// 	 })
	// 	 .catch(err => {
	// 	 	console.log('Repositório não existe');
	// 	 })
	//  }

	try {
		const response = await axios.get(`https://api.github.com/repos/${repo}`);
		console.log(response);
	}

	catch (err){
		console.warn('Erro na API || Não encontrado.');
	}


}
};

Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');

function checaIdade(idade) {
 // Retornar uma promise
 setTimeout(checaIdadeDelay, 2000);

 console.log(idade);

 function checaIdadeDelay(idade){
 	 return new Promise(function(resolve, reject) {
	 	if (idade >= 18){
	 		resolve(idade);
	 	}
	 	else {
	 		reject('Erro na requisicao.');
	 	};
 	});

 };
}

checaIdade(20)
 .then(function() {
 console.log('Maior de idade');
 })
 .catch(function() {
 console.warn('Menor de idade!');
 });

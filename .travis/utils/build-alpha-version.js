const version = process.argv[2];

const alphaVersion = version.split('alpha');

if(alphaVersion.length > 1) {
  // Situação com versão alpha lançada
  // Se o argumento era 'v1.2.3-alpha10', então alphaVersion = ['v1.2.3-', '.10']
  const alphaNumber = parseInt(alphaVersion[1].substring(1));

  console.log(`${alphaVersion[0]}alpha.${alphaNumber + 1}`);
} else {
  // Situação sem versões alphas lançadas
  // Se o argumento era somente v1.2.3, cria a primeira versão alpha
  console.log(`${alphaVersion[0]}-alpha.0`);
}

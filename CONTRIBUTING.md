# Contribuindo

## Dependências

- Yarn 1.21.1^
- Node >= 12
- Xcode 10.1 para iOS
- JDK 8 e Android SDK 29 para android

## Instalação

Execute o comando `yarn install` na raiz para instalar as dependências necessárias.

Para iOS, execute `pod install` na pasta `ios` para instalar as dependências do iOS.

## Execução

Para executar a aplicação e visualizar os componentes em um emulador, execute o comando `yarn android` ou `yarn ios`.

## Testes unitários

Os testes unitários são executados através do comando `yarn test`.

## Contribuindo

É possível contribuir criando um fork do repositório e depois criando um Pull Request.

## Fazendo commits

Os commits são feitos usando [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) através da CLI do [commitizen](https://github.com/commitizen/cz-cli). Para utilizá-la, basta rodar o comando `yarn cm` na raiz do projeto e seguir as instruções.

O conventional commits é utilizado para automação de publicação com o [semantic release](https://github.com/semantic-release/semantic-release), o qual usa o [SemVer](https://semver.org/) como método de versionamento.

### Tipos de bump de versão

- Patch
  - São hotfixes feitos na versão, apenas para correção de bugs aumentando o último número da versão. Utilize o tipo de commit `fix` na CLI do commitizen.
  - `0.0.1` -> `0.0.2`
- Minor
  - São features novas adicionadas na versão. Utilize o tipo de commit `feat` na CLI do commitizen.
  - `0.1.0` -> `0.2.0`
- Major
  - São breaking changes, indicando mudanças na API da biblioteca que podem quebrar o código dos consumidores. Na CLI, indique que o seu commit é um BREAKING CHANGE (Não está nas opções iniciais);
  - `0.0.0` -> `1.0.0`

Os bumps sempre vão priorizar os commits de maior importância na hora de avaliar qual a próxima versão. Por exemplo, caso esteja na versão `0.0.0` e fizer vários commits de fix, mas apenas um commit de feature, será priorizado esse commit de feature e a próxima versão será `0.1.0`

## Iniciando um novo milestone

Partindo da branch `master`, cria uma nova branch com a seguinte nomenclatura:

- vM.m.p
  - v &rarr; letra v de versão;
  - M.m.p &rarr; Número de versão de um milestone seguindo [SemVer](https://semver.org/);

Para mais detalhes, chequem o [processo de milestones](./MILESTONE_PROCESS.md).

## SVG

Para ver os ícones SVG, a aplicação precisa dos seguintes pacotes instalados:

- react-native-svg
- react-native-svg-transformer

Os exemplos no storybook com o uso de SVG são:

- NatMenuItem
- NatTextInput

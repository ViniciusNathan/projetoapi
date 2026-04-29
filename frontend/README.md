************************************
DEV RAIZ  - WINDOWS
*************************************

   cmd - PROMPT DE COMANDO
   mkdir + nome Pasta - CRIA DIRETÓRIOS
   cd + Nome Pasta - ENTRA DIRETÓRIOS
   cd.. VOLTA DIRETÓRIOS
   type nul > nomedoarquivo.txt - CRIA O ARQUIVO 
   del + Nome Pasta - apaga arquivos 
   rd + Nome Pasta - apaga diretório
   rename "teste.txt" "alter.txt" - renomear arquivo
   systeminfo- mostra a configuração do computador
   cls - limpa a tela
   code . - Abre o vscode com a pasta dentro

************************************
DEV RAIZ - LINUX
*************************************

  Listar diretórios	ls
  Criar diretório	mkdir + nome Pasta
  entrar no diretório 	cd + Nome Pasta
  voltar diretorio	cd ..
  Criar arquivo (vazio)	touch arquivo.txt
  Criar com conteúdo 	echo "texto" > arq.txt
  Renomear arquivo 	mv antigo.txt novo.txt
  Renomear diretório	mv pastaAntiga pastaNova
  Apagar arquivos	rm arquivo.txt
  Apagar diretório 	rmdir pastaNova
  limpar Tela		clear
  Abre o vscode com a pasta dentro   code . 


React 


React 2011- lançamento 2013
componentes = paginas
renderização = pagina index e varios componentes
framework baseado em javascript
html + javascript = jsx, tsx

Pré-requisitos 

**vscode
**node.js - framework- javascript(backend)
**npm /yarn - instalador de dependências

************************************
CRIAR PROJETO REACT + VITE
*************************************

1º CRIAR A PASTA DO PROJETO

2º ABRIR A PASTA NO VSCODE

3º ABRIR O TERMINAL

4º DIGITAR npm create vite@latest .

5º VAI CRIAR A ESTRUTURA

6º OPÇÃO DE INSTALAR AS DEPENDÊNCIAS E RODAR O PROJETO

7º CLICAR NO LINK QUE GEROU NO TERMINAL

8º VAI ABRIR O PROJETO

9º LIMPAR ESTRUTURA 

public- apagar imagems

src/assets- apagar imagems

src- apagar App.css

src- apagar o conteúdo do Index.css

src /App.jsx - Apagar todo contéudo e digitar rafce


EXTENSÕES 


** Materal Icon Theme
** ES7 React/Redux/Styled-components snippets ( usa o rafce para criar a estrutura do componente)

************************************
VERSIONAMENTO DO PROJETO
*************************************

INICIA O GIT
git init

VERIFICA SE TEM USUARIO
git config --global user.name

CONFIGURAR O USUARIO 
git config --global user.name "NOME"

VERIFICA SE TEM E EMAIL
git config --global user.email

CONFIGURA O EMAIL
git config --global user.email email@email.com

VERIFICA A SITUAÇÃO DO GIT 
git status

ADICIONA O ARQUIVO OU ALTERAÇÃO 
git add .

COMMIT O QUE FEZ

git commit -m "chore: Estrutura do projeto"

CRIE UMA BRANCH   

git checkout - b novaBranch

VERIFICA BRANCHS EXISTENTES

git branch

NAVEGAR ENTRE BRANCHS

git checkout nomebranch

*********************************************
GIT SEMÂNTICO
********************************************


O que é?

Commits Semânticos são mensagens de commit padronizadas que descrevem de forma clara e concisa a natureza e o propósito das alterações 
feitas em um projeto de software. Eles seguem uma convenção específica, como a Convencional Commits, que torna o histórico de  commits
legível tanto para humanos quanto para máquinas.

A ideia é substituir mensagens vagas (como "atualização" ou "correção de bug") por descrições detalhadas e estruturadas, que 
indicam o tipo de mudança, o escopo (opcional) e uma descrição sucinta.

Exemplos

feat		Nova funcionalidade	feat: adiciona sistema de busca

fix		Correção de erro	fix: corrige alinhamento do logo

style		Mudança visual (CSS)	style: altera paleta para tema escuro

docs		Documentação		docs: atualiza instruções do README

refactor	Refatoração		refactor:  melhorias de código

chore		Criação e configuração	chore: Criando e configurando 

# Git

## Controle de Versão
* Registro de alterações em um ou mais arquivos
* Lembrar versões específicas mais tarde
* Reverter para estado anterior determinados arquivos ou um projeto inteiro
* Compare as mudanças ao longo do tempo
* Veja quem modificou pela última vez algo que pode estar causando um problema
* Quem introduziu um problema ou quando
* Se você estragar tudo ou perder arquivos, você pode facilmente recuperar
* E muito mais

> VCS - Version Control System

## Tipos de controle de versão

### Sistemas locais
* Copiar os arquivos para outro diretório
* Muito comum e muito simples
* Incrivelmente propenso a erros
* Fácil de sobreescrever arquivos, caso haja feito uma cópia errada

> Para superar os possíveis erros, existe o RCS - Revision Control System

* Ferramenta popular (antigamente) para controle de versão
* Mantem conjuntos de alterações, ou seja, as diferenças entre os arquivos
* Formato especial no disco
* Re-criar como qualquer arquivo se parecia em qualquer ponto no tempo, adicionando-se todas as alterações ao arquivo.

> E se você precisar colaborar com desenvolvedores em outros sistemas?

### Sistemas Centralizados
Exemplo: CVS, Subversion e Perforce.

* Um único servidor que contém todos os arquivos de controle de versão
* Vários clientes usam arquivos a partir desse lugar central.

Por muitos anos, este tem sido o padrão para controle de versão.

#### Vantagens sobre VCSs locais
* Controle sobre atividades dos colaboradores no projeto.
* Os administradores tê controle refinado sobre quem pode fazer o que
* Mais fácil de administrar um CVCS do que lidar com bancos de dados locais em cada cliente

#### Desvantagens
* Se esse servidor der problema por uma hora, durante essa hora ninguém pode colaborar ou salvar as alterações de versão para o que quer que eles estejam trabalhando. 
* Se o disco rígido do banco de dados central for corrompido, você perde absolutamente tudo
* Sistemas VCS locais sofrem com esse mesmo problema

> Sempre que você tenha toda a história do projeto em um único lugar, há risco de perder tudo.

### Sistemas Distribuídos
Exemplo: Git, Mercurial, Bazaar ou Darcs

* Duplicar (clonar) localmente o repositório completo
* Se qualquer servidor morrer, e esses sistemas estiverem colaborando por meio dele, qualquer um dos repositórios do cliente poderá ser copiado de volta para o servidor
* Cada clone é de fato um backup completo de todos os dados.
* Clientes usam o estado mais recente dos arquivos

## O que é Git?
* Sistema de controle de versão distribuído
* Open-source
* Pontos na história: commit (viagem no tempo)
  * Histórico de alterações no código
  * Voltar para qualquer ponto na história
* Controlar o fluxo de novas funcionalidades
  * Ramificações: branch (universos paralelos)
  * Vários devs no mesmo projeto
  * Análise e resolução de conflitos

## Instalação do Git no Linux

Basta abrir o terminal e rodar o comando
```
sudo apt-get install git
```

Para verificar se está instalado basta colocar no terminal
```
git --version
```

## Configuração Inicial

Essa configuração você fará apenas uma vez por computador e o efeito se manterá após atualizações.

Você também pode mudá-las em qualquer momento rodando esses comandos novamente

### Sua identidade
Assim que instalar o git, abra o terminal e digite

```
$ git config --global user.name "Seu nome completo"
$ git config --global user.email seuemailaqui@dominio.com.br
```

> Isso é importante porque cada commit usa esta informação, e ela é carimbada de forma imutável nos commits que você começa a criar

Se você quiser substituir essa informação com nome diferente para um projeto específico, você pode rodar o comando sem a opção --global dentro daquel projeto

### Editor
Você poderá trocar o editor padrão, que é o vim, por outro

```
git config --global core.editor "code -w"
```

### Ver configurações
Você poderá verificar suas configurações com o comando abaixo

```
git config --list
```

### `git config`

* Permite ver e atribuir variáveis de configuração como nome e email.
* Estas variáveis podem ser armazenadas em três lugares diferentes:
    1. ``/etc/gitconfig``: válido para todos os usuários no sistema e todos os seus repositórios. Se você passar a opção `--system` para `git config`, ele lê e escreve neste arquivo.
    2. `~/.gitconfig` ou `~/.config/git/config`: Somente para o seu usuário. Você pode fazer o Git ler e escrever neste arquivo passando a opção `--global`.
    3. `config` no diretório Git (ou seja, `.git/config`) de qualquer repositório que você esteja usando: específico para este repositório

Cada nível sobrescreve os valores no nível anterior, ou seja, valores em `.git/config` prevalecem sobre `etc/gitconfig`.

> No Windows, o arquivo .gitconfig estará no diretório `$HOME` que é `C:[Users]$USER`

## Comandos

* `git add [arquivo/pasta]` -> Adiciona arquivos e pastas para serem comitados posteriormente
* `git commit -m "mensagem"` -> Comita os arquivos adicionados para o repositório local
* `git log` -> Teremos o autor do commit, a data do mesmo e a mensagem dos commits.
* `git init` -> Inicia um repositório local na pasta
* `git status` -> Mostra quais arquivos estão no stage area e quais não estão
* `git diff` -> Mostra um registro das modificações feitas nos arquivos que já tínhamos guardados no nosso repositório
* `git rm [nomedoarquivo]` -> Deleta um arquivo através do git
* `git mv [nomeatual.txt] [nomenovo.txt]` -> Renomeia arquivos
* `git mv [nomedoarquivo] [caminho]` -> Move arquivo(s) para o caminho indicado
* `git restore [nomedoarquivo]`-> Restaura estado do arquivo para a cópia que está no local repository ou para o estado do stage area adicionando a tag `--staged`
* `git checkout [HASH] -- [nomedoarquivo]` -> Puxa o estado do arquivo da HASH selecionada
* `git clean` -> Deleta tudo que não está rastreado no master branch
* `git revert [HASH]` -> Reverte os arquivos para o estado do commit da HASH selecionada
* `git show [HASH] --color-words` -> Mostra todas as modificações no histórico do histórico do projeto da HASH selecionada para trás.

## Git Workflow

1. Working Directory
   - Todos os nossos arquivos
   - Working Tree
2. Stage Area (depois do git add)
   - Preparação dos nossos arquivos, para serem commitados
   - Index
   - Stage tree 
3. Local Repository (depois do git commit)
   - Banco de dados dos nossos arquivos
   - Onde ficarão os pontos da história
   - Ou o histórico

## `.gitignore`

É extremamente importante para ignorar arquivos e pastas que não é desejável entrar nos commits, basta criar um arquivo de nome `.gitignore` e colocar o caminho das pastas ou nomes dos arquivos que não devem ser comitados nunca.

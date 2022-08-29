# HyperText Transfer Protocol
Protocolo de Transferência de HyperTexto

# Visão Geral
* Permite troca de informações e dados na internet
* Uma troca de mensagens
* HTML, CSS, Scripts, Imagens, Vídeo
* Uma chamada para cada um desses recursos

# Conceitos do HTTP
* Simples
  * Legível
  * Qualquer pessoa
* Cliente/Servidor
  * Requisição/Resposta
  * Pedir um lanche
* Stateless
  * Não guarda informações
  * Não existe relação entre conexões
  * Jogar uma moeda
  * Sessões
    * Cookies
    * Storages
* Extensível
  * Através do cabeçalho, podemos fazer diversas trocas de informações entre o cliente-servidor, conforme a necessidade
  * Headers
    * Informações para a minha comunicação
  * Body
    * Corpo do pedido ou da resposta

## Cliente
* User Agent
  * Browser
  * cURL
* Entidade que dá início à comunicação
* Pedidos
  * Ações do Cliente
    * GET
    * POST
    * PUT
    * DELETE

## Servidor
* Se apresenta como uma máquina
* Preparação para ouvir e processar
* Vários servidores em um computador
* Resposta
  * Status Code
    * 404
    * 500

## Proxies
* Representantes
* Fica entre o cliente e o servidor
* Ajudam a fazer o transporte dos dados
* Diversas Funções
  * Cache
  * Filtro (tipo um antivírus, ou controle parental)
  * Load balancing (distribuição da carga)
  * Autenticação
  * Autorização

# URI
## Conceito
* Uniform Resource Identifier
  * Identificar um Recurso
  * Nome ou Localização
  * Exemplo
    * Você é um Recurso
    * Seu Nome
    * Sua localização

## Resource
* O alvo do pedido
* Qualquer coisa identificável / Entidade
  * Digital
    * Email -> mailto: seuemail@dominio.com.br
  * Abstrata
    * Sessão
    * Autenticação
  * Física
    * Produtos
    * Usuários
  * Se podemos identificar, nomear, endereçar ou manipular, estamos falando de um recurso

## Locator
* URL
  * Uniform Resource Locator
  * Componentes
    * Obrigatórios
      * Protocolo
      * Domínio
    * Opcionais
      * Subdomínio
      * Path
      * Parametros
      * Porta
      * Âncora
  * Exemplos
    * https://www.rocketseat.com.br/blog
    * https://www.youtube.com/watch?v=vpYct2npKD8
    * http://127.0.0.1:3333/index.html#algumlugar

## Name
* URN
  * Uniform Resource Name
  * Exemplos
    * urn:isbn:0451450523
    * urn:oasis:names:specification:docbook:dtd:xml:4.1.2

# Messages
 
## Request
* Request line
  * Method
  * Protocol version
  * URI
* Body
* Headers

## Response
* Protocol Version
* Status code
* Headers
* Status message

# HTTP Methods
* Define um conjunto de métodos HTTP
* Indica a acação que o cliente deseja operar
* Podem ser chamados de Verbos HTTP
* Cada um possui a sua semântica
* Características
  * Seguro
    * Não altera o estado do servidor
    * Somente leitura
    * Cliente não solicita alterações
    * Não há carga extra para o servidor
    * O servidor é responsável em manter o método seguro
    * Quais são?
      * GET
      * HEAD
      * OPTIONS
  * Idempotente
    * Ao executar o método, a resposta deverá ser sempre a mesma
    * Quais são?
      * Todos os seguros são idempotentes
      * PUT
      * DELETE
    * Status code poderá ser diferente
    * O servidor tem a responsabilidade de retornar dados da mesma maneira
    * Essa especificação não é garantia de que todos os servidores irão aplicar o conceito corretamente

## OPTIONS
* Informações sobre disponibilidade da requisição
  * OPTIONS /index.html HTTP/1.1
  * OPTIONS * HTTP/1.1
* Características
  * Seguro: SIM
  * Idempotente: SIM
  * BODY
    * Request: NÃO
    * Response: NÃO
  * Uso em formulários HTML: NÃO
  * Cacheable: NÃO
  
## GET
* Pegar um recurso
* Somente recebe dados
* Características
  * Seguro: SIM
  * Idempotente: SIM
  * BODY
    * REQUEST: NÃO
    * RESPONSE: SIM
  * Cacheable: SIM
  * Uso em formulários HTML: SIM

## HEAD
* Semelhante ao GET, porém...
* ... recebemos somente o cabeçalho
  * HEAD /posts
* Características
  * Seguro: SIM
  * Idempotente: SIM
  * BODY
    * Request: NÃO
    * Response: NÃO
  * Uso em formulários HTML: NÃO
  * Cacheable: SIM

## POST
* Publicar/Cadastrar um Recurso
* Características
  * Seguro: NÃO
  * Idempotente: NÃO
  * BODY
    * Request
    * Response
  * Uso em formulários HTML: SIM
  * Poderá ser cacheable

## PUT
* Cria um novo ou Atualiza um Recurso
  * PUT /profile HTTP/1.1
  * Diferença entre POST?
  * Criação
    * Status code 201
  * Atualização
    * Status code 204 ou 200
* Características
  * Seguro: NÃO
  * Idempotente: SIM
  * BODY
    * Request: SIM
    * Response: NÃO

## PATCH
* Modificação parcial de um recurso
  * Diferença entre o PUT?
  * PATCH /posts/1 HTTP/1.1
* Características
  * Seguro: NÃO
  * Idempotente: NÃO
  * BODY
    * Request: SIM
    * Response: SIM
  * Uso em formulários HTML: NÃO
  * Cacheable: NÃO

## DELETE
* Remover um recurso
  * DELETE /posts HTTP/1.1
  * Status code
    * 202: Accepted
    * 204: No content
    * 200: OK
* Características
  * Seguro: NÃO
  * Idempotente: SIM
  * BODY
    * Request: POSSIBILIDADE
    * Response: POSSIBILIDADE
  * Uso em formulários HTML: NÃO
  * Cacheable: NÃO

# Headers
* Cabeçalhos
* Informações adicionais para o pedido ou resposta
* Nome: Value
  * Content-type: application/json
  * Content-type: text/html

## Contextos
* General
* Request Headers
* Response Headers

## Referências HTTP Headers
<a href="https://devdocs.io/http-headers/">Link</a>

# Status

## 100
* 100: Continue

## 200
* 200: OK (GET, POST)
* 201: Created (PUT)
* 204: No Content (DELETE, PUT)

## 300
* 301: Moved Permanently
* 308: Permanent Redirect
* 302: Found
* 307: Temporary Redirect

## 400
* 400: Bad Request
* 401: Unauthorized
* 403: Forbidden
* 404: Not Found
* 405: Method Not Allowed
* 429: Too Many Requests

## 500
* 500: Interval Server Error
* 503: Service Unavailable

## Referências Status codes
<a href="https://devdocs.io/http/status">Link</a>
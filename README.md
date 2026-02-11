O Banco Bufunfa deve oferecer serviços bancários aos seus clientes.

# Backlog do Produto: banco-Bufunfa

## Épico 1: Cadastro de cliente
*Histórias focadas no cadastro do cliente*
```gherkin
US1 - Localização da opção de cadastro 

Como analista de negócio, preciso que o cliente consiga localizar uma opção de cadastro que deve estar de fácil acesso

Regras:

  [R01] O botão de o cliente se cadastrar no banco deve estar localizado no canto superior direito
  [R02] O botão de o cliente se cadastrar no banco deve ser azul com letras brancas em fonte Nunito de tamanho 14
  [R03] Em cima do botão, em letra de tamanho 7, deve haver o texto "Não tem conta, cadastre-se aqui" em cima do botão de cadastro seguido por uma seta para baixo
  
Critérios de aceitação

  [CA1] Dado que o cliente consiga acessar a página, ele deve ser capaz de visualizar o botão facilmente
  [CA2] Dado que o cliente clique no botão de se cadastrar, deverá acessar a página de cadastro do sistema
```

```gherkin
US2 - Cadastro em uma única sessão

Como analista de negócios, preciso que o cliente consiga realizar seu cadastro no sistema a partir de acesso remoto clicando no botão de cadastro

Regras:

  [R01] Para cada dado, deve haver um campo para o cliente preencher
  [R02] Os campos que o cliente deve preencher:
        - seu primeiro nome
	- seu sobrenome (demais nomes)
	- CPF
	- senha
  [R03] Apenas letras e letras com acento do alfabeto latino são aceitas no campo "Primeiro Nome"
  [R04] Não importa a caixa (alta ou baixa) para os campos "Primeiro Nome" e "Sobrenome"
  [R05] O sistema deve apresentar ao usuário no campo "Primeiro Nome" a primeira letra Maiúscula e as demais minúsculas independentemente da caixa digitada. Essa transformação deve ocorrer após 0,5 segundos para que o usuário perceba a ocorrência.
  [R06] O campo "Primeiro Nome" deve ter pelo menos 2 caracteres e suportar até 40 caracteres
  [R07] O sistema deve apresentar ao usuário no campo Sobrenome a primeira letra maiúscula de cada palavra e as demais minúsculas independentemente da caixa digitada. Essa transformação deve ocorrer após 0,5 segundos para que o usuário perceba a ocorrência. Exceção para essa regra são palavras (exceto a primeira) com 3 letras ou mais que não sofrem transformação.
  [R08] O campo "Sobrenome" pode aceitar apenas letras, letras com acento do alfabeto latino e espaços
  [R09] O campo "Sobrenome" não deve permitir palavras com 1 caracter
  [R10] O campo "Sobrenome" pode aceitar até 120 caracteres
  [R11] As palavras do campo "Sobrenome" podem conter até 40 caracteres
  [R12] Apenas números são aceitos no CPF
  [R13] O campo CPF deve suportar apenas 11 dígitos
  [R14] O campo CPF deve validar o CPF digitado
  [R15] O campo Senha deve suportar apenas números
  [R16] O campo Senha deve receber exatamente 8 dígitos
  [R17] O campo Senha não pode aceitar dígitos sequenciais em ordem crescente, nem decrescente, e.g, 12, 54
  [R18] O campo Senha não pode aceitar dígitos sequenciais repetidos, e.g, 44
  
Casos de aceitação

  [CA01] Dado que o cliente preencha o seu "Primerio Nome", Sobrenome, CPF e Senha de acordo com as regras do sistema, então o sistema deve efetuar o cadastro do usuário com sucesso e informar a mensagem "Cliente [Nome do Cliente] cadastrado com sucesso"
  [CA02] Dado que o cliente preencha o campo "Primerio Nome" com número, espaços ou caracter especial, imediatamente o sistema deve apresentar o texto "Apenas letras são aceitas" abaixo da caixa de preenchimento em fonte Nunit, tamanho 7, em cor vermelha
  [CA03] Dado que o cliente preencheu o campo "Primerio Nome" com número, espaços ou caracter especial, e então torne o texto apenas com letras imediatamente o sistema deve remover o texto destacado "Apenas letras são aceitas" abaixo da caixa de preenchimento.
  [CA04] Dado que o cliente preencha o campo "Primerio Nome" com 40 letras e tente digitar mais, o sistema deve ignorar os caracteres adicionais.
  [CA05] Dado que o cliente preencha o campo "Primerio Nome" com 40 letras e tente digitar mais, imediatamente o sistema deve apresentar o texto "Apenas 40 letras são aceitas" abaixo da caixa de preenchimento em fonte Nunit, tamanho 7, em cor vermelha por 5 segundos após a última tentativa de digitação.
  [CA06] Dado que o cliente preencha o campo "Primerio Nome" com 1 letra e mova o cursor de digitação para fora da caixa de digitação do "Primeiro Nome", o sistema deve imediatamente o sistema deve apresentar o texto "Nome com pelo menos 2 caracteres é aceito" abaixo da caixa de preenchimento em fonte Nunit, tamanho 7, em cor vermelha até que haja digitação de 2 ou mais caracteres. 
  [CA07] Dado que o cliente preencha o campo Sobrenome com todas as palavras com apenas 1 letra e mova o cursor de digitação para fora da caixa de digitação do Sobrenome, o sistema deve imediatamente o sistema deve apresentar o texto "Um sobrenome com pelo menos 2 caracteres é aceito" abaixo da caixa de preenchimento em fonte Nunit, tamanho 7, em cor vermelha até que haja digitação de 2 ou mais caracteres em pelo menos uma palavra. 
  [CA08] Dado que o cliente preencha o campo Sobrenome com alguma palavra com mais de 40 letras e para o campo total menos de 120 caracteres e tente digitar mais, imediatamente o sistema deve apresentar o texto "Apenas 40 caracteres são aceitos por sobrenome. Por favor, corrija." abaixo da caixa de preenchimento em fonte Nunit, tamanho 7, em cor vermelha até que essa condição seja desfeita.
  [CA09] Dado que o cliente preencha o campo Sobrenome com alguma palavra com mais de 40 letras e no total de 120 caracteres e tente digitar mais, imediatamente o sistema deve apresentar o texto "Apenas 120 caracteres são aceitos." abaixo da caixa de preenchimento em substituição à mensagem original "Apenas 40 caracteres são aceitos por sobrenome. Por favor, corrija." abaixo da caixa de preenchimento em fonte Nunit, tamanho 7, em cor vermelha por 5 segundos após a última tentativa de digitação. Após esse tempo, a mensagem de CA08 deve reaparecer caso haja ainda condição.
  [CA10] Dado que o cliente preencha o campo Sobrenome com 120 caracteres e tente digitar mais, imediatamente o sistema deve apresentar o texto "Apenas 120 caracteres são aceitos." abaixo da caixa de preenchimento em fonte Nunit, tamanho 7, em cor vermelha por 5 segundos após a última tentativa de digitação.
  [CA011] Dado que o cliente preencha o campo "Primerio Nome" com 1 letra e mova o cursor de digitação para fora da caixa de digitação do "Primeiro Nome", o sistema deve imediatamente o sistema deve apresentar o texto "Nome com pelo menos 2 caracteres é aceito" abaixo da caixa de preenchimento em fonte Nunit, tamanho 7, em cor vermelha até que haja digitação de 2 ou mais caracteres. 
  [CA12] Caso o usuário digite qualquer caractere diferente de número, imediatamente o sistema deve apresentar o texto "Apenas números são aceitos." abaixo da caixa de preenchimento em fonte Nunit, tamanho 7, em cor vermelha até que a condição seja satisfeita
 
US3 - 

Regras:

  [R16] Deve haver campo de finalizar cadastro
  [R17] O botão "Finalizar Cadastro" deve ficar esmaecido se algum dos campos não estiverem preenchidos devidamente
  [R18] O botão "Finalizar Cadastro" esmaecido deve ter um texto "Por favor, preencha os dados obrigatórios" em cima em cor vermelha de fonte Nunit tamanho 7 em cima desse botão
  [
  [R16] Deve haver campo de finalizar cadastro
  [R17] O botão "Finalizar Cadastro" deve ficar esmaecido se algum dos campos não estiverem preenchidos devidamente
  [R18] O botão "Finalizar Cadastro" esmaecido deve ter um texto "Por favor, preencha os dados obrigatórios" em cima em cor vermelha de fonte Nunit tamanho 7 em cima desse botão
  [

```
## Épico 2: Acesso aos serviços bancários
*Histórias focadas aos acessos*
```gherkin
US1 - Acesso ao sistema
Como analista de sistema, preciso que o cliente consiga acessar 
```

## Épico 3: Serviços Bancários Básicos
*Histórias focadas nos serviços bancários básicos*
```gherkin
US1 - Serviços bancários básicos

Como analista jurídico, preciso que o banco ofereça a seus clientes serviços bancários básicos a todas as contas.

Regras:

  [R01] Cartão de débito: Fornecimento e segunda via (exceto por perda/roubo).
  [R02] Saques: Até 4 por mês.
  [R03] Transferências: Até 2 por mês entre contas da mesma instituição.
  [R04] Extratos: Até 2 por mês.
  [R05] Consultas: Ilimitadas via internet/app.
  [R06] Pix: Ilimitado e gratuito.
  [R07] Cheques: Até 10 folhas por mês.
  
Critérios de Aceitação:

  [CA1] Dado que o cliente possua uma conta vinculada a uma agência, o sistema deve oferecer cancelamento imediato do cartão de débito por motivo de perda/roubo
  [CA2] O sistema deve oferecer uma opção para emissão de segunda via do cartão de débito mediante a cobrança de taxa de R$ 10,00
  [CA3] O sistema deve mostrar o estado da emissão e envio do cartão até o endereço do cliente
  [
```
## Épico X: TODO
### Validações adicionais nos campos de cadastros
- Sobrenome
  - Não permitir sobrenomes com mais de duas preposições sequenciais
- Campos com caracteres
  - aceitar apenas caracteres latin-1 (ver boa prática no mercado)
### Campos de Cadastro adicionais
- pedir informações de contato
  - e-mail
  - telefone
  - endereço
- seccionar esses dados requisitados na página de cadastro
  - Nome, Sobrenome
  - Contatos
  - Endereço
  - Senha
  - Ocupação profissional e renda
- tornar a página mais amigável
### senha
- exigir senha alfanumérica com caracteres especiais
- exigir pelo menos 8 caracteres
- salvar senha criptografada e salvar o hash dela
### Cadastro parcial
- salvar os dados de contato com o cliente para quando retornar apenas complementar os dados faltantes
- salvar por tempo determinado de acordo com a LGPD
### Acessibilidade
Para deficientes visuais e auditivos
- cadastro:
  - encontrar a opção e preenchimento de campos
  - confirmação que tudo está ok
- opções de serviços bancários
  - encontrar opções
  - execução
  - confirmação de falha ou sucesso
### Confirmação de operações por e-mail
- Cadastro
  - parcial
  - total
- operações bancárias importantes
  - Saques
  - Transferências
  - Pix
  - Investimentos
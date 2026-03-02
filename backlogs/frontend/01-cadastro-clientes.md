O Banco Bufunfa deve oferecer serviços bancários aos seus clientes.

# Backlog do Produto: banco-Bufunfa

## Épico 1: Cadastro de cliente
*Histórias focadas no cadastro do cliente*
```gherkin
[X] US1.1 - Localização da opção de cadastro (Concluído em 15/02/2026)

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
[X] US1.2 - Cadastro em uma única sessão (Concluído em 16/02/2026)

Como analista de negócios, preciso que o cliente consiga realizar seu cadastro no sistema a partir de acesso remoto clicando no botão de cadastro

Regras:

  [R01] Para cada dado, deve haver um campo para o cliente preencher
  [R02] Os campos que o cliente deve preencher:
        - seu primeiro nome
	- seu sobrenome (demais nomes)
	- CPF
	- senha

Casos de aceitação:

  [CA01] Dado que o cliente preencha o seu "Primerio Nome", Sobrenome, CPF e Senha de acordo com as regras do sistema, então o sistema deve efetuar o cadastro do usuário com sucesso e informar a mensagem "Cliente [Nome do Cliente] cadastrado com sucesso"
```
```gherkin
US1.3 - Validação do campo "Primeiro Nome"

Como analista de negócios, preciso que o cliente consiga realizar seu cadastro no sistema informando o seu Primeiro Nome com padrões mínimos de legibilidade

Regras
  [R01] Apenas letras e letras com acento do alfabeto latino são aceitas no campo "Primeiro Nome"
  [R02] Não importa a caixa (alta ou baixa) para os campos "Primeiro Nome" e "Sobrenome"
  [R03] O sistema deve apresentar ao usuário no campo "Primeiro Nome" a primeira letra Maiúscula e as demais minúsculas independentemente da caixa digitada. Essa transformação deve ocorrer após 0,5 segundos para que o usuário perceba a ocorrência.
  [R04] O campo "Primeiro Nome" deve ter pelo menos 2 caracteres e suportar até 40 caracteres

Casos de aceitação

  [X] [CA01] Dado que o cliente preencha o campo "Primeiro Nome" com pelo menos duas letras e apenas letras, ao sair da caixa de seleção, o sistema deverá formatar o nome digitado na caixa de preenchimento desse campo com a primeira letra do nome para maiúscula e as demais minúsculas por 0,5 segundos. (Concluído em 18/02/2026).
  [X] [CA02] Dado que o cliente preencha o campo "Primerio Nome" com números, imediatamente o sistema deve apresentar o texto "Números não são permitidos. Apenas 2 a 40 letras são permitidas" abaixo da caixa de preenchimento em fonte Nunit, tamanho 7, em cor vermelha. (Concluído em 22/02/2026).
  [X] [CA03] Dado que o cliente preencha o campo "Primerio Nome" com espaços, imediatamente o sistema deve apresentar o texto "Espaços não são permitidos. Apenas 2 a 40 letras são permitidas" abaixo da caixa de preenchimento em fonte Nunit, tamanho 7, em cor vermelha. (Concluído em 22/02/2026).
  [X] [CA04] Dado que o cliente preencha o campo "Primerio Nome" com caracteres especiais, imediatamente o sistema deve apresentar o texto "Espaços não são permitidos. Apenas 2 a 40 letras são permitidas" abaixo da caixa de preenchimento em fonte Nunit, tamanho 7, em cor vermelha. (Concluído em 22/02/2026).
  [X] [CA05] Dado que o cliente preencha o campo "Primerio Nome" com 40 letras e tente digitar mais, o sistema deve ignorar os caracteres adicionais (Concluído em 22/02/2026).
  [X] [CA05] Dado que o cliente preencha o campo "Primerio Nome" com 40 letras e tente digitar mais, imediatamente o sistema deve apresentar o texto "Apenas 2 a 40 letras são permitidas" abaixo da caixa de preenchimento em fonte Nunit, tamanho 7, em cor vermelha por 5 segundos após a última tentativa de digitação (Concluído em 22/02/2026).
  [X] [CA06] Dado que o cliente preencha o campo "Primerio Nome" com 1 letra e mova o cursor de digitação para fora da caixa de digitação do "Primeiro Nome", o sistema deve imediatamente o sistema deve apresentar o texto "Apenas 2 a 40 letras são permitidas" abaixo da caixa de preenchimento em fonte Nunit, tamanho 7, em cor vermelha até que haja digitação de 2 ou mais caracteres (Concluído em 22/02/2026). 
```

```gherkin
US1.4 - Validação do campo "Sobrenome"

Como analista de negócios, preciso que o cliente consiga realizar seu cadastro no sistema informando o seu Sobrenome com padrões mínimos de legibilidade

Regras
  [R01] O sistema deve apresentar ao usuário no campo Sobrenome a primeira letra maiúscula de cada palavra e as demais minúsculas independentemente da caixa digitada. Essa transformação deve ocorrer após 0,5 segundos para que o usuário perceba a ocorrência.
  [R02] O campo "Sobrenome" pode aceitar apenas letras, letras com acento do alfabeto latino e espaços
  [R03] O campo "Sobrenome" não deve permitir palavras com 1 caracter
  [R04] O campo "Sobrenome" pode aceitar até 120 caracteres
  [R05] As palavras do campo "Sobrenome" podem conter até 40 caracteres

Critérios de aceitação

  [X] [CA01] Dado que o cliente preencha o campo "Sobrenome" com pelo menos duas letras em cada palavra (com apenas letras) com apenas espaços entre as palavras, ao sair da caixa de seleção, o sistema deverá formatar o nome digitado na caixa de preenchimento desse campo com a primeira letra de cada palavra para maiúscula e as demais minúsculas por 0,5 segundos (Concluído em 22/02/2026).
  [X] [CA02] Dado que o cliente preencha o campo Sobrenome com todas as palavras com apenas 1 letra e mova o cursor de digitação para fora da caixa de digitação do Sobrenome, o sistema deve imediatamente o sistema deve apresentar o texto "Pelo menos 2 letras devem ser informadas no campo Sobrenome." abaixo da caixa de preenchimento em fonte Nunit, tamanho 7, em cor vermelha até que haja digitação de 2 ou mais caracteres em pelo menos uma palavra (Concluído em 22/02/2026).
  [X] [CA03] Dado que o cliente preencha o campo Sobrenome com alguma palavra com mais de 40 letras e para o campo total menos de 120 caracteres e tente digitar mais, imediatamente o sistema deve apresentar o texto "Apenas 40 caracteres são aceitos por sobrenome." abaixo da caixa de preenchimento em fonte Nunit, tamanho 7, em cor vermelha. E então, ignorar as teclas digitadas em excesso nesse sobrenome. (Concluído em 22/02/2026).
  [X] [CA04] Dado que o cliente preencha o campo Sobrenome com alguma palavra com mais de 40 letras e no total de 120 caracteres e tente digitar mais, imediatamente o sistema deve apresentar o texto "Apenas 120 caracteres são aceitos." abaixo da caixa de preenchimento em fonte Nunit, tamanho 7, em cor vermelha por 5 segundos após a última tentativa de digitação. Após esse tempo, a mensagem de CA08 deve reaparecer caso haja ainda condição. (Concluído em 22/02/2026).
```

```gherkin
US1.5 - Validação do campo "CPF"

Como analista de negócios, preciso que o cliente consiga realizar seu cadastro no sistema informando o seu CPF corretamente

  [R01] Apenas números são aceitos no CPF
  [R02] O campo CPF deve suportar apenas 11 dígitos
  [R03] O campo CPF deve validar o CPF digitado
  
Critérios de aceitação

  [X] [CA01] Dado que o cliente preencha o campo CPF com 11 algarismos e que seja válido, então ao sair da caixa de preenchimento, o sistema deve apresentar o texto "CPF válido" abaixo da caixa de preenchimento em fonte Nunit, tamanho 7, em cor verde. (Concluído em 26/02/2026)
  [X] [CA02] Caso o usuário digite um CPF inválido no campo CPF após sair do cursor da caixa de preenchimento, imediatamente o sistema deve apresentar o texto "CPF inválido" abaixo da caixa de preenchimento em fonte Nunit, tamanho 7, em cor vermelha até que a condição seja satisfeita.(Concluído em 26/02/2026)
  [X] [CA03] Caso o usuário digite mais do que 11 dígitos no campo CPF, o sistema deve ignorar. (Concluído em 23/02/2026)
  [CA07] Caso o usuário digite no campo CPF qualquer caractere diferente de número, imediatamente o sistema deve apresentar o texto "Apenas números são aceitos." abaixo da caixa de preenchimento em fonte Nunit, tamanho 7, em cor vermelha por 5 segundos após a última tentativa de digitação.
```

US1.5 - Validação do campo "Senha"

```gherkin
Regras:
  
  [R01] O campo Senha deve suportar apenas números
  [R02] O campo Senha deve receber exatamente 8 dígitos
  [R03] O campo Senha não pode aceitar dígitos sequenciais em ordem crescente, nem decrescente, e.g, 12, 54
  [R04] O campo Senha não pode aceitar dígitos sequenciais repetidos, e.g, 44

Critérios de aceitação:

  [CA04] Caso o usuário digite qualquer caracter diferente de algarismo no campo Senha, imediatamente o sistema deve apresentar o texto "Apenas números são aceitos. Por favor, corrija." abaixo da caixa de preenchimento em fonte Nunit, tamanho 7, em cor vermelha até que a condição seja satisfeita.
  [CA05] Caso o usuário digite qualquer sequência de números em ordem crescente ou decrescente no campo Senha, imediatamente o sistema deve apresentar o texto "Sequência em ordem crescente ou decrescente não permitida (exemplo: 45 ou 87). Por favor, corrija." abaixo da caixa de preenchimento em fonte Nunit, tamanho 7, em cor vermelha até que a condição seja satisfeita.
  [CA06] Caso o usuário digite qualquer sequência de números iguais no campo Senha, imediatamente o sistema deve apresentar o texto "Sequência de números iguais repetidos não permitida (exemplo: 44 ou 77). Por favor, corrija." abaixo da caixa de preenchimento em fonte Nunit, tamanho 7, em cor vermelha até que a condição seja satisfeita.

```

```gherkin
US1.6 - Finalização de cadastro

Como analista de negócios, preciso que o cliente consiga realizar seu cadastro no sistema informando após realizar todos os dados corretamente

Regras:

  [R01] Deve haver campo de finalizar cadastro.
  [R02] O botão "Finalizar Cadastro" deve ficar esmaecido se algum dos campos não estiverem preenchidos devidamente.
  [R03] Quando o botão "Finalizar Cadastro" ficar esmaecido, esse botão não deve apresentar qualquer ação ao clicar.
  [R04] O botão "Finalizar Cadastro" esmaecido deve ter um texto "Por favor, preencha os dados obrigatórios" em cima em cor vermelha de fonte Nunit tamanho 7 em cima desse botão.
  [R05] Deve haver campo de finalizar cadastro.
  [R06] O botão "Finalizar Cadastro" deve ficar esmaecido se algum dos campos não estiverem preenchidos devidamente.
  [R07] O botão "Finalizar Cadastro" esmaecido deve ter um texto "Por favor, preencha os dados obrigatórios" em cima em cor vermelha de fonte Nunit tamanho 7 em cima desse botão.
  [R08] Ao clicar no botão "Finalizar Cadastro", desde que ele não esteja esmaecido, então o cliente deve receber a mensagem "Cliente cadastrado com sucesso".

Critérios de aceitação

[CA01] Dado que o cliente preencheu todos os dados cadastrais obrigatórios devidamente, "Primeiro Nome", "Sobrenome", "CPF", "Senha", então o botão "Finalizar Cadastro" deve ficar disponível.
[CA02] Dado que o botão "Finalizar Cadastro" esteja disponível, ao clicar nesse botão, a aplicação deve informar ao usuário que foi cadastrado com a mensagem "Cliente cadastrado com sucesso".
[CA02] Dado que o cliente não preencheu qualquer campo cadastral obrigatório devidamente, então o botão "Finalizar Cadastro" deve ficar esmaecido e apenas saindo desse estado quando todos os campos forem preenchidos devidamente.
```

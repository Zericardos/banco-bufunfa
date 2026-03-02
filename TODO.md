# Frontend
## Usar herança para validação de campos
- campos nome e sobrenome provavelmente usarão métodos em comuns e têm a característica de ser campos textos, então pode-se criar uma superclasse CampoTexto, implementar métodos bases e outros abstratos para forçar a implementação
- primeiro criar uma classe para cada e depois que tudo estiver funcionando, aplicar a herança e polimorfismo (as primeiras coisas primeiro)
## Simplificar
### Máscara de CPF
- usar Regex
# Problema
- CPF náo trava quando atinjo o tamanho máximo;
- provável que eu tenha que criar uma variável auxiliar que armazene o valor antigo antes do novo ou crie um novo evento que registre o valor a ser inserido antes de lê-lo ou
-  procurar algum jeito de fazer isso no evento input
-  A cor do campo CPF permanece após apagar alguns caracteres
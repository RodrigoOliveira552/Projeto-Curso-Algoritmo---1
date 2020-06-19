/*escreval("Digite o nome do aluno: ")
   leia(nome)
   Escreval("Digite a nota 01 do aluno: ")
   leia(nota01)
   Escreval("Digite a nota 02 do aluno: ")
   leia(nota02)
   media := (nota01 + nota02) / 2
se media >= 5      Entao
   Escreval("Aprovado!", nome)
senao
     Escreval("Reprovado!", nome)
     Fimse*/

var nome, nota01, nota02;
nome = prompt("Digite o nome do aluno: ")
nota01 = prompt("Digite a nota 01 do aluno: ")
nota02 = prompt("Digite a nota 02 do aluno: ")

media = (nota01 + nota02) / 2

if(media >= 50)
    alert("Aprovado! " + nome)
else
    alert("Reprovado! " + nome)
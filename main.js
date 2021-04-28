 // perguntando o nome  agora
 const nome = prompt("Seja bem-vinda, qual o seu nome?");
       console.log('Olá' + nome);
 // printando o nome na página
  document.write("Olá, " + nome);

 // perguntando se quer dar inicio a prova ou não
 const teste = prompt("Quer iniciar o teste? (insira o número de acordo com a sua resposta)\n 1-Sim \n 2-Não");
  
 if (teste == 1){

 } else {
     alert("Obrigada, volte outra vez!")
 }
 // perguntas
 
 perguntaA = prompt("1- Quais dos 8 planetas do sistema solar são formados exclusivamente por gases?\n a) Mercúrio, Marte e Júpiter \n b) Júpiter, Saturno, Urano e Netuno \n c) Saturno, Marte, Urano e Júpiter")
 
 if(perguntaA == b ){
    const respostaCerta = document.getElementById("Respostas Certas")
    respostaCerta.add("Respostas Certas")
 } else {
    const respostaErrada = document.getElementById("Respostas Erradas")
    respostaCerta.add("Respostas Erradas")
 }
 
 perguntaB = prompt("2- Saturno tem quantas luas? \n a) 79 \n b) 91 \n c)82");

 if(perguntaB == c ){
    const respostaCerta = document.getElementById("Respostas Certas")
    respostaCerta.add("Respostas Certas")
 } else {
    const respostaErrada = document.getElementById("Respostas Erradas")
    respostaCerta.add("Respostas Erradas")
 }

 perguntaC = prompt("3- Por que o Sol é quente? \n a) o Sol é frio \n b) Porque ele tem muita massa \n c) Porque ele é uma bola de fogo")
 if(perguntaC == c ){
    const respostaCerta = document.getElementById("Respostas Certas")
    respostaCerta.add("Respostas Certas")
 } else {
    const respostaErrada = document.getElementById("Respostas Erradas")
    respostaCerta.add("Respostas Erradas")
 }
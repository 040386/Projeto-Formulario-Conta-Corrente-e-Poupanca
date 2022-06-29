class Pessoa{
    
    constructor(tipo,conta,agencia,nome){
        this.tipo=tipo;
        this.conta=conta;
        this.agencia=agencia;
        this.nome=nome;
      
        
    }



    card =  function(){
        let cardPessoa = "";

        if(this.tipo == "Poupança"){

            cardPessoa = "<div class='cardPoupanca'>";
        } else{
            cardPessoa ="<div class='cardCorrente'>";

        }

        cardPessoa +=
                        "Tipo de Conta  :  "          + this.tipo    + "<br/>" +"<hr/>"+
                        "Conta: "          + this.conta   + "<br/>" +"<hr/>"+
                        "Agência: "      + this.agencia + "<br/>" +"<hr/>"+
                        "Nome do Titular: "        + this.nome    + "<br/>" +"<hr/>"+   
                    "</div>";
        return cardPessoa;
    }


}


///// Variaveis globais criando arrays e recebendo valores pelos inputs/////////////////////

var poupanca = [];
var corrente = [];
var tipo = document.getElementById("inputTipo");
var conta =document.getElementById("inputConta");
var agencia = document.getElementById("inputAgencia");
var nome = document.getElementById("inputNome");


function Resetar(){
    var tipo = document.getElementById("inputTipo").value="";
    var conta =document.getElementById("inputConta").value="";
    var agencia = document.getElementById("inputAgencia").value="";
    var nome = document.getElementById("inputNome").value="";

}




///////////////funçao cadastrar ///////////////


function cadastrar(){
    //atribuindo valores nos Arrays criados 

       if(tipo.value=="Poupança"){
        poupanca.push(new Pessoa(tipo.value, conta.value , agencia.value , nome.value));  
        


       }else if(tipo.value=="Corrente"){
        corrente.push(new Pessoa(tipo.value, conta.value , agencia.value , nome.value));
       

       } 
       
       
 ///funçao que exibi os cards com valores
        exibir();
///funçao que deixa os campos vazios para nova inserçao de valores
        Resetar()  

}


////// funçao exibir //////


function exibir(){
    let forPoupanca = "";
    
    for(let i = 0; i < poupanca.length ; i++){
        forPoupanca += poupanca[i].card();
        
    }
    cards.innerHTML = forPoupanca ;

    let forCorrente="";
    for(let i = 0; i < corrente.length ; i++){
        forCorrente += corrente[i].card();
        
    }
    cards.innerHTML += forCorrente ;


    
}
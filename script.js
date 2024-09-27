const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1- A inteligência artificial (IA) é um conjunto de tecnologias que permitem aos computadores executar uma variedade de funções avançadas. Quais são as implicações da IA na privacidade dos dados?",
        alternativas: [
            {
            texto: "A) A IA, embora possa desempenhar um papel fundamental na detecção e prevenção de ameaças à segurança, também acaba divulgando os dados que são inseridos na plataforma por outros usuários.",
            afirmacao: "Você conhece o futuro tecnológico, porém ainda é bem cauteloso."
            },
            {
            texto: "B) Também pode ser usada como uma ferramenta para a invasão de privacidade.",
            afirmacao: "Se sente totalmente inseguro quanto ao uso de IA, pensa em proteger a todo custo suas informações."
            }
        ]
    },
    {
        enunciado: "2- Quais são os principais desafios éticos relacionados ao uso de IA em práticas sustentáveis?",
        alternativas: [
            {
            texto:"A IA pode ser utilizada para ajudar com dados sobre o nível de desperdícios de recursos naturais.",
            afirmacao: "Para você a ética e a IA andam juntas e sempre promove benefícios."
            },
            {
            texto: "A IA não pode trabalhar com o conceito de ética.",
            afirmacao: "Não acredita que a IA pode ser uma solução promissora para o futuro."
            }
        ]
    },

    {
        enunciado: "3- Tomamos como referência que um consumo consciente é aquele do qual o indivíduo compra somente o necessário, Como a sociedade poderia ter um consumo conciente, Buscando informações no IA?",
        alternativas: [
            {
            texto: "A) Buscando informação na legislação da saúde.",
            afirmacao: "Prefere a boa e antiga forma de pesquisa, sempre indicando fonte confiáveis."    
            },
            {    
            texto: "B) Confronto das informações da inteligengia artificial e a pessoal.",
            afirmacao: "Acredita que tem boas opiniões, mas se deixa levar pelo que a IA apresenta."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();

}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click",()=>respostaSelecionada(alternativa));    
    caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    //historiaFinal += afirmacao + " ";
    historiaFinal = historiaFinal + afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "IA e o meio ambiente!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
mostraPergunta();
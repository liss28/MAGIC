function exibirdados(){
    const cartas = [
    {
        "nome": "Dragão do Artifício",
        "tipo": "Criatura artefato: dragão",
        "habilidades": "voar: ganha +1/+0 até o final do turno, desenterrar: devolva este card do cemitério para o campo de batalha",
        "custo": "6",
        "imagem": ""  
    },
    
    {
        "nome": "Constatação Terrivel",
        "tipo": "Feitiço",
        "habilidades": "escolha:comprar 2 cards e perder 2 PV's ou as criaturas do seu oponente recebem -1/-1 até o final do turno",
        "custo": "6",
        "imagem": "" 
    },
    
    {
        "nome": "Reencontro Amargo",
        "tipo": "Encantamento",
        "habilidades": "quando entra no campo de batalha descate 1 card e compre 2, sacrifique: as criaturas ganham impeto até o final do turno",
        "custo": "1 terreno vermelho",
        "imagem": ""
    },

    {
        "nome": "Golpe Rodopiante",
        "tipo": "Mágica Instantanea",
        "habilidade": "Criatura alvo: recebe +2/+0 e ganha iniciativa",
        "custo": "1 + 1 terreno vermelho",
        "imagem": ""

    },

    {
        "nome": "Dragão Mecanico Fallaji",
        "tipo": "Criatura Artefato: dragão",
        "habilidade": "Voar: recebe +1/+0 até o final do turno",
        "custo": "8",
        "imagem": ""
    },

    {

        "nome": "acrobata da zona de mortel",
        "tipo": "criatura - soldado humano",
        "habilidades": "Toda vez que Kill-Zone Acrobat atacar, você pode sacrificar outra criatura ou artefato. Se fizer isso, Kill-Zone Acrobat ganha voar até o final do turno, seu treinamento circense provou ser surpreendentemente valioso no campo de batalha.",
        "custo": "2",
        "imagem": ""
    },

    {
        "nome": "Vira-lata de sucata",
        "tipo": "Criatura Artefato — Cachorro",
        "habilidades": "Quando Scrapwork Mutt entra, você pode descartar uma carta. Se fizer isso, compre uma carta, desenterrar: Retorne este card do seu cemitério para o campo de batalha. Ele ganha ímpeto. Exile-o no início da próxima etapa final ou se ele deixaria o campo de batalha. Desenterre apenas como um feitiço.)",
        "custo": "2",
        "imagem": ""
    },

    {
        "nome": "O Juggernaut de Mishra",
        "tipo": "Criatura Artefato — Juggernaut",
        "habilidades": "O Juggernaut de Mishra ataca em cada combate, se possível, desenterrar: Retorne este card do seu cemitério para o campo de batalha. Ele ganha ímpeto. Exile-o no início da próxima etapa final ou se ele deixaria o campo de batalha. Desenterre apenas como um feitiço.)",
        "custo": "5",
        "imagem": ""
    },

    {
        "nome": "Colheitadeira de Ashnod",
        "tipo": "Criatura Artefato — Construir",
        "habilidades": "Toda vez que o Colhedor de Ashnod atacar, exile o card alvo de um cemitério, desenterrar: Retorne este card do seu cemitério para o campo de batalha. Ele ganha ímpeto. Exile-o no início da próxima etapa final ou se ele deixaria o campo de batalha. Desenterre apenas como um feitiço.)",
        "custo": "2",
        "imagem": ""
    },

    {
        "nome": "Revenant de Argila ",
        "tipo": "Criatura Artefato — Golem",
        "habilidades": "Clay Revenant entra virado, devolva Clay Revenant do seu cemitério para sua mão, tawnos construiu suas estátuas de argila para maior durabilidade, sem saber que elas continuariam lutando muito depois da guerra.",
        "custo": "1",
        "imagem": ""
    },
    
    {
        "nome": "Scrapwork Rager",
        "tipo": "Criatura Artefato — Horror Phyrexiano",
        "habilidades": "Quando Scrapwork Rager entra, você compra uma carta e perde 1 ponto de vida, desenterrar: Retorne este card do seu cemitério para o campo de batalha. Ele ganha ímpeto. Exile-o no início da próxima etapa final ou se ele deixaria o campo de batalha. Desenterre apenas como um feitiço.)",
        "custo": "4",
        "imagem": ""
    },

    {
        "nome": "Balista do Terror",
        "tipo": "Criatura Artefato — Construir",
        "habilidades": "Sempre que Terror Ballista atacar, você pode sacrificar outra criatura. Quando fizer isso, destrua a criatura alvo que um oponente controla, desenterrar: Retorne este card do seu cemitério para o campo de batalha. Ele ganha ímpeto. Exile-o no início da próxima etapa final ou se ele deixaria o campo de batalha. Desenterre apenas como um feitiço.)",
        "custo": "7",
        "imagem": ""
    },

    {
        "nome": "Dançarina da corrente Fallaji",
        "tipo": "Criatura — Soldado Humano",
        "habilidades": "Fallaji Chaindancer ganha golpe duplo até o final do turno, ela estava ansiosa para mostrar aos invasores Yotians como ela ganhou seu apelido, "A Tempestade de Areia de Tomakul".",
        "custo": "3",
        "imagem": ""
    },

    {
        "nome": "criatura lendária - humano artesão",
        "tipo": "impecto",
        "habilidades": "descarte um card: compre um card, toda vez que você descarta um ou mais cards de artefato, adicione. Está habilidade é desencadeada apenas uma vez a cada turno, enquanto Urza lia livros, Mishra aprendia a ler o proprio deserto.",
        "custo": "",
        "imagem": ""

    }
        
    ];

console.clear();
console.log("// exibe todas as cartas dentro da estrutura JSON");
console.log(cartas);
console.log("// exibe os dados da primeira carta");
console.log(cartas[0]);
console.log("// exibe os dados da segunda carta");
console.log(cartas[1]);
console.log("// exibe se a carta 2 é eTerreno");
console.log(cartas[1].eTerreno);
}

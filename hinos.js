/* =============================================================
   HINOS — UMADECI 2026
   Este é o ÚNICO arquivo que precisa ser editado para adicionar
   ou corrigir letras.

   COMO ESCREVER UMA LETRA
   - Uma linha em branco separa as estrofes.
   - Linha entre **asteriscos** = solo de quem estiver em "solo"
     daquela parte.       Ex.:  **Santo, santo, santo, santo és**
   - Para vários solistas no mesmo hino, use blocos:
         [Solo: Nome da Pessoa]
         linhas do solo...
         [Todos]
   - Hino sem letra ainda: deixe letra: "" (aparece "Letra em breve").
   ============================================================= */

/* Cor de cada solista (o nome precisa ser escrito igual nas letras) */
const SOLISTAS = {
  "Ana Lídia": "#d6336c",
};

/* Programação: dia → momento → lista de hinos (pelo id) */
const PROGRAMACAO = [
  {
    dia: "Sexta",
    momentos: [
      { nome: "1º Louvor", hinos: ["um-novo-dia"] },
      { nome: "2º Louvor", hinos: ["gratidao"] },
      { nome: "1º UMADI",  hinos: ["jerusalem-dias-de-elias"] },
    ],
  },
  {
    dia: "Sábado",
    momentos: [
      { nome: "1º Louvor", hinos: ["santo-pra-sempre"] },
      { nome: "2º Louvor", hinos: ["jesus-meu-guia-e"] },
      { nome: "1º UMADI",  hinos: ["abraco-do-noivo-o-rei-esta-voltando"] },
      { nome: "2º UMADI",  hinos: ["quem-e-ele"] },
    ],
  },
  {
    dia: "Domingo",
    momentos: [
      { nome: "1º Louvor", hinos: ["grande-e-o-senhor-consagracao"] },
      { nome: "2º Louvor", hinos: ["repeticao"] },
      { nome: "1º UMADI",  hinos: ["leao-e-cordeiro"] },
      { nome: "2º UMADI",  hinos: ["te-adorarei"] },
    ],
  },
];

/* Hinos. Medley = mais de uma parte. */
const HINOS = {
  "um-novo-dia": {
    partes: [{ titulo: "Um Novo Dia", letra: "" }],
  },

  "gratidao": {
    partes: [{ titulo: "Gratidão", letra: "" }],
  },

  "jerusalem-dias-de-elias": {
    partes: [
      { titulo: "Jerusalém", letra: "" },
      { titulo: "Dias de Elias", letra: "" },
    ],
  },

  "santo-pra-sempre": {
    partes: [
      {
        titulo: "Santo",
        solo: "Ana Lídia",
        letra: `
**Santo, santo, santo, santo és**
**Santo, santo, santo, santo és**
**Tão perfeito, incomparável és**
**Meu Jesus tão adorado!**

**Santo, santo, santo, santo és**
**Santo, santo, santo, santo és**
**Tão perfeito, incomparável és**
**Meu Jesus tão adorado**

Que abriu a porta da eternidade
Se entregou pra se cumprir toda verdade
Humilhado foi e não revidou
Foi traído e mesmo assim Ele perdoou

Foi crucificado e morto lá na rude cruz
Mas ao terceiro dia provou que era Jesus
O Filho de Deus, o Messias prometido
Verdadeiro, justo, mais que excelente

Toda a pureza está selada no Seu coração
Autor da vida, autor da salvação
A fonte de água viva que jorra a vida
Unção que cura, que nos lava e purifica

Santo, santo, santo, santo és
Santo, santo, santo, santo és
Tão perfeito, incomparável és
Meu Jesus tão adorado

Santo, santo, santo, santo és
Santo, santo, santo, santo és
Tão perfeito, incomparável és
Meu Jesus tão adorado

Que abriu a porta da eternidade
Se entregou pra se cumprir toda verdade
Humilhado foi e não revidou
Foi traído e mesmo assim Ele perdoou

Foi crucificado e morto lá na rude cruz
Mas ao terceiro dia provou que era Jesus
O Filho de Deus, o Messias prometido
Verdadeiro, justo, mais que excelente

Toda a pureza está selada no Seu coração
Autor da vida, autor da salvação
A fonte de água viva que jorra a vida
Unção que cura, que nos lava e purifica

Santo, santo, santo, santo és
Santo, santo, santo, santo és
Tão perfeito, incomparável és
Meu Jesus tão adorado
`,
      },
      {
        titulo: "Pra Sempre",
        letra: `
Cantamos aleluia
Cantamos aleluia
Cantamos aleluia
O Cordeiro venceu

Cantamos aleluia
Cantamos aleluia
Cantamos aleluia
O Cordeiro venceu

Cantamos aleluia
Cantamos aleluia
Cantamos aleluia
O Cordeiro venceu

Cantamos aleluia
Cantamos aleluia
Cantamos aleluia
O Cordeiro venceu

Cantamos aleluia
Cantamos aleluia
Cantamos aleluia
O Cordeiro venceu

Cantamos aleluia
Cantamos aleluia
Cantamos aleluia
O Cordeiro venceu

Pra sempre exaltado é
Pra sempre adorado é
Pra sempre Ele vive
Ressuscitou, ressuscitou

Pra sempre exaltado é
Pra sempre adorado é
Pra sempre Ele vive
Ressuscitou, ressuscitou
`,
      },
    ],
  },

  "jesus-meu-guia-e": {
    partes: [{ titulo: "Jesus, Meu Guia É", letra: "" }],
  },

  "abraco-do-noivo-o-rei-esta-voltando": {
    partes: [
      { titulo: "Abraço do Noivo", letra: "" },
      { titulo: "O Rei Está Voltando", letra: "" },
    ],
  },

  "quem-e-ele": {
    partes: [{ titulo: "Quem é Ele", letra: "" }],
  },

  "grande-e-o-senhor-consagracao": {
    partes: [
      { titulo: "Grande é o Senhor", letra: "" },
      { titulo: "Consagração", letra: "" },
    ],
  },

  "repeticao": {
    aviso: true,
    partes: [{ titulo: "Repetição de um hino", letra: "" }],
    nota: "Será repetido um dos hinos do congresso — a definir.",
  },

  "leao-e-cordeiro": {
    partes: [{ titulo: "Leão e Cordeiro", letra: "" }],
  },

  "te-adorarei": {
    partes: [{ titulo: "Te Adorarei", letra: "" }],
  },
};

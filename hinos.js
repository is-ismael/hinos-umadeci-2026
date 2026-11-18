/* =============================================================
   HINOS — UMADECI 2026
   Este é o ÚNICO arquivo que precisa ser editado para adicionar
   ou corrigir letras.

   COMO ESCREVER UMA LETRA
   - Uma linha em branco separa as estrofes.
   - Trecho entre *asteriscos* = solo de quem estiver em "solo"
     daquela parte. Pode ser a linha toda ou só um pedaço:
         **Santo, santo, santo, santo és**
         (*Santa cidade*), Jerusalém
   - Para vários solistas no mesmo hino, use blocos:
         [Solo: Nome da Pessoa]
         linhas do solo...
         [Todos]
     (depois do [Todos], os *asteriscos* continuam sendo dessa pessoa)
   - Trocar de quem são os *asteriscos* no meio do hino, sem colorir
     a estrofe inteira:  [Solista: Nome da Pessoa]
   - Grupo que não é solo (ex.: só as mulheres):
         [Grupo: Mulheres]  ...  [Todos]
   - Qualquer outra coisa entre [colchetes] vira uma indicação
     pequena, ex.: [Divide]  [Em vozes]  [Uníssono]
   - Hino sem letra ainda: deixe letra: "" (aparece "Letra em breve").
   ============================================================= */

/* Cor de cada solista (o nome precisa ser escrito igual nas letras) */
const SOLISTAS = {
  "Ana Lídia":    "#d6336c",
  "Maria Luiza":  "#0f8a7e",
  "Gabriela":     "#d9480f",
  "Carolina":     "#1c7ed6",
  "Júlia":        "#9c36b5",
  "Tayná":        "#c2255c",
  "Adrieli":      "#2f9e44",
  "Larissa Dias": "#0c8599",
  "Masculino":    "#1c7ed6",
  "Solo":         "#c92a2a",
  "Solo 1":       "#c92a2a",
  "Sara":         "#2b8a3e",
  "Mulheres":     "#ae3ec9",
  "Homens":       "#1c7ed6",
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
    partes: [{
      titulo: "Um Novo Dia",
      letra: `
Pela graça estou sendo curado
Pouco a pouco sendo transformado
Perfeito não sou, contudo, sou grato

Tenho lutas, mas eu não desisto
Com coragem, sigo vencendo
Perfeito não sou, contudo, sou grato

Novo dia recebi
Pra Te amar, ó Deus
E me trouxe até aqui
Para testemunhar
O que posso dizer
Senão aleluia?

Sou grato, Cristo
Sou grato, Cristo
Sou grato, Cristo
Novo dia recebi, recebi

Quando a noite se aproximava
Quase sem esperança eu estava
Minha mão segurou, por isso sou grato

Quando no fogo eu fui lançado
El Shaddai, estava ao meu lado
Nunca me deixou, por isso sou grato

Novo dia recebi
Pra Te amar, ó Deus
E me trouxe até aqui
Para testemunhar
O que posso dizer
Senão aleluia?

Sou grato, Cristo
Sou grato, Cristo
Sou grato, Cristo
Novo dia recebi, recebi
Recebi, recebi

Meu Senhor, eu só quero adorá-Lo
Tu és tudo, és tudo, és tudo para mim
Meu Senhor, eu só quero adorá-Lo
Tu és tudo, és tudo, és tudo para mim

Meu Senhor, eu só quero adorá-Lo
Tu és tudo, és tudo, és tudo
Meu Senhor, eu só quero adorá-Lo
Tu és tudo, és tudo, és tudo para mim, oh

Meu Senhor, eu só quero adorá-Lo
Tu és tudo, és tudo, és tudo para mim
Meu Senhor, eu só quero adorá-Lo
Tu és tudo, és tudo, és tudo para mim

Meu Senhor, eu só quero adorá-Lo
Tu és tudo, és tudo, és tudo
Meu Senhor, eu só quero adorá-Lo
Tu és tudo, és tudo, és tudo para mim

Novo dia recebi
Pra Te amar, ó Deus
E me trouxe até aqui
Para testemunhar
O que posso dizer
Senão aleluia?

Sou grato, Cristo
Sou grato, Cristo
Sou grato, Cristo
Novo dia recebi, recebi
Recebi, recebi
`,
    }],
  },

  "gratidao": {
    partes: [{
      titulo: "Gratidão",
      letra: `
Nada novo achei pra dizer, então
Como expressar minha gratidão?
Posso até cantar alguma canção
Que vai acabar, mas a Sua não

Então, vou levantar as minhas mãos e louvar
Pois tudo o que tenho é um aleluia, aleluia

Sei que é simples pra um Rei
Mas não tenho nada além
De um coração cantando aleluia, aleluia

Em resposta a Ti há uma ação
Me render aqui em adoração

Então, vou levantar as minhas mãos e louvar
Pois tudo o que tenho é um aleluia, aleluia

Sei que é simples pra um Rei
Mas não tenho nada além
De um coração cantando aleluia, aleluia

Ei, meu coração
Não se envergonhe, cante essa canção
Pois sei que há fôlego nesses pulmões
Vamos, louve ao Senhor

Ei, meu coração
Não se envergonhe, cante essa canção
Pois sei que há fôlego nesses pulmões
Vamos, louve ao Senhor

Ei, meu coração
Não se envergonhe, cante essa canção
Pois sei que há fôlego nesses pulmões
Vamos, louve ao Senhor

Ei, meu coração
Não se envergonhe, cante essa canção
Pois sei que há fôlego nesses pulmões
Vamos, louve ao Senhor

Então, vou levantar as minhas mãos e louvar
Pois tudo o que tenho é um aleluia, aleluia

Sei que é simples pra um Rei
Mas não tenho nada além
De um coração cantando aleluia, aleluia
`,
    }],
  },

  "jerusalem-dias-de-elias": {
    partes: [
      {
        titulo: "Jerusalém",
        solo: "Gabriela",
        letra: `
João viu o trono, morada de Deus
(*Santa cidade*), Jerusalém
Sua luz brilhava como cristal
(*Tanta beleza*) é sem igual

Ao redor do trono existe um rio
(*A árvore da vida*), sim Ele viu
Eu quero ir pra este lugar, Jerusalém!

[Divide]
Jerusalém!
Vou caminhar nas ruas de ouro
Irei abraçar o meu Mestre Jesus

Jerusalém!
Vou descansar às margens do rio
Na cidade, cidade de Luz

[Solista: Carolina]
João viu os santos louvando ao Senhor
(*Digno é o Cordeiro*) de honra e louvor
Não viu mais noite, nem escuridão
(*Pois o próprio Mestre*) ilumina Sião

Perto está o dia em que subirei
(*E no lar de paz*), eu morarei
Eu quero ir pra este lugar
Jerusalém!

Jerusalém!
Vou caminhar nas ruas de ouro
Irei abraçar o meu Mestre Jesus

Jerusalém!
Vou descansar às margens do rio
Na cidade, cidade de Luz

Jerusalém!
Jerusalém!
Cantai, oh, Santa Grei

Hosana nas alturas
Hosana pra sempre!
[Solo: Júlia]
Pra sempre!
[Todos]

Jerusalém!
Vou caminhar nas ruas de ouro
Irei abraçar o meu Mestre Jesus

Jerusalém!
Vou descansar às margens do rio
Na cidade, cidade de Luz

Morada de Deus, Jerusalém
Cidade de luz, Jerusalém!
`,
      },
      {
        titulo: "Dias de Elias",
        letra: `
Não há Deus como Jeová, não há Deus como Jeová
Não há Deus como Jeová, não há Deus como Jeová

[⬆ Sobe o tom]
Não há Deus como Jeová, não há Deus como Jeová
Não há Deus como Jeová, não há Deus como Jeová

Não há Deus como Jeová, não há Deus como Jeová
Não há Deus como Jeová, não há Deus como Jeová

Não há Deus como Jeová, não há Deus como Jeová
Não há Deus como Jeová

Ele vem brilhando como o Sol
Voando sobre as nuvens, a trombeta eu posso ouvir
E um grande coral cantando uma canção
Dizendo que já vem a salvação

Ele vem brilhando como o Sol
Voando sobre as nuvens, a trombeta eu posso ouvir
E um grande coral cantando uma canção
Dizendo que já vem a salvação

E um grande coral cantando uma canção
Dizendo que já vem a sal...vação
`,
      },
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
        solo: "Maria Luiza",
        letra: `
*Cantamos aleluia*
*Cantamos aleluia*
*Cantamos aleluia*
*O Cordeiro venceu*

*Cantamos aleluia*
*Cantamos aleluia*
*Cantamos aleluia*
*O Cordeiro venceu*

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
    partes: [{
      titulo: "Jesus, Meu Guia É",
      letra: `
Jesus, meu guia é
Amigo e protetor
Ele é o meu bom Pastor
E quando eu sentir temor

Nele confiarei
Nele confiarei
Fraco sou, mas Deus me dá
Seu poder, Seu amor

[Solo: Tayná]
Jesus, meu guia é
Amigo e protetor
Ele é o meu bom Pastor
E quando eu sentir temor
[Todos]

Nele confiarei (*Jesus, meu guia é*)
Nele confiarei (*amigo e protetor*)
Fraco sou, mas Deus me dá (*Ele é o meu bom Pastor*)
Seu poder, Seu amor (*e quando eu sentir temor*)

Nele confiarei
Nele confiarei
Fraco sou, mas Deus me dá
Seu poder, Seu amor

[Solo: Masculino]
Jesus, meu guia é
Amigo e protetor
Ele é o meu bom Pastor
E quando eu sentir temor
[Todos]

Nele confiarei (*Jesus, meu guia é*)
Nele confiarei (*amigo e protetor*)
Fraco sou, mas Deus me dá (*Ele é o meu bom Pastor*)
Seu poder, Seu amor (*e quando eu sentir temor*)

Nele confiarei
Nele confiarei
Fraco sou, mas Deus me dá
Seu poder, Seu amor

Nele confiarei
Nele confiarei
Fraco sou, mas Deus me dá
Seu poder, Seu amor
`,
    }],
  },

  "abraco-do-noivo-o-rei-esta-voltando": {
    partes: [
      {
        titulo: "Abraço do Noivo",
        solo: "Júlia",
        letra: `
Quantas vezes na Terra
Afligida e humilhada, a noiva sofreu?
Calada, foi aprisionada
E jamais desistiu

Cada lágrima da igreja, o Noivo colhia
E esse cuidado cada vez mais crescia
E a noiva sabia
Que o encontro dos séculos aconteceria

*E o Noivo no céu, contemplando o paraíso*
*Pra encontrar sua noiva e lhe dar o infinito*
*E do céu, está a olhar*
Ele vê sua noiva, insistente e fiel
Guerreira nas batalhas para estar lá no céu
*Que não para de clamar*
*E não cessa de dizer: Ora vem, Senhor Jesus*

E a igreja, noiva amada, subirá
Pra seu Noivo encontrar
E eternamente O adorar, adorar

*E eu verei os Seus lábios se abrirem*
*Para pronunciar meu novo nome* (nome)
*E eu irei, e correrei,* e O abraçarei
E O abraçarei

A noiva amada, adornada para o Noivo
No Santo dos santos, adorando com os anjos
Vai trocar as lágrimas pelo galardão
Igreja amada em Seu coração

O inferno e a Terra estremecerão
Ao som da trombeta e a igreja subirá
Vai romper o infinito e abraçar a Jesus
Vai receber coroa em troca da cruz
Para sempre, para sempre

E nada jamais quebrará a aliança
Para sempre a igreja é santa
Para adorar o Rei, o meu Rei

O Altíssimo, Tremendo e Digno, Mestre e Senhor
Adorado no Universo, a Essência do Amor
A Estrela da Manhã, Vencedor, Shekinah
Vem e abraça este lugar

Sinta, igreja, a presença marcante do Noivo
O amor, a unção e o fogo
Sinta o toque do Noivo
Sinta o abraço do Noivo

O Noivo vem, sim, Ele vem pra buscar a noiva
Que adornada, está preparada
Para subir ao céu, em glória

O Noivo vem, sim, Ele vem pra buscar a noiva
Que adornada, está preparada
Para subir ao céu, em glória

Ele vem, vem, o Noivo vem, sim, Ele vem, aleluia

(Assim como o relâmpago sai do Oriente
E se mostra até o Ocidente)
(Assim há de ser a vinda do Noivo
Para encontrar sua noiva)
(E a noiva somos nós
Lavados pelo sangue do Cordeiro)
(Cidadãos e herdeiros do céu
Então, prepara-te, Israel)
(Prepara-te para encontrares com o Senhor, teu Deus)
(Diga: Maranata, ora vem, Senhor Jesus)

Vem, vem, o Noivo vem, vem, sim, Ele vem, aleluia
Vem, vem, vem

Vem, Tremendo e Digno, Mestre e Senhor
Adorado no Universo, a Essência do Amor
A Estrela da Manhã, Vencedor, Shekinah
Vem e abraça este lugar

Sinta, igreja, a presença marcante do Noivo
O amor, a unção e o fogo
Sinta o toque do Noivo
Sinta o abraço do Noivo
Sinta a presença do Noivo
`,
      },
      {
        titulo: "O Rei Está Voltando",
        letra: `
O Rei está voltando, o Rei está voltando
A trombeta está soando para os santos trasladar
Sim, o Rei está voltando, o Rei está voltando
Aleluia, Ele vem nos buscar
`,
      },
    ],
  },

  "quem-e-ele": {
    partes: [{
      titulo: "Quem é Ele",
      letra: `
[Grupo: Solo 1]
Quem é Ele?
Aquele que era antes de tudo existir
Quem é Ele?
O Verbo se fez carne e hoje está aqui
Quem é Ele?
Pão vivo que desceu do céu e se entregou
Quem é Ele?
Cordeiro imaculado que ressuscitou
Quem é Ele?
Quem é Ele?
[Todos]

[Solo: Sara]
Quem é Ele?
Ao som da Sua voz, Ele faz surdo ouvir
Quem é Ele?
Com o toque do cajado, faz o mar se abrir
Quem é Ele?
Subiu ao céu pra preparar um novo lar
Quem é Ele?
Que a Sua noiva espera, Ele voltará
[Todos]

[Todos · uníssono]
Ele é o Rei da glória
Ele é o Rei da glória
Ele é o Rei da glória, Ele é o Senhor

[Em vozes]
Ele é o Rei da glória
Ele é o Rei da glória
Ele é o Rei da glória, Ele é o Senhor

[Uníssono]
[Grupo: Mulheres]
Quem é Ele?
Ao som da Sua voz, Ele faz surdo ouvir
Quem é Ele?
Com o toque do cajado, faz o mar se abrir (esse é o meu Deus)

[Uníssono]
[Grupo: Homens]
Quem é Ele?
Subiu ao céu pra preparar um novo lar
Quem é Ele?
Que a Sua noiva espera, Ele vai voltar
[Todos]

[Em vozes]
Ele é o Rei da glória
Ele é o Rei da glória
Ele é o Rei da glória, Ele é o Senhor
Ele é o Rei da glória (Ele é o Rei)
Ele é o Rei da glória
Ele é o Rei da glória, Ele é o Senhor

[Esperar 8 compassos]

[Todos · uníssono]
Ele é Jireh, é o Deus provedor
Ele é Rafá, Deus que cura a sua dor
Ele é Yahweh, é o grande Eu Sou
Ele é o Rei, Ele é o Rei
Alfa e Ômega, início e fim
Shalom, El Shaddai, Adonai e Elohim
O Deus que era e que há de vir
Ele é o Rei, Ele é o Rei

[Em vozes]
Ele é Jireh, é o Deus provedor
Ele é Rafá, Deus que cura a sua dor
Ele é Yahweh, é o grande Eu Sou
Ele é o Rei, Ele é o Rei
Alfa e Ômega, início e fim
Shalom, El Shaddai, Adonai e Elohim
O Deus que era e que há de vir
Ele é o Rei, Ele é o Rei
Ele é o Rei, Ele é o Rei
Ele é o Rei, Ele é o Rei

[Uníssono]
Ele é o Senhor
Sua verdade vai sempre reinar

[Em vozes]
Terra e céu
Glorificam Seu santo nome
Ele é exaltado, Ele é exaltado no céu
Ele é o Rei da glória
Ele é o Rei da glória
Ele é o Rei da glória, Ele é o Senhor (Ele é o Senhor)
Ele é o Rei da glória
Ele é o Rei da glória
Ele é o Rei da glória, Ele é o Senhor
Quem é Ele?
Quem é Ele?
`,
    }],
  },

  "grande-e-o-senhor-consagracao": {
    partes: [
      {
        titulo: "Grande é o Senhor",
        letra: `
[Solo: Adrieli]
Queremos o Teu nome engrandecer
E agradecer-Te por Tua obra em nossa vida
Confiamos em Teu infinito amor
Pois só Tu és o Deus eterno
Sobre toda terra e céus, Jesus
[Todos]

[Uníssono]
Queremos o Teu nome engrandecer
E agradecer-Te por Tua obra em nossa vida
Confiamos em Teu infinito amor
Pois só Tu és o Deus eterno
Sobre toda terra e céus

[Em vozes]
Queremos o Teu nome engrandecer
E agradecer-Te por Tua obra em nossa vida
Confiamos em Teu infinito amor
Pois só Tu és o Deus eterno
Sobre toda terra e céus
`,
      },
      {
        titulo: "Consagração",
        letra: `
[Solo: Adrieli]
A honra
A glória
A força
E o poder ao Rei Jesus
E o louvor ao Rei Jesus
[Todos]

[Em vozes]
A honra (a honra)
A glória (a glória)
A força (a força)
E o poder ao Rei Jesus
E o louvor ao Rei Jesus
`,
      },
    ],
  },

  "repeticao": {
    aviso: true,
    partes: [{ titulo: "Repetição de um hino", letra: "" }],
    nota: "Será repetido um dos hinos do congresso — a definir.",
  },

  "leao-e-cordeiro": {
    partes: [{
      titulo: "O Leão e o Cordeiro",
      letra: `
[Introdução · 8 compassos]

O Rei da glória
Se despiu da majestade e se assentou
Com pecadores
Nenhum brilho ou trono revelou
Quem saberia
Que Seus olhos viram o universo sendo feito?
Quem acreditaria
Que o Seu cetro já regeu o tempo?

Homem tão simplesSem ter lugar ou onde repousar
Na estrebaria
Não é o melhor lugar pra estrear
Quem notaria
Que Sua voz chamou o mundo à existência?
E aquelas mãos
Moldou o homem à Sua semelhança?

[Uníssono]
Como um cordeiro mudo, foi levado ao matadouro
Não tinha glória, Seu coração na cruz rasgou
Ficou calado, assinou todas as nossas culpas
Não tinha manchas, no Calvário, não reclamou

Foi maltratado e humilhado o Cordeiro de Deus
Mas foi fiel até o fim
Que tira o pecado do mundoRevela a eternidade e Sua glória em mim

[Todos · uníssono]
Mas como leão rugirá
E todo olho O verá
Em glória marchando Ele vem
Sobre as nuvens, Ele vem

Ele é o Leão e o Cordeiro
O mal foi vencido, o Céu cantou
Onde está, oh, morte, a tua vitória?
O Cordeiro foi morto
Mas o Leão ressuscitou

Uoh oh oh
Uoh oh oh
Ele ressuscitou
Uoh oh oh
Uoh oh oh
Uoh oh oh
Ele ressuscitou
[Em vozes]

[Instrumental · 2 compassos]

Como um cordeiro mudo, foi levado ao matadouro
Não tinha glória, Seu coração na cruz rasgou
Ficou calado, assinou todas as nossas culpas
Não tinha manchas, no Calvário, não reclamou

Foi maltratado e humilhado o Cordeiro de Deus
Mas foi fiel até o fim
Que tira o pecado do mundoRevela a eternidadeE Sua glória em mim, oh, oh

[Em vozes]
Mas como leão rugirá
E todo olho O verá
Em glória marchando Ele vem
Sobre as nuvens, Ele vem

Ele é o Leão e o Cordeiro
O mal foi vencido, o Céu cantou
Onde está, oh, morte, a tua vitória?
O Cordeiro foi morto
Mas o Leão ressuscitou (Ele está vivo)

Uoh oh oh
Uoh oh oh
Ele ressuscitou
Uoh oh oh
Uoh oh oh
Ele ressuscitou

[Uníssono]
[Grupo: Homens]
Emanuel, o Verbo, o Rei da Eternidade
O Pão da Vida, o Eu Sou, o verdadeiro Deus
[Todos]

[Todos · uníssono]
Ele é o Senhor, Libertador e Salvador
A Rocha Eterna, Palavra Viva, é o Bom Pastor

[Todos · uníssono]
Jeová Nissi, Jeová Rafá, Jeová Shalom
Deus Adonai (Kadosh, El Elion)
Jeová Jiré, o Elohim, Deus El Shadai
Yahweh Shamah, com toda glória O adorai

[Em vozes]
Emanuel, o Verbo, o Rei da Eternidade
O Pão da Vida, o Eu Sou, o verdadeiro Deus
Ele é o Senhor, Libertador e Salvador
A Rocha Eterna, Palavra Viva, é o Bom Pastor

Jeová Nissi, Jeová Rafá, Jeová Shalom
Deus Adonai, Kadosh, El Elion
Jeová Jiré, o Elohim, Deus El Shadai
Yahweh Shamah, com toda glória O adorai

Mas como leão rugirá
E todo olho O verá
Em glória marchando Ele vem
Sobre as nuvens, Ele vem

Ele é o Leão e o Cordeiro
O mal foi vencido, o Céu cantou
Onde está, oh, morte, a tua vitória?
O Cordeiro foi morto
Mas o Leão ressuscitou

Uoh oh oh
Uoh oh oh
Ele ressuscitou
Uoh oh oh
Uoh oh oh
Uoh oh oh
Ele ressuscitou
`,
    }],
  },

  "te-adorarei": {
    partes: [{
      titulo: "Te Adorarei",
      solo: "Larissa Dias",
      letra: `
*Contigo eu sei que posso ir além*
*Contigo eu não temo a ninguém*
*Contigo eu salto uma muralha*
*Contigo eu venço uma batalha*
*Contigo eu sei que venço o inimigo*

[Sopranos fazem vocal]
*Em Ti, eu sei que encontro solução*
*Também podes me dar a direção*

[Sopranos · uníssono]
Em Ti, eu sei que estou seguro
Pois já estás no meu futuro
E Tu já sabes bem o que fazer

[Sopranos fazem vocal]
*Mas se acaso Teu silêncio me alcançar*
*E resolveres Te calar para provar a minha fé*

[Sopranos · uníssono]
Te adorarei independente do que for
Pois Tu és Deus, Tu és Senhor
E fazes o que Te apraz

[Sopranos fazem vocal]
*Eu Te adorarei no mar* (Eu Te adorarei)
*No vento ou temporal* (Te adorarei)
*Te adorarei na tempestade, ou na bonança*

*Na prova, no fogo, no vale, no monte*
*Em meio ao deserto, ou perto da fonte*

[Sopranos · uníssono]
Eu só posso mesmo é Te adorar!

[Sopranos fazem vocal]
*Te adorarei* (Eu Te adorarei)
*Te adorarei* (Te adorarei, Senhor)
*Independente do que for*

[Sopranos · uníssono]
Te adorarei

[Sopranos fazem vocal]
*Te adorarei* (Eu Te adorarei)
*Te adorarei* (Te adorarei, Senhor)
*Independente do que for*

[Sopranos · uníssono]
Te adorarei

*Grande, justo, lindo, santo*
*Forte, torre, rocha, vida*
*Manda, pode, cura, livra*
*Salva, usa, ressuscita*

[Sopranos fazem vocal]
*Ele tem, Ele é, Ele faz, Ele sabe*

[Sopranos · uníssono]
E eu só sei dizer que independente do que for
Te adorarei

[Todos · uníssono]
Eu Te adorarei no mar, no vento ou temporal
Te adorarei na tempestade, ou na bonança
Na prova, no fogo, no vale, no monte
Em meio ao deserto, ou perto da fonte

[Sopranos fazem vocal]
*Eu só posso mesmo é Te adorar!*

[⬆ Sobe o tom]

[Sopranos · uníssono]
Grande, justo, lindo, santo
Forte, torre, rocha, vida
Manda, pode, cura, livra
Salva, usa, ressuscita

[Sopranos fazem vocal]
*Ele tem, Ele é, Ele faz, Ele sabe*

[Sopranos · uníssono]
E eu só sei dizer que independente do que for

[Sopranos fazem vocal]
*Te adorarei* (Eu Te adorarei)
*Te adorarei* (Te adorarei, Senhor)
*Independente do que for*

[Sopranos · uníssono]
Te adorarei

*Te adorarei* (Eu Te adorarei)
*Eu Te adorarei*

[Sopranos · uníssono]
Independente do que for, Te adorarei
`,
    }],
  },
};

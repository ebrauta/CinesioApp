const dataArticulacoes = [
    {
      nomeArticulacao: "Articulação Glenoumeral",
      urlImagem: "images/glenoumeral.png",
      movimentos: [
        {
          nomeMovimento: "Flexão",
          musculosDeMovimento: {
            agonistas: [1, 3],
            sinergistas: [6, 7, 8],
            antagonistas: [4, 10, 12],
          },
          grauDeAmplitude: "0° - 180°",
        },
        {
          nomeMovimento: "Extensão",
          musculosDeMovimento: {
            agonistas: [4, 10, 12],
            sinergistas: [2, 13],
            antagonistas: [1, 3],
          },
          grauDeAmplitude: "0° - 45°",
        },
        {
          nomeMovimento: "Abdução",
          musculosDeMovimento: {
            agonistas: [1, 5],
            sinergistas: [1, 4, 7],
            antagonistas: [4, 10, 12],
          },
          grauDeAmplitude: "0° - 180°",
        },
        {
          nomeMovimento: "Adução",
          musculosDeMovimento: {
            agonistas: [4, 10, 12],
            sinergistas: [6, 7, 9, 13],
            antagonistas: [1, 4],
          },
          grauDeAmplitude: "0° - 40°",
        },
        {
          nomeMovimento: "Rotação interna",
          musculosDeMovimento: {
            agonistas: [7, 10],
            sinergistas: [1, 3, 12, 9],
            antagonistas: [16, 11],
          },
          grauDeAmplitude: "0° - 90°",
        },
        {
          nomeMovimento: "Rotação externa",
          musculosDeMovimento: {
            agonistas: [16, 11],
            sinergistas: [2],
            antagonistas: [7, 10],
          },
          grauDeAmplitude: "0° - 90°",
        },
      ],
    },
    {
      nomeArticulacao: "Articulação do Quadril",
      urlImagem: "images/quadril.png",
      movimentos: [
        {
          nomeMovimento: "Flexão",
          musculosDeMovimento: {
            agonistas: [17, 18, 19, 20],
            sinergistas: [21, 22, 24, 25, 26, 27, 28, 29],
            antagonistas: [23, 30, 32, 33],
          },
          grauDeAmplitude: "0° - 125°",
        },
        {
          nomeMovimento: "Extensão",
          musculosDeMovimento: {
            agonistas: [23, 30, 32, 33],
            sinergistas: [24, 25, 29],
            antagonistas: [17, 18, 19, 20],
          },
          grauDeAmplitude: "0° - 10°",
        },
        {
          nomeMovimento: "Abdução",
          musculosDeMovimento: {
            agonistas: [24],
            sinergistas: [21, 19, 22, 23, 25],
            antagonistas: [20, 26, 27, 28, 29],
          },
          grauDeAmplitude: "0° - 45°",
        },
        {
          nomeMovimento: "Adução",
          musculosDeMovimento: {
            agonistas: [20, 26, 27, 28, 29],
            sinergistas: [23],
            antagonistas: [24],
          },
          grauDeAmplitude: "0° - 15°",
        },
        {
          nomeMovimento: "Rotação interna",
          musculosDeMovimento: {
            agonistas: [22, 25],
            sinergistas: [32, 33, 24, 26, 29],
            antagonistas: [23, 34, 35, 36, 37, 38, 39],
          },
          grauDeAmplitude: "0° - 45°",
        },
        {
          nomeMovimento: "Rotação externa",
          musculosDeMovimento: {
            agonistas: [23, 34, 35, 36, 37, 38, 39],
            sinergistas: [21, 20, 30, 24, 25, 27, 28, 29],
            antagonistas: [22, 25],
          },
          grauDeAmplitude: "0° - 45°",
        },
      ],
    },
    {
      nomeArticulacao: "Articulação do Joelho",
      urlImagem: "images/joelho.png",
      movimentos: [
        {
          nomeMovimento: "Flexão",
          musculosDeMovimento: {
            agonistas: [32, 33, 30],
            sinergistas: [21, 26, 43, 45],
            antagonistas: [19, 40, 41, 42],
          },
          grauDeAmplitude: "0° - 140°",
        },
        {
          nomeMovimento: "Extensão",
          musculosDeMovimento: {
            agonistas: [19, 40, 41, 42],
            sinergistas: [],
            antagonistas: [32, 33, 30],
          },
          grauDeAmplitude: "140° - 0°",
        },
      ],
    },
    {
      nomeArticulacao: "Articulação do Cotovelo",
      urlImagem: "images/cotovelo.png",
      movimentos: [
        {
          nomeMovimento: "Flexão",
          musculosDeMovimento: {
            agonistas: [8, 46, 47],
            sinergistas: [48, 49, 50, 51, 52],
            antagonistas: [13],
          },
          grauDeAmplitude: "0° - 145°",
        },
        {
          nomeMovimento: "Extensão",
          musculosDeMovimento: {
            agonistas: [13],
            sinergistas: [53, 55, 54, 56, 57, 58],
            antagonistas: [8, 46, 47],
          },
          grauDeAmplitude: "145° - 0°",
        },
        {
          nomeMovimento: "Pronação radioulnar",
          musculosDeMovimento: {
            agonistas: [59],
            sinergistas: [48, 53, 49],
            antagonistas: [60],
          },
          grauDeAmplitude: "0° - 90°",
        },
        {
          nomeMovimento: "Supinação radioulnar",
          musculosDeMovimento: {
            agonistas: [60],
            sinergistas: [8, 54, 62, 61],
            antagonistas: [59],
          },
          grauDeAmplitude: "0° - 90°",
        },
      ],
    },
    {
      nomeArticulacao: "Articulação do Punho",
      urlImagem: "images/punho.png",
      movimentos: [
        {
          nomeMovimento: "Flexão",
          musculosDeMovimento: {
            agonistas: [49, 50],
            sinergistas: [51],
            antagonistas: [54, 55, 56],
          },
          grauDeAmplitude: "0° - 90°",
        },
        {
          nomeMovimento: "Extensão",
          musculosDeMovimento: {
            agonistas: [54, 55, 56],
            sinergistas: [],
            antagonistas: [49, 50],
          },
          grauDeAmplitude: "0° - 70°",
        },
        {
          nomeMovimento: "Abdução (desvio radial)",
          musculosDeMovimento: {
            agonistas: [49, 54, 55],
            sinergistas: [],
            antagonistas: [50, 56],
          },
          grauDeAmplitude: "0° - 20°",
        },
        {
          nomeMovimento: "Adução (desvio ulnar)",
          musculosDeMovimento: {
            agonistas: [50, 56],
            sinergistas: [],
            antagonistas: [49, 54, 55],
          },
          grauDeAmplitude: "0° - 30°",
        },
      ],
    },
    {
      nomeArticulacao: "Articulação do Tornozelo",
      urlImagem: "images/punho.png",
      movimentos: [
        {
          nomeMovimento: "Dorsiflexão",
          musculosDeMovimento: {
            agonistas: [64, 63],
            sinergistas: [62],
            antagonistas: [43, 44],
          },
          grauDeAmplitude: "0° - 20°",
        },
        {
          nomeMovimento: "Flexão plantar",
          musculosDeMovimento: {
            agonistas: [43, 44],
            sinergistas: [67, 65, 66],
            antagonistas: [64, 63],
          },
          grauDeAmplitude: "0° - 45°",
        },
        {
          nomeMovimento: "Inversão",
          musculosDeMovimento: {
            agonistas: [64, 65],
            sinergistas: [62],
            antagonistas: [63, 66, 67],
          },
          grauDeAmplitude: "0° - 40°",
        },
        {
          nomeMovimento: "Eversão",
          musculosDeMovimento: {
            agonistas: [63, 66, 67],
            sinergistas: [],
            antagonistas: [64, 65],
          },
          grauDeAmplitude: "0° - 20°",
        },
      ],
    },
  ];
  
  const dataMuscles = [
    {
      id: 1,
      nome: "Deltoide anterior",
      origem: ["Terço lateral da clavícula", "Acrômio", "Espinha da escápula"],
      insercao: ["Tuberosidade do úmero"],
    },
    {
      id: 2,
      nome: "Deltoide posterior",
      origem: ["Terço lateral da clavícula", "Acrômio", "Espinha da escápula"],
      insercao: ["Tuberosidade do úmero"],
    },
    {
      id: 3,
      nome: "Peitoral maior (clavicular)",
      origem: ["Metade medial da clavícula"],
      insercao: ["Crista do tubérculo maior do úmero"],
    },
    {
      id: 4,
      nome: "Peitoral maior (esternal)",
      origem: ["Esterno, 2ª a 7ª cartilagens costais"],
      insercao: ["Crista do tubérculo maior do úmero"],
    },
    {
      id: 5,
      nome: "Peitoral maior (abdominal)",
      origem: ["Camada anterior da bainha do reto"],
      insercao: ["Crista do tubérculo maior do úmero"],
    },
    {
      id: 6,
      nome: "Coracobraquial",
      origem: ["Processo coracóide da escápula"],
      insercao: ["Superfície medial do eixo umeral"],
    },
    {
      id: 7,
      nome: "Subescapular",
      origem: ["Fossa subescapular"],
      insercao: ["Tubérculo menor"],
    },
    {
      id: 8,
      nome: "Bíceps (perna curta)",
      origem: ["apófise coracóide da escápula"],
      insercao: ["tuberosidade radial", "fáscia profunda do antebraço"],
    },
    {
      id: 9,
      nome: "Bíceps (cabeça longa)",
      origem: ["tubérculo supraglenoide da escápula"],
      insercao: ["tuberosidade radial", "fáscia profunda do antebraço"],
    },
    {
      id: 10,
      nome: "Redondo maior",
      origem: [
        "face posterior",
        "1/3 inferior da borda lateral",
        "ângulo inferior da escápula",
      ],
      insercao: ["lábio medial do sulco intertubercular"],
    },
    {
      id: 11,
      nome: "Redondo menor",
      origem: ["borda lateral da escápula, nos 2/3 superiores"],
      insercao: ["tuberosidade maior do úmero"],
    },
    {
      id: 12,
      nome: "Grande dorsal",
      origem: [
        "no processo espinhoso das vertebras T6-T12",
        "sacro",
        "cristas ilíacas",
      ],
      insercao: ["sulco intertubercular do úmero"],
    },
    {
      id: 13,
      nome: "Tríceps (cabeça longa)",
      origem: ["tubérculo infraglenoidal da escápula"],
      insercao: ["região posterior do olécrano"],
    },
    {
      id: 14,
      nome: "Tríceps (cabeça lateral)",
      origem: [" face posterior do úmero, acima do sulco do nervo radial"],
      insercao: ["região posterior do olécrano"],
    },
    {
      id: 15,
      nome: "Tríceps (cabeça medial)",
      origem: ["face posterior do úmero, abaixo do sulco do nervo radial"],
      insercao: ["região posterior do olécrano"],
    },
    {
      id: 16,
      nome: "Infraespinhal",
      origem: ["fossa infraespinhal escapular"],
      insercao: ["face média do tubérculo maior"],
    },
    {
      id: 17,
      nome: "Psoas maior",
      origem: [
        "primeira à quarta vértebras lombares",
        "dos processos transversos de todas as vértebras lombares",
        "da décima segunda vértebra torácica",
      ],
      insercao: ["trocânter menor/pequeno trocanter do fêmur"],
    },
    {
      id: 18,
      nome: "Ilíaco",
      origem: [
        "dois terços superiores da fossa ilíaca",
        "crista ilíaca",
        "asa do sacro",
      ],
      insercao: ["trocânter menor do fêmur"],
    },
    {
      id: 19,
      nome: "Reto Femoral",
      origem: [
        "espinha ilíaca anterior inferior da pelve",
        "na margem superior do acetábulo",
      ],
      insercao: ["tendão do quadríceps"],
    },
    {
      id: 20,
      nome: "Pectíneo",
      origem: ["ramo púbico superior (linha pectínea do púbis)"],
      insercao: ["linha pectínea do fêmur"],
    },
    {
      id: 21,
      nome: "Sartório",
      origem: ["espinha ilíaca ântero-superior"],
      insercao: ["na pata anserina medialmente à tuberosidade tibial"],
    },
    {
      id: 22,
      nome: "Tensor da Fáscia lata",
      origem: [
        "crista ilíaca",
        "da espinha ilíaca ântero-superior do osso ilíaco",
      ],
      insercao: ["fáscia profunda que envolve toda a musculatura da coxa"],
    },
    {
      id: 23,
      nome: "Glúteo Máximo",
      origem: [
        "sacro (porção dorsal)",
        "ílio (atrás da linha glútea posterior)",
        "fáscia toracolombar",
        "ligamento",
      ],
      insercao: [
        "tuberosidade glútea do fémur (fibras caudais)",
        "trato iliotibial (fibras craniais)",
      ],
    },
    {
      id: 24,
      nome: "Glúteo Médio",
      origem: [
        "sacrotuberal superfície glútea do íleo (sob o músculo glúteo máximo)",
      ],
      insercao: ["trocânter maior do fémur"],
    },
    {
      id: 25,
      nome: "Glúteo Mínimo",
      origem: ["superfície glútea do íleo (sob o músculo glúteo médio)"],
      insercao: ["trocânter maior do fémur"],
    },
    {
      id: 26,
      nome: "Grácil",
      origem: [
        "corpo anterior do púbis",
        "ramo inferior do púbis",
        "ramo do ísquio",
      ],
      insercao: [
        "superfície medial da tíbia proximal da tíbia (via pata anserina)",
      ],
    },
    {
      id: 27,
      nome: "Adutor Longo",
      origem: ["ramo púbico superior", "na sínfise púbica"],
      insercao: ["linha áspera"],
    },
    {
      id: 28,
      nome: "Adutor Breve",
      origem: ["ramo púbico inferior"],
      insercao: ["linha áspera"],
    },
    {
      id: 29,
      nome: "Adutor Magno",
      origem: [
        "ramo púbico inferior",
        "do ramo do ísquio",
        "da tuberosidade do ísquio",
      ],
      insercao: ["na linha áspera", "no epicôndilo medial"],
    },
    {
      id: 30,
      nome: "Bíceps femoral (porção curta)",
      origem: ["linha áspera do fêmur"],
      insercao: ["cabeça da fíbula", "côndilo lateral da tíbia"],
    },
    {
      id: 31,
      nome: "Bíceps femoral (porção longa)",
      origem: ["tuberosidade isquiática"],
      insercao: ["cabeça da fíbula", "côndilo lateral da tíbia"],
    },
    {
      id: 32,
      nome: "Semitendinoso",
      origem: ["tuberosidade isquiática (Impressão posteromedial)"],
      insercao: ["extremidade proximal da tíbia, abaixo do côndilo medial"],
    },
    {
      id: 33,
      nome: "Semimembranoso",
      origem: ["impressão superolateral da tuberosidade isquiática"],
      insercao: ["côndilo medial da tíbia"],
    },
    {
      id: 34,
      nome: "Piriforme",
      origem: ["superfície anterior do sacro, entre o forame (buraco) sacral"],
      insercao: [
        "superfície glútea do ílio, próximo à espinha ilíaca posteroinferior",
      ],
    },
    {
      id: 35,
      nome: "Quadrado femoral",
      origem: [
        "parte superior da borda lateral da tuberosidade isquiática, inferiormente à margem inferior do acetábulo",
      ],
      insercao: [
        "superior à origem do músculo adutor magno e lateral ao músculo obturador externo",
      ],
    },
    {
      id: 36,
      nome: "Obturador Interno",
      origem: [
        "superfície anterior da membrana obturatória",
        "margens ósseas do forame obturador",
      ],
      insercao: ["superfície medial do trocânter maior do fêmur"],
    },
    {
      id: 37,
      nome: "Obturador Externo",
      origem: [
        "superfície anterior da membrana obturatória",
        "margens ósseas do forame obturado",
      ],
      insercao: ["fossa trocantérica do fêmur"],
    },
    {
      id: 38,
      nome: "Gêmeo superior",
      origem: ["espinha isquiática"],
      insercao: [
        "superfície medial do trocânter maior do fêmur (através do tendão do obturador interno)",
      ],
    },
    {
      id: 39,
      nome: "Gêmeo inferior",
      origem: ["tuberosidade isquiática"],
      insercao: [
        "superfície medial do trocânter maior do fêmur (através do tendão do obturador interno)",
      ],
    },
    {
      id: 40,
      nome: "Vasto lateral",
      origem: ["linha áspera", "trocânter maior do fémur"],
      insercao: [
        "tuberosidade da tíbia (todas as cabeças)",
        "forma ligamento patelar",
      ],
    },
    {
      id: 41,
      nome: "Vasto intermedial",
      origem: ["lado anterior do fémur"],
      insercao: [
        "tuberosidade da tíbia (todas as cabeças)",
        "forma ligamento patelar",
      ],
    },
    {
      id: 42,
      nome: "Vasto medial",
      origem: ["linha intertrocantérica do fémur"],
      insercao: [
        "tuberosidade da tíbia (todas as cabeças)",
        "forma ligamento patelar",
      ],
    },
    {
      id: 43,
      nome: "Gastrocnêmio",
      origem: [
        "epicôndilo medial (cabeça medial)",
        "epicôndilo lateral (cabeça lateral) do fémur",
      ],
      insercao: [
        "face posterior do calcâneo, através de um tendão comum",
        "tendão calcaneano",
      ],
    },
    {
      id: 44,
      nome: "Solear",
      origem: ["região superior do perónio", "tíbia", "arco tendinoso solear"],
      insercao: ["superfície posterior do calcâneo (via tendão do calcâneo)"],
    },
    {
      id: 45,
      nome: "Plantar",
      origem: [
        "superfície medial do osso calcâneo",
        "processo lateral da tuberosidade calcânea",
      ],
      insercao: ["tendão do flexor longo dos dedos"],
    },
    {
      id: 46,
      nome: "Braquial",
      origem: [
        "metade distal da face anterior do úmero",
        "septos intermusculares",
      ],
      insercao: ["tuberosidade do cúbito"],
    },
    {
      id: 47,
      nome: "Braquiorradial",
      origem: [
        "crista supracondilar lateral",
        "septo intermuscular lateral do úmero",
      ],
      insercao: ["processo estiloide do rádio"],
    },
    {
      id: 48,
      nome: "Pronador redondo",
      origem: [
        "epicôndilo medial do úmero (cabeça umeral)",
        "processo coronoide da ulna (cabeça ulnar)",
      ],
      insercao: ["face lateral do rádio"],
    },
    {
      id: 49,
      nome: "Flexor radial do carpo",
      origem: ["tendão flexor comum no úmero"],
      insercao: ["bases do segundo e terceiro metacarpos"],
    },
    {
      id: 50,
      nome: "Flexor ulnar do carpo",
      origem: [
        "epicôndilo medial do úmero (cabeça umeral)",
        "do olécrano da ulna (cabeça ulnar)",
      ],
      insercao: [
        "osso pisiforme (osso sesamoide)",
        "no hâmulo do hamato",
        "na base do quinto metacarpo",
      ],
    },
    {
      id: 51,
      nome: "Palmar Longo",
      origem: ["tendão flexor comum"],
      insercao: ["retináculo dos flexores", "aponeurose palmar"],
    },
    {
      id: 52,
      nome: "Flexor superficial dos dedos",
      origem: [
        "epicôndilo medial do úmero (cabeça umeral)",
        "processo coronoide da ulna (cabeça ulnar)",
        "tuberosidade radial (cabeça radial)",
      ],
      insercao: ["de cada lado das falanges média do segundo ao quinto dedos"],
    },
    {
      id: 53,
      nome: "Ancôneo",
      origem: ["epicôndilo lateral do úmero"],
      insercao: ["olécrano da ulna"],
    },
    {
      id: 54,
      nome: "Extensor radial  do carpo (porção longa)",
      origem: ["abaixo da crista supracondilar lateral do úmero"],
      insercao: ["face posterior do segundo metacarpo"],
    },
    {
      id: 55,
      nome: "Extensor radial  do carpo (porção curta)",
      origem: [
        "tendão extensor comum dos extensores superficiais no epicôndilo lateral do úmero",
      ],
      insercao: ["face posterior da base do terceiro metacarpo"],
    },
    {
      id: 56,
      nome: "Extensor ulnar do carpo",
      origem: ["epicôndilo lateral do úmero", "face posterior da ulna"],
      insercao: ["lado medial da base do quinto metacarpo"],
    },
    {
      id: 57,
      nome: "Extensores dos dedos",
      origem: ["epicôndilo lateral do úmero"],
      insercao: [
        "superfície posterior das falanges médias e distais do 2º ao 5º dedos",
      ],
    },
    {
      id: 58,
      nome: "Extensor mínimo dos dedos",
      origem: ["epicôndilo lateral do úmero"],
      insercao: ["aponeurose dorsal do dedo mínimo"],
    },
    {
      id: 59,
      nome: "Pronador quadrado",
      origem: ["superfície distal anterior da ulna (cúbito)"],
      insercao: ["superfície distal anterior do rádio"],
    },
    {
      id: 60,
      nome: "Supinador",
      origem: [
        "epicôndilo lateral do úmero",
        "ligamento colateral radial",
        "ligamento anular",
        "crista do músculo supinador da ulna",
      ],
      insercao: [
        "superfície lateral do rádio",
        "superfícies posterior do rádio",
        "superfície anterior do terço proximal do rádio",
      ],
    },
    {
      id: 61,
      nome: "Abdutor longo do polegar",
      origem: [
        "superfície posterior da metade proximal do rádio, ulna e membrana interóssea",
      ],
      insercao: ["base do 1º metacarpo, (osso trapézio) "],
    },
    {
      id: 62,
      nome: "Extensor longo do Hálux",
      origem: [
        "parte medial da face anteriomedial do perónio e membrana interóssea",
      ],
      insercao: ["base da falange distal do hálux"],
    },
    {
      id: 63,
      nome: "Fibular terceiro",
      origem: [
        "superfície medial (terço distal) da fíbula",
        "membrana interóssea (superfície anterior)",
        "septo intermuscular anterior",
      ],
      insercao: ["superfície dorsal da base do quinto osso metatarso"],
    },
    {
      id: 64,
      nome: "Tibial (porção anterior)",
      origem: ["face lateral da tíbia", "membrana interóssea"],
      insercao: ["cuneiforme medial e base do 1º metatarsiano"],
    },
    {
      id: 65,
      nome: "Tibial (porção posterior)",
      origem: [
        "superfície posterior da tíbia",
        "superfície posterior da fíbula (perôneo)",
        "membrana interóssea",
      ],
      insercao: [
        "tuberosidade do osso navicular",
        "todos os ossos cuneiformes",
        "osso cuboide",
        "bases dos ossos metatarsais 2-4",
      ],
    },
    {
      id: 66,
      nome: "Fibular (porção curta)",
      origem: [
        "2/3 distais da superfície lateral da fíbula",
        "septo intermuscular anterior",
      ],
      insercao: ["tuberosidade do 5° osso metatarsal"],
    },
    {
      id: 67,
      nome: "Fibular (porção longa)",
      origem: [
        "cabeça do perónio",
        "porção superior do corpo do perónio",
        "septo intermuscular",
      ],
      insercao: ["cuneiforme medial", "primeiro metatarso"],
    },
  ];
  
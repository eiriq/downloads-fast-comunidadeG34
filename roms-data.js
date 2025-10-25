/*
 * =================================================================================
 * ARQUIVO DE DADOS DAS ROMS - MOTO G34
 * =================================================================================
 * 
 * COMO ADICIONAR UMA NOVA ROM:
 * 
 * 1. Escolha um dos modelos abaixo (de 1 a 10)
 * 2. Preenche as informaçoes entre ASPAS, como 'name, version', etc, os que nao tiverem essas info, deixa em branco
 * 3. Apos preencher, remova o '/*' do inicio e final de cada modelo.
 * 4. Pronto!
 * 5. Salve o arquivo e envie para o GitHub
 * 
 * EXEMPLO: name: "COLOQUE O NOME AQUI",
 * 
 * NÃO ALTERE NADA QUE TENHA { } [ ] OU PALAVRAS COMO "changelog:"
 * =================================================================================
 */

// Lista de ROMs para o Moto G34
const romsData = {
  motog34: [
    // ================================================================================
    // MODELOS PARA NOVAS ROMS (COMENTADOS - REMOVA /* */ PARA ATIVAR)
    // ESTES MODELOS TÊM PRIORIDADE MÁXIMA PARA FACILITAR NOVAS ADIÇÕES
    // ================================================================================
    
    // MODELO 1
    /*
    {
      name: "",
      version: "",
      description: "",
      size: "",
      date: "",
      lastUpdate: "", // Adicione aqui a última atualização
      developer: "",
      url: "",
      isOfficial: true, // true para oficial, false para não oficial
      details: {
        version: "",
        dev: "",
        description: "",
        changelog: [],
        knownIssues: [],
        notes: []
      },
      source: ""
    },
    */
    
    // MODELO 2
    /*
    {
      name: "",
      version: "",
      description: "",
      size: "",
      date: "",
      lastUpdate: "", // Adicione aqui a última atualização
      developer: "",
      url: "",
      isOfficial: true, // true para oficial, false para não oficial
      details: {
        version: "",
        dev: "",
        description: "",
        changelog: [],
        knownIssues: [],
        notes: []
      },
      source: ""
    },
    */
    
    // MODELO 3
    /*
    {
      name: "",
      version: "",
      description: "",
      size: "",
      date: "",
      lastUpdate: "", // Adicione aqui a última atualização
      developer: "",
      url: "",
      isOfficial: true, // true para oficial, false para não oficial
      details: {
        version: "",
        dev: "",
        description: "",
        changelog: [],
        knownIssues: [],
        notes: []
      },
      source: ""
    },
    */
    
    // MODELO 4
    /*
    {
      name: "",
      version: "",
      description: "",
      size: "",
      date: "",
      lastUpdate: "", // Adicione aqui a última atualização
      developer: "",
      url: "",
      isOfficial: true, // true para oficial, false para não oficial
      details: {
        version: "",
        dev: "",
        description: "",
        changelog: [],
        knownIssues: [],
        notes: []
      },
      source: ""
    },
    */
    
    // MODELO 5
    /*
    {
      name: "",
      version: "",
      description: "",
      size: "",
      date: "",
      lastUpdate: "", // Adicione aqui a última atualização
      developer: "",
      url: "",
      isOfficial: true, // true para oficial, false para não oficial
      details: {
        version: "",
        dev: "",
        description: "",
        changelog: [],
        knownIssues: [],
        notes: []
      },
      source: ""
    },
    */
    
    // MODELO 6
    /*
    {
      name: "",
      version: "",
      description: "",
      size: "",
      date: "",
      lastUpdate: "", // Adicione aqui a última atualização
      developer: "",
      url: "",
      isOfficial: true, // true para oficial, false para não oficial
      details: {
        version: "",
        dev: "",
        description: "",
        changelog: [],
        knownIssues: [],
        notes: []
      },
      source: ""
    },
    */
    
    // MODELO 7
    {
      name: "The Clover Project",
      version: "Android 16",
      description: "Versão 3.3 não oficial da ROM, desenvolvida por Akarizao",
      size: "2.2 GB",
      date: "17/10/2025",
      lastUpdate: "21 de Outubro", // Adicione aqui a última atualização
      developer: "Akarizao",
      url: "https://drive.google.com/uc?export=download&id=1HgXATp9efVSoHogelhthnApZBIHvNYEh",
      isOfficial: false, // true para oficial, false para não oficial
      details: {
        version: "Android 16",
        dev: "Akarizao",
        description: "Versão 3.3 não oficial da ROM, desenvolvida por Akarizao",
        changelog: [
          "Initial Release"
        ],
        knownIssues: [],
        notes: [
          "Tree de Anand",
          "GApps incluídos",
          "MotoCam incluído e MoeKernel compatível"
        ]
      },
      source: "https://t.me/MotoG34/519191"
    },

    // ================================================================================
    // ROMS DISPONÍVEIS (NÃO ALTERE A ORDEM DAS ROMS JÁ EXISTENTES)
    // ================================================================================
    
    {
      name: "crDroid",
      version: "Android 16",
      description: "Versão não oficial da crDroid baseada no Android 16 desenvolvida por irawansalt",
      size: "1.37 GB",
      date: "18/10/2025",
      lastUpdate: "18 de Outubro", // Adicionando a última atualização
      developer: "irawansalt",
      url: "https://drive.google.com/uc?export=download&id=1EASjUpwAdSTJjftC-dFQOWoWZ4Fltkgx",
      isOfficial: false, // true para oficial, false para não oficial
      details: {
        version: "Android 16",
        dev: "irawansalt",
        description: "Versão não oficial da crDroid baseada no Android 16 desenvolvida por irawansalt",
        changelog: ["Corrigida falha do eis na MotCamera"],
        knownIssues: [],
        notes: []
      },
      source: "https://t.me/MotoG34/515436"
    },
    
    {
      name: "LMODroid",
      version: "Android 15",
      description: "Versão 6.2 oficial da LMDroid baseada no Android 15 QPR2",
      size: "1.29 GB",
      date: "09/10/2025",
      lastUpdate: "09 de Outubro", // Adicione aqui a última atualização
      developer: "LibreMobileOS",
      url: "https://drive.google.com/uc?export=download&id=1UnvRZh_djlcO3IO4k6CSASJYOYaoUDk7",
      isOfficial: true, // true para oficial, false para não oficial
      details: {
        version: "Android 15",
        dev: "LibreMobileOS",
        description: "Versão 6.2 oficial da LMDroid baseada no Android 15 QPR2",
        changelog: [],
        knownIssues: [],
        notes: []
      },
      source: "https://t.me/MotoG34/500579"
    },
    
    {
      name: "LineageOS",
      version: "Android 16",
      description: "Versão oficial da LineageOS, estável e com suporte contínuo.",
      size: "1.12 GB",
      date: "25/10/2025",
      lastUpdate: "25 de Outubro", // Adicionando a última atualização
      developer: "LineageOS Team",
      url: "https://drive.google.com/uc?export=download&id=1MVoXYZJTltSlfkS7yFmCGITfkALKfOTA",
      isOfficial: true, // true para oficial, false para não oficial
      details: {
        version: "Android 16",
        dev: "LineageOS Team",
        description: "Versão oficial da LineageOS",
        changelog: [],
        knownIssues: [],
        notes: []
      },
      source: "https://t.me/MotoG34/525468"
    },
    
    {
      name: "LunarisOS",
      version: "Android 16",
      description: "Versão 3.4 oficial da ROM Lunaris para a nova versão 16 do Android!",
      size: "2.3 GB",
      date: "14/10/2025",
      lastUpdate: "14 de Outubro", // Adicionando a última atualização
      developer: "JNW_SG",
      url: "https://drive.google.com/uc?export=download&id=1LRrU3SAxEvcd7TBY1JWgKnEHLlSfBgnn",
      isOfficial: true, // true para oficial, false para não oficial
      details: {
        version: "Android 16",
        dev: "JNW_SG",
        description: "Versão 3.4 oficial da ROM Lunaris para a nova versão 16 do Android!",
        changelog: [
          "Sincronização da fonte da ROM mais recente",
          "Problema com o microfone das chamadas do WhatsApp corrigido",
          "Jitter e lag corrigidos além de Kernel atualizado para a versão 5.4.300"
        ],
        knownIssues: [],
        notes: []
      },
      source: "https://t.me/MotoG34/507486"
    },
    
    {
      name: "LineageOS",
      version: "Android 15",
      description: "Versão não oficial do LineageOS com ajustes e melhorias.",
      size: "1.2 GB",
      date: "10/07/2025",
      lastUpdate: "20 de setembro", // Adicionando a última atualização
      developer: "Irawansalt",
      url: "https://drive.google.com/uc?export=download&id=17lYOIeu77sjOtVwEBqFJgvl-crEqv3OP",
      isOfficial: false, // true para oficial, false para não oficial
      details: {
        version: "Android 15",
        dev: "Irawansalt",
        description: "Versão não oficial da ROM LineageOS (LOS), desenvolvida por Irawansalt",
        changelog: [
          "Corrigido volume ficando no máximo mesmo no nível mais baixo durante chamadas VoIP",
          "Corrigido problema de ausência de som ao mudar para o alto-falante durante chamadas VoIP",
          "Corrigido problema no microfone durante chamadas",
          "Corrigido estalo/ruído em alguns jogos",
          "Corrigido problema de desligamento automático da tela durante sessões de jogos ou em altas temperaturas"
        ],
        knownIssues: [
          "O Auto HDR no MotoCamera às vezes causa travamentos; solução alternativa: desativar o HDR"
        ],
        notes: [
          "Baseado em OSS",
          "GApps incluídos",
          "Build assinada e usuário",
          "SELinux: Enforcing (modo restritivo)",
          "Play Integrity: Fail (Leia aqui: link)",
          "Dolby Atmos e MotoCamera incluídos"
        ]
      },
      source: "https://t.me/MotoG34/480142"
    },
    
    {
      name: "PixelOS",
      version: "Android 15",
      description: "Versão não oficial da ROM PixelOS (sistema oficial Google) desenvolvida por Akarizao",
      size: "1.1 GB",
      date: "05/08/2025",
      lastUpdate: "17 de setembro", // Adicionando a última atualização
      developer: "Akarizao",
      url: "https://drive.google.com/uc?export=download&id=1fFdfNz5CL2TbNWfKeaNTiF9xOz0coquE",
      isOfficial: false, // true para oficial, false para não oficial
      details: {
        version: "Android 15",
        dev: "Akarizao",
        description: "Versão não oficial da ROM PixelOS (sistema oficial Google) desenvolvida por Akarizao",
        changelog: [
          "Patch de Setembro",
          "Corrigido o não acesso a data/obb"
        ],
        knownIssues: [],
        notes: [
          "Moto Câmera e GApps Incluídos",
          "Leia a Thread no XDA para instruções"
        ]
      },
      credits: [
        "@AnandSuresh02 e outros contribuidores do motorola sm6375",
        "Obrigado ao Ninguém por testar as builds de lançamento"
      ],
      source: "https://t.me/MotoG34/476163"
    },
    
    {
      name: "YAAP | Voyager",
      version: "Android 16",
      description: "Versão não oficial e user da ROM YAAP Voyage, mantida por visual",
      size: "1.4 GB",
      date: "18/08/2025",
      lastUpdate: "14 de setembro", // Adicionando a última atualização
      developer: "@XxxVishalxxX",
      url: "https://drive.google.com/uc?export=download&id=1Mwp06uqf_og2NJH7AlqIK-aVb2VkqjC4",
      isOfficial: false, // true para oficial, false para não oficial
      details: {
        version: "Android 16",
        dev: "@XxxVishalxxX",
        description: "Versão não oficial e user da ROM YAAP Voyage, mantida por visual",
        changelog: [
          "Muitas coisas ;)"
        ],
        knownIssues: [],
        notes: [
          "Agradecimentos aos Devs da Motorola Sedona, testers e todos os autores respectivos."
        ]
      },
      source: "https://t.me/MadLaBDiscussion"
    },
    
    {
      name: "MyUI 7 Lite",
      version: "Android 15",
      description: "Versão customizada da interface proprietária da Motorola, antiga MyUI.",
      size: "1.8 GB",
      date: "10/09/2025",
      lastUpdate: "1 de setembro", // Adicionando a última atualização
      developer: "Motorola Team, AndyLin",
      url: "https://drive.google.com/uc?export=download&id=1RfY3KBwBEvQEPaKFDaLriB429IPdikzS",
      isOfficial: false, // true para oficial, false para não oficial
      details: {
        version: "Android 15",
        dev: "Motorola Team, AndyLin",
        description: "Trata-se de uma versão customizada da interface proprietária da Motorola, antiga MyUI, possivelmente, é um PORT, tome cuidado!",
        changelog: [
          "Removido todo o software lixo chinês, mantido apenas os aplicativos da Moto para a MyUI (Telefone, Dolby Atmos, Contatos, Calendário, Calculadora, Smart Connect, Mensagens, Gravador de Áudio, Relógios, etc.)",
          "Removidos os limites do Google Play Service para que você possa usar o Quick Share e a auto-atualização da Play Store",
          "Atualizado o launcher para a versão MyUI 8",
          "Efeitos de desfoque ativados por padrão",
          "Pré-rooteado com APatch"
        ],
        knownIssues: [],
        notes: [
          "Flashear via TWRP",
          "Ative o Play Service e baixe a Play Store e o APatch manualmente",
          "A SuperKey do APatch é 114514Aa, você pode alterá-la manualmente reaplicando o patch na imagem de boot (Use a opção Patch and Install)"
        ]
      },
      source: "https://t.me/MotoG34/456671"
    },
    
    {
      name: "MistOS 4.2",
      version: "Android 16",
      description: "Versão oficial da ROM MistOS desenvolvida por JNW para o Android 16 - Codinome: Fizzle",
      size: "1.5 GB",
      date: "21/10/2025",
      lastUpdate: "21 de Outubro", // Adicionando a última atualização
      developer: "JNW_SG",
      url: "https://drive.google.com/uc?export=download&id=12k3hFPQ-v6_VhZFLeuRwcas_RAoaS6z-",
      isOfficial: true, // true para oficial, false para não oficial
      details: {
        version: "Android 16",
        dev: "JNW_SG",
        description: "Versão oficial da ROM MistOS desenvolvida por JNW para o Android 16 - Codinome: Fizzle",
        changelog: [
          "Sincronização da fonte da ROM mais recente",
          "Patch de segurança de setembro",
          "Corrigido problema com o microfone de chamadas do WhatsApp",
          "Kernel atualizado para a versão 5.4.300"
        ],
        knownIssues: [],
        notes: []
      },
      source: "https://t.me/MotoG34/520620"
    },
    
    {
      name: "AxionOS 2.0",
      version: "Android 16",
      description: "Versão BETA 3 não oficial da ROM AxionOS, desenvolvida por JNW",
      size: "1.5 GB",
      date: "20/09/2025",
      lastUpdate: "29 de agosto", // Adicionando a última atualização
      developer: "JNW_SG",
      url: "https://drive.google.com/uc?export=download&id=1siUx-Fz5lzIwQ2OLQDyE7cGbQPJ0OWzX",
      isOfficial: false, // true para oficial, false para não oficial
      details: {
        version: "Android 16",
        dev: "JINWOO",
        description: "Versão BETA 3 não oficial da ROM AxionOS, desenvolvida por JNW",
        changelog: [],
        knownIssues: [],
        notes: [
          "Suporte ao KSU Next",
          "Para o KernelSu Next funcionar, flasheie este KSU-boot.img e instale este app: KSU-boot.img , Apk"
        ]
      },
      source: "https://t.me/MotoG34/452049"
    },
    
    {
      name: "InfinityX",
      version: "Android 16",
      description: "Versão não oficial da Rom Infinity X desenvolvida por Akarizao",
      size: "1.4 GB",
      date: "17/10/2025",
      lastUpdate: "17 de Outubro", // Adicionando a última atualização
      developer: "Akarizao",
      url: "https://pixeldrain.com/l/L29to7Pj",
      isOfficial: false, // true para oficial, false para não oficial
      details: {
        version: "Android 16",
        dev: "Akarizao",
        description: "Versão não oficial da Rom Infinity X desenvolvida por Akarizao",
        changelog: [
          "Build Inicial",
          "Changelog V3.2"
        ],
        knownIssues: [],
        notes: [
          "Gapps Incluídos",
          "MotoCam incluído",
          "Leia a Thread no XDA para mais informações"
        ]
      },
      credits: [
        "Obrigado para MikeNG & The Muppets pelas trees e outros contribuidores da motorola sm6375 contributors",
        "Obrigado a @inocity Por testar as builds de lançamento.",
        "Obrigado a Project-InfinityX pelo banner."
      ],
      source: "https://t.me/MotoG34/515811"
    },
    
    {
      name: "SunOS",
      version: "Android 15",
      description: "ROM SunOS não oficial desenvolvida por Irawansalt",
      size: "1.3 GB",
      date: "20/09/2025",
      lastUpdate: "23 de setembro", // Adicionando a última atualização
      developer: "Irawansalt",
      url: "https://drive.google.com/uc?export=download&id=1WTo-zHIfB39mMaz6AR6hdDtP9OgtDd5q",
      isOfficial: false, // true para oficial, false para não oficial
      details: {
        version: "Android 15",
        dev: "Irawansalt",
        description: "Versão não oficial da Rom SunOS, desenvolvida por iranwasalt",
        changelog: [
          "Corrigido o problema de desligamento automático da tela durante sessões de jogos / em altas temperaturas",
          "Corrigidos problemas de volume ao fazer chamadas VoIP",
          "Inclui AOSPADolby",
          "Etc."
        ],
        knownIssues: [],
        notes: [
          "Não inclui MotoCamera",
          "Para root com KernelSU-Next, flasheie boot-ksunext.img",
          "Por favor, reporte bugs com o log apropriado"
        ]
      },
      credits: [
        "Equipe LineageOS pela árvore base",
        "@Irawansalt por corrigir os bugs"
      ],
      source: "https://t.me/MotoG34/483109"
    },
    
    {
      name: "Stock ROM",
      version: "Android 15",
      description: "ROM Stock oficial da Motorola, para o Moto G34. O download deve ser feito pelo RSA para maior garantia",
      size: "1.8 GB",
      date: "01/01/2025",
      lastUpdate: "N/A", // Adicionando a última atualização
      developer: "Motorola",
      url: "https://pt-br.support.motorola.com/app/softwarefix",
      isOfficial: true, // true para oficial, false para não oficial
      easterEgg: true,
      details: {
        version: "Android 15",
        dev: "Motorola",
        description: "ROM Stock oficial da Motorola, para o MotoG34",
        changelog: [],
        knownIssues: [],
        notes: [
          "HelloUI",
          "O download deve ser feito pelo RSA para maior garantia"
        ]
      },
      source: "https://www.stockrom.net/category/motorola/moto-g34-5g"
    },
    
    // FIM DA LISTA DE ROMS
  ]
};

// =================================================================================
// FUNÇÕES DO SISTEMA - NÃO ALTERE NADA AQUI
// =================================================================================

function getRomsByDevice(device) {
  return romsData[device] || [];
}

function getAvailableDevices() {
  return Object.keys(romsData);
}

// =================================================================================
// FIM DO ARQUIVO
// =================================================================================

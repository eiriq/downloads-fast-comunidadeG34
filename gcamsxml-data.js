/*
 * =================================================================================
 * ARQUIVO DE DADOS DAS GCAMS/XMLS
 * =================================================================================
 * 
 * COMO ADICIONAR UMA NOVA GCAM/XML:
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

// Lista de GCAMs/XMLs
const gcamData = {
  gcams: [
    // ================================================================================
    // MODELOS PARA NOVAS GCAMS/XMLS (COMENTADOS - REMOVA /* */ PARA ATIVAR)
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
      xmlUrl: "",
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
    
    // ================================================================================
    // GCAMS/XMLS DISPONÍVEIS (NÃO ALTERE A ORDEM DAS GCAMS/XMLS JÁ EXISTENTES)
    // ================================================================================
    
    {
      name: "MGC 9.3 Snap",
      version: "9.3",
      description: "Versão MGC 9.3 Snap com configurações otimizadas para o Moto G34",
      size: "411 MB",
      date: "07/06/2025",
      lastUpdate: "07 de Junho", // Adicione aqui a última atualização
      developer: "Koreia",
      url: "https://drive.google.com/uc?export=download&id=1n8MPUX_BFUafjpzenRePpAnirtmUmQX9",
      xmlUrl: "https://drive.google.com/file/d/16EGqxs6jfk6Q9SxS6Wju5BcqDkw9iQ1K/view?usp=sharing",
      xmlName: "rok800.xml",
      details: {
        version: "1.0",
        dev: "Koreia",
        description: "XML desenvolvida por Koreia para a versão MGC 9.3 Snap com configurações otimizadas para o Moto G34",
        changelog: [],
        knownIssues: [],
        notes: [
          "Instale o APK e depois importe o XML fornecido",
          "Para importar o XML, clique várias vezes acima do botão de tirar foto (entre ele e o zoom)",
          "Recomenda-se limpar os dados do aplicativo antes de usar"
        ]
      },
      source: "https://t.me/MotoG34Global/1532/4314"
    },
    
    {
      name: "MGC 9.4 Snap",
      version: "9.4",
      description: "Versão mais recente do MGC com recursos avançados de fotografia",
      size: "381 MB",
      date: "10/10/2025",
      lastUpdate: "10 de Outubro", // Adicione aqui a última atualização
      developer: "InoCity",
      url: "https://1-dontsharethislink.celsoazevedo.com/file/filesc/MGC_9.4.103_V17_snap.apk",
      xmlUrl: "https://drive.google.com/file/d/19SLJEIkSQfm4j_4cbbgx_eQ9QXXtnnh5/view?usp=sharing",
      xmlName: "InoQualityV1.xml",
      details: {
        version: "1.0",
        dev: "InoCity",
        description: "XML mais recente para MotoG34 disponível, baseada na MGC 9.4, otimizada e focada no dispositivo da motorola",
        changelog: [],
        knownIssues: [],
        notes: [
          "Instale o APK e depois importe o XML fornecido",
          "Para importar o XML, clique várias vezes acima do botão de tirar foto (entre ele e o zoom)",
          "Recomenda-se limpar os dados do aplicativo antes de usar"
        ]
      },
      source: "https://t.me/MotoG34/515342"
    },
    
    // FIM DA LISTA DE GCAMS/XMLS
  ]
};

// =================================================================================
// FUNÇÕES DO SISTEMA - NÃO ALTERE NADA AQUI
// =================================================================================

function getGcams() {
  return gcamData.gcams || [];
}

// =================================================================================
// FIM DO ARQUIVO
// =================================================================================

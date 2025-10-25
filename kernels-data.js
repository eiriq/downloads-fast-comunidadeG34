/*
 * =================================================================================
 * ARQUIVO DE DADOS DOS KERNELS - MOTO G34
 * =================================================================================
 * 
 * COMO ADICIONAR UM NOVO KERNEL:
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

// Lista de Kernels para o Moto G34
const kernelsData = {
  motog34: [
    // ================================================================================
    // MODELOS PARA NOVOS KERNELS (COMENTADOS - REMOVA /* */ PARA ATIVAR)
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
    // KERNELS DISPONÍVEIS (NÃO ALTERE A ORDEM DOS KERNELS JÁ EXISTENTES)
    // ================================================================================
    
    {
      name: "sushi-うう Kernel",
      version: "fifteen-sixteen (15/16)",
      description: "Kernel otimizado para o MotoG34, base MoeKernel, por Akarizao",
      size: "28 MB",
      date: "21/10/2025",
      lastUpdate: "21 de Outubro", // Adicione aqui a última atualização
      developer: "Akarizao",
      url: "https://drive.google.com/uc?export=download&id=1UrsDGLpEksa9AMjggiDEu4AQGSkgzDgL",
      details: {
        version: "fifteen-sixteen (15/16)",
        dev: "Akarizao",
        description: "Kernel otimizado para o MotoG34, base MoeKernel, por Akarizao",
        changelog: [],
        knownIssues: [],
        notes: []
      },
      source: "https://t.me/MotoG34/521350"
    },
    
    // FIM DA LISTA DE KERNELS
  ]
};

// =================================================================================
// FUNÇÕES DO SISTEMA - NÃO ALTERE NADA AQUI
// =================================================================================

function getKernelsByDevice(device) {
  return kernelsData[device] || [];
}

function getAvailableDevices() {
  return Object.keys(kernelsData);
}

// =================================================================================
// FIM DO ARQUIVO
// =================================================================================

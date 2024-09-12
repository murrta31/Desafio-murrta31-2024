class RecintosZoo {
  constructor() {
    this.recintos = [
      { numero: 1, bioma: "savana", tamanho: 10, animais: [{ especie: "MACACO", quantidade: 3 }] },
      { numero: 2, bioma: "floresta", tamanho: 5, animais: [] },
      { numero: 3, bioma: "savana e rio", tamanho: 7, animais: [{ especie: "GAZELA", quantidade: 1 }] },
      { numero: 4, bioma: "rio", tamanho: 8, animais: [] },
      { numero: 5, bioma: "savana", tamanho: 9, animais: [{ especie: "LEAO", quantidade: 1 }] }
    ];

    this.animais = {
      "LEAO": { tamanho: 3, bioma: ["savana"], carnivoro: true },
      "LEOPARDO": { tamanho: 2, bioma: ["savana"], carnivoro: true },
      "CROCODILO": { tamanho: 3, bioma: ["rio"], carnivoro: true },
      "MACACO": { tamanho: 1, bioma: ["savana", "floresta"], carnivoro: false },
      "GAZELA": { tamanho: 2, bioma: ["savana"], carnivoro: false },
      "HIPOPOTAMO": { tamanho: 4, bioma: ["savana", "rio"], carnivoro: false }
    };
  }

  analisaRecintos(especie, quantidade) {
    if (!this.animais[especie]) {
      return { erro: "Animal inválido" };
    }
    if (quantidade <= 0 || !Number.isInteger(quantidade)) {
      return { erro: "Quantidade inválida" };
    }

    const animalInfo = this.animais[especie];
    const espacoNecessario = animalInfo.tamanho * quantidade + (quantidade > 1 ? 1 : 0);

    const recintosViaveis = this.recintos
      .filter(recinto => this.recintoViavel(recinto, especie, quantidade, espacoNecessario))
      .map(recinto => {
        const espacoOcupado = recinto.animais.reduce((acc, a) => acc + this.animais[a.especie].tamanho * a.quantidade, 0);
        const espacoExtra = recinto.animais.length > 0 && (recinto.animais.some(a => a.especie !== especie) || recinto.animais.length > 1) ? 1 : 0;
        const espacoDisponivel = recinto.tamanho - espacoOcupado - espacoExtra;
        return `Recinto ${recinto.numero} (espaço livre: ${espacoDisponivel - espacoNecessario} total: ${recinto.tamanho})`;
      });
    if (recintosViaveis.length === 0) {
      return { erro: "Não há recinto viável" };
    }

    return { recintosViaveis };
  }

  recintoViavel(recinto, especie, quantidade, espacoNecessario) {
    const animalInfo = this.animais[especie];

    if (!animalInfo.bioma.includes(recinto.bioma) && !(especie === "HIPOPOTAMO" && recinto.bioma === "savana e rio")) {
      return false;
    }
    const carnivorosNoRecinto = recinto.animais.some(a => this.animais[a.especie].carnivoro);
    if (animalInfo.carnivoro && recinto.animais.length > 0 && carnivorosNoRecinto) {
      return false;
    }
    if (animalInfo.carnivoro && recinto.animais.length > 0 && recinto.animais[0].especie !== especie) {
      return false;
    }
    const espacoOcupado = recinto.animais.reduce((acc, a) => acc + this.animais[a.especie].tamanho * a.quantidade, 0);
    const espacoExtra = recinto.animais.length > 0 && (recinto.animais.some(a => a.especie !== especie) || recinto.animais.length > 1) ? 1 : 0;
    const espacoDisponivel = recinto.tamanho - espacoOcupado - espacoExtra;

    if (espacoDisponivel < espacoNecessario) {
      return false;
    }
    if (recinto.animais.some(a => a.especie === "HIPOPOTAMO") && especie !== "HIPOPOTAMO" && recinto.bioma !== "savana e rio") {
      return false;
    }
    if (especie === "MACACO" && recinto.animais.length === 0) {
      return false;
    }

    return true;
  }
}

export { RecintosZoo as RecintosZoo };

class RecintosZoo {

    analisaRecintos(animal, quantidade) {}
   analisaRecintos ('Macaco', 3)
   analisaRecintos ()
   
    constructor() {
        this.biomas = {
            savana: {
                macacos: 3,
                leoes: 1,

                Lock

                [[[[]]]]
                leopardos: 0,
            },
            rio: {
                crocodilos: 0,
                hipopotamos: 0,
            },
            floresta: {
                macacos: 0,
            }
        };
        this.recintosDisponiveis = {
            savana: true,
            rio: true,
            floresta: true,
        };
    }

    adicionarAnimal(animal) {
        switch (animal) {
            case 'macaco':
                if (this.biomas.savana.macacos < 3) {
                    this.biomas.savana.macacos++;
                    return 'Acomodado na savana.';
                } else if (this.biomas.floresta.macacos < 1) {
                    this.biomas.floresta.macacos++;
                    return 'Acomodado na floresta.';
                } else {
                    return 'Não há recinto disponível para macacos.';
                }

            case 'leão':
                if (this.biomas.savana.leoes < 1) {
                    this.biomas.savana.leoes++;
                    return 'Acomodado na savana.';
                } else {
                    return 'Não há recinto disponível para leões.';
                }

            case 'leopardo':
                if (this.biomas.savana.leoes === 0 && this.biomas.savana.leopardos < 1) {
                    this.biomas.savana.leopardos++;
                    return 'Acomodado na savana.';
                } else {
                    return 'Não há recinto disponível para leopardos.';
                }

            case 'crocodilo':
                if (this.biomas.rio.crocodilos < 1) {
                    this.biomas.rio.crocodilos++;
                    return 'Acomodado no rio.';
                } else {
                    return 'Não há recinto disponível para crocodilos.';
                }

            case 'hipopótamo':
                if (this.biomas.rio.hipopotamos < 1) {
                    this.biomas.rio.hipopotamos++;
                    return 'Acomodado no rio.';
                } else {
                    return 'Não há recinto disponível para hipopótamos.';
                }

            case 'gazela':
                return 'Não há recinto disponível para gazelas. Elas precisam ficar sozinhas.';

            default:
                return 'Animal desconhecido.';
        }
    }
}

const zoologico = new Zoo();

console.log(zoologico.adicionarAnimal('macaco')); // Acomodado na savana ou floresta
console.log(zoologico.adicionarAnimal('leão')); // Acomodado na savana
console.log(zoologico.adicionarAnimal('leopardo')); // Acomodado na savana ou 'Não há recinto disponível para leopardos'
console.log(zoologico.adicionarAnimal('crocodilo')); // Acomodado no rio
console.log(zoologico.adicionarAnimal('hipopótamo')); // Acomodado no rio
console.log(zoologico.adicionarAnimal('gazela')); // Não há recinto disponível para gazelas.
export { RecintosZoo as RecintosZoo };


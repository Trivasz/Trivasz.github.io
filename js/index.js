const app = Vue.createApp({
    data () {
        return {
            user: user
        }
    },
    created () {
    },
    methods: { 
        createAtoms() {
            const atoms = this.user.resources[0]

            if (atoms.amount == atoms.max) {
                return
            }

            atoms.amount++
        },
        createMolecules() {
            const atoms = this.user.resources[0]
            const molecules = this.user.resources[1]

            if (molecules.amount == molecules.max) {
                return
            }

            atoms.amount -= molecules.cost
            atoms.max += 5
            molecules.amount++
            molecules.cost *= molecules.modify
            molecules.cost = Math.floor(molecules.cost)
        },
        createCells() {
            const atoms = this.user.resources[0]
            const cells = this.user.resources[2]

            if (cells.amount == cells.max) {
                return
            }

            atoms.amount -= cells.cost
            molecules.max += 10
            cells.amount++
            cells.cost *= cells.modify
            cells.cost = Math.floor(cells.cost)
        },
        createDna() {
             const cells = this.user.resources[2]
             const dna = this.user.resources[3]

            if (dna.amount == dna.max) {
                return
            }

            cells.amount -= dna.cost
            cells.max += 5
            dna.amount++
            dna.cost *= dna.modify
            dna.cost = Math.floor(dna.cost)
        },
        createDna() {
            const dna = this.user.resources[3]
            const rna = this.user.resources[4]

           if (rna.amount == rna.max) {
               return
           }

           dna.amount -= rna.cost
           dna.max += 5
           rna.amount++
           rna.cost *= rna.modify
           rna.cost = Math.floor(rna.cost)
       },
        createAtomGen() {
            const atoms = this.user.resources[0]
            const atom_gens = this.user.generators[0]

            atoms.amount -= atom_gens.cost
            atom_gens.amount++
            atom_gens.cost *= atom_gens.modify
            atom_gens.cost = Math.floor(atom_gens.cost)
            atom_gens.active = true;
            if (atom_gens.amount == 1) {
                this.numbersGoingUp()
            }
        },
        createMoleculeGen() {
            const cells = this.user.resources[2]
            const Molecule_gens = this.user.generators[1]

            cells.amount -= Molecule_gens.cost
            Molecule_gens.amount++
            Molecule_gens.cost *= Molecule_gens.modify
            Molecule_gens.cost = Math.floor(Molecule_gens.cost)
            Molecule_gens.active = true;
            if (Molecule_gens.amount == 1) {
                this.numbersGoingUp()
            }
        },
        numbersGoingUp() {
            const atoms = this.user.resources[0]
            const molecules = this.user.resources[1]
            const atom_gens = this.user.generators[0]
            const molecule_gens = this.user.generators[1]

            if (atom_gens.active) {
                setInterval(() => {
                    if (atoms.amount == atoms.max) {
                        return
                    } else {
                        atoms.amount += atom_gens.amount
                    }
                }, 1000);
            }   

            if (molecule_gens.active) {
                setInterval(() => {
                    if (molecules.amount == molecules.max) {
                        return
                    } else {
                        molecules.amount += molecules.amount
                    }
                }, 1000);
            }   
        },
        save() {
            localStorage.setItem('resources', JSON.stringify(this.user.resources))
            localStorage.setItem('generators', JSON.stringify(this.user.generators));
        },
        load() {
            const resourcesData = localStorage.getItem('resources')
            const generatorsData = localStorage.getItem('generators');

            if (resourcesData) {
                const parsedResources = JSON.parse(resourcesData);
                parsedResources.forEach((resource, index) => {
                    this.user.resources[index] = resource;
                });
            }

            if (generatorsData) {
                const parsedResources = JSON.parse(generatorsData);
                parsedResources.forEach((generator, index) => {
                    this.user.generators[index] = generator;
                });
            }

            this.numbersGoingUp()
            
        }
    }
})

app.mount("#app")

setInterval(buttonCheck, 10)

function buttonCheck() {

    if (user.resources[0].amount < user.resources[1].cost) {
        document.getElementById("molecule_btn").disabled = true;
    } 
    else {
        document.getElementById("molecule_btn").disabled = false;
    }

    if (user.resources[0].amount < user.resources[2].cost) {
        document.getElementById("cell_btn").disabled = true;
    } 
    else {
        document.getElementById("cell_btn").disabled = false;
    }

    if (user.resources[2].amount < user.resources[3].cost) {
        document.getElementById("dna_btn").disabled = true;
    } 
    else {
        document.getElementById("dna_btn").disabled = false;
    }

    if (user.resources[3].amount < user.resources[4].cost) {
        document.getElementById("rna_btn").disabled = true;
    } 
    else {
        document.getElementById("rna_btn").disabled = false;
    }

    if (user.resources[0].amount < user.generators[0].cost) {
        document.getElementById("atom_gen_btn").disabled = true;
    } 
    else {
        document.getElementById("atom_gen_btn").disabled = false;
    }

    if (user.resources[2].amount < user.generators[1].cost) {
        document.getElementById("molecule_gen_btn").disabled = true;
    } 
    else {
        document.getElementById("molecule_gen_btn").disabled = false;
    }
}

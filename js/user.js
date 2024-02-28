    var user = {
    resources: [],
    generators: [],
}

    var atoms = {
    amount: 0,
    max: 20,
}

    var molecules = {
    amount: 0,
    max: 20,
    cost: 10,
    modify: 1.2
}

    var cells = {
    amount: 0,
    max: 15,
    cost: 15,
    modify: 1.2
}

    var dna = {
    amount: 0,
    max: 10,
    cost: 5,
    modify: 1.3
}

    var rna = {
    amount: 0,
    max: 5,
    cost: 1,
    modify: 2.1
}

    var atom_gen = {
    amount: 0,
    cost: 10,
    modify: 1.6,
    active: false
}

var molecule_gen = {
    amount: 0,
    cost: 5,
    modify: 1.6,
    active: false
}

user.resources.push(atoms)
user.resources.push(molecules)
user.resources.push(cells)
user.resources.push(dna)
user.resources.push(rna)

user.generators.push(atom_gen)
user.generators.push(molecule_gen)

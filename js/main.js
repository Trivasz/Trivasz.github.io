document.addEventListener('DOMContentLoaded', function() {
    let atom_amount = 0;
    let molecule_amount = 0;
    let atom_gen_amount = 0
    let molecule_cost = 10;
    let atom_gen_cost = 20;
    const molecule_btn = document.getElementById('molecule_btn');
    const atom_gen_btn = document.getElementById('atom_gen_btn');

    document.getElementById('atoms_btn').addEventListener("click", () => {
        atom_amount++
        document.getElementById('atoms_txt').innerHTML = "Atoms: " + atom_amount
    });

    document.getElementById('molecule_btn').addEventListener("click", () => {
        atom_amount = atom_amount - molecule_cost
        document.getElementById('atoms_txt').innerHTML = "Atoms: " + atom_amount
        molecule_amount++
        molecule_cost = molecule_cost + 2
        document.getElementById('molecule_txt').innerHTML = "Molecules: " + molecule_amount
        document.getElementById('molecule_btn_tt').innerHTML = "Cost: " + molecule_cost + " Atoms"

    });

    document.getElementById('atom_gen_btn').addEventListener('click', () => {
        atom_amount = atom_amount - atom_gen_cost
        document.getElementById('atoms_txt').innerHTML = "Atoms: " + atom_amount 
        atom_gen_amount++
        atom_gen_cost = atom_gen_cost + (2 * atom_gen_amount)
        document.getElementById('atom_gen_txt').innerHTML = "Atom Generators: " + atom_gen_amount
        document.getElementById('atom_gen_btn_tt').innerHTML = "Cost: " + atom_gen_cost + " Atoms"
    });

    setInterval(check, 10)

    function check(){
        molecule_btn.disabled = atom_amount < molecule_cost;
        atom_gen_btn.disabled = atom_amount < atom_gen_cost;
    }

    setInterval(tick, 1000)

    function tick(){
        if (atom_gen_amount >= 1) {
            atom_amount = atom_amount + atom_gen_amount
            document.getElementById('atoms_txt').innerHTML = "Atoms: " + atom_amount
        }
    }
});

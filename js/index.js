$(document).ready(function(){
    var atoms = 0
    var molecules = 0
    var atom_gens = 0
    var molecules_price = 10
    var atom_gens_price = 15

    setInterval(check, 10)
    setInterval(tick, 1000)

    $("#create-atoms").click(function(){
        atoms += 1
        updateinventory()
    })

    $("#create-molecules").click(function(){
        let modify = 1.2
        atoms = atoms - molecules_price
        molecules += 1
        molecules_price = (molecules_price + 2) * modify
        molecules_price = Math.floor(molecules_price)
        updateinventory()
        updatetooltip()
    })

    $("#create-atom-gen").click(function(){
        let modify = 1.6
        atoms = atoms - atom_gens_price
        atom_gens += 1
        atom_gens_price = (atom_gens_price + 2) * modify
        atom_gens_price = Math.floor(atom_gens_price)
        updateinventory()
        updatetooltip()
    })

    function check(){
        if (atoms < molecules_price) {
            $("#create-molecules").prop("disabled", true)
        } else {
            $("#create-molecules").prop("disabled", false)
        }
        if (atoms < atom_gens_price) {
            $("#create-atom-gen").prop("disabled", true)
        } else {
            $("#create-atom-gen").prop("disabled", false)
        }
    }

    function tick() {
        if (atom_gens >= 1) {
            atoms = atoms + atom_gens
            updateinventory()
        }
    }

    function updateinventory(){
        $("#atoms").html("Atoms: " + atoms)
        $("#molecules").html("Molecules: " + molecules)
        $("#atom-gens").html("Atom Generators: " + atom_gens)
    }

    function updatetooltip(){
        $("#molecules-tt").html("Cost: " + molecules_price + " Atoms")
        $("#atom-gens-tt").html("Cost: " + atom_gens_price + " Atoms")
    }
})
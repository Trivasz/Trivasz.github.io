class htmlhandler {
    constructor (){
    }

    handler(id, state) {
        switch (state) {
            case 'disable':
                document.getElementById(id).diabled = true;
                break;
            case 'enable':
                document.getElementById(id).diabled = false;
                break;
            case 'hide':
                document.getElementById(id).style.display = 'none';
                break;
            case 'show':
                document.getElementById(id).style.display = "block";
        }
    }

    changer(id, text) {
        document.getElementById(id).innerHTML = text;
    }

    creator(id, type, text, location) {
        const newElement = document.createElement(type);
        newElement.setAttribute("id", id);
        newElement.classList.add(id);
        newElement.textContent = text;
        const parentElement = document.getElementById(location);
        parentElement.appendChild(newElement);
    }
    
}
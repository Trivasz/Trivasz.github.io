this.htmlhandler = new htmlhandler

//--- Tutorial ---

const tutorial = setInterval(() => {
    switch (user.atoms) {
    case 1:
        this.htmlhandler.changer('tutorial-txt', 'Oh...? Click it again!')
        break;
    case 2:
        this.htmlhandler.changer('tutorial-txt', 'Something is happening... Click it again!')
        break;
    case 3:
        this.htmlhandler.changer('tutorial-txt', 'Just one more time!')
        break;
    case 4:
        this.htmlhandler.changer('tutorial-txt', 'You have been creating atoms, look!')
        this.htmlhandler.changer('atom-btn-tut', 'Create Atom')
        this.htmlhandler.handler('atom-amount-tut', 'show')
        break;
    case 5:
        this.htmlhandler.changer('tutorial-txt', 'You should click a few more times, just to see what else will happen!')
        break;
    case 6:
        this.htmlhandler.changer('tutorial-txt', '...')
        break;
    case 10:
        this.htmlhandler.handler('tutorial-txt', 'hide')
        this.htmlhandler.handler('atom-amount-tut', 'hide')
        this.htmlhandler.handler('atom-btn-tut', 'hide')
        this.htmlhandler.handler('sidebar', 'show')
        this.htmlhandler.handler('play-area', 'show')
        user.game_stage = 1
        clearInterval(tutorial)
} }, 100);
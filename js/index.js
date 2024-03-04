const app = Vue.createApp({
    data() {
        return {
            user: user,
        }
    },
    created() {

    },
    methods: {
        createAtoms() {
            this.user.atoms++
        },
        save() {
            localStorage.setItem('atoms', JSON.stringify(this.user.atoms))
            localStorage.setItem('resources', JSON.stringify(this.user.resources))
            localStorage.setItem('upgrades', JSON.stringify(this.user.upgrades))
            localStorage.setItem('achievements', JSON.stringify(this.user.achievements))
            localStorage.setItem('game_stage', JSON.stringify(this.user.game_stage))
        },
        load() {
            const atomsData = localStorage.getItem('atoms')
            const resourcesData = localStorage.getItem('resources')
            const upgradesData = localStorage.getItem('upgrades')
            const achievementsData = localStorage.getItem('achievements')
            const game_stageData = localStorage.getItem('game_stage')


            if (atomsData) {
                this.user.atoms = JSON.parse(atomsData);
            }


            if (resourcesData) {
                const parsedResources = JSON.parse(resourcesData);
                parsedResources.forEach((resource, index) => {
                    this.user.resources[index] = resource;
                });
            }

            if (upgradesData) {
                const parsedResources = JSON.parse(upgradesData);
                parsedResources.forEach((upgrade, index) => {
                    this.user.upgrades[index] = upgrade;
                });
            }

            if (achievementsData) {
                const parsedResources = JSON.parse(achievementsData);
                parsedResources.forEach((achievement, index) => {
                    this.user.achievements[index] = achievement;
                });
            }

            if (game_stageData) {
                this.user.game_stage = JSON.parse(game_stageData)
            }
        },
        wipe() {
            localStorage.clear()
            location.reload()
        }
    }
})

app.mount("#app")
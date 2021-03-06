const dataMapper = require('../dataMapper');

const homeController = {
    homePage: (_, response) => {
        dataMapper.getAllPokemons((error, pokemons) => {
            if (error) {
                response.send('Une erreur est survenue, dsl !');
                return;
            }
            response.render('home', {pokemons});
        })
    },
}

module.exports = homeController;
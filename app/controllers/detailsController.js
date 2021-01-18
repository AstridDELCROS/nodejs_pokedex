const dataMapper = require('../dataMapper');

const detailsController = {
    getDetails: (request, response, next) => {
        const id = Number(request.params.id);
        dataMapper.getOnePokemon(id, (error, pokemon) => {
            if (error) {
                response.send('Une erreur est survenue, dsl !');
                return;
            }
            if (!pokemon) {
                next;
                return;
            }
            response.render('details', {pokemon});
        })
    },
}

module.exports = detailsController;
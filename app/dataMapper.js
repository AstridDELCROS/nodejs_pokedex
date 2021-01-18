const client = require('./database');
const database = require('./database');

const dataMapper = {
    getAllPokemons: (callback) => {
        const queryObj = {
            text: `SELECT * FROM "pokemon";`
        };
        database.query(queryObj, (error, result) => {
            if (error) {
                console.log(error);
            }
            let data = [];
            if (result) {
                data = result.rows;
            }
            callback(error, data);
        });
    },
    getOnePokemon: (pokemon_id, callback) => {
        pokemon_id = Number(pokemon_id);
        const queryObj = {
            text: `SELECT * FROM "pokemon" WHERE id = ${pokemon_id};`,
            value: [pokemon_id],
        };
        database.query(queryObj, (error, result) => {
            if (error) {
                console.log(error);
            }
            let data = [];
            if (result) {
                data = result.rows[0];
            }
            callback(error, data);
        })
    }
}

module.exports = dataMapper;
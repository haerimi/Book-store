const cracoALias = require('craco-alias');

module.exports = {
    plugins: [
        {
            plugin: cracoALias,
            options: {
                source: 'tsconfig',
                baseUrl: ".",
                tsConfigPath: 'tsconfig.paths.json',
                debug: false,
            }
        }
    ]
}
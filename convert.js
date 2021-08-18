import fs from 'fs'
import { themes } from './dist/acnb-themes-data.es.js'

fs.writeFileSync('themes.json', JSON.stringify(themes))

fs.readdirSync('./dist').forEach(function (fileName) {
    fs.unlinkSync('./dist/' + fileName);
});

fs.rmdir('./dist', (err) => {
    if (err) {
        console.error(err)
        return
    }
})

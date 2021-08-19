import fs from 'fs'
import { themes } from './dist/acnb-themes-data.es.js'

fs.writeFileSync('dist/themes.json', JSON.stringify(themes))
fs.unlinkSync('./dist/acnb-themes-data.es.js')

import fs from 'fs'
import { data } from './dist/acnb-themes-data.es.js'

fs.writeFileSync('dist/themes.json', JSON.stringify(data))
fs.unlinkSync('./dist/acnb-themes-data.es.js')

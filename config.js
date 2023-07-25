import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6281272308541', 'NANS OFFC', true],
  ['6285174306183'], 
  ['6285174306183'],
  ['6285880029379']
] // Nomor Owner

global.mods = ['6285174306183'] 
global.prems = ['6285174306183', '6285174306183', '6285174306183']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  lann: 'https://api.betabotz.org'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.betabotz.org': 'Y4FcNIjh'
}

// Harus di isi kalo mau ada fitur openai atau remini daftar atau login di sini : https://api.betabotz.org/
global.lann = 'Y4FcNIjh'

// Sticker WM
global.nans = 'NERO MD BY NANS OFFC'
global.packname = 'NERO MD┃ᴮᴼᵀ' 
global.author = '@nansoffc' 
global.fgig = '▢ Ikuti saya di Instagram \nhttps://www.instagram.com/nansoffc\n' 
global.dygp = 'https://chat.whatsapp.com/KLbE1i5U4y9I0OVli5jcKM'
global.fgsc = 'https://github.com/nanzone' 
global.fgyt = 'http://nansofficial.me/'
global.fgpyp = 'https://saweria.co/nansofficial'
global.fglog = 'https://i.ibb.co/Csp01NQ/nero-thumbnail.jpg'
global.thumb = 'https://i.ibb.co/y0vgNPT/20230723-112852.jpg'

global.wait = '*⌛ _Loading..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
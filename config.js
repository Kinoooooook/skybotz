// S C R I P T  O R I  B Y  Aldi Lesmanað­
// Ditulis Ulang Oleh Kibotz
// Credits, jangan dihapus atau diubah!

// - - THANKS TO - -
// â¢ Allah SWT
// â¢ Sunseekers

//[!] Jangan Lupa Ganti Ownernya

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'
import { group } from 'console'
import PhoneNumber from 'awesome-phonenumber'
/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00 
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
 /*   let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
let ucpn = `${ucapan()}`
let name = conn.getName(m.sender)*/
    const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

      /*============== SOCIAL ==============*/

// kalo ga punya ketik "-" atau biarin aja biar ada creditsnya :v
 // my youtube channel

//â«¹â«º â³â¶â¼â¶â¶â¶â¶â â NO OWNER â ââ´â´â´â´â¾â´â³ â«¹â«º

global.owner = [
['6285717822630', 'Sunseekers-Bot', true],
['6285717822630', 'Sunseekers-Bot', true]
]
global.mods = []
global.prems = []
global.nomorbot = '6287739421476'
global.nomorown = '6285717822630'
global.nomorown1 = '6285717822630'
global.nomorown2 = '6285717822630'
global.nomorwa = '0'
global.nameown = 'Sunseekers-Bot'

/*============== STAFF ==============*/
/*global.owner = [
  ['6285717822630', 'ð­ðð¸ð¼ðð¼ðð-ð ð', true],
  ['-', 'ISI KALAU ADA', true],
  ['-', 'ISI KALAU ADA', true],
  ['-', 'ISI KALAU ADA', true],
  ['-', 'ISI KALAU ADA', true]

*/
//â«¹â«º â³â¶â¼â¶â¶â¶â¶â â WM â ââ´â´â´â´â¾â´â³ â«¹â«º

global.readMore = readMore
global.gcname = 'Sunseekers Team'
global.botintro = 'Hallo, Saya Kibotz Saya akan membantu Anda kapan pun & Dimana pun, Saya asisten bot WhatsApp yang di buat oleh Kino Saya di rilis pada tanggal\nð ï¸_27/12/2022_'
global.intro = 'https://telegra.ph/file/ae68c09f996fd1e0b5f1d.jpg'
global.author = 'Created By Team Seekers'
global.namebot = 'Kibotz'
global.packname2 = 'Kibotz'
global.wm = 'Â© ð¾ð§ððð©ðð ð½ð® SUNSEEKERS'
global.media = 'https://telegra.ph/file/2f0fc76a4c6906cd4289f.jpg'
global.watermark = wm
global.wame = 'https://wa.me/message/IT4R6JHOR74XP1'
global.wm2 = 'KIBOTZ'
global.botdate = `â«¹â«º DATE: ${week} ${date}\nâ«¹â«º ð§ð¶ðºð²: ${wktuwib}`

global.packname = wm
global.bottime = `T I M E : ${wktuwib}`
global.titlebot = `*Sunseekers*`
global.stickpack = '*Kibotz*
global.stickauth = `Â© *Sunseekers-Bot*`
global.week = `${week} ${date}`
global.wibb = `${wktuwib}`
//â«¹â«º â³â¶â¼â¶â¶â¶â¶â â OWNER INFO â ââ´â´â´â´â¾â´â³ â«¹â«º
global.nameown1= '*Kibotz*'
global.nameown2 = '*Kibotz*'
//â«¹â«º â³â¶â¼â¶â¶â¶â¶â â MEDIA LINK â ââ´â´â´â´â¾â´â³ â«¹â«º
global.Linkgc = 'Bentar'
global.lynk = 'tiktok.com/@rfkywcksno'


//â«¹â«º â³â¶â¼â¶â¶â¶â¶â â MEDIA SOSSIAL â ââ´â´â´â´â¾â´â³ â«¹â«º
global.sig = 'https://instagram.com/rfkywcksno'
global.tautanwa = 'https://wa.me/message/IT4R6JHOR74XP1'
global.sgh = 'https://github.com/Kinoooooook' //github
global.sgc = 'https://chat.whatsapp.com/Kh4FYTt1sRoAvI1GLc9irc' //group whatsapp
global.sdc = '-' //discord
global.syt = 'https://youtube.com/@MrBeast'
global.sfb = 'https://www.facebook.com/rfkywcksno' // facebook
global.snh = 'https://chat.whatsapp.com/Kh4FYTt1sRoAvI1GLc9irc'

//â«¹â«º â³â¶â¼â¶â¶â¶â¶â â DONASI â ââ´â´â´â´â¾â´â³ â«¹â«º
global.pdana = '08717822630'
global.povo = '_'
global.pgopay = '-'
global.plinkaja = '-' //link aja
global.ppulsa = '085717822630'
global.ppulsa2 = '087739421476'
global.psaweria = '_'
global.donasikabul = '-',


//â«¹â«º â³â¶â¼â¶â¶â¶â¶â â TAMPILAN â ââ´â´â´â´â¾â´â³ â«¹â«º
global.ListHargaSewa = 'â 5 Hari IDR 3.000\nâ 7 Hari IDR 5.000\nâ 15+5 Hari IDR 10.000\nâ 30 Hari IDR 15.000'
//â«¹â«º â³â¶â¼â¶â¶â¶â¶â â TAMPILAN â ââ´â´â´â´â¾â´â³ â«¹â«º
global.LyAtas1 = 'â° âââ â¨'
global.LyAtas2 = 'â© ââââ â¢â'
global.Ly = 'â'
global.lybwh = 'âââââ â³»â³»'
global.sym = 'ââ»'
global.sym2 = 'â­'
global.dmenut = 'à¬ââââââ©' //top
global.dmenub = 'ââ¬' //body
global.dmenub2 = 'â' //body for info cmd on Default menu
global.dmenuf = 'ââââââââââââ¦' //footer
global.dashmenu = 'âââââ *DASHBOARD* âââââ'
global.cmenut = 'âââââââã' //top
global.cmenuh = 'ãââââââ' //header
global.cmenub = 'ââ ' //body
global.cmenuf = 'ââââââââââââà¹\n' //footer
global.cmenua = '\nâ ââââââââââââââââââââââââââââââââ â\n     '
global.pmenus = 'â'
global.htki = 'ââââââã' // Hiasan Titile (KIRI)
global.htka = 'ãââââââ' // Hiasan Title  (KANAN)
global.lopr = 'â' //LOGO PREMIUM ON MENU.JS
global.lolm = 'â' //LOGO LIMIT/FREE ON MENU.JS
global.htjava = 'â«¹â«º'    //hiasan Doang :v
global.hsquere = ['â¶','â','â«¹â«º']

//â«¹â«º â³â¶â¼â¶â¶â¶â¶â â RESPOND â ââ´â´â´â´â¾â´â³ â«¹â«º
global.stiker_wait = 'â°â°â°â°â°â°â±â± 98% ð ððð!!'
global.wait = 'â°â°â°â°â°â°â±â± 98% ð ððð!!'
global.md = 'tunggu sebentar kak'
global.eror = 'Mohon Maaf Server Kami Sedang Error!'


//â«¹â«º â³â¶â¼â¶â¶â¶â¶â â RESPOND GEME â ââ´â´â´â´â¾â´â³ â«¹â«º
global.benar = 'ð¶ððð ð¹ððð! ââ¡â'
global.salah = 'ð½ðð ð±ðð! ââ â'
global.dikit = "ð³ðððð ð»ððð,ðððððððð!!"


//â«¹â«º â³â¶â¼â¶â¶â¶â¶â â RPG GAME â ââ´â´â´â´â¾â´â³ â«¹â«º
global.multiplier = 69 // The higher, The harder levelup 
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      agility: 'ð¤¸ââï¸',
      arc: 'ð¹',
      armor: 'ð¥¼',
      bank: 'ð¦',
      bibitanggur: 'ð',
      bibitapel: 'ð',
      bibitjeruk: 'ð',
      bibitmangga: 'ð¥­',
      bibitpisang: 'ð',
      bow: 'ð¹',
      bull: 'ð',
      cat: 'ð',
      chicken: 'ð',
      common: 'ð¦',
      cow: 'ð',
      crystal: 'ð®',
      darkcrystal: 'â ï¸',
      diamond: 'ð',
      dog: 'ð',
      dragon: 'ð',
      elephant: 'ð',
      emerald: 'ð',
      exp: 'âï¸',
      fishingrod: 'ð£',
      fox: 'ð¦',
      gems: 'ð',
      giraffe: 'ð¦',
      gold: 'ð',
      health: 'â¤ï¸',
      horse: 'ð',
      intelligence: 'ð§ ',
      iron: 'âï¸',
      keygold: 'ð',
      keyiron: 'ðï¸',
      knife: 'ðª',
      legendary: 'ðï¸',
      level: 'ð§¬',
      limit: 'ð',
      lion: 'ð¦',
      magicwand: 'âï¸',
      mana: 'ðª',
      money: 'ðµ',
      mythic: 'ð³ï¸',
      pet: 'ð',
      petFood: 'ð',
      pickaxe: 'âï¸',
      pointxp: 'ð§',
      potion: 'ð¥¤',
      rock: 'ðª¨',
      snake: 'ð',
      stamina: 'â¡',
      strength: 'ð¦¹ââï¸',
      string: 'ð¸ï¸',
      superior: 'ð¼',
      sword: 'âï¸',
      tiger: 'ð',
      trash: 'ð',
      uncommon: 'ð',
      upgrader: 'ð§°',
      wood: 'ðªµ'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


//â«¹â«º â³â¶â¼â¶â¶â¶â¶â â WEBSITE APIKEY â ââ´â´â´â´â¾â´â³ â«¹â«º
global.zenzkey = 'b8040941f7'
global.lolkey = '8e66d0934cf741bfd2182c16' // PUNYA WAHID 357d3c85079c4e0818731e6b
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  botstyle: 'https://botstyle-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  kanx: 'https://kannxapi.herokuapp.com/', 
  violetics : 'https://violetics.pw',
  ziy : 'https://ziy.herokuapp.com',
  males : 'https://malesin.xyz',
  pasha : 'https://api.nataganz.com'
}

//â³¹ NOTE !! EXAMPLE â¢ Name Api: 'website api'

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'ebb6251cc00f9c63',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://api.lolhuman.xyz': 'e54205a4ca2caa368cc067bb',// 8e66d0934cf741bfd2182c16
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'melcantik',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://botstyle-api.herokuapp.com': 'Apikeymu',
  'https://hardianto.xyz': 'hardianto',
  'https://violetics.pw': 'beta',
  'https://ziy.herokuapp.com' : 'xZiyy',
  'https://api.nataganz.com' : 'Pasha'
}
//â³¹ NOTE !! EXAMPLE â¢ 'https://WebsiteApi': 'Apikey'


//â«¹â«º â³â¶â¼â¶â¶â¶â¶â â OTHER â ââ´â´â´â´â¾â´â³ â«¹â«º
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'
//OPTIONS
global.optsnsfw = true // Untuk mematikan Dan Menyalakan Nsfw
global.premnsfw = true // Nsfw Mode Premium?
global.thumb = 'https://telegra.ph/file/6db207196807bcf1ca1c5.jpg' //Main Thumbnail
global.imagebot = 'https://telegra.ph/file/6db207196807bcf1ca1c5.jpg'
global.giflogo = 'https://telegra.ph/file/d99857d74715351bdcd6c.mp4'
global.thumbs = ['https://telegra.ph/file/6db207196807bcf1ca1c5.jpg']
global.thumbnailUrl = [
  'https://telegra.ph/file/81260a8b9e8cff26d2b48.jpg', 'https://telegra.ph/file/ac4928f0824a2a0492737.jpg',
  'https://telegra.ph/file/6359b013bc7e52c3b346f.jpg', 'https://telegra.ph/file/d43c89a5d2da72875ec05.jpg',
  'https://telegra.ph/file/7d6c0e35f9c8f52715541.jpg', 'https://telegra.ph/file/ef4b742d47e6a9115e2ff.jpg',
  'https://telegra.ph/file/55e5af5f33fbd57104187.jpg', 'https://telegra.ph/file/af236598456b95884bd15.jpg',
  'https://telegra.ph/file/de92ed4a729887ffc974c.jpg', 'https://telegra.ph/file/00ce42a193b1dbbf907d4.jpg', 'https://telegra.ph/file/6db207196807bcf1ca1c5.jpg'
]
global.fotonya1 = 'https://telegra.ph/file/2f0fc76a4c6906cd4289f.jpg' //ganti jadi foto bot mu
global.fotonya2 = 'https://telegra.ph/file/2f0fc76a4c6906cd4289f.jpg' //ini juga ganti 
global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']
global.flaaa2 = [
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text="
]
global.fla = [
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",
 "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text="
]
global.hwaifu = ['https://telegra.ph/file/6db207196807bcf1ca1c5.jpg','https://telegra.ph/file/6db207196807bcf1ca1c5.jpg','https://telegra.ph/file/6db207196807bcf1ca1c5.jpg','https://telegra.ph/file/6db207196807bcf1ca1c5.jpg','https://telegra.ph/file/6db207196807bcf1ca1c5.jpg']
global.hyuri = ['https://telegra.ph/file/5d908f4a17515a15c6202.jpg']
global.hLokun = ['https://telegra.ph/file/8902f4fc550727a62e99f.jpg','https://telegra.ph/file/6a6a40e924c16a8f0de03.jpg', 'https://telegra.ph/file/b035d3038a0b124f1d846.jpg', 'https://telegra.ph/file/9d475f7852bf6f6193c80.jpg']
global.hloli = ['https://telegra.ph/file/872c360a7104d86752650.jpg', 'https://telegra.ph/file/f6bbb53620374257bfa51.jpg','https://telegra.ph/file/9b76375f3869440818d57.jpg','https://telegra.ph/file/a78443f0ee887f46808d7.jpg']
global.hneko = ['https://telegra.ph/file/805a37b1e9a963e7d7ecf.jpg', 'https://telegra.ph/file/f9c4d97477b647cf57a2b.jpg','https://telegra.ph/file/b6905b77e6c7732592a13.jpg', 'https://telegra.ph/file/9f82c432d0ba4cfffda9a.png', 'https://telegra.ph/file/484083949d4bfd763b8cf.jpg']
global.hbunny = ['https://telegra.ph/file/2b71a8d46d29351479fbc.jpg', 'https://telegra.ph/file/ae610571b62b5ab876e9c.jpg', 'https://telegra.ph/file/cc8255d5b989eef587af2.jpg','https://telegra.ph/file/30d2e7375996abd9cfee3.jpg', 'https://telegra.ph/file/78980c90c44a95a1d30fa.jpg', 'https://telegra.ph/file/2ac5d8ccf23e73eaa5bfa.jpg']
global.hbeach = ['https://telegra.ph/file/14ae0ba2da77d74e6b80c.jpg', 'https://telegra.ph/file/b6905b77e6c7732592a13.jpg','https://telegra.ph/file/9da45a352eb4c40e5d641.jpg', 'https://telegra.ph/file/59e78846ee365975ee6e3.jpg','https://telegra.ph/file/1bf7dee46b83eb4c41d7d.jpg','https://telegra.ph/file/0525a7929f819cb8278f3.jpg']


global.hoppai = ['https://telegra.ph/file/f34d76df4a2065af1a5ba.jpg','https://telegra.ph/file/05c1b22ee83bcd7723b4d.jpg','https://telegra.ph/file/1d886f66a44871205335f.jpg','https://telegra.ph/file/54d19a9094dc509370bf9.jpg','https://telegra.ph/file/e649475bcde78a9977ee5.jpg','https://telegra.ph/file/32ba20b6139b129c559c8.jpg','https://telegra.ph/file/948434cda49e4af5d9f11.jpg','https://telegra.ph/file/6f353c68533283fe79871.jpg','https://telegra.ph/file/de268ca9b01101acf2b8a.jpg','https://telegra.ph/file/fc6c5b2ae9a20c4256e7f.jpg', 'https://telegra.ph/file/efb70bb0988640f841742.jpg', 'https://telegra.ph/file/77d03fff530a2bcff3bf7.jpg','https://telegra.ph/file/6e4623464a659dd8d902b.jpg','https://telegra.ph/file/685aa39f0cb0f2c4fd85b.jpg','https://telegra.ph/file/10454b9ad693e1eefea58.jpg','https://telegra.ph/file/7de8ce5c290c3d8be0856.jpg','https://telegra.ph/file/8d7c4eadb7a4722747074.jpg','https://telegra.ph/file/ccc5f8eaac0f30919ef6c.jpg','https://telegra.ph/file/95f4b43439d7888f15ea5.jpg','https://telegra.ph/file/9c2a750db555bd2fad1f3.jpg', 'https://telegra.ph/file/efc5f7e637744fd6bfec2.jpg','https://telegra.ph/file/3a5231aade245665633bd.jpg','https://telegra.ph/file/2ecfc76feb26ec1eab99b.jpg','https://telegra.ph/file/dabb70983b4e833d98344.jpg','https://telegra.ph/file/75193a893e38fc580afe6.jpg','https://telegra.ph/file/217aa0f4ec76273808aa4.jpg','https://telegra.ph/file/8a35d3446b97ae22c7b23.jpg','https://telegra.ph/file/092df720701575a7ceaaa.jpg','https://telegra.ph/file/a65184a676cd648de34c3.jpg',
'https://telegra.ph/file/180e28807e78419d45537.jpg','https://telegra.ph/file/140eff27be983e0cd6781.jpg','https://telegra.ph/file/1581b791e16d0029e16b5.jpg','https://telegra.ph/file/6a4b36372b4f265bae3bc.jpg','https://telegra.ph/file/093caff422f194f00bc6c.jpg','https://telegra.ph/file/2294b7ab49eca8a8046b2.jpg','https://telegra.ph/file/869224d1c417e8b5c8ff1.jpg','https://telegra.ph/file/a78443f0ee887f46808d7.jpg','https://telegra.ph/file/1889878933264d16c58bf.jpg','https://telegra.ph/file/735aeb47d9c4aa87aaaf3.jpg','https://telegra.ph/file/fcf861516db09dda164e0.jpg','https://telegra.ph/file/355d96d7e06d109435f67.jpg']
global.logo = 'https://i.pinimg.com/564x/f7/d2/e4/f7d2e48fd59a8c01cd396bfc70b0a2d1.jpg'

global.dtu = 'ÉªÉ´ê±á´á´É¢Êá´á´'
global.urlnya = "https://www.instagram.com/rfkywcksno"
global.dtc = 'á´á´ÊÊ á´á´¡É´á´Ê'
global.phn = '6285717822630'

global.thumbdoc = 'https://telegra.ph/file/6e45318d7c76f57e4a8bd.jpg'
//â«¹â«º â³â¶â¼â¶â¶â¶â¶â â JNGN DI UBAH â ââ´â´â´â´â¾â´â³ â«¹â«º

global.fsizedoc = '99999999999999'
global.fpagedoc = '999'
global.thumbdoc = 'https://telegra.ph/file/6e45318d7c76f57e4a8bd.jpg'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "YT: Xeon" //ur yt chanel name
global.socialm = "GitHub: DGXeon" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = 'Ednut Bot Md' //ur bot name
global.ownernumber = '2347036214381' //ur owner number
global.ownername = '드림 가이 Ednut' //ur owner name
global.websitex = "https://wa.me/2347036214381?text=hi+ednut+am.."
global.wagc = "https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20"
global.themeemoji = '⚡'
global.wm = "Ednut bot Inc."
global.botscript = 'https://github.com/Ednut001/Ednut-MD' //script link
global.packname = "Sticker By"
global.author = "🦄드림 가이 Ednut\n\n+2347036214381"
global.creator = "2347036214381@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["2347036214381"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = true //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = true //show promote/demote message
global.groupevent = true //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up it over !!!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable type .listadmin to view group admins😎',
    done: 'Done bruh ✓',
    error: 'Error not founded!',
    success: 'succesful here it is🥳!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
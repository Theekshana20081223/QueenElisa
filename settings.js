const fs = require('fs')
const chalk = require('chalk')

module.exports = {
  SESSION_ID: 'QUEENELISA;;;=QFOydFaZhVQpwd=14511030749',
  ALIVE_REACT: '👋',
  ALIVE_MESSAGE: `*Hello @name [ And @gname @members Number of Members ] I am Alive Now !*

⏰ Now time is @time
📅 Date : @date

🟢 I am online still @uptime
🔄 Response Delay : @ping Ms
💻 Host : @host
🪢 Version : @version

☫ Work Mode : @mode
☫ Work Type : @worktype

Qᴜᴇᴇɴ ᴇʟɪꜱᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ`,
  ALIVE_MEDIA: 'https://telegra.ph/file/d842677f522b6bef4dfe6.jpg',
  MONGODB_URL: 'mongodb+srv://kavi:kavi1@cluster0.yd7kp77.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', 
  PREFIX: '.$&',
  LANGUAGE: 'EN',
  PORT: 3000,
  BOT_NAME: '𝐐𝐔𝐄𝐄𝐍 𝐄𝐋𝐈𝐒𝐀',
  OWNER_NAME: '~Kavii Zer™',
  OWNER_NUMBER: '94703011541',
  SUDO: '94715166712',
  WORK_TYPE: 'public',
  WORK_MODE: 'onlyinbox',
  TIME_ZONE: 'Asia/Colombo',
  CAPTION: '© 𝙒𝙚 𝙖𝙧𝙚 𝙨𝙝𝙖𝙥𝙚𝙙 𝙗𝙮 𝙤𝙪𝙧 𝙩𝙝𝙤𝙪𝙜𝙝𝙩𝙨; 𝙬𝙚 𝙗𝙚𝙘𝙤𝙢𝙚 𝙬𝙝𝙖𝙩 𝙬𝙚 𝙩𝙝𝙞𝙣𝙠. 𝙒𝙝𝙚𝙣 𝙩𝙝𝙚 𝙢𝙞𝙣𝙙 𝙞𝙨 𝙥𝙪𝙧𝙚, 𝙟𝙤𝙮 𝙛𝙤𝙡𝙡𝙤𝙬𝙨 𝙡𝙞𝙠𝙚 𝙖 𝙨𝙝𝙖𝙙𝙤𝙬 𝙩𝙝𝙖𝙩 𝙣𝙚𝙫𝙚𝙧 𝙡𝙚𝙖𝙫𝙚𝙨💕',
  STICKER_AUTHOR: 'Qᴜᴇᴇɴ ᴇʟɪꜱᴀ',
  STICKER_PACK: 'ᴍʀ ɴɪᴍᴀ ᴏꜰᴄ',
  REMOVE_BG_APIKEY: '9D24SWh7zNdu7QkVo9Z7JQCa',
  MAXIMUM_FILESIZE: 90,
  OWNER_R_EMOJI: '👽',
  ALIVE_AS_GIF: true,
  AUTO_VOICE: false,
  INBOX_BLOCK: false,
  OWNER_REACT: true,
  AUTO_REACT: true,
  ONLY_PM_GROUP_MSG_SEND: false,
  AUTO_SEEN_STATUS: true,
  BOT_OFFLINE: false,
  READ_MESSAGE: false,
  ANTI_MSG_SPAM: false,
  ANTI_BAD_WORD: false,
  ANTI_VIEW_ONES: true,
  ANTI_DELETE: true,
  BANED_USER_MSG_SEND: false,
  BLOCK_CMD_MSG_SEND: false,
  INBOX_BLOCK_MSG_SEND: false,
  CMD_CORRECT: true,
  ANTI_CHANNEL_FORWARD: false,
  ANTI_BOT: false,
  BUTTON_MESSAGES: true,
  SONG_DOWNLOAD_TYPE: 'selectable', // audio , document
  VIDEO_DOWNLOAD_TYPE: 'selectable', // video
  FB_DOWNLOAD_TYPE: 'selectable', // hdvideo , sdvideo
  TIKTOK_DOWNLOAD_TYPE: 'selectable', // nowmvideo , wmvideo
  MSG: {
    ONLY_GROUP_MSG: 'Bot only Can Use Groups!',
    ONLY_PM_MSG: 'Bot only Can Use Private Chats!',
    BAD_DETECT_MSG: '@user Bad Words Are Disable by Owner!',
    BANED_MSG: "@user You Can't use bot, You are baned by owner!",
    GROUP_LEAVE: '👋 Bye @groupName I am Going.',
    INBOX_BLOCK:
      '❌ My owner has activated auto inbox blocking. So you will be auto blocked after 8 seconds'
  },
  BOT_RULES:
    "*⚖️ 𝚀𝚄𝙴𝙴𝙽 𝙴𝙻𝙸𝚂𝙰 𝙱𝙾𝚃 𝚁𝚄𝙻𝙴𝚂 ⚖️*\n\n☫ Don't spam messages.\n☫ Don't add groups without asking owner.\n"
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright('Update ' + __filename))
  delete require.cache[file]
  require(file)
})

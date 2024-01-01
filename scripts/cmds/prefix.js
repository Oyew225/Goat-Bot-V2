const ownerName = "✨ | 𝗦𝘆𝗺𝗲𝗿 𝗦𝘁𝗲𝘃𝗲 𝗕𝗲𝗿𝗼𝗻𝗱𝗼 | ✨";

module.exports = {
 config: {
	 name: "prefix",
	 version: "1.0",
	 author: "Cliff",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "auto 🪐",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "prefix") {
 return message.reply({
 body: `


███╗░░░███╗░█████╗░██╗
████╗░████║██╔══██╗██║
██╔████╔██║███████║██║
██║╚██╔╝██║██╔══██║██║
██║░╚═╝░██║██║░░██║██║
╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝

━━━━━━━━━━━━━━━

Hello! It look's like you're not familiar with my prefix!, here's a guide, use this :➡

👑 SYSTEM PREFIX:➡【 $ 】
🐰 BOX CHAT PREFIX:➡ 【 $ 】

📌 𝗛𝗢𝗪 𝗧𝗢 𝗨𝗦𝗘
Ai ʜᴏᴡ ᴛᴏ ᴍᴀᴋᴇ ᴄᴀᴋᴇ
Ai ᴡʜᴀᴛ ᴜs ᴄᴀᴘɪᴛᴀʟ ᴏғ ғʀᴀɴᴄ

⚙ 𝗠𝗢𝗥𝗘 𝗢𝗣𝗧𝗜𝗢𝗡𝗦
➖ ✅ [ $quiz ] 
➖ 🏦 [$bank ]
➖ 📝 [ $bal ]
➖ 💬 [ $help ]

OWNER : ${ownerName}`,
 });
 }
 }
}
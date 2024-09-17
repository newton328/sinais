
const { Telegraf, Markup } = require('telegraf');

const api_key = '7483701142:AAEoqVhCRbYUvuwsQIj4iRT-wRlfIavuxmg'; // Insira sua API do bot aqui
const chat_id = '-1002345480985'; // Insira o ID do grupo aqui
const LINK_SITE = 'https://supragamez.shop';
const bot = new Telegraf(api_key);

async function startBot() {
    setInterval(async () => {
        const now = new Date();
        const tz = 'America/Sao_Paulo';
        const timeNow = new Date(now.toLocaleString('en-US', { timeZone: tz }));

        let h = timeNow.getHours();
        let m = timeNow.getMinutes();
        let s = timeNow.getSeconds();

        console.log(`${h}:${m}:${s}`);

        await bot.telegram.sendPhoto(
            chat_id,
            { source: 'tigrinho.jpg' }, // Insira o caminho da imagem aqui
            {
                caption: `
🎰 *Aproveite essa Oportunidade Incrível!* 🎰

📢 Cadastre-se no *Cassino SUPRA GAMEZ* agora e tenha acesso a várias promoções e bônus exclusivos! Não perca essa chance!

🌐 *Clique no botão abaixo para se cadastrar:*
                `,
                parse_mode: 'Markdown',
                ...Markup.inlineKeyboard([
                    Markup.button.url('🎲 Cadastre-se Aqui', LINK_SITE)
                ])
            }
        );
    }, 60000); // Enviar mensagem a cada 1 hora (3600000 milissegundos)
}

startBot();

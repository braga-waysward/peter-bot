const { PREFIX } = require(`${BASE_DIR}/config`);

module.exports = {
  name: "trava",
  description: "Envia uma mensagem gigante repetidamente",
  commands: ["trava"],
  usage: `${PREFIX}trava <quantidade>`,
  /**
   * @param {CommandHandleProps} props
   * @returns {Promise<void>}
   */
  handle: async ({ args, sendText, reply }) => {
    const quantidade = parseInt(args[0]);

    if (isNaN(quantidade) || quantidade <= 0 || quantidade > 20) {
      return reply("❌ Número inválido. Use entre 1 e 299 Exemplo: !tava 100
    }

    const msg = `
⛔ᴀʟʟ✨ᴮᴵᴳ✨ᴍᴀɴ⛔

*769⇭∅⇶∅↺↡∉∅⇭*

*MAT SABU ANTI APES 769*

*BIN TONJOL 769*

*BINTI MAT PELOR 769*

*BINTU MAT LANGKER 769*

*ALFATIHAH*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

*৪৪৪৪৪৪৪৪* *๘๘๘๘๘๘๘๘* *৪৪৪৪৪৪৪৪*

https://m.facebook.com/story.php?story_fbid=2141351006100506&id=100006768828408

*๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘*

*๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘*

*๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘*

*๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘*

*๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘*

*๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘*

*๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘*

*๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘*

*๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘*

*๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘*

*๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘*

*๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘* *๘๘๘๘๘๘๘๘* *๕๕๕๕๕๕๕๕* *๘๘๘๘๘๘๘๘*

881416 *๓๓รᏋ๓ค๔คห ฮเๆค.คฯเฤ 769ฬ๓๓*

881416 *๓๓รᏋ๓ค๔คห ฮเๆค.คฯเฤ 769ฬ๓๓*

881416 *๓๓รᏋ๓ค๔คห ฮเๆค.คฯเฤ 769ฬ๓๓*

881416 *๓๓รᏋ๓ค๔คห ฮเๆค.คฯเฤ 769ฬ๓๓*

881416 *๓๓รᏋ๓ค๔คห ฮเๆค.คฯเฤ 769ฬ๓๓*

881416 *๓๓รᏋ๓ค๔คห ฮเๆค.คฯเฤ 769ฬ๓๓*

881416 *๓๓รᏋ๓ค๔คห ฮเๆค.คฯเฤ 769ฬ๓๓*

881416 *๓๓รᏋ๓ค๔คห ฮเๆค.คฯเฤ 769ฬ๓๓*

881416 *๓๓รᏋ๓ค๔คห ฮเๆค.คฯเฤ 769ฬ๓๓*

881416 *๓๓รᏋ๓ค๔คห ฮเๆค.คฯเฤ 769ฬ๓๓*

881416 *๓๓รᏋ๓ค๔คห ฮเๆค.คฯเฤ 769ฬ๓๓*

881416 *๓๓รᏋ๓ค๔คห ฮเๆค.คฯเฤ 769ฬ๓๓*

881416 *๓๓รᏋ๓ค๔คห ฮเๆค.คฯเฤ 769ฬ๓๓*

881416 *๓๓รᏋ๓ค๔คห ฮเๆค.คฯเฤ 769ฬ๓๓*

881416 *๓๓รᏋ๓ค๔คห ฮเๆค.คฯเฤ 769ฬ๓๓*

881416 *๓๓รᏋ๓ค๔คห ฮเๆค.คฯเฤ 769ฬ๓๓*

881416 *๓๓รᏋ๓ค๔คห ฮเๆค.คฯเฤ 769ฬ๓๓*

881416 *๓๓รᏋ๓ค๔คห ฮเๆค.คฯเฤ 769ฬ๓๓*

881416 *๓๓รᏋ๓ค๔คห ฮเๆค.คฯเฤ 769ฬ๓๓*

881416 *๓๓รᏋ๓ค๔คห ฮเๆค.คฯเฤ 769ฬ๓๓*

881416 *๓๓รᏋ๓ค๔คห ฮเๆค.คฯเฤ 769ฬ๓๓*

881416 *๓๓รᏋ๓ค๔คห ฮเๆค.คฯเฤ 769ฬ๓๓*

881416 *๓๓รᏋ๓ค๔คห ฮเๆค.คฯเฤ 769ฬ๓๓*

881416 *๓๓รᏋ๓ค๔คห ฮเๆค.คฯเฤ 769ฬ๓๓*

881416 *๓๓รᏋ๓ค๔คห ฮเๆค.คฯเฤ 769ฬ๓๓*

881416 *๓๓รᏋ๓ค๔คห ฮเๆค.คฯเฤ 769ฬ๓๓*

881416 *๓๓รᏋ๓ค๔คห ฮเๆค.คฯเฤ 769ฬ๓๓*

881416 *๓๓รᏋ๓ค๔คห ฮเๆค.คฯเฤ 769ฬ๓๓*

881416 *๓๓รᏋ๓ค๔คห ฮเๆค.

    `; //
    for (let i = 0; i < quantidade; i++) {
      await sendText(msg);
    }
  },
};
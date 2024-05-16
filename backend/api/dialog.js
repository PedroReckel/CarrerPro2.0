/* API de interação com o ChatGPT (OpenAI) */
const OpenAI = require('openai');
const { OPENAI_API_KEY } = require('../.env');

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || OPENAI_API_KEY,
});

module.exports = app => {
    const { existsOrError } = app.api.validation;

    const send = async (req, res) => {
        const content = req.body.content;

        try {
            existsOrError(content, 'Mensagem não informada!');
        } catch (msg) {
            return res.status(400).send(msg);
        }

        try {
            const completion = await openai.chat.completions.create({
                messages: [{ role: "system", content: `${content}` }],
                model: "gpt-3.5-turbo",
              });

            const respAI = completion.choices[0];

            return res.status(200).send(respAI);
        } catch (error) {
            console.error(error);
            return res.status(500).send('Erro ao se comunicar com a API do OpenAI');
        }
    };

    return { send };
};

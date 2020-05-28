import Mail from '../lib/Mail';

export default {
  async store(req, res) {
    const { name, email, password } = req.body;
    const user = {
      name,
      email,
      password,

    };

    await Mail.sendMail({
      from: 'Queue Test <queue@teste.com>',
      to: `${name} <${email}>`,
      subject: 'Cadastro de usuarios',
      html: `olá, ${name}, bem vindo ao sistema de filas :D`,
    });
    return res.json(user);
  },
};

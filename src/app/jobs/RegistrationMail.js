import Mail from '../lib/Mail';

export default {
  key: 'RegistrationMail',
  async handle({ data }) {
    const { user: { name, email } } = data;

    await Mail.sendMail({
      from: 'Queue Test <queue@testef.com>',
      to: `${name} <${email}>`,
      subject: 'Cadastro de usuarios',
      html: `olá, ${name}, bem vindo ao sistema de filas :D`,
    });
  },
};

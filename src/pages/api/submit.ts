import { NextApiRequest, NextApiResponse } from 'next';

export default function submit(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  const { name, phone } = req.body;

  try {
    if (!name || !name.includes(' ')) {
      res.status(400).json({ error: `Nome incompleto!` });
    }
    if (!phone || phone.length !== 15) {
      res.status(400).json({ error: `Senha ou e-mail incorreta(o)!` });
    }
    res.status(200).json({ message: 'Solicitação realizada! Aguarde...' });
  } catch (error) {
    res.status(400).json({ error: `Informações inválidas! ${error}` });
  }
}

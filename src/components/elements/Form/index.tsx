import formatPhone from '@App/core/helpers/formatPhone';
import SubmitServices from '@App/services/SubmitServices';
import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import Button from '../Button';
import style from './style.module.scss';

export default function Form(): JSX.Element {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorPhone, setErrorPhone] = useState('');

  async function handleSubmit(event: FormEvent): Promise<void> {
    event.preventDefault();
    setErrorName('');
    setErrorPhone('');

    if (!name || !name.includes(' ')) {
      setErrorName('Nome não completo!');
      return;
    }
    if (!phone || phone.length !== 15) {
      setErrorPhone('Número não informado ou incompleto!');
      return;
    }

    try {
      await SubmitServices.sendInfo(name, phone);
      toast.dark('✅ Messagem enviada! Aguarde.');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setPhone('');
      setName('');
    }
  }

  function handleChangeName(ev: string): void {
    setName(ev);
  }

  function handleChangeNumber(ev: string): void {
    setPhone(formatPhone(ev));
  }

  return (
    <form
      method="post"
      onSubmit={handleSubmit}
      className={style.form__container}
    >
      <label htmlFor="name">
        Nome Completo
        <input
          type="text"
          placeholder="Ex: Rodrigo Victor"
          value={name}
          onChange={e => handleChangeName(e.target.value)}
        />
        <span>{errorName}</span>
      </label>

      <label htmlFor="name">
        Whatsapp
        <input
          type="text"
          maxLength={15}
          placeholder="(99) 99999-9999"
          value={phone}
          onChange={e => handleChangeNumber(e.target.value)}
        />
        <span>{errorPhone}</span>
      </label>

      <Button
        disabled={!name || !phone}
        title="Peça uma reunião"
        color="var(--terciary)"
        type="submit"
      />
    </form>
  );
}

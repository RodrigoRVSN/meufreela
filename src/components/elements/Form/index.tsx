import formatPhone from '@App/core/helpers/formatPhone';
import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import Button from '../Button';
import style from './style.module.scss';

export default function Form(): JSX.Element {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorPhone, setErrorPhone] = useState('');

  function handleSubmit(event: FormEvent): void {
    event.preventDefault();
    setErrorName('');
    setErrorPhone('');
    if (!name) {
      setErrorName('Nome não completo!');
    }
    if (!phone || phone.length !== 15) {
      setErrorPhone('Número não informado ou incompleto!');
    }

    if (name && phone && phone.length === 15) {
      setPhone('');
      setName('');
      toast.success('Solicitação realizada! Aguarde...');
    }
  }

  function handleChangeName(ev: string): void {
    setName(ev);
  }

  function handleChangeNumber(ev: string): void {
    setPhone(formatPhone(ev));
  }

  return (
    <form onSubmit={handleSubmit} className={style.form__container}>
      <div>
        <label htmlFor="name">
          Nome Completo
          <input
            type="text"
            placeholder="Ex: Rodrigo Victor"
            value={name}
            onChange={e => handleChangeName(e.target.value)}
          />
        </label>
        <span>{errorName}</span>
      </div>

      <div>
        <label htmlFor="name">
          Whatsapp
          <input
            type="text"
            maxLength={15}
            placeholder="(99) 99999-9999"
            value={phone}
            onChange={e => handleChangeNumber(e.target.value)}
          />
        </label>
        <span>{errorPhone}</span>
      </div>

      <Button
        disabled={!name || !phone}
        title="Peça uma reunião"
        color="var(--terciary)"
        type="submit"
      />
    </form>
  );
}

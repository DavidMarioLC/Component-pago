import Cleave from 'cleave.js/react';
import React, { FormEvent, ReactElement, useState } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import {
  FaCcAmex,
  FaCcDinersClub,
  FaCcDiscover,
  FaCcJcb,
  FaCcMastercard,
  FaCcVisa,
} from 'react-icons/fa';
import Logo from '../images/Logo.png';
import styles from './styles.module.css';

type CreditCard = {
  name: string;
  direction: string;
  date: string;
  cvv: string;
  creditCard: string;
};

const Card = ({ successPay }: { successPay: () => void }) => {
  const [dataCreditCard, SetDataCreditCard] = useState<CreditCard>({
    name: '',
    direction: '',
    date: '',
    cvv: '',
    creditCard: '',
  });

  const [typeCreditCard, setTypeCreditCard] = useState<{ type: string }>({
    type: '',
  });

  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<Boolean>(false);

  const handlerChangeInput = (event: FormEvent<HTMLInputElement>) => {
    SetDataCreditCard({
      ...dataCreditCard,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onCreditCardTypeChanged = (type: string) => {
    setTypeCreditCard({
      ...typeCreditCard,
      type: type,
    });
  };

  const handlerSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(!loading);

    setTimeout(() => {
      if (!isValidInfo()) {
        setLoading(false);
        setError(true);
        return;
      } else {
        resetForm();
        setLoading(false);
        setError(false);
        successPay();
      }
    }, 3000);
  };

  const resetForm = () => {
    SetDataCreditCard({
      name: '',
      direction: '',
      date: '',
      cvv: '',
      creditCard: '',
    });
  };

  const isValidInfo = () => {
    if (
      name.trim() === '' ||
      direction.trim() === '' ||
      direction.trim() === '' ||
      date.trim() === '' ||
      cvv.trim() === '' ||
      creditCard.trim() === ''
    ) {
      return false;
    }

    return true;
  };

  const getIconByTypeCreditCard = (type: string): ReactElement => {
    //using a dictionary of icons
    type Toptions = {
      [visa: string]: ReactElement;
    };

    let options: Toptions = {
      visa: <FaCcVisa className={styles.iconCreditCard} />,
      amex: <FaCcAmex className={styles.iconCreditCard} />,
      diners: <FaCcDinersClub className={styles.iconCreditCard} />,
      mastercard: <FaCcMastercard className={styles.iconCreditCard} />,
      jcb: <FaCcJcb className={styles.iconCreditCard} />,
      discover: <FaCcDiscover className={styles.iconCreditCard} />,
    };

    return options[type];
  };

  const { name, creditCard, date, cvv, direction } = dataCreditCard;

  return (
    <form onSubmit={handlerSubmit} className={styles.card}>
      <div className={styles.cardHeader}>
        <img className={styles.logo} src={Logo} alt='logo' />
        <h1>Información de pago</h1>
      </div>
      <div className={styles.cardName}>
        <label htmlFor='name'>Nombre completo</label>
        <input
          value={name}
          placeholder='Maximiliano Gascon'
          autoComplete='cc-name'
          id='name'
          type='text'
          name='name'
          onChange={handlerChangeInput}
        />
      </div>
      <div className={styles.cardCreditCard}>
        <label htmlFor='creditCard'>Número de Tarjeta de Crédito</label>
        <Cleave
          value={creditCard}
          id='creditCard'
          placeholder='1234 12341 234123'
          name='creditCard'
          onChange={handlerChangeInput}
          options={{
            creditCard: true,
            onCreditCardTypeChanged,
          }}
        />
        {getIconByTypeCreditCard(typeCreditCard.type)}
      </div>
      <div className={styles.cardGroup}>
        <div className={styles.cardDate}>
          <label htmlFor='cardDate'>Fecha vencimiento</label>
          <Cleave
            value={date}
            id='cardDate'
            autoComplete='cc-date'
            name='date'
            placeholder='MM/YY'
            onChange={handlerChangeInput}
            options={{ date: true, datePattern: ['m', 'y'] }}
          />
        </div>
        <div className={styles.cardCVV}>
          <label htmlFor='cardCVV'>CVV</label>
          <Cleave
            id='cardCVV'
            placeholder='CVV'
            name='cvv'
            value={cvv}
            onChange={handlerChangeInput}
            options={{ blocks: [3], numericOnly: true }}
          />
          <AiOutlineInfoCircle className={styles.infoTooltip} />
        </div>
      </div>
      <div className={styles.cardDirection}>
        <label htmlFor='cardDirection'>Dirección</label>
        <input
          value={direction}
          placeholder='Maple St, New York Mills, NY 13417'
          id='cardDirection'
          type='text'
          name='direction'
          onChange={handlerChangeInput}
        />
      </div>

      {error ? (
        <div className={styles.error}>Por favor completar todo los campos.</div>
      ) : null}

      <div className={styles.cardButton}>
        {loading ? (
          <button className={styles.buttonProcess} disabled>
            <span>Procesando...</span>
          </button>
        ) : (
          <button className={styles.buttonPrimary}>Confirmar pago</button>
        )}

        <span className={styles.disclaimer}>
          Verificas que esta información es correcta
        </span>
      </div>
    </form>
  );
};

export default Card;

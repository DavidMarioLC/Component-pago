import { FcApproval } from 'react-icons/fc';
import styles from './styles.module.css';

type Props = {
  backPage: () => void;
};

const SuccessPayment = ({ backPage }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.successContent}>
        <FcApproval className={styles.iconSuccess} />
        <h1 className={styles.titleSuccessPayment}>
          Pago realizado exitosamente.
        </h1>
        <button
          className={styles.buttonSuccessPayment}
          onClick={() => backPage()}
        >
          Regresar
        </button>
      </div>
    </div>
  );
};

export default SuccessPayment;

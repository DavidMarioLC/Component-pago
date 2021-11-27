import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import SuccessPayment from './components/SuccessPayment';
function App() {
  const [success, setSuccess] = useState<Boolean>(false);

  const backPage = () => {
    setSuccess(false);
  };

  const successPay = () => {
    setSuccess(true);
  };
  return (
    <div className='app'>
      {success ? (
        <SuccessPayment backPage={backPage} />
      ) : (
        <Card successPay={successPay} />
      )}
    </div>
  );
}

export default App;

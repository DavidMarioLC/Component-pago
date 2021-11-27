import { render, screen } from '@testing-library/react';
import App from '../App';
import Card from '../components/Card';
import SuccessPayment from '../components/SuccessPayment';

describe('App pago', () => {
  test('Should render my App', () => {
    render(<App />);
  });

  test('SuccessPayment is disabled', () => {
    render(<SuccessPayment backPage={() => {}} />);
    const successPage = screen.queryByText('Pago realizado exitosamente.');
    expect(successPage).toBeInTheDocument();
  });

  test('Card is renderer', () => {
    render(<Card successPay={() => {}} />);
    const card = screen.queryByText('Información de pago');
    expect(card).toBeInTheDocument();
  });
});

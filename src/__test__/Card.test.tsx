import { render, screen } from '@testing-library/react';
import Card from '../components/Card';

describe('Testing component Card', () => {
  beforeEach(() => {
    render(<Card successPay={() => {}} />);
  });

  test('Render card and its elements', () => {
    //header-card
    const logo = screen.queryByAltText('logo');
    expect(logo).toBeInTheDocument();

    const title = screen.getByText('Información de pago');
    expect(title).toBeInTheDocument();

    //user-card
    const labelUser = screen.getByText('Nombre completo');
    expect(labelUser).toBeInTheDocument();
    const inputUser = screen.getByPlaceholderText('Maximiliano Gascon');
    expect(inputUser).toBeInTheDocument();

    //credit-card
    const labelCreditCard = screen.getByText('Número de Tarjeta de Crédito');
    expect(labelCreditCard).toBeInTheDocument();
    const inputCreditCard = screen.getByPlaceholderText('1234 12341 234123');
    expect(inputCreditCard).toBeInTheDocument();

    //date-card
    const labelDate = screen.getByText('Fecha vencimiento');
    expect(labelDate).toBeInTheDocument();
    const inputDate = screen.getByPlaceholderText('MM/YY');
    expect(inputDate).toBeInTheDocument();

    //cvv-card
    const labelCVV = screen.getByText('CVV');
    expect(labelCVV).toBeInTheDocument();
    const inputCVV = screen.getByPlaceholderText('CVV');
    expect(inputCVV).toBeInTheDocument();

    //direction-card
    const labelDirection = screen.getByText('Dirección');
    expect(labelDirection).toBeInTheDocument();
    const inputDirection = screen.getByPlaceholderText(
      'Maple St, New York Mills, NY 13417'
    );
    expect(inputDirection).toBeInTheDocument();

    //button-card
    const button = screen.getByText('Confirmar pago');
    expect(button).toBeInTheDocument();

    //disclaimer-card
    const disclaimer = screen.getByText(
      'Verificas que esta información es correcta'
    );
    expect(disclaimer).toBeInTheDocument();
  });

  test('button process is disabled', () => {
    const buttonProcess = screen.queryByText('Procesando...');
    expect(buttonProcess).toBeNull();
  });
});

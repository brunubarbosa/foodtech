import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import Checkout from './';
import {checkoutSteps} from '../../constants/checkoutSteps'

import '@testing-library/jest-dom/extend-expect'

test('Make sure form does not go forward without be filled', async () => {
  render(<Checkout />)
  const firstStep = checkoutSteps[0]
  await waitFor(() => screen.getByText('Massas'))
  checkoutSteps.map(async (stepname) => await waitFor(() => screen.getByText(stepname)));
  const nextButton = screen.getByText('Próximo');
  fireEvent.click(nextButton);
  expect(screen.getByText(firstStep)).toBeInTheDocument();
})
test('Make sure back button is disabled', async () => {
  render(<Checkout />)
  const backButton = screen.getByText('Anterior').closest('button');
  expect(backButton).toBeInTheDocument();
  expect(backButton).toBeDisabled();
})

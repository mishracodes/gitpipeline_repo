// src/Calculator.test.js
import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Calculator from './component/Calculator'; // adjust if filename is different
import '@testing-library/jest-dom';

test('adds two numbers correctly', () => {
  const { getByText, getByTestId } = render(<Calculator />);
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(getByTestId('display')).toHaveTextContent('5');
});

test('subtracts two numbers correctly', () => {
  const { getByText, getByTestId  } = render(<Calculator />);
  fireEvent.click(getByText('7'));
  fireEvent.click(getByText('-'));
  fireEvent.click(getByText('4'));
  fireEvent.click(getByText('='));
  expect(getByTestId('display')).toHaveTextContent('3');
});

test('multiplies two numbers correctly', () => {
  const { getByText, getByTestId  } = render(<Calculator />);
  fireEvent.click(getByText('6'));
  fireEvent.click(getByText('*')); // or '*' depending on button label
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(getByTestId('display')).toHaveTextContent('18');
});

test('divides two numbers correctly', () => {
  const { getByText, getByTestId  } = render(<Calculator />);
  fireEvent.click(getByText('8'));
  fireEvent.click(getByText('/')); // or '/' depending on your calculator UI
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));
  expect(getByTestId('display')).toHaveTextContent('4');
});

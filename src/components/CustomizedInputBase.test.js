import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import CustomizedInputBase from './CustomizedInputBase';

test('renders CustomizedInputBase and calls onFetch on button click', () => {
  const onFetch = jest.fn();
  const { getByRole } = render(<CustomizedInputBase onFetch={onFetch} />);

  // Check if the component is correctly rendered
  const inputNode = getByRole('textbox');
  expect(inputNode).toBeInTheDocument();

  // Simulate user inputting a DOI
  fireEvent.change(inputNode, { target: { value: '10.1038/nature12373' } });
  expect(inputNode.value).toBe('10.1038/nature12373');

  // Simulate user clicking the button
  const buttonNode = getByRole('button');
  fireEvent.click(buttonNode);

  // Check if onFetch was called
  expect(onFetch).toHaveBeenCalledTimes(1);
  expect(onFetch).toHaveBeenCalledWith('10.1038/nature12373');
});

/** * @jest-environment jsdom */
import React from 'react'
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, screen } from '@testing-library/react'
import Header from '../../../components/commons/Header';
import { StoreContextProvider } from '../../../store';

afterEach(cleanup)

const defaultProps = {
    title: "test_title"
}

describe('Header.js', () => {
  it('it renders the title', () => {
    render(<StoreContextProvider><Header {...defaultProps} /></StoreContextProvider>)
    expect(screen.getByTestId('title')).toHaveTextContent(defaultProps.title);
  })

  it('it doesnt render the plus sign when addPage is alse', () => {
    render(<StoreContextProvider><Header title="hello world" addPage={true} /></StoreContextProvider>)
    expect(screen.getByTestId('plus')).toHaveTextContent("+");
  })
  
  it('it doesnt render the plus sign when addPage is false', () => {
    render(<StoreContextProvider><Header title="hello world" addPage={false} /></StoreContextProvider>)
    expect(screen.queryByText('+')).toBeNull()
  })

});


/** * @jest-environment jsdom */
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import App from '../pages/App'

afterEach(cleanup)

describe('Entry File: App.js', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(<App />)
  
    expect(asFragment(<App />)).toMatchSnapshot()
  })
});


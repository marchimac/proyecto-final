import { render, screen } from '@testing-library/react'
import NavbarComp from "../../components/NavbarComp";

test('Localiza una clase', () => {
    render(<NavbarComp />)
    const tested = screen.getByTestId('tested')
    expect(tested).toHaveClass('me-auto')
})
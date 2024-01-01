import { render, screen } from '@testing-library/react'
import Attendance from '../components/Attendance';

test("Test 1", () => {
    render(<Attendance/>);

    const element = screen.getByText(/Professor Dumbledore/i);

    expect(element).toBeInTheDocument();
})
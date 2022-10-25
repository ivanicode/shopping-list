import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('<App />', () => {
  it('should display proper data', async () => {
    render(<App />);

    const input = await screen.findByRole("textbox", {name: "enter shop list item"})
    const button = screen.getByRole("button", {name: /save/i})
  
    expect(input).toBeInTheDocument()
    expect(button).toBeDisabled()
    expect(screen.queryByRole("listitem")).not.toBeInTheDocument()

    await userEvent.type(input, "tomato")

    expect(input).toHaveValue("tomato")
    expect(button).toBeEnabled()

    await userEvent.click(button);

    expect(screen.getByRole("listitem")).toHaveTextContent("tomato")
    expect(input).toHaveValue("")
    expect(button).toBeDisabled()
    expect(await screen.findByRole("checkbox")).toBeInTheDocument()

    await userEvent.click(screen.getByRole("checkbox"));

    waitFor(() => expect(screen.queryByRole("listitem")).not.toBeInTheDocument())
  })
})
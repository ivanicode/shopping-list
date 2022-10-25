import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import TextInput from './TextInput'

describe('<TextInput />', () => {
    it('should render component', async () => {
        render(<TextInput addItem={jest.fn()} />)

        expect(await screen.findByRole("textbox", {name: "enter shop list item"})).toBeInTheDocument()
        expect(screen.getByRole("button", {name: /save/i})).toBeDisabled()
    })
    it('should allow to type text in the text field', async () => {
        render(<TextInput addItem={jest.fn()} />)

        const input = await screen.findByRole("textbox", {name: "enter shop list item"})

        expect(input).toHaveValue("")
        expect(screen.getByRole("button", {name: /save/i})).toBeDisabled()

        await userEvent.type(input, "tomato")

        expect(input).toHaveValue("tomato")
        expect(screen.getByRole("button", {name: /save/i})).toBeEnabled()

        await userEvent.clear(input)

        expect(input).toHaveValue("")
        expect(screen.getByRole("button", {name: /save/i})).toBeDisabled()
    })
    it('should allow to save data', async () => {
        const addItem = jest.fn()

        render(<TextInput addItem={addItem} />)

        const input = await screen.findByRole("textbox", {name: "enter shop list item"})

        await userEvent.type(input, "tomato")

        expect(input).toHaveValue("tomato")
        expect(addItem).toHaveBeenCalledTimes(0)

        await userEvent.click(screen.getByRole("button", {name: /save/i}))
        
        expect(addItem).toHaveBeenCalledTimes(1)
        expect(addItem).toHaveBeenCalledWith("tomato")
    })
})
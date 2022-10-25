import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event';

import Items from './Items';

describe('<Items />', () => {
    it('should display list after receiving it from list prop and should call deleteItem function after click on checkbox', async () => {
        
        const deleteItem = jest.fn()
        const {rerender} = render(<Items list={[]} deleteItem={deleteItem} />);

        expect(await screen.findByRole("list")).toBeInTheDocument()
        expect(screen.queryByRole("listitem")).not.toBeInTheDocument()
        expect(screen.queryByRole("checkbox")).not.toBeInTheDocument()

        rerender(<Items list={[{textValue: "tomato"}]} deleteItem={deleteItem} />)
       
        expect(screen.getByRole("listitem")).toHaveTextContent("tomato")
        expect(screen.getByRole("checkbox")).toBeInTheDocument()
        expect(deleteItem).toHaveBeenCalledTimes(0)
      
        await userEvent.click(screen.getByRole("checkbox"));
       
        expect(deleteItem).toHaveBeenCalledTimes(1)
        expect(deleteItem).toHaveBeenCalledWith(true, 0)

        waitFor(() => expect(screen.queryByRole("listitem")).not.toBeInTheDocument())
    })
})
 import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import Items from './Items';

describe('<Items />', () => {
    it('', async () => {
        render(<Items list={[{textValue: "tomato"}]} modifyItem={jest.fn()} />);
        expect(await screen.findByRole("listitem")).toBeInTheDocument()
        
        expect(await screen.findByRole("listitem")).toHaveTextContent("tomato")
    })
})
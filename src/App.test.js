import React from 'react'
import {render, screen} from '@testing-library/react';
import {fireEvent} from "@testing-library/dom";
import App from "./App";

test('autocomplete should return "1"', () => {
    render(<App/>, {})
    const AutoCompleteSearch = screen.getByPlaceholderText('Enter...');
    const WindowOfResponse = screen.getByTestId('content')

    AutoCompleteSearch.focus()
    fireEvent.change(AutoCompleteSearch, {target: {value: '1'}})
    fireEvent.keyDown(AutoCompleteSearch, {keyCode: '13'})
    expect(WindowOfResponse).toHaveTextContent('1')
});
test('autocomplete should return "52"', () => {
    render(<App/>, {})
    const AutoCompleteSearch = screen.getByPlaceholderText('Enter...');
    const WindowOfResponse = screen.getByTestId('content')

    AutoCompleteSearch.focus()
    fireEvent.change(AutoCompleteSearch, {target: {value: '52'}})
    fireEvent.keyDown(AutoCompleteSearch, {keyCode: '13'})
    expect(WindowOfResponse).toHaveTextContent('52')
});
test('autocomplete should return "52" after press KeyUp if there are no options above', () => {
    render(<App/>, {})
    const AutoCompleteSearch = screen.getByPlaceholderText('Enter...');
    const WindowOfResponse = screen.getByTestId('content')

    AutoCompleteSearch.focus()
    fireEvent.change(AutoCompleteSearch, {target: {value: '52'}})
    fireEvent.keyDown(AutoCompleteSearch, {keyCode: '38'})
    fireEvent.keyDown(AutoCompleteSearch, {keyCode: '13'})
    expect(WindowOfResponse).toHaveTextContent('52')
});

test('autocomplete should return "152" after press KeyDown', () => {
    render(<App/>, {})
    const AutoCompleteSearch = screen.getByPlaceholderText('Enter...');
    const WindowOfResponse = screen.getByTestId('content')

    AutoCompleteSearch.focus()
    fireEvent.change(AutoCompleteSearch, {target: {value: "52"}})
    fireEvent.keyDown(AutoCompleteSearch, {keyCode: '40'})
    fireEvent.keyDown(AutoCompleteSearch, {keyCode: '13'})
    expect(WindowOfResponse).toHaveTextContent('152')
});
test('autocomplete should return 152', () => {
    render(<App/>, {})
    const AutoCompleteSearch = screen.getByPlaceholderText('Enter...');
    const WindowOfResponse = screen.getByTestId('content')

    AutoCompleteSearch.focus()
    fireEvent.change(AutoCompleteSearch, {target: {value: "52"}})
    fireEvent.keyDown(AutoCompleteSearch, {keyCode: '40'})
    fireEvent.keyDown(AutoCompleteSearch, {keyCode: '13'})
    expect(WindowOfResponse).toHaveTextContent('152')
});

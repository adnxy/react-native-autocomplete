import React from 'react';
import '@testing-library/jest-native/extend-expect';
import {render, fireEvent} from '@testing-library/react-native';
import Autocomplete from '../components/Autocomplete';

const mockData = [
  {id: 1, value: 'Apple'},
  {id: 2, value: 'Banana'},
  {id: 3, value: 'Cherry'},
];

describe('Autocomplete Component', () => {
  it('renders correctly', () => {
    const screen = render(
      <Autocomplete data={mockData} placeholder="Search for a fruit..." />,
    );
    expect(
      screen.getByPlaceholderText('Search for a fruit...'),
    ).toBeOnTheScreen();
  });

  it('filters the list based on input', () => {
    const screen = render(
      <Autocomplete data={mockData} placeholder="Search for a fruit..." />,
    );

    const input = screen.getByPlaceholderText('Search for a fruit...');
    fireEvent.changeText(input, 'Ap');

    expect(screen.getByText('Apple')).toBeOnTheScreen();
    expect(screen.queryByText('Banana')).not.toBeOnTheScreen();
    expect(screen.queryByText('Cherry')).not.toBeOnTheScreen();
  });

  it('calls onSelectItem when an item is selected', () => {
    const onSelectItemMock = jest.fn();
    const screen = render(
      <Autocomplete
        data={mockData}
        onSelectItem={onSelectItemMock}
        placeholder="Search for a fruit..."
      />,
    );

    const input = screen.getByPlaceholderText('Search for a fruit...');
    fireEvent.changeText(input, 'Ap');

    const item = screen.getByText('Apple');
    fireEvent.press(item);

    expect(onSelectItemMock).toHaveBeenCalledWith({id: 1, value: 'Apple'});
  });

  it('calls onChangeText when input changes', () => {
    const onChangeTextMock = jest.fn();
    const screen = render(
      <Autocomplete
        data={mockData}
        onChangeText={onChangeTextMock}
        placeholder="Search for a fruit..."
      />,
    );

    const input = screen.getByPlaceholderText('Search for a fruit...');
    fireEvent.changeText(input, 'Ban');

    expect(onChangeTextMock).toHaveBeenCalledWith('Ban');
  });

  it('displays no items when input does not match any data', () => {
    const screen = render(
      <Autocomplete data={mockData} placeholder="Search for a fruit..." />,
    );

    const input = screen.getByPlaceholderText('Search for a fruit...');
    fireEvent.changeText(input, 'Grapes');

    expect(screen.queryByText('Apple')).not.toBeOnTheScreen();
    expect(screen.queryByText('Banana')).not.toBeOnTheScreen();
    expect(screen.queryByText('Cherry')).not.toBeOnTheScreen();
  });

});

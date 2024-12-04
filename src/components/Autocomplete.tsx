import React, { useState, useCallback } from 'react';
import { View, TextInput, FlatList, StyleSheet } from 'react-native';

import SuggestionItem from './SuggestionItem';
import styles from '../styles/styles';

interface AutocompleteProps {
  data: {id: number; value: string}[];
  onSelectItem?: (item: {id: number; value: string}) => void;
  onChangeText?: (text: string) => void;
  initialValue?: string;
  placeholder?: string;
  showHighlightText?: boolean;
  inputContainerStyle?: StyleSheet.NamedStyles<object>;
  inputStyle?: StyleSheet.NamedStyles<object>;
  listStyle?: StyleSheet.NamedStyles<object>;
  listItemStyle?: StyleSheet.NamedStyles<object>;
}

const Autocomplete = React.memo(
  ({
    data,
    onSelectItem,
    onChangeText,
    initialValue = '',
    showHighlightText,
    inputContainerStyle,
    inputStyle,
    listStyle,
    listItemStyle,
    placeholder,
  }: AutocompleteProps) => {
    const [query, setQuery] = useState(initialValue);
    const [filteredData, setFilteredData] = useState<
      {id: number; value: string}[]
    >([]);

    const handleInputChange = useCallback(
      (text: string) => {
        setQuery(text);
        onChangeText?.(text);
        if (text) {
          const filtered = data.filter(item =>
            item.value.toLowerCase().includes(text.toLowerCase()),
          );
          setFilteredData(filtered);
        } else {
          setFilteredData([]);
        }
      },
      [data, onChangeText],
    );

    const handleItemSelect = useCallback(
      (item: {id: number; value: string}) => {
        setQuery(item.value);
        setFilteredData([]);
        onSelectItem?.(item);
      },
      [onSelectItem],
    );

    const renderItem = useCallback(
      ({item}: {item: {id: number; value: string}}) => {
        return (
          <SuggestionItem
            item={item}
            handleItemSelect={handleItemSelect}
            listItemStyle={listItemStyle}
            query={query}
            showHighlightText={showHighlightText}
          />
        );
      },
      [handleItemSelect, query, showHighlightText],
    );

    return (
      <View style={[styles.container, inputContainerStyle]}>
        <TextInput
          style={[styles.input, inputStyle]}
          value={query}
          onChangeText={handleInputChange}
          placeholder={placeholder ?? 'Type to search...'}
        />
        {filteredData.length > 0 && (
          <FlatList
            data={filteredData}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            style={[styles.list, listStyle]}
            keyboardShouldPersistTaps="handled"
          />
        )}
      </View>
    );
  },
);

export default Autocomplete;

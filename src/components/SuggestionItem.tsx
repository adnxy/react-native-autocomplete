import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

import { SuggestionItemProps } from '../types/AutocompleteTypes';
import styles from '../styles/styles';

const SuggestionItem = ({
  item,
  handleItemSelect,
  listItemStyle,
  query,
  showHighlightText,
}: SuggestionItemProps) => {
  const highlightText = (text: string, query: string) => {
    if (!query || !showHighlightText) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <Text key={index} style={styles.highlight}>
          {part}
        </Text>
      ) : (
        part
      ),
    );
  };

  return (
    <TouchableOpacity
      onPress={() => handleItemSelect(item)}
      style={[styles.item, listItemStyle]}
      accessibilityLabel={`Select ${item.value}`}
      accessibilityRole="button">
      <Text>{highlightText(item.value, query)}</Text>
    </TouchableOpacity>
  );
};

export default SuggestionItem;

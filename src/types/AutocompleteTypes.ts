import { StyleSheet } from 'react-native';

export interface AutocompleteProps {
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

export interface SuggestionItemProps {
  item: {id: number; value: string};
  handleItemSelect: (item: {id: number; value: string}) => void;
  listItemStyle?: StyleSheet.NamedStyles<object> | undefined;
  query: string;
  children?: React.ReactNode;
  showHighlightText?: boolean;
}

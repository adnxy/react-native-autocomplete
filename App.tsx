import React from 'react';
import Autocomplete from './src/components/Autocomplete'; 
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const App = () => {
  const data = [
    {id: 1, value: 'apple'},
    {id: 2, value: 'banana'},
    {id: 3, value: 'cherry'},
    {id: 4, value: 'date'},
    {id: 5, value: 'elderberry'},
    {id: 6, value: 'blueberry'},
    {id: 7, value: 'blackberry'},
    {id: 8, value: 'strawberry'},
    {id: 9, value: 'raspberry'},
    {id: 10, value: 'grape'},
  ];
  return (
    <SafeAreaView style={styles.container}>
      <Autocomplete
        listItemStyle={styles.suggestionItem}
        inputStyle={styles.input}
        placeholder="Search for a fruit"
        data={data}
        showHighlightText={true}
        onChangeText={text => console.log('text updated', text)}
        onSelectItem={item => console.log('item selected', item)}
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
  },
  text: {
    color: 'red',
    paddingTop: 100,
  },
  suggestionItem: {
    fontSize: 16
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    fontSize: 16
  },
});

export default App;

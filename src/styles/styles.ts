import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    minHeight: 200,
    zIndex: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  list: {
    marginTop: 5,
    minHeight: 250,
  },
  item: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  highlight: {
    backgroundColor: 'yellow',
    fontWeight: 'bold',
  },
});

export default styles;

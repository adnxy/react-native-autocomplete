# Lightweight Autocomplete Component for React Native

Lightweight autocomplete component for React Native built with TypeScript.

## Props

| Props                  | Type     | Description                                                  |
|------------------------|----------|--------------------------------------------------------------|
| data                   | array    | Data to be displayed in the autocomplete list.              |
| onSelectItem           | function | Function to be called when an item is selected.             |
| onChangeText           | function | Function to be called when the text changes.                |
| initialValue           | string   | Initial value of the autocomplete input.                    |
| placeholder            | string   | Placeholder text for the autocomplete input.                |
| showHighlightText      | boolean  | Whether to show highlighted text in the autocomplete list.   |
| inputContainerStyle    | object   | Style for the input container.                               |
| inputStyle             | object   | Style for the input.                                        |
| listStyle              | object   | Style for the list.                                         |
| listItemStyle          | object   | Style for the list items.        

## Demo Video

You can watch a demo of the component in action below:

![Demo Video](demo.mp4)
                           |

## Install Dependencies

```bash
npm install
```

```bash
yarn install
```

## Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Start Application

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

## Run Tests

```bash
npm test
```

```bash
yarn test
```

## Usage

```javascript
import Autocomplete from 'path/to/Autocomplete';

const App = () => {
    const data = ['Item 1', 'Item 2', 'Item 3'];

    const handleSelectItem = (item) => {
        console.log('Selected item:', item);
    };

    return (
        <Autocomplete
            data={data}
            onSelectItem={handleSelectItem}
            placeholder="Type to search..."
        />
    );
};
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## FAQ

**Q: How do I customize the styles?**  
A: You can pass custom styles through the `inputContainerStyle`, `inputStyle`, `listStyle`, and `listItemStyle` props.

**Q: Can I use this component with TypeScript?**  
A: Yes, this component is built with TypeScript and provides type definitions.





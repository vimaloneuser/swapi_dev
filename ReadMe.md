# How to installation
```js live=true
$ npm i swapi.dev
```

# Usage
```js live=true
import swapi from 'swapi.dev';
```
# Live code example 

```js live=true
import swapi from 'swapi.dev';

const App = () => {

  useEffect(() => {
    // root
    swapi.root().then(res => {
      console.log(res, "topic title list")
    })

    // dynamic topic listing
    swapi.topicListing({ topic: "people", page: 1 }).then(res => {
      console.log(res, "topic list")
    })
    // dynamic topic listing
    swapi.topicDeatail({ topic: "planets", id: 1 }).then(res => {
      console.log(res, "topic sub list")
    })

  }, [])

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <Text>Hello world...</Text>
    </SafeAreaView>
  );
};

export default App;
```
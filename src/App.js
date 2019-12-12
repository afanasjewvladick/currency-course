import React from 'react'
import { StyleSheet, View, Text, Button, Alert } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

// import router from './router/index.js'

const App = (AppNavigator) => (
  <View style={styles.container}>
    <View style={
      {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'powderblue',
      }
    }>
      <Text> Hello world!</Text>
    </View>
    <View style={{ flex: 2, backgroundColor: 'skyblue' }}/>
    <View style={{ flex: 3, backgroundColor: 'steelblue' }}>
      <Button
        title="Press me"
        onPress={() => AppNavigator.navigation.navigate('TwoHome')}
      ></Button>

    </View>
  </View>
)

const TwoScreen = () => (
  <View style={styles.container}>
    <Text>Two Screen</Text>
  </View>
)

const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
  },
  TwoHome: {
    screen: TwoScreen,
  },
})

// Создание стилей.
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default createAppContainer(AppNavigator)

// export default App

// import React from 'react';
// import { StyleSheet, View, Text, Button, Alert } from 'react-native'
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
//
// class HomeScreen extends React.Component {
//   render() {
//     const {navigate} = this.props.navigation;
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//           title="Press me"
//           onPress={() => navigate('TwoHome')}
//         ></Button>
//       </View>
//     );
//   }
// }
//
// class TwoScreen extends React.Component {
//   render() {
//     const {navigate} = this.props.navigation;
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Two Screen</Text>
//         <Button
//           title="Press me"
//           onPress={() => navigate('Home')}
//         ></Button>
//       </View>
//     );
//   }
// }
//
// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScreen,
//   },
//   TwoHome: {
//     screen: TwoScreen,
//   },
// });
//
// export default createAppContainer(AppNavigator);

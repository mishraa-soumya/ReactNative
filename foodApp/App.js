import { addNavigationHelpers , StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';
import MainScreen from './app/containers/MainContainer'
import ListScreen from './app/containers/ListContainer'
import ProfileScreen from './app/containers/ProfileContainer'
import { combineReducers } from 'redux';
import React , { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native'
import ChaiScreen from './app/containers/ChaiContainer'
import SnackScreen from './app/containers/SnackContainer'

export const DrawerScreenNavigator =  DrawerNavigator(
  {
    Main: {
      screen: MainScreen,
    },
    Beverages: {
      screen: ChaiScreen,
      navigationOptions: {
        drawerLabel: 'Tea-Time',
        drawerIcon: () => <Icon name="home" size={24} />
      },
    },
    Snacks: {
      screen: SnackScreen,
      navigationOptions: {
        drawerLabel: 'Snack Party',
        drawerIcon: () => <Icon name="list" size={24} />
      }
    }
  }
);

export const MainScreenNavigator = TabNavigator (
  {
      Home: {
        screen: DrawerScreenNavigator, // NavigatorWrappingScreen
        navigationOptions: {
          tabBarLabel: 'Home',
          tabBarIcon: ({tintColor}) => <Icon name="home" size={35} color={tintColor}/>
        }
      },
      List: { 
          screen: ListScreen,
          navigationOptions: {
              tabBarLabel: 'List',
              tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
          }, 
      },
      Profile: { 
          screen: ProfileScreen,
          navigationOptions: {
              tabBarLabel: 'Profile',
              tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
          }, 
      } 
  }, 
  TabNavigatorConfig
)

const TabNavigatorConfig = {
  'tabBarPosition': 'top',
  'animationEnabled': true,
  'tabBarOptions': {
  'activeTintColor': '#e91e63',
  },
  'initialRouteName': 'Profile',
}

export const AppNavigator = StackNavigator (
  {
    Home : {
      screen : MainScreenNavigator,
      navigationOptions: {
        title: 'CHAI KI CHUSKI',
      },
    },
  }
)


// const drawernav = DrawerNavigator({
//   DrawerItem1: {
//       screen: MainScreenNavigator,
//       navigationOptions: {
//           drawerLabel: "Drawer Item 1",
//           drawerIcon: ({ tintColor }) => <Icon name="rocket" size={24} />
//       },
//   }
// });

// const StackNavigatorConfig = {
//   'headerMode': 'screen',
//   'headerLeft': <HeaderLeft/>
// }








// export const AppNavigator = DrawerNavigator({
//   Main: { screen: MainScreen },
//   List: { screen: ListScreen }
// });



// export default class App extends React.Component {
//   render() {
//     return (
//       <AppNavigator navigation={addNavigationHelpers({
//         dispatch: this.props.dispatch,
//         state: this.props.nav,
//       })} />
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   nav: state
// });

// const AppWithNavigationState = connect(mapStateToProps)(App);

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// export default class App extends Component<{}> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           This is a Food App
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//       </View>
//     );
//   }
// }

// class App extends Component{
  

//   render(){
//     const { container, text, button, buttonText, mainContent } = styles;

//     return(
//       <View style={container}>
//         <Text style={text}>Redux Examples</Text>
//         <TouchableHighlight style={button}>
//           <Text style={buttonText} onPress={() => this.props.fetchData()}>Load Data</Text>
//         </TouchableHighlight>
//           <View style={mainContent}>
//             {
//               this.props.appData.isFetching && <Text>Loading</Text>
//             }
//             {
//               this.props.appData.data.length ? (
//                 this.props.appData.data.map((person, i) => {
//                   return <View key={i} >
//                     <Text>Name: {person.name}</Text>
//                     <Text>Age: {person.age}</Text>
//                   </View>
//                 })
//               ) : null
//             }
//           </View>
//       </View>
//     )
//   }
// }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#F5FCFF',
// //   },
// //   welcome: {
// //     fontSize: 20,
// //     textAlign: 'center',
// //     margin: 10,
// //   },
// //   instructions: {
// //     textAlign: 'center',
// //     color: '#333333',
// //     marginBottom: 5,
// //   },
// // });

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 100
//   },
//   text: {
//     textAlign: 'center'
//   },
//   button: {
//     height: 60,
//     margin: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#0b7eff'
//   },
//   buttonText: {
//     color: 'white'
//   },
//   mainContent: {
//     margin: 10,
//   }
// })

// const mapStateToProps = (state) => ({
//   appData: state.appData
// })

// const mapDispatchToProps = (dispatch) => (
//   bindActionCreators({ fetchData } , dispatch)
// )

// export default connect(mapStateToProps,mapDispatchToProps)(App)

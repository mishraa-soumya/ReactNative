import React , { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {
    Text, 
    View,
    Button,
    Image,
    TouchableHighlight,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { DrawerNavigator } from 'react-navigation'
import ChaiScreen from './ChaiContainer'
import SnackScreen from './SnackContainer'

class MainScreen extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = (navigation) => ({
        headerLeft: <HeaderLeft {...navigation} />,
    })

    render() {
        const { navigate } = this.props.navigation;
        return (
            <TouchableHighlight>
                <View style={ styles.wrapper } >
                    <BackgroundImage />
                    {/* <MainScreenNavigator /> */}
                </View>
            </TouchableHighlight>
        )
    }
}


// MainScreen.router = DrawerNavigation.router;
export default MainScreen;

const BackgroundImage = () => (
    <View>
        <Image source={ require('../static/img/bg1.jpg') }  />
        <Image source={ require('../static/img/bg2.jpg') }  />
    </View>
)
// const DrawerNavigation = () => ({
//     Beverages: {
//         screen: ChaiScreen
//     },
//     Snacks: {
//         screen: SnackScreen
//     }
// });

// const MainScreenNavigator = DrawerNavigator(
//     {
//         Recent: { screen: ChaiScreen },
//         All:   {  screen: SnackScreen },
//     }
// );

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'column'
    },
    menuDiv: {
        zIndex: 999,
        borderRadius: 70,
        borderWidth: 1,
        borderColor: '#000'
    }
})

export const HeaderLeft = (props) => (
    <View>
      <TouchableOpacity onPress={ () => props.navigation.navigate('DrawerOpen') } >
      <Image
          source={ require('../static/img/menu.png') }
          style={{ width: 20, height: 20 }}
      />
      </TouchableOpacity>
    </View>
  )
  

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = (dispatch) => (
//     bindActionCreators({}, dispatch)
// )

// export default connect(
//         mapStateToProps,
//         mapDispatchToProps
//     )
//     (MainScreen)

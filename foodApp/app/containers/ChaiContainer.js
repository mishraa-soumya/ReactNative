import React, {Component} from 'react'
import {
    Text, 
    View,
    Image
} from 'react-native'
import {HeaderLeft} from './MainContainer'

class ChaiScreen extends Component{
    
    static navigationOptions = (navigation) => ({
        headerLeft: <HeaderLeft {...navigation} />,
    })

    render(){
        return(
            <View>
                <Text>
                    This is Chai Screen
                </Text>
            </View>
        )
    }
}

export default ChaiScreen;
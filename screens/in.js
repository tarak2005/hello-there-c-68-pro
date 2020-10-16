import React from 'react';
import {Text,TouchableOpacity,View,StyleSheet} from 'react-native'
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

export default class InPage extends React.Component{
    render(){
        return(
            <View>
                <TouchableOpacity styles={style.in}
                onPress={() => {

                }}
                >
                    <Text styles={{backgroundColor:"red"}}>Instagram</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
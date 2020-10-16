import React from 'react';
import {Text,TouchableOpacity,View,StyleSheet} from 'react-native'
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

export default class fbPage extends React.Component{
    render(){
        return(
            <View>
                <TouchableOpacity styles={style.fb}
                onPress={() => {

                }}
                >
                    <Text styles={{backgroundColor:"blue"}}>FaceBook</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
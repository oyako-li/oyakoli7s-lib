import React from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import CallActionBox from '../../components/CallActionBox'

const CallScreen = () => {
    return (
        <View style={styles.page}>
            <View style={styles.cameraPreview} />
            <CallActionBox />
        </View>
    )
};

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#7b4e80',
        height: '100%',
    },
    cameraPreview: {
        width: 100,
        height: 150,
        backgroundColor: 'red',

        borderRadius: 10,

        position: 'absolute',
        right: 10,
        top: 100,
    },    
});


export default CallScreen;
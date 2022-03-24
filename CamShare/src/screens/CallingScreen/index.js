import React from "react";
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import CallActionBox from "../../components/CallActionBox";

const CallignScreen = () => {
    return (
        <View style={styles.page}>
            <View style={styles.cameraPreview}>
                <Text style={styles.name}>Alex</Text>
                <Text style={styles.phoneNumger}>ringint +81 080 4444 5555</Text>
            </View>
            <CallActionBox />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#7b4e80',
        height: '100%',
    },
    cameraPreview: {
        backgroundColor: '#7b4e80',
        flex: 1,
        alignItems: 'center',
        padding: 50,
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 50,
        marginBottom: 15,
    },
    phoneNumber: {
        fontSize: 20,
        color: 'white',
    },
    
});

export default CallignScreen;
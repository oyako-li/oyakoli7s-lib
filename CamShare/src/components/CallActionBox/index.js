import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Pressable,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const CallActionBox = () => {
    const [isCameraOn, setIsCameraOn] = React.useState(true);
    const [isMicOn, setIsMicOn] = React.useState(true);
    const onReverseCamera = () => {
        console.warn('onReverseCamera');
    }
    const onToggleCamera = () => {
        setIsCameraOn(currentValue => !currentValue);
        console.warn(isCameraOn);
    };
    const onToggleMicrophone = () => {
        setIsMicOn(currentValue => !currentValue);
        console.warn(isMicOn);
    };
    const onHangup = () => {
        console.warn('onHangup')
    };
    return (
        <View style={styles.buttonsContainer}>
            <Pressable onPress={onReverseCamera} style={styles.iconButton}>
                <Ionicons name="md-camera-reverse" size={30} color={'white'}/>
            </Pressable>
            <Pressable onPress={onToggleCamera} style={styles.iconButton}>
                <MaterialIcons name="camera-off" size={30} color={'white'}/>
            </Pressable>
            <Pressable onPress={onToggleMicrophone}style={styles.iconButton}>
                <MaterialIcons name="microphone-off" size={30} color={'white'}/>
            </Pressable>
            <Pressable onPress={onHangup} style={[styles.iconButton, {backgroundColor: "red"}]}>
                <MaterialIcons name="phone-hangup" size={30} color={'white'}/>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonsContainer: {
        backgroundColor: '#333333',
        padding: 20,
        paddingBottom: 40,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 'auto',
    },
    iconButton: {
        backgroundColor: '#4a4a4a',
        padding: 15,
        borderRadius: 50,
    }
});

export default CallActionBox;
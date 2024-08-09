import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

function BottomNavigation() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonNavigation}>
                <Ionicons name="chatbubble-outline" size={35} color={"black"} />
                <Text style={styles.textInfo}>Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonNavigation}>
                <Ionicons name="call-outline" size={35} color={"black"} />
                <Text style={styles.textInfo}>Calls</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonNavigation}>
                <Ionicons name="people-outline" size={35} color={"black"} />
                <Text style={styles.textInfo}>People</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonNavigation}>
                <Ionicons name="settings-outline" size={35} color={"black"} />
                <Text style={styles.textInfo}>Settings</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        position: 'absolute',
        bottom: 0,
        paddingBottom: 10
    },
    buttonNavigation: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInfo: {
        color: 'black'
    }
});

export default BottomNavigation;
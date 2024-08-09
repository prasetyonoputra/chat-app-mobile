import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function ChatPage() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerChat}>
                <Text style={styles.chatText}>Message</Text>
            </View>
            <View style={styles.containerMyChat}>
                <Text style={styles.chatText}>Message</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        color: 'black'
    },
    containerChat: {
        borderBlockColor: 'black',
        borderWidth: 1,
        display: 'flex',
        width: '40%',
        borderRadius: 10,
        padding: 10
    },
    containerMyChat: {
        borderBlockColor: 'black',
        borderWidth: 1,
        display: 'flex',
        width: '40%',
        borderRadius: 10,
        padding: 10
    },
    chatText: {
        fontSize: 15,
        color: 'black'
    }
});

export default ChatPage;
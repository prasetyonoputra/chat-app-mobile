import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function ChatContact() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image source={require("../assets/images/DefaultProfile.png")} style={styles.imageProfile} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.detailContainer} onPress={e => navigation.navigate("ChatPage")}>
                <View style={styles.detailRow}>
                    <Text style={styles.contactNameText}>Contact Name</Text>
                    <Text style={{ color: 'black' }}>Now</Text>
                </View>
                <Text style={styles.lastChatText}>Last chat</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    imageProfile: {
        height: 60,
        width: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    detailContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8
    },
    contactNameText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black'
    },
    lastChatText: {
        fontSize: 15,
        color: 'black'
    }
});

export default ChatContact;

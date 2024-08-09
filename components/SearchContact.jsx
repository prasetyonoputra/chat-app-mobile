import { StyleSheet, Text, TextInput, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

function SearchContact() {
    return (
        <View style={styles.container}>
            <Ionicons name="search-outline" size={35} color={"black"}/>
            <TextInput placeholder="Search your contact..." placeholderTextColor={"black"} style={styles.textInput} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#EFEFEF",
        padding: 5,
        borderRadius: 50,
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center'
    },
    textInput: {
        fontSize: 18,
        paddingLeft: 15,
        color: 'black'
    }
});

export default SearchContact;
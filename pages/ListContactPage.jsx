import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchContact from "../components/SearchContact";
import ChatContact from "../components/ChatContact";
import BottomNavigation from "../components/BottomNavigation";

function ListContactPage({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <SearchContact />
            <ChatContact />
            <ChatContact />
            <ChatContact />
            <BottomNavigation />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default ListContactPage;
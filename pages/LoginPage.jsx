import React, { useState } from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
// import axios from 'axios';

function LoginPage({ navigation }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = async () => {
        // try {
        //     const response = await axios.post('http://192.168.1.19:8080/auth/login', {
        //         email: email,
        //         password: password
        //     });

        //     console.log(response.data);
        // } catch (error) {
        //     console.error(error);
        // }

        navigation.navigate("ListContactPage");
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image source={require("../assets/images/LoginIcon.jpeg")} style={styles.loginIcon} />

            <Text style={styles.welcomeText}>Hi there!</Text>

            <TextInput placeholder='Email' style={styles.textInput} placeholderTextColor={"black"} onChangeText={(e) => setEmail(e)} />
            <TextInput placeholder='Password' style={styles.textInput} placeholderTextColor={"black"} secureTextEntry={true} onChangeText={(e) => setPassword(e)} />

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Log in</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
    },
    welcomeText: {
        fontSize: 24,
        marginBottom: 5,
        alignSelf: "flex-start",
        fontWeight: "bold",
        color: "black"
    },
    textInput: {
        width: '100%',
        height: 50,
        borderRadius: 5,
        marginBottom: 12,
        paddingHorizontal: 8,
        backgroundColor: "#EFEFEF",
        color: "black"
    },
    loginButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#5099CA',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 16,
    },
    loginIcon: {
        width: 200,
        height: 200,
        marginBottom: 50
    }
});

export default LoginPage;

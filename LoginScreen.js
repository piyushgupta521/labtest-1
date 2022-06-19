import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { auth } from './firebase'

const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect (() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("Home")
            }
        })
        return unsubscribe
    }, []);

    const signUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log(user.email);
            })
            .catch(error => alert(error.message));
    }

    const login = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                navigation.replace("Home");
            })
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding">

            <View style={styles.inputContainer}>

                <TextInput placeholder='Email'
                           value={email}
                           onChangeText={text => setEmail(text)}
                           style={styles.input}>

                </TextInput>

                <TextInput placeholder='Password'
                           value={password}
                           onChangeText={text => setPassword(text)}
                           style={styles.input}
                           secureTextEntry>

                </TextInput>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={login}
                    style={styles.button}>

                    <Text style={styles.buttonText}>Login </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={signUp}
                    style={styles.button}>

                    <Text style={styles.buttonText}>Register </Text>

                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color:'white',
        fontWeight: '600',
        fontSize: 16,
    },
});
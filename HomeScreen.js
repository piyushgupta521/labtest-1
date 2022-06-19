import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { auth } from './firebase'

const HomeScreen = ({route}) => {

    const navigation = useNavigation()

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace("Login")
            })
            .catch(error => alert(error.message));
    }

    const handleNewDataEntry = () => {
        navigation.replace("Add New Data")
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.addDataButton} onPress={handleNewDataEntry}>
                <Text style={styles.buttonText}>New Entry</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.logoutButton} onPress={handleSignOut}>
                <Text style={styles.buttonText}>Sign Out  </Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    addDataButton: {
        backgroundColor: '#0782F9',
        padding: 15,
    },
    logoutButton: {
        backgroundColor: '#0782F9',
        marginTop: 20,
    },
    buttonText: {
        color:'white',
        fontWeight: '700',
        fontSize: 16,
    },
    item: {
        padding: 5,
        fontSize: 30,
    },
    touchableOpacityStyle: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 100,
    },
})
import { Link } from 'expo-router'
import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'

const FirstPage = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Text>FirstPage</Text>
            <Link href="/users/1">Go to the User Page</Link>
		</SafeAreaView>
	)
}

export default FirstPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

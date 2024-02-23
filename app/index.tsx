import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'

const FirstPage = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Text>FirstPage</Text>
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

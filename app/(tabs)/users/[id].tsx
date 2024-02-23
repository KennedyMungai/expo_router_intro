import { Stack, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const UserPage = () => {
	const { id } = useLocalSearchParams<{ id: string }>()

	return (
		<Stack.Screen options={{ title: id }}>
			<View>
				<Text>{id}</Text>
			</View>
		</Stack.Screen>
	)
}

export default UserPage

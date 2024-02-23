import { Stack, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const UserPage = () => {
	const { id } = useLocalSearchParams<{ id: string }>()

	return (
		<Stack.Screen options={{ title: id }}>
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
					padding: 20
				}}
			>
				<Text>User Chicken Wings</Text>
			</View>
		</Stack.Screen>
	)
}

export default UserPage

import { Tabs } from 'expo-router'
import React from 'react'

const TabsLayout = () => {
	return (
		<Tabs>
			<Tabs.Screen
				name='index'
				options={{ headerTitle: 'Home', title: 'Home' }}
			/>
			<Tabs.Screen
				name='users/[id]'
				options={{ headerTitle: 'User', title: 'User' }}
			/>
		</Tabs>
	)
}

export default TabsLayout

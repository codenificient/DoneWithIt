import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableHighlight } from 'react-native';

export default function App() {
	let x = 1;
	console.log('App executed');
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.hello}>Hello React Native</Text>
			<TouchableHighlight onPress={() => console.log('Image tapped!')}>
				<Image
					source={{
						width: 200,

						height: 300,
						uri: 'https://picsum.photos/200/300'
					}}
				/>
			</TouchableHighlight>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'dodgerblue',
		justifyContent: 'center',
		alignItems: 'center'
	},
	hello: {
		marginBottom: 20
	}
});

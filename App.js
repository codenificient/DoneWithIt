import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, Image, SafeAreaView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
	let x = 1;
	console.log('App executed');
	return (

		<ViewImageScreen />
		// <WelcomeScreen />
		// <SafeAreaView style={styles.container}>
		// 	<Text style={styles.hello}>Hello React Native from Tioye</Text>
		// 	<TouchableHighlight onPress={() => console.log('Image tapped!')}>
		// 		<Image
		// 			fadeDuration={500}
		// 			source={{
		// 				width: 200,

		// 				height: 300,
		// 				uri: 'https://picsum.photos/200/300'
		// 			}}
		// 		/>

		// 		{/* <Image source={require('./assets/splash.png')} /> */}
		// 	</TouchableHighlight>
		// 	<View style={styles.hello} >

		// 	<Button color="orangered" title="Click Me" onPress={() => Alert.alert('Button pressed!', 'You should not tap buttons randomly', [{text: 'Yes'}, {text: 'No'}])} />
		// 	</View>
		// 	<StatusBar style="auto" />
		// </SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'beige',
		justifyContent: 'center',
		alignItems: 'center'
	},
	hello: {
		margin: 20
	}
});

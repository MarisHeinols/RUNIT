import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./Components/Views/Login";
import Register from "./Components/Views/Register";
import Home from "./Components/Views/Home";
import Profile from "./Components/Views/Profile";
import Settings from "./Components/Views/Settings";
import CompetitonInfo from "./Components/Views/CompetitionInfo";
import CompetitionCallendar from "./Components/Views/CompetitionCallendar";

const styles = require("./Components/Styles/MainStyle");
const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login">
				<Stack.Screen
					name="Login"
					component={Login}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="Register"
					component={Register}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="Profile"
					component={Profile}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="Settings"
					component={Settings}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="Competition"
					component={CompetitonInfo}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="Callendar"
					component={CompetitionCallendar}
					options={{
						headerShown: false,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

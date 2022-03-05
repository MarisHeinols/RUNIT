import {
	View,
	TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const styles = require("../Styles/MainStyle");

const NavBar = ({ navigation }) => {
	return (
		<View style={styles.navigationBar}>
			<TouchableOpacity
				onPress={() =>
					navigation.navigate("Profile")
				}
			>
				<Icon
					name="user"
					size={30}
					color="#ffffff"
					light
				></Icon>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() =>
					navigation.navigate("Home")
				}
			>
				<Icon
					name="home"
					size={30}
					color="#ffffff"
					light
				></Icon>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() =>
					navigation.navigate("Callendar")
				}
			>
				<Icon
					name="calendar-o"
					size={30}
					color="#ffffff"
					light
				></Icon>
			</TouchableOpacity>
		</View>
	);
};

export default NavBar;

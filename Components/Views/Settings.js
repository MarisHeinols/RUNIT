import {
	View,
	Text,
	Image,
	ImageBackground,
	TouchableOpacity,
	FlatList,
	ScrollView,
} from "react-native";
import React, {
	useCallback,
	useRef,
	useState,
} from "react";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import { auth } from "../../FireBase/FireBase";

const styles = require("../Styles/MainStyle");

const exampleUser = {
	name: "Martins",
	surname: "Ritins",
	age: "42",
	location: "Riga",
	club: "Lasis",
	uri: "https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png",
};
const settingOptions = [
	{
		key: 1,
		title: "Profile",
		icon: "user",
	},
	{
		key: 2,
		title: "Notifications",
		icon: "bell",
	},
	{
		key: 3,
		title: "Appearence",
		icon: "eye",
	},
	{
		key: 4,
		title: "Contact-info",
		icon: "id-card",
	},
	{
		key: 5,
		title: "Sign-out",
		icon: "reply",
	},
];

const Settings = ({ navigation }) => {
	const [user, setUser] = useState(exampleUser);
	const [settings, setSettings] = useState(
		settingOptions
	);

	const handleSignOut = () => {
		auth
			.signOut()
			.then(() => navigation.replace("Login"))
			.catch((error) => alert(error.message));
	};

	return (
		<LinearGradient
			style={styles.container}
			colors={["#000000", "#00334a", "#000000"]}
			start={[0, 0]}
			end={[1, 1]}
		>
			<View style={styles.bannerWithButton}>
				<TouchableOpacity
					onPress={() => navigation.goBack(null)}
				>
					<Icon
						name={"chevron-left"}
						size={40}
						color="rgba(0, 207, 138,0.8)"
					/>
				</TouchableOpacity>
				<Text style={styles.bannerTextWithButton}>
					Settings
				</Text>
			</View>
			<View style={styles.content}>
				<View style={styles.profileBox}>
					<View style={styles.profilePictureBox}>
						<Image
							style={styles.avatar}
							source={{
								uri: user.uri,
							}}
						/>
					</View>
					<View style={styles.profileInfoBox}>
						<Text
							style={
								user.name.length > 10
									? styles.smallText
									: styles.mediumText
							}
						>
							{user.name} {user.surname}
						</Text>
						<Text style={styles.smallText}>
							AGE: {user.age}
						</Text>
						<Text style={styles.smallText}>
							FROM: {user.location}
						</Text>
						<Text style={styles.smallText}>
							CLUB: {user.club}
						</Text>
					</View>
				</View>
				<View style={styles.settingsBox}>
					{settings.map((setting) => {
						return (
							<View
								style={
									setting.icon == "reply"
										? [
												styles.settingOption,
												{ borderBottomWidth: 0 },
										  ]
										: styles.settingOption
								}
							>
								<View
									style={styles.settingsIconBox}
								>
									<TouchableOpacity
										onPress={() => handleSignOut}
									>
										<Icon
											name={setting.icon}
											size={30}
											color={
												setting.icon == "reply"
													? "rgba(238, 22, 69, 0.8)"
													: "rgba(0, 207, 138,0.8)"
											}
										/>
									</TouchableOpacity>
								</View>
								<View
									style={styles.settingsTextBox}
								>
									<Text
										style={styles.settingsText}
									>
										{setting.title}
									</Text>
								</View>
							</View>
						);
					})}
				</View>
			</View>
		</LinearGradient>
	);
};

export default Settings;

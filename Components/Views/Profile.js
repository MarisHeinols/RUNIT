import {
	View,
	Text,
	Image,
	TouchableOpacity,
	FlatList,
} from "react-native";
import React, {
	useCallback,
	useRef,
	useState,
} from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";

import NavBar from "../Navigation/NavBar";
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
const compettions = [
	{
		id: "1",
		title: "Mountain running",
		place: "Sigulda",
		date: "20/04/2022",
		attended: true,
	},
	{
		id: "2",
		title: "Marathon",
		place: "Riga",
		date: "15/06/2022",
		attended: true,
	},
	{
		id: "3",
		title: "Orientiering",
		place: "Madona",
		date: "15/06/2022",
		attended: false,
	},
	{
		id: "4",
		title: "Marathon",
		place: "Riga",
		date: "15/06/2022",
		attended: true,
	},
	{
		id: "5",
		title: "Beach run",
		place: "Saulkrasti",
		date: "18/07/2022",
		attended: true,
	},
	{
		id: "6",
		title: "Mountain running",
		place: "Gaizins",
		date: "19/07/2022",
		attended: false,
	},
];
const Item = ({ data }) => (
	<View style={styles.callendarCompetitionBox}>
		<View>
			<Text style={styles.competitonTitle}>
				{data.item.title}
			</Text>
			<View>
				<Text style={styles.competitonInfo}>
					{data.item.place}
				</Text>
				<Text style={styles.competitionDate}>
					{data.item.date}
				</Text>
			</View>
		</View>
		{data.item.attended ? (
			<Icon
				name="check"
				size={30}
				color="rgba(0, 207, 138,0.8)"
			/>
		) : (
			<Icon
				name="times-circle"
				size={30}
				color="rgba(199, 54, 63,0.8)"
			/>
		)}
	</View>
);

const Profile = ({ navigation }) => {
	const [user, setUser] = useState(exampleUser);

	const renderItem = (compettionData) => (
		<Item data={compettionData} />
	);
	return (
		<LinearGradient
			style={styles.container}
			colors={["#000000", "#00334a", "#000000"]}
			start={[0, 0]}
			end={[1, 1]}
		>
			<View style={styles.content}>
				<View style={styles.banner}>
					<Text style={styles.bannerText}>
						Profile
					</Text>
				</View>
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
							FROM: {auth.currentUser?.email}
						</Text>
						<Text style={styles.smallText}>
							CLUB: {user.club}
						</Text>
					</View>
					<View style={styles.settings}>
						<TouchableOpacity
							onPress={() =>
								navigation.navigate("Settings")
							}
						>
							<Icon
								name="cog"
								size={20}
								color="rgba(255, 255, 255,0.6)"
								light
							/>
						</TouchableOpacity>
					</View>
				</View>
				<View
					style={styles.profileCompetitionBox}
				>
					<FlatList
						data={compettions}
						renderItem={renderItem}
						keyExtractor={(item) => item.id}
					></FlatList>
				</View>
				<NavBar navigation={navigation} />
			</View>
		</LinearGradient>
	);
};

export default Profile;

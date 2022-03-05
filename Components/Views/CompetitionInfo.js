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

const styles = require("../Styles/MainStyle");

const competiton = {
	id: "1",
	title: "Mountain running",
	text: "Sigulda",
	date: "20/04/2022",
	location: "Sigulda, Laurenci",
	organizers: "Siguldas dome",
	bulletinLink: "MountainrunningSiguldasdome.com",
	competitonInfo:
		"Nunc sit amet ullamcorper purus. Nullam ligula nunc, fringilla sed libero blandit, pulvinar fermentum elit." +
		" Cras ultrices, sem ac auctor imperdiet, diam erat fringilla augue, ac tincidunt elit metus a elit. Fusce sagittis sapien vel lorem consectetur dictum." +
		" Vivamus sodales suscipit consectetur. In et bibendum nibh. Nunc a enim nec nisl fermentum maximus. Cras convallis vestibulum mollis. Nam id mattis dui." +
		" \n\nVivamus vel tincidunt nibh, nec posuere libero. Fusce eget maximus elit, ac commodo mi." +
		"Nam vitae nibh lacinia, porta mi nec, vulputate risus. Nunc a felis ligula. Proin porttitor est nec ex finibus, a vulputate diam fringilla." +
		"Maecenas tincidunt purus a varius malesuada. Vivamus faucibus dictum arcu, a eleifend libero rhoncus at. Donec tempor, arcu et pellentesque auctor," +
		" dolor nulla lacinia nibh, ut tincidunt nisl lorem volutpat ante. Morbi aliquet felis eu pulvinar cursus.",

	phoneNr: "23123131",
	email: "Siguldasdome@gmail.com",
	uri: "https://blog.sports-tracker.com/wp-content/uploads/2017/04/JaakkoPostiPyhaTunturiMaraton1.jpg",
	attended: true,
};

const CompetitonInfo = ({ navigation }) => {
	var [isDenyPress, setDenyIsPress] =
		React.useState(false);
	var [isIntrestPress, setIntrestIsPress] =
		React.useState(false);

	var buttonIntrestProps = {
		style: isIntrestPress
			? styles.intrestButtonPressed
			: styles.intrestButtonNormal,
		onPress: () => {
			isIntrestPress
				? setIntrestIsPress(false)
				: setIntrestIsPress(true),
				isDenyPress ? setDenyIsPress(false) : "";
		},
	};
	var buttonDenyProps = {
		style: isDenyPress
			? styles.denyButtonPressed
			: styles.denyButtonNormal,
		onPress: () => {
			isDenyPress
				? setDenyIsPress(false)
				: setDenyIsPress(true),
				isIntrestPress
					? setIntrestIsPress(false)
					: "";
		},
	};

	return (
		<LinearGradient
			style={styles.container}
			colors={["#000000", "#00334a", "#000000"]}
			start={[0, 0]}
			end={[1, 1]}
		>
			<View style={styles.backButon}>
				<TouchableOpacity
					onPress={() => navigation.goBack(null)}
				>
					<Icon
						name={"chevron-left"}
						size={40}
						color="rgba(0, 207, 138,0.8)"
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.contentCompetition}>
				<View style={styles.headerBox}>
					<ImageBackground
						source={{ uri: competiton.uri }}
						style={styles.competitionHeader}
						imageStyle={{ borderRadius: 10 }}
					>
						<View
							style={
								styles.competitionHeaderTextBox
							}
						>
							<Text style={styles.header}>
								{competiton.title}
							</Text>
						</View>
					</ImageBackground>
				</View>
				<View style={styles.competitionInfoBox}>
					<Text
						style={styles.smallTextFaded}
						numberOfLines={1}
					>
						Location:{" "}
						<Text
							style={styles.smallText}
							numberOfLines={1}
						>
							{" "}
							{competiton.location}
						</Text>
					</Text>
					<Text
						style={styles.smallTextFaded}
						numberOfLines={1}
					>
						Date:
						<Text style={styles.smallText}>
							{" "}
							{competiton.date}
						</Text>
					</Text>
					<Text
						style={styles.smallTextFaded}
						numberOfLines={1}
					>
						Organizers:{" "}
						<Text style={styles.smallText}>
							{" "}
							{competiton.organizers}
						</Text>
					</Text>
					<Text style={styles.smallTextFaded}>
						Link to bulletin:
						<Text style={styles.smallText}>
							{" "}
							Click here
						</Text>
					</Text>
					<View style={styles.contactsBox}>
						<View style={styles.contactsIconBox}>
							<Icon
								name="phone"
								size={25}
								color="rgba(0, 207, 138,0.8)"
							></Icon>
							<Icon
								name="envelope"
								size={25}
								color="rgba(219, 36, 22,0.8)"
							></Icon>
						</View>
						<View style={styles.contactsInfoBox}>
							<Text
								style={[
									styles.smallText,
									{ paddingBottom: 1 },
								]}
								numberOfLines={1}
							>
								{" "}
								{competiton.phoneNr}
							</Text>
							<Text
								style={[
									styles.smallText,
									{ paddingBottom: 1 },
								]}
								numberOfLines={1}
							>
								{" "}
								{competiton.email}
							</Text>
						</View>
					</View>
				</View>
				<ScrollView
					style={styles.competitonInfoBox}
				>
					<Text
						style={[
							styles.smallText,
							{ marginBottom: "10%" },
						]}
					>
						{competiton.competitonInfo}
					</Text>
				</ScrollView>
				<View style={styles.intrestButtonBox}>
					<TouchableOpacity
						{...buttonIntrestProps}
					>
						<Icon
							name="check"
							size={30}
							color="rgba(0, 207, 138,0.8)"
						/>
					</TouchableOpacity>
					<TouchableOpacity {...buttonDenyProps}>
						<Icon
							name="times-circle"
							size={30}
							color="rgba(199, 54, 63,0.8)"
						/>
					</TouchableOpacity>
				</View>
			</View>
		</LinearGradient>
	);
};

export default CompetitonInfo;

"use strict";
import {
	StyleSheet,
	Dimensions,
} from "react-native";

const windowWidth =
	Dimensions.get("window").width;
const windowHeight =
	Dimensions.get("window").height;

module.exports = StyleSheet.create({
	//Utils
	container: {
		display: "flex",
		backgroundColor: "#1a1a1a",
		alignItems: "center",
		paddingTop: "15%",
		height: windowHeight,
	},
	content: {
		display: "flex",
		alignItems: "center",
		height: "100%",
		width: "100%",
	},
	backButon: {
		display: "flex",
		width: "100%",
		marginLeft: "10%",
		paddingBottom: "10%",
	},
	navigationBar: {
		display: "flex",
		position: "absolute",
		top: windowHeight * 0.8,
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
		width: "90%",
		height: "7%",
		backgroundColor: "rgba(0, 207, 138,0.8)",
		borderWidth: 4,
		borderColor: "rgba(0, 207, 138,0)",
		borderRadius: 10,
	},
	banner: {
		marginTop: "0%",
		marginBottom: "10%",
		height: "10%",
	},
	bannerText: {
		fontSize: 40,
		color: "#ffffff",
		letterSpacing: 3,
		textTransform: "uppercase",
	},
	bannerWithButton: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		marginLeft: "10%",
		paddingBottom: "10%",
	},
	bannerTextWithButton: {
		fontSize: 40,
		color: "#ffffff",
		letterSpacing: 3,
		textTransform: "uppercase",
		paddingLeft: "12%",
	},

	bannerMediumText: {
		fontSize: 20,
		color: "#ffffff",
		letterSpacing: 3,
		opacity: 0.8,
		textTransform: "uppercase",
	},

	inputBox: {
		width: "80%",
		height: 50,
		borderWidth: 2,
		borderColor: "white",
		borderRadius: 10,
		marginTop: "10%",
		backgroundColor: "rgba(255,255,255,0.1)",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
		color: "white",
	},

	//Home screen

	caruselBox: {
		display: "flex",
		flexDirection: "column",
		height: "70%",
		width: "100%",
		marginTop: "10%",
	},
	cardBox: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		width: "100%",
		height: "70%",
	},
	card: {
		backgroundColor: "floralwhite",
		justifyContent: "flex-end",
		borderRadius: 5,
		height: "100%",
		marginLeft: 25,
		marginRight: 25,
		borderWidth: 6,
		borderColor: "rgba(255, 255, 255,1)",
		borderRadius: 3,
	},
	cardInfo: {
		backgroundColor: "rgba(0, 0, 0,0.7)",
		height: "20%",
		paddingLeft: "5%",
		paddingRight: "5%",
	},
	tinyLogo: {
		height: "80%",
	},

	//Profile screen

	profileBox: {
		display: "flex",
		flexDirection: "row",
		height: "20%",
		width: "90%",
		backgroundColor: "rgba(0, 0, 0,0.4)",
		marginBottom: "8%",
		borderRadius: 10,
	},

	profileCompetitionBox: {
		display: "flex",
		height: "40%",
		width: "90%",
		backgroundColor: "rgba(0, 0, 0,0.4)",
		borderRadius: 10,
	},
	profileCompetitionInfoBox: {
		display: "flex",
		width: "90%",
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		padding: 20,
		marginVertical: "1.5%",
		marginHorizontal: "5%",
		borderBottomWidth: 4,
		borderBottomColor: "rgba(0,0,0,0.5)",
	},
	profilePictureBox: {
		display: "flex",
		height: "100%",
		width: "35%",
		justifyContent: "center",
		alignItems: "center",
		marginLeft: "5%",
	},
	profileInfoBox: {
		display: "flex",
		flexGrow: 1,
		height: "100%",
		width: "50%",
		justifyContent: "center",
		alignItems: "flex-start",
		marginLeft: "5%",
		marginRight: "5%",
	},
	avatar: {
		height: "70%",
		width: "80%",
		borderRadius: 10,
	},
	settings: {
		display: "flex",
		position: "absolute",
		top: windowHeight * 0.15,
		left: windowWidth * 0.84,
	},

	//Texts

	mediumText: {
		fontSize: 20,
		letterSpacing: 3,
		fontWeight: "bold",
		color: "white",
		paddingBottom: "5%",
	},
	smallText: {
		fontSize: 15,
		letterSpacing: 2,
		fontWeight: "700",
		color: "white",
		paddingBottom: "3%",
	},
	competitonTitle: {
		fontSize: 15,
		fontWeight: "bold",
		paddingBottom: "1%",
		letterSpacing: 1,
		color: "rgb(255,255,255)",
		paddingBottom: "2%",
	},
	competitonInfo: {
		fontSize: 15,
		fontWeight: "bold",
		paddingBottom: "1%",
		letterSpacing: 1,
		color: "rgba(255,255,255,0.5)",
	},
	competitionDate: {
		fontSize: 12,
		letterSpacing: 2,
		fontWeight: "700",
		color: "rgba(255, 255, 255,0.5)",
	},
	smallTextFaded: {
		fontSize: 15,
		letterSpacing: 2,
		fontWeight: "700",
		color: "rgba(255, 255, 255,0.5)",
		paddingBottom: "2%",
	},
	header: {
		fontSize: 25,
		letterSpacing: 2,
		fontWeight: "700",
		color: "rgba(255, 255, 255,1)",
	},
	caruselHeaderText: {
		fontSize: 20,
		letterSpacing: 2,
		fontWeight: "700",
		color: "rgba(0, 0, 0,1)",
	},
	//Competitoon screen
	contentCompetition: {
		display: "flex",
		alignItems: "center",
		height: "80%",
		width: "90%",
		backgroundColor: "rgba(0, 0, 0,0.2)",
		borderRadius: 10,
	},
	headerBox: {
		height: "30%",
		width: "100%",
	},
	competitionHeader: {
		display: "flex",
		height: "100%",
		width: "100%",
		justifyContent: "flex-end",
	},
	competitionHeaderTextBox: {
		display: "flex",
		height: "30%",
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "rgba(0, 0, 0,0.5)",
	},
	competitionInfoBox: {
		display: "flex",
		height: "40%",
		width: "100%",
		alignItems: "flex-start",
		paddingLeft: "5%",
		paddingTop: "8%",
	},
	competitionImage: {
		height: windowHeight * 0.3,
		width: windowWidth * 0.9,
	},
	contactsBox: {
		display: "flex",
		flexDirection: "row",
		paddingTop: "5%",
	},
	contactsIconBox: {
		display: "flex",
		paddingRight: "2%",
		justifyContent: "space-between",
	},
	contactsInfoBox: {
		display: "flex",
		justifyContent: "space-between",
	},
	competitonInfoBox: {
		display: "flex",
		height: "30%",
		width: "100%",
		padding: "5%",
		backgroundColor: "rgba(0, 0, 0,0.2)",
		borderRadius: 10,
	},
	intrestButtonBox: {
		display: "flex",
		flexDirection: "row",
		width: "100%",
		height: "7%",
	},
	intrestButtonNormal: {
		marginTop: "10%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "50%",
		height: "100%",
		borderRadius: 10,
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
		borderRightWidth: 1,
		borderColor: "rgba(0, 0, 0,0.2)",
		backgroundColor: "rgba(255, 255, 255,0.2)",
	},
	denyButtonNormal: {
		marginTop: "10%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "50%",
		height: "100%",
		borderRadius: 10,
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
		borderLeftWidth: 1,
		borderColor: "rgba(0, 0, 0,0.2)",
		backgroundColor: "rgba(255, 255, 255,0.2)",
	},
	intrestButtonPressed: {
		marginTop: "10%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "50%",
		height: "100%",
		borderRadius: 10,
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
		borderRightWidth: 1,
		backgroundColor: "rgba(0, 207, 138,0.2)",
	},
	denyButtonPressed: {
		marginTop: "10%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "50%",
		height: "100%",
		borderRadius: 10,
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
		borderLeftWidth: 1,
		backgroundColor: "rgba(199, 54, 63,0.2)",
	},

	//Settings screen

	settingsBox: {
		display: "flex",
		width: "90%",
		height: "60%",
		backgroundColor: "rgba(0, 0, 0,0.2)",
		borderRadius: 10,
	},
	settingOption: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		height: "20%",
		borderBottomWidth: 4,
		borderBottomColor: "rgba(0,0,0,0.5)",
	},
	settingsIconBox: {
		display: "flex",
		width: "20%",
		justifyContent: "center",
		alignItems: "center",
	},
	settingsTextBox: {
		display: "flex",
		width: "80%",
		justifyContent: "center",
		marginLeft: "5%",
		marginTop: "3%",
	},
	settingsText: {
		fontSize: 20,
		letterSpacing: 3,
		fontWeight: "bold",
		color: "white",
		paddingBottom: "5%",
		opacity: 0.9,
	},

	//Calendar screen
	calendarBox: {
		display: "flex",
		marginTop: "15%",
		width: "90%",
		height: "55%",
	},
	callendarHeaderBox: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "15%",
		backgroundColor: "rgba(255,255,255,0.5)",
	},
	callendarHeaderCarussel: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%",
	},
	callendarContentBox: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "85%",
		backgroundColor: "rgba(0,0,0,0.5)",
	},
	callendarCompetitionBox: {
		display: "flex",
		width: windowWidth * 0.8,
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		padding: 20,
		borderBottomWidth: 4,
		borderBottomColor: "rgba(0,0,0,0.5)",
	},

	//Login
	loginBox: {
		marginTop: "10%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "90%",
		height: "60%",
		backgroundColor: "rgba(0, 0, 0,0.5)",
		borderRadius: 10,
	},

	button: {
		marginTop: "10%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "80%",
		height: "15%",
		borderRadius: 10,
		backgroundColor: "rgba(0, 207, 138,0.8)",
	},
});

import {
	View,
	Text,
	TouchableOpacity,
	FlatList,
} from "react-native";
import React, {
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";

import { LinearGradient } from "expo-linear-gradient";
import Carousel from "react-native-snap-carousel";
import NavBar from "../Navigation/NavBar";
import { db } from "../../FireBase/FireBase";

const styles = require("../Styles/MainStyle");

const monthNames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const CompetitionCallendar = ({ navigation }) => {
	//Active carusel item state
	const [activeIndex, setActiveIndex] =
		useState(0);
	//Carusel object state
	const [carouselItems, setCarouselItems] =
		useState(monthNames);
	//Competition object state
	const [competitions, setCompetitions] =
		useState([]);
	//Refrence to null
	const ref = useRef(null);

	const getMonthFromString = (mon) => {
		var d = Date.parse(mon + "1, 2022");
		if (!isNaN(d)) {
			return new Date(d).getMonth();
		}
		return -2;
	};

	var exportData = [];
	useEffect(async () => {
		await db
			.collection("Competitions")
			.get()
			.then((querySnapshot) => {
				console.log(
					"Competitions: ",
					querySnapshot.size
				);
				querySnapshot.forEach(
					(documentSnapshot) => {
						var date =
							documentSnapshot.data().date;
						exportData.push(
							documentSnapshot.data()
						);
						console.log(documentSnapshot.data());
					}
				);
			});
		setCompetitions(exportData);
	}, []);

	const Item = ({ data }) => {
		const d = new Date(data.item.date);
		if (
			getMonthFromString(
				carouselItems[activeIndex]
			) === d.getMonth()
		) {
			return (
				<TouchableOpacity
					style={styles.callendarCompetitionBox}
					onPress={() =>
						navigation.navigate("Competition", {
							item: data.item,
						})
					}
				>
					<View>
						<Text style={styles.competitonTitle}>
							{data.item.title}
						</Text>
						<View>
							<Text style={styles.competitonInfo}>
								{data.item.place}
							</Text>
							<Text
								style={styles.competitionDate}
							>
								{data.item.date}
							</Text>
						</View>
					</View>
				</TouchableOpacity>
			);
		} else {
			return <View></View>;
		}
	};

	const renderCompetitionItem = (
		competitions
	) => <Item data={competitions} />;

	const renderItem = useCallback(
		({ item, index }) => (
			<View
				style={styles.callendarHeaderCarussel}
			>
				<Text style={styles.caruselHeaderText}>
					{item}
				</Text>
			</View>
		),
		[]
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
						Calendar
					</Text>
				</View>
				<View style={styles.calendarBox}>
					<View style={styles.callendarHeaderBox}>
						<Carousel
							layout={"default"}
							layoutCardOffset={40}
							ref={ref}
							data={carouselItems}
							sliderWidth={350}
							itemWidth={350}
							renderItem={renderItem}
							onSnapToItem={(index) =>
								setActiveIndex(index)
							}
							useScrollView={true}
							inactiveSlideShift={0}
							loop={true}
							activeSlideAlignment={"start"}
						/>
					</View>
					<View
						style={styles.callendarContentBox}
					>
						<FlatList
							data={competitions}
							renderItem={renderCompetitionItem}
							keyExtractor={(item) => item.id}
						></FlatList>
					</View>
				</View>
				<View></View>
				<NavBar navigation={navigation} />
			</View>
		</LinearGradient>
	);
};

export default CompetitionCallendar;

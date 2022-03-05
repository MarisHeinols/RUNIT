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
	useEffect,
	useRef,
	useState,
} from "react";
import { LinearGradient } from "expo-linear-gradient";
import Carousel, {
	Pagination,
} from "react-native-snap-carousel";

import NavBar from "../Navigation/NavBar";
import { Calendar } from "react-native-calendars";

const styles = require("../Styles/MainStyle");

const exampleItems = [
	{
		id: "1",
		title: "Mountain running",
		place: "Sigulda",
		date: "20/04/2022",
	},
	{
		id: "2",
		title: "Marathon",
		place: "Riga",
		date: "15/06/2022",
	},
	{
		id: "3",
		title: "Orientiering",
		place: "Madona",
		date: "15/06/2022",
	},
	{
		id: "4",
		title: "Marathon",
		place: "Riga",
		date: "15/06/2022",
	},
	{
		id: "5",
		title: "Beach run",
		place: "Saulkrasti",
		date: "18/07/2022",
	},
	{
		id: "6",
		title: "Mountain running",
		place: "Gaizins",
		date: "19/07/2022",
	},
];

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
	</View>
);

const CompetitionCallendar = ({ navigation }) => {
	const [activeIndex, setActiveIndex] =
		useState(0);
	const [carouselItems, setCarouselItems] =
		useState(monthNames);
	const ref = useRef(null);

	const renderCompetitionItem = (
		exampleItems
	) => <Item data={exampleItems} />;

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
							data={exampleItems}
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

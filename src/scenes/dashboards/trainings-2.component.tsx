import { TopNavigation, TopNavigationAction } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";

import { ArrowIosBackIcon } from "../../components/icons";
import { SafeAreaLayout } from "../../components/safe-area-layout.component";
import ContentView from "../../layouts/dashboards/trainings-2";

export const Trainings2Screen = ({ navigation }): React.ReactElement => {
	const renderBackAction = (): React.ReactElement => (
		<TopNavigationAction icon={ArrowIosBackIcon} onPress={navigation.goBack} />
	);

	return (
		<SafeAreaLayout style={styles.container} insets="top">
			<TopNavigation title="Trainings" accessoryLeft={renderBackAction} />
			<ContentView />
		</SafeAreaLayout>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

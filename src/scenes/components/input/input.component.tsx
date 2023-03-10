import { InputElement, InputProps } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";

import { ShowcaseContainer } from "../../../components/showcase-container.component";

import { InputShowcase } from "./input-showcase.component";
import { inputSettings, inputShowcase } from "./type";

export const InputScreen = ({ navigation }): React.ReactElement => {
	const renderItem = (props: InputProps): InputElement => (
		<InputShowcase style={styles.component} {...props} />
	);

	return (
		<ShowcaseContainer
			showcase={inputShowcase}
			settings={inputSettings}
			renderItem={renderItem}
			onBackPress={navigation.goBack}
		/>
	);
};

const styles = StyleSheet.create({
	component: {
		flex: 1,
	},
});

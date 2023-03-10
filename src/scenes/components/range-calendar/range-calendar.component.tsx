import { RangeCalendarElement, RangeCalendarProps } from "@ui-kitten/components";
import React from "react";

import { ShowcaseContainer } from "../../../components/showcase-container.component";

import { RangeCalendarShowcase } from "./range-calendar-showcase.component";
import { calendarShowcase } from "./type";

export const RangeCalendarScreen = ({ navigation }): React.ReactElement => {
	const renderItem = (props: RangeCalendarProps): RangeCalendarElement => (
		<RangeCalendarShowcase {...props} />
	);

	return (
		<ShowcaseContainer
			showcase={calendarShowcase}
			renderItem={renderItem}
			onBackPress={navigation.goBack}
		/>
	);
};

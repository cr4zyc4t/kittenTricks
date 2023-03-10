import { ModalElement, ModalProps } from "@ui-kitten/components";
import React from "react";

import { ShowcaseContainer } from "../../../components/showcase-container.component";

import { ModalShowcase } from "./modal-showcase.component";
import { modalShowcase } from "./type";

export const ModalScreen = ({ navigation }): React.ReactElement => {
	const renderItem = (props: ModalProps): ModalElement => <ModalShowcase {...props} />;

	return (
		<ShowcaseContainer
			showcase={modalShowcase}
			renderItem={renderItem}
			onBackPress={navigation.goBack}
		/>
	);
};

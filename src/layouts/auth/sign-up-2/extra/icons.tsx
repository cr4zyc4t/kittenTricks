import { Icon, IconElement } from "@ui-kitten/components";
import React from "react";
import { ImageStyle } from "react-native";

export const EmailIcon = (style: ImageStyle): IconElement => <Icon {...style} name="email" />;

export const PersonIcon = (style: ImageStyle): IconElement => <Icon {...style} name="person" />;

export const PlusIcon = (style: ImageStyle): IconElement => <Icon {...style} name="plus" />;

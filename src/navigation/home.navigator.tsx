import {
	BottomTabNavigationOptions,
	createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { LogBox } from "react-native";

import { HomeBottomNavigation } from "../scenes/home/home-bottom-navigation.component";
import { HomeDrawer } from "../scenes/home/home-drawer.component";
import { LibrariesScreen } from "../scenes/libraries/libraries.component";

import { ComponentsNavigator } from "./components.navigator";
import { LayoutsNavigator } from "./layouts.navigator";
import { ThemesNavigator } from "./themes.navigator";

const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

/*
 * When dev is true in .expo/settings.json (started via `start:dev`),
 * open Components tab as default.
 */
const initialTabRoute: string = __DEV__ ? "Components" : "Layouts";

const ROOT_ROUTES: string[] = ["Home", "Layouts", "Components", "Themes"];

// const TabBarVisibilityOptions = ({ route }): BottomTabNavigationOptions => {
// 	const isNestedRoute: boolean = route.state?.index > 0;
// 	const isRootRoute: boolean = ROOT_ROUTES.includes(route.name);

// 	return { headerShown: false };
// };

const tabBar = props => <HomeBottomNavigation {...props} />;

const HomeTabsNavigator = (): React.ReactElement => (
	<BottomTab.Navigator
		screenOptions={{ headerShown: false }}
		initialRouteName={initialTabRoute}
		tabBar={tabBar}
	>
		<BottomTab.Screen name="TabLayouts" component={LayoutsNavigator} />
		<BottomTab.Screen name="TabComponents" component={ComponentsNavigator} />
		<BottomTab.Screen name="TabThemes" component={ThemesNavigator} />
	</BottomTab.Navigator>
);

const drawerContent = props => <HomeDrawer {...props} />;
export const HomeNavigator = (): React.ReactElement => (
	<Drawer.Navigator screenOptions={{ headerShown: false }} drawerContent={drawerContent}>
		<Drawer.Screen name="Home" component={HomeTabsNavigator} />
		<Drawer.Screen name="Libraries" component={LibrariesScreen} />
	</Drawer.Navigator>
);

LogBox.ignoreLogs(["Accessing the 'state'"]);

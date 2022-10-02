import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import screensObj from '@screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types.routes';

const screenNamesArr = Object.keys(screensObj);
const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {

	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName='FirstViewScreen'
				screenOptions={{ headerShown: false, animation: 'none' }}
			>
				{screenNamesArr.map((key: string) => (
					<Stack.Screen
						key={key}
						name={key as keyof RootStackParamList}
						component={screensObj[key as keyof typeof screensObj]}
					/>
				))}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;

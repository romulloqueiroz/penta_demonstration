import React from 'react';
import { SafeAreaView } from 'react-native';
import { View } from '@components';
import { ViewType, colors } from '@styles';
import { StatusBar } from 'expo-status-bar';

const BasicLayout: React.FC<Partial<ViewType>> = ({ children, bgc = 'background1', ...rest }) => (
	<SafeAreaView style={{ flex: 1, backgroundColor: colors[bgc] }}>
		<View bgc={bgc} flex1 {...{ ...rest }}>
			{children}
			<StatusBar />
		</View>
	</SafeAreaView>
);

export default BasicLayout;

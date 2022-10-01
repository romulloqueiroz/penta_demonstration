import { useFonts } from 'expo-font';

export const useApp = () => {
	const [fontsLoaded] = useFonts({
    'SF-Pro': require('./assets/fonts/SF-Pro.ttf')
	});

	return {
		fontsLoaded
	};
};

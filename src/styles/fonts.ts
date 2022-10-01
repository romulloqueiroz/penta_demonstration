export type FontTypeType = keyof typeof fontType;
const fontType = {
	large: {
		fontSize: 24,
		letterSpacing: 2
	},
	medium: {
		fontSize: 14,
		letterSpacing: 2
	}
};

export { fontType };

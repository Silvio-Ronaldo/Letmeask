import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		title: string;

		colors: {
			background: string; // #f8f8f8
			asideBackground: string; // #835afd
			headerBackground: string; // #f8f8f8

			color: string; // #ffffff
			paragraphColor: string; // #f8f8f8

			buttonBackground: string; // #835afd
			buttonOutlinedBackground: string; // #ffffff
			buttonOutlinedBorder: string; // #835afd
			buttonOutlinedColor: string; // #835afd

			inputBackground: string; // #ffffff
			inputBorder: string; // #a8a8b3

			modalSvgStroke: string; // #e13a3a
			modalStrongColor: string; // #29292e
			modalSpanColor: string; // #737373
			modalBackground: string; // #ffffff

			questionBackground: string; // #ffffff
			questionHighlightedBackground: string; // #f4f0ff
			questionHighlightedBorder: string; // #835afd
			questionHighlightedColor: string; // #29292e
			questionAnsweredBackground: string; // #dbdcdd
			questionParagraphColor: string; // #29292e

			userInfoSpanColor: string; // #737380
			likeButtonColor: string; // #737380
			likeButtonLikedColor: string; // #835afd
			likeButtonLikedSvgFill: string; // #835afd
			likeButtonLikedSvgStroke: string; // #ffffff

			roomCodeBackground: string; // #ffffff
			roomCodeBorder: string; // #835afd
			roomCodeImageBackground: string; // #835afd
			roomCodeSpanColor: string; // #ffffff

			textAreaBackground: string; // #fefefe
			textAreaColor: string; // #000000

			adminRoomHeaderBorder: string; // #e2e2e2
			adminRoomTitle: string; // #29292e
			adminRoomSpanBackground: string; // #e559f9
			adminRoomSpanColor: string; // #ffffff

			createRoomButtonBackground: string; // #ea4335
			createRoomButtonColor: string; // #ffffff
			separatorColor: string; // #a8a8b3
			separatorBackground: string; // #a8a8b3

			newRoomParagraphColor: string; // #737380
			newRoomLinkColor: string; // #e559f9

			roomHeaderBorder: string; // #e2e2e2
			roomTitleColor: string; // #29292e
			roomTitleSpanBackground: string; // #e559f9
			roomTitleSpanColor: string; // #ffffff
			roomFormFooterSpanColor: string; // #737380
			roomFormFooterButtonColor: string; // #835afd

			sunButton: string; // #ffa300
			moonButton: string; // #1d2eff
		};
	}
}

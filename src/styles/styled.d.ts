import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		title: string;

		colors: {
			background: string;
			asideBackground: string;
			headerBackground: string;

			color: string;
			paragraphColor: string;

			buttonBackground: string;
			buttonOutlinedBackground: string;
			buttonOutlinedBorder: string;
			buttonOutlinedColor: string;

			inputBackground: string;
			inputBorder: string;

			modalSvgStroke: string;
			modalStrongColor: string;
			modalSpanColor: string;
			modalBackground: string;

			questionBackground: string;
			questionHighlightedBackground: string;
			questionHighlightedBorder: string;
			questionHighlightedColor: string;
			questionAnsweredBackground: string;
			questionParagraphColor: string;

			userInfoSpanColor: string;
			likeButtonColor: string;
			likeButtonLikedColor: string;
			likeButtonLikedSvgFill: string;
			likeButtonLikedSvgStroke: string;

			roomCodeBackground: string;
			roomCodeBorder: string;
			roomCodeImageBackground: string;
			roomCodeSpanColor: string;

			textAreaBackground: string;
			textAreaColor: string;

			adminRoomHeaderBorder: string;
			adminRoomTitle: string;
			adminRoomSpanBackground: string;
			adminRoomSpanColor: string;

			createRoomButtonBackground: string;
			createRoomButtonColor: string;
			createRoomTitleColor: string;
			separatorColor: string;
			separatorBackground: string;

			newRoomParagraphColor: string;
			newRoomLinkColor: string;

			roomHeaderBorder: string;
			roomTitleColor: string;
			roomTitleSpanBackground: string;
			roomTitleSpanColor: string;
			roomFormFooterSpanColor: string;
			roomFormFooterButtonColor: string;

			sunButton: string;
			moonButton: string;
		};
	}
}

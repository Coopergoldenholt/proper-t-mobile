import { SAVE_SESSION, DESTROY_SESSION } from "../actionTypes";

const initialState = {};

export const saveSession = (companyId: string, email: string, id: string, loggedIn: boolean, name: string, avatar: string | null) => {
	return {
		type: SAVE_SESSION,
		payload: {
			companyId: companyId,
			email: email,
			userId: id,
			loggedIn: loggedIn,
			name: name,
			avatar: avatar
		},
	};
};
export const destroySession = () => {
	return {
		type: DESTROY_SESSION,
		payload: null,
	};
};

export default function (state = initialState, action: any) {
	const { type, payload } = action;
	switch (type) {
		case `${SAVE_SESSION}`:
			return { ...state, user: payload };
		case `${DESTROY_SESSION}`:
			return { ...state, user: payload };

		default:
			return state;
	}
}

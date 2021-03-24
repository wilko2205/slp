//Type Enum
export enum ActionTypes {
	//Config
	GET_CORE_CONFIG,
	GET_SETTINGS,
	FETCH_CURRENT_USER,
	LOGOUT,

	//Users
	FETCH_USER,
	FETCH_ALL_USERS,
	DELETE_USER,

	//Competitions
	FETCH_COMPETITION,
	FETCH_ALL_COMPETITIONS,
	DELETE_COMPETITION,

	//Games
	FETCH_GAME,
	FETCH_ALL_GAMES,
	DELETE_GAME,

	//Grounds
	FETCH_GROUND,
	FETCH_ALL_GROUNDS,
	DELETE_GROUND,

	//Teams
	FETCH_TEAM,
	FETCH_ALL_TEAMS,
	DELETE_TEAM,

	//Social Profiles
	FETCH_SOCIAL_PROFILE,
	FETCH_ALL_SOCIAL_PROFILES,
	DELETE_SOCIAL_PROFILE
}

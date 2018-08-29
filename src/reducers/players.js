import _ from 'lodash';

const players = (state = {}, action) => {
	switch (action.type) {
		case 'PICK_PLAYER': {
			const { id } = action;
			let updatedPlayers = {};

			Object.entries(state)
				.forEach(([tier, players]) => {
					const pickedPlayer = players[id];

					if (pickedPlayer) {
						pickedPlayer.tier = tier;
						pickedPlayer.id = id;
						updatedPlayers.picked = state.picked ? state.picked.concat(pickedPlayer) : [pickedPlayer];
						players = _.omit(players, id);
					}
					updatedPlayers[tier] = players;
				});

			return updatedPlayers;
		}
		case 'UNDO_PICK': {
			if (!state.picked || !state.picked.length) return state;

			let updatedState = {};
			const lastPicked = state.picked.slice(-1)[0];

			updatedState.picked = state.picked.filter((player) => player.id !== lastPicked.id);
						Object.entries(state)
				.forEach(([tier, players]) => {
					if (tier !== 'picked') {
						updatedState[tier] = players

						if (tier === lastPicked.tier) {
							updatedState[tier][lastPicked.id] = lastPicked;
						}
					}
			});
			return updatedState;
		}
		case 'IMPORT_PLAYERS': {
			return action.data;
		}
	  case 'TOGGLE_PLAYERS':
			return state.map(todo =>
				(todo.id === action.id) ? {...todo, completed: !todo.completed}: todo
			);
	  default:
			return state;
	}
}

export default players;
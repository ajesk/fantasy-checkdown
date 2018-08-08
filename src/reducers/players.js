import _ from 'lodash';

const players = (state = {}, action) => {
	console.log(action.type)

	switch (action.type) {
		case 'PICK_PLAYER': {
			const { id } = action;
			let updatedPlayers = {};

			Object.entries(state)
				.forEach(([tier, players]) => {
					const pickedPlayer = players[id];

					if (pickedPlayer) {
						pickedPlayer.tier = tier;
						updatedPlayers.picked = state.picked.concat(pickedPlayer);
						players = _.omit(players, id);
					}
					updatedPlayers[tier] = players;
				});

			return updatedPlayers;
		}
		case 'UNDO_PICK': {
			let updatedState = {};
			const lastPicked = state.picked.slice(-1);
			updatedState.picked = state.picked.filter((player) => lastPicked.posRank !== player.posRank);
			
			console.log(updatedState.picked)
			Object.entries(state)
				.forEach(([tier, players]) => {
					if (tier !== 'picked') {
						console.log(tier)
						updatedState[tier] = players

						if (tier === lastPicked.tier) {
							updatedState[tier][lastPicked.posRank] = lastPicked;
						}
					}
			});

			console.log (updatedState)

			return state;
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
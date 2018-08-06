import _ from 'lodash';

const deleteProperty = ({[key]: _, ...newObj}, key) => newObj;

const players = (state = {}, action) => {
	console.log(action.type)

	switch (action.type) {
		case 'PICK_PLAYER': {
			const { id } = action;
			
			const updatedPlayers = Object.entries(state)
				.map(([tier, players]) => {
					const pickedPlayer = players[id];
					if (pickedPlayer) {
						pickedPlayer.tier = tier;
						state.picked = state.picked.concat(pickedPlayer);
						players = _.omit(players, id)
					}
					return [tier, players]
				});

			console.log(state)
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
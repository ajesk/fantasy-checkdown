function getLastPicked(state) {
  return Math.max(...state.filter(p => p.picked !== 0 && typeof p.picked !== 'undefined').map(p => p.picked), 0);
}

function pickPlayer(action, state) {
  const { rank } = action;

  console.log(rank)

  return state.map(player => {
    if (player.rank === rank) player.picked = getLastPicked(state) + 1;
    return player
  });
}

function undoLastPick(state) {
  const lastPicked = getLastPicked(state);

  return state.map(player => {
    if (player.picked === lastPicked) delete player.picked
    return player;
  })
}

const players = (state = [], action) => {
	switch (action.type) {
		case 'PICK_PLAYER': {
      return pickPlayer(action, state);
		}
		case 'UNDO_PICK': {
			return undoLastPick(state);
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
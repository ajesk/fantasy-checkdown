const players = (state = [], action) => {
	switch (action.type) {
	  case 'PICK_PLAYER': {
			return [
				...state,
				{
				id: action.id,
				text: action.text,
				completed: false
				}
			]
		}

		case 'IMPORT_PLAYERS': {
			return [...state, action.data];
		}
		
	  case 'TOGGLE_PLAYERS':
		return state.map(todo =>
		  (todo.id === action.id)
			? {...todo, completed: !todo.completed}
			: todo
		);
	  default:
		return state;
	}
}

export default players;
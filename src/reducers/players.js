function getLastPickedNumber(state) {
  return Math.max(
    ...state.filter(p => p.picked !== 0 && typeof p.picked !== 'undefined')
      .map(p => p.picked), 0
  );
}

function pickPlayer(action, state) {
  const { rank } = action;

  return state.map(player =>
    player.rk === rank ?
      setPickedPlayer(player, state) :
      player
  );
}

function draftPlayer(action, state) {
  const { rank } = action;

  return state.map(player =>
    player.rk === rank ?
      setPickedPlayer(player, state, true) :
      player
  );
}

function setPickedPlayer(player, state, drafted = false) {
  return {
    ...player,
    picked: getLastPickedNumber(state) + 1,
    drafted,
    tierBreak: state.some(x => !x.picked && parseInt(x.tiers) < parseInt(player.tiers))
  };
}

function undoLastPick(state) {
  const lastPicked = getLastPickedNumber(state);

  return state.map(player => {
    if (player.picked === lastPicked) {
      delete player.picked
      delete player.tierBreak
      delete player.drafted
    }
    return player;
  });
}

const players = (state = [], action) => {
  switch (action.type) {
    case 'PICK_PLAYER': {
      return pickPlayer(action, state);
    }
    case 'DRAFT_PLAYER': {
      return draftPlayer(action, state);
    }
    case 'UNDO_PICK': {
      return undoLastPick(state);
    }
    case 'RESET': {
      return [];
    }
    case 'IMPORT_PLAYERS': {
      return action.data;
    }
    case 'TOGGLE_PLAYERS':
      return state.map(todo =>
        (todo.id === action.id) ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
}

export default players;
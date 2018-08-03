export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const importPlayers = data => ({
	type: 'IMPORT_PLAYERS',
	data
})

export const pickPlayer = id => ({
  type: 'PICK_PLAYER',
  id
});

export const VisibilityFilters = {
  SHOW_AVAILABLE: 'SHOW_AVAILABLE',
  SHOW_PICKED: 'SHOW_PICKED'
};
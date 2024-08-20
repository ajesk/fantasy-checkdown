export const VisibilityFilters = {
  SHOW_AVAILABLE: 'SHOW_AVAILABLE',
  SHOW_PICKED: 'SHOW_PICKED',
  SHOW_MY_TEAM: 'SHOW_MY_TEAM'
};

export const toggleContent = filter => ({
  type: 'TOGGLE_CONTENT',
  filter
});

export const showTeam = value => ({
  type: VisibilityFilters.SHOW_MY_TEAM,
  filter: VisibilityFilters.SHOW_MY_TEAM,
  value
})

export const importPlayers = data => ({
	type: 'IMPORT_PLAYERS',
	data
})

export const pickPlayer = rank => ({
  type: 'PICK_PLAYER',
  rank
});

export const draftPlayer = rank => ({
  type: 'DRAFT_PLAYER',
  rank
});

export const undoPick = () => ({
  type: 'UNDO_PICK'
});

export const reset = () => ({
  type: 'RESET'
});

export const updateSearch = (value) => ({
  type: 'UPDATE_SEARCH',
  value: value
});

export const clearSearch = () => ({
  type: 'CLEAR_SEARCH'
});
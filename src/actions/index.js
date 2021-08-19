export const VisibilityFilters = {
  SHOW_AVAILABLE: 'SHOW_AVAILABLE',
  SHOW_PICKED: 'SHOW_PICKED'
};

export const toggleContent = filter => ({
  type: 'TOGGLE_CONTENT',
  filter
});

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


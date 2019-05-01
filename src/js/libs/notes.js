const notes =
{
	'1': { 'key': ['A'], 'color': 'w', 'oct': 0, 'asc': '' },
	'2': { 'key': ['A♯', 'B♭'], 'color': 'b', 'oct': 0, 'asc': '' },
	'3': { 'key': ['B'], 'color': 'w', 'oct': 0, 'asc': '' },

	'4': { 'key': ['C'], 'color': 'w', 'oct': 1, 'asc': '' },
	'5': { 'key': ['C♯', 'D♭'], 'color': 'b', 'oct': 1, 'asc': '' },
	'6': { 'key': ['D'], 'color': 'w', 'oct': 1, 'asc': '' },
	'7': { 'key': ['D♯', 'E♭'], 'color': 'b', 'oct': 1, 'asc': '' },
	'8': { 'key': ['E'], 'color': 'w', 'oct': 1, 'asc': '' },
	'9': { 'key': ['F'], 'color': 'w', 'oct': 1, 'asc': '' },
	'10': { 'key': ['F♯', 'G♭'], 'color': 'b', 'oct': 1, 'asc': '' },
	'11': { 'key': ['G'], 'color': 'w', 'oct': 1, 'asc': '' },
	'12': { 'key': ['G♯', 'A♭'], 'color': 'b', 'oct': 1, 'asc': '' },
	'13': { 'key': ['A'], 'color': 'w', 'oct': 1, 'asc': '' },
	'14': { 'key': ['A♯', 'B♭'], 'color': 'b', 'oct': 1, 'asc': '' },
	'15': { 'key': ['B'], 'color': 'w', 'oct': 1, 'asc': '' },

	'16': { 'key': ['C'], 'color': 'w', 'oct': 2, 'asc': '' },
	'17': { 'key': ['C♯', 'D♭'], 'color': 'b', 'oct': 2, 'asc': '' },
	'18': { 'key': ['D'], 'color': 'w', 'oct': 2, 'asc': '' },
	'19': { 'key': ['D♯', 'E♭'], 'color': 'b', 'oct': 2, 'asc': '' },
	'20': { 'key': ['E'], 'color': 'w', 'oct': 2, 'asc': '' },
	'21': { 'key': ['F'], 'color': 'w', 'oct': 2, 'asc': '' },
	'22': { 'key': ['F♯', 'G♭'], 'color': 'b', 'oct': 2, 'asc': '' },
	'23': { 'key': ['G'], 'color': 'w', 'oct': 2, 'asc': '' },
	'24': { 'key': ['G♯', 'A♭'], 'color': 'b', 'oct': 2, 'asc': '' },
	'25': { 'key': ['A'], 'color': 'w', 'oct': 2, 'asc': '' },
	'26': { 'key': ['A♯', 'B♭'], 'color': 'b', 'oct': 2, 'asc': '' },
	'28': { 'key': ['B'], 'color': 'w', 'oct': 2, 'asc': '' },

	'29': { 'key': ['C'], 'color': 'w', 'oct': 3, 'asc': '' },
	'30': { 'key': ['C♯', 'D♭'], 'color': 'b', 'oct': 3, 'asc': '' },
	'31': { 'key': ['D'], 'color': 'w', 'oct': 3, 'asc': '' },
	'32': { 'key': ['D♯', 'E♭'], 'color': 'b', 'oct': 3, 'asc': '' },
	'33': { 'key': ['E'], 'color': 'w', 'oct': 3, 'asc': '' },
	'34': { 'key': ['F'], 'color': 'w', 'oct': 3, 'asc': '' },
	'35': { 'key': ['F♯', 'G♭'], 'color': 'b', 'oct': 3, 'asc': '' },
	'36': { 'key': ['G'], 'color': 'w', 'oct': 3, 'asc': '' },
	'37': { 'key': ['G♯', 'A♭'], 'color': 'b', 'oct': 3, 'asc': '' },
	'38': { 'key': ['A'], 'color': 'w', 'oct': 3, 'asc': '72' },
	'39': { 'key': ['A♯', 'B♭'], 'color': 'b', 'oct': 3, 'asc': '85' },
	'40': { 'key': ['B'], 'color': 'w', 'oct': 3, 'asc': '74' },

	'41': { 'key': ['C'], 'color': 'w', 'oct': 4, 'asc': '65' },
	'42': { 'key': ['C♯', 'D♭'], 'color': 'b', 'oct': 4, 'asc': '87' },
	'43': { 'key': ['D'], 'color': 'w', 'oct': 4, 'asc': '83' },
	'44': { 'key': ['D♯', 'E♭'], 'color': 'b', 'oct': 4, 'asc': '69' },
	'45': { 'key': ['E'], 'color': 'w', 'oct': 4, 'asc': '68' },
	'46': { 'key': ['F'], 'color': 'w', 'oct': 4, 'asc': '70' },
	'47': { 'key': ['F♯', 'G♭'], 'color': 'b', 'oct': 4, 'asc': '84' },
	'48': { 'key': ['G'], 'color': 'w', 'oct': 4, 'asc': '71' },
	'49': { 'key': ['G♯', 'A♭'], 'color': 'b', 'oct': 4, 'asc': '89' },
	'50': { 'key': ['A'], 'color': 'w', 'oct': 4, 'asc': '' },
	'51': { 'key': ['A♯', 'B♭'], 'color': 'b', 'oct': 4, 'asc': '' },
	'52': { 'key': ['B'], 'color': 'w', 'oct': 4, 'asc': '' },

	'53': { 'key': ['C'], 'color': 'w', 'oct': 5, 'asc': '' },
	'54': { 'key': ['C♯', 'D♭'], 'color': 'b', 'oct': 5, 'asc': '' },
	'55': { 'key': ['D'], 'color': 'w', 'oct': 5, 'asc': '' },
	'56': { 'key': ['D♯', 'E♭'], 'color': 'b', 'oct': 5, 'asc': '' },
	'57': { 'key': ['E'], 'color': 'w', 'oct': 5, 'asc': '' },
	'58': { 'key': ['F'], 'color': 'w', 'oct': 5, 'asc': '' },
	'59': { 'key': ['F♯', 'G♭'], 'color': 'b', 'oct': 5, 'asc': '' },
	'60': { 'key': ['G'], 'color': 'w', 'oct': 5, 'asc': '' },
	'61': { 'key': ['G♯', 'A♭'], 'color': 'b', 'oct': 5, 'asc': '' },
	'62': { 'key': ['A'], 'color': 'w', 'oct': 5, 'asc': '' },
	'63': { 'key': ['A♯', 'B♭'], 'color': 'b', 'oct': 5, 'asc': '' },
	'64': { 'key': ['B'], 'color': 'w', 'oct': 5, 'asc': '' },

	'65': { 'key': ['C'], 'color': 'w', 'oct': 6, 'asc': '' },
	'66': { 'key': ['C♯', 'D♭'], 'color': 'b', 'oct': 6, 'asc': '' },
	'67': { 'key': ['D'], 'color': 'w', 'oct': 6, 'asc': '' },
	'68': { 'key': ['D♯', 'E♭'], 'color': 'b', 'oct': 6, 'asc': '' },
	'69': { 'key': ['E'], 'color': 'w', 'oct': 6, 'asc': '' },
	'70': { 'key': ['F'], 'color': 'w', 'oct': 6, 'asc': '' },
	'71': { 'key': ['F♯', 'G♭'], 'color': 'b', 'oct': 6, 'asc': '' },
	'72': { 'key': ['G'], 'color': 'w', 'oct': 6, 'asc': '' },
	'73': { 'key': ['G♯', 'A♭'], 'color': 'b', 'oct': 6, 'asc': '' },
	'74': { 'key': ['A'], 'color': 'w', 'oct': 6, 'asc': '' },
	'75': { 'key': ['A♯', 'B♭'], 'color': 'b', 'oct': 6, 'asc': '' },
	'76': { 'key': ['B'], 'color': 'w', 'oct': 6, 'asc': '' },

	'77': { 'key': ['C'], 'color': 'w', 'oct': 1, 'asc': '' },
	'78': { 'key': ['C♯', 'D♭'], 'color': 'b', 'oct': 1, 'asc': '' },
	'79': { 'key': ['D'], 'color': 'w', 'oct': 1, 'asc': '' },
	'80': { 'key': ['D♯', 'E♭'], 'color': 'b', 'oct': 1, 'asc': '' },
	'81': { 'key': ['E'], 'color': 'w', 'oct': 1, 'asc': '' },
	'82': { 'key': ['F'], 'color': 'w', 'oct': 1, 'asc': '' },
	'83': { 'key': ['F♯', 'G♭'], 'color': 'b', 'oct': 1, 'asc': '' },
	'84': { 'key': ['G'], 'color': 'w', 'oct': 1, 'asc': '' },
	'85': { 'key': ['G♯', 'A♭'], 'color': 'b', 'oct': 1, 'asc': '' },
	'86': { 'key': ['A'], 'color': 'w', 'oct': 1, 'asc': '' },
	'87': { 'key': ['A♯', 'B♭'], 'color': 'b', 'oct': 1, 'asc': '' },
	'88': { 'key': ['B'], 'color': 'w', 'oct': 1, 'asc': '' }
};

export { notes };
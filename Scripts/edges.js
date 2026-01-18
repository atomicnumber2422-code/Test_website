const edges = {
	Gate: [
		{ to: "path1_1", weight: 2 }
	],
	
	path1_1: [
		{ to: "Gate", weight: 2 },
		{ to: "path1_2", weight: 5 },
		{ to: "path1_18", weight: 3 }
	],
	
	path1_2: [
		{ to: "path1_1", weight: 5 },
		{ to: "path1_3", weight: 8 }
	],
	
	path1_3: [
		{ to: "path1_2", weight: 8 },
		{ to: "Fajardo", weight: 2 },
		{ to: "path1_14", weight: 5}
	],
	
	Fajardo: [
		{ to: "path1_3", weight: 2 },
		{ to: "path1_4", weight: 3 }
	],
	
	path1_4: [
		{ to: "Fajardo", weight: 3 },
		{ to: "path1_10", weight: 3 },
		{ to: "path1_5", weight: 4 }
	],
	path1_5: [
		{ to: "path1_4", weight: 4 },
		{ to: "GSP", weight: 3 },
		{ to: "path1_6", weight: 4}
	],
	
	GSP : [
		{ to: "path1_5", weight: 3 }
	],
	
	path1_6: [
		{ to: "path1_5", weight: 4},
		{ to: "path1_7", weight: 4 },
		{ to: "path1_12", weight: 5}
	],
	
	path1_7: [
		{ to: "path1_6", weight: 4 },
		{ to: "path1_8", weight: 3 },
		{ to: "path1_15", weigt: 2 }
	],
	
	path1_8 : [
		{ to: "path1_7", weight: 3 },
		{ to: "path1_9", weight: 2 },
		{ to: "MAPEH", weight: 1}
	],
	
	MAPEH : [
		{ to: "path1_8", weight: 1}
	],
	
	path1_9: [
		{ to: "path1_8", weight: 2 },
		{ to: "Discipline", weight: 1 }
	],
	
	Discipline: [
		{ to: "path1_9", weight: 1 }
	],
	
	path1_10 : [
		{ to: "path1_4", weight: 3 },
		{ to: "path1_11", weight: 1 }
	],
	
	path1_11 : [
		{ to: "path1_10", weight: 1 },
		{ to: "CR", weight: 1 }
	],
	
	CR : [
		{ to: "path1_11", weight: 1}
	],
	
	path1_12 : [
		{ to: "path1_6", weight: 5},
		{ to: "path1_13", weight: 1 }
	],
	
	path1_13 : [
		{ to: "path1_12", weight: 1 },
		{ to: "path1_14", weight: 1 }
	],
	
	path1_14 : [
		{ to: "path1_18", weight: 5},
		{ to: "path1_13", weight: 1 },
		{ to: "Gym", weight: 5 }
	],
	
	Gym : [
		{ to: "path1_14", weight: 5 }	
	],
	
	path1_15 : [
		{ to: "path1_7", weigt: 2 },
		{ to: "path1_17", weight: 2 }
	],
	
	path1_16 : [
		{ to: "path1_17", weight: 2 }
	],
	
	path1_17: [
		{ to: "path1_15", weight: 2 },
		{ to: "path1_16", weight: 2 }
	],
	
	path1_18 : [
		{ to: "path1_14", weight: 5},
		{ to: "path1_18", weight: 2 },
		{ to: "path:2_1", weight: 3 }
	]
	
	
};
	
	
	
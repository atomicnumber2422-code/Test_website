const edges = {
	Gate: [
		{ to: "path1_1", weight: 2 }
	],
	path1_1: [
		{ to: "Gate", weight: 2 },
		{ to: "path1_2", weight: 5 },
		{ to: "path1_7", weight: 3 },
		//{ to: "stairs8", weight: 2 }
	],
	path1_2: [
		{ to: "path1_1", weight: 5 },
		{ to: "path1_3", weight: 10 }
	],
	path1_3: [
		{ to: "path1_2", weight: 10 },
		{ to: "path1_4", weight: 3 },
		{ to: "Fajardo", weight: 1 },
		{ to: "path1_6", weight: 5 }
	],
	path1_4: [
		{ to: "path1_3", weight: 3 },
		{ to: "path1_5", weight: 5 }
	],
	path1_5: [
		{ to: "path1_4", weight: 5 },
		{ to: "path1_6", weight: 3 },
		{ to: "path1_8", weight: 2 },
		{ to: "Gym", weight: 13 }
	],
	path1_6: [
		{ to: "path1_5", weight: 3 },
		{ to: "path1_3", weight: 5 },
		{ to: "path1_7", weight: 7 }
	],
	path1_7: [
		{ to: "path1_6", weight: 7 },
		{ to: "path1_1", weight: 3 },
		{ to: "path2_1", weight: 11}
	],
	path1_8: [
		{ to: "path1_5", weight: 2 },
		{ to: "path1_9", weight: 2 }
	],
	path1_9: [
		{ to: "path1_8", weight: 2 },
		{ to: "path1_10", weight: 3 }
	],
	path1_10: [
		{ to: "path1_11", weight: 1 },
		{ to: "path1_9", weight: 3 },
		{ to: "path2_13", weight: 6 }
	],
	path1_11: [
		{ to: "path1_10", weight: 1 },
		{ to: "path1_12", weight: 2 },
		{ to: "path1_19", weight: 4 }
	],
	path1_12: [
		{ to: "path1_11", weight: 2 },
		{ to: "path1_14", weight: 2 },
		{ to: "path1_13", weight: 3 },
		{ to: "path2_14", weight: 6 }
	],
	path1_13: [
		{ to: "path1_12", weight: 3 }
		//{ to: "stairs3", weight: 1 }
	],
	path1_14: [
		{ to: "path1_12", weight: 2 },
		{ to: "MAPEH", weight: 1 },
		{ to: "path1_15", weight: 1 }
	],
	path1_15: [
		{ to: "path1_14", weight: 1 },
		{ to: "Discipline", weight: 1},
		{ to: "path1_16", weight: 2 } 
	],
	path1_16: [
		{ to: "path1_17", weight: 2 },
		{ to: "path1_15", weight: 2 },
		{ to: "path1_18", weight: 3 }
	],
	path1_17: [
		{ to: "path1_16", weight: 2 },
		{ to: "CR", weight: 2 }
	],
	path1_18: [
		{ to: "path1_19", weight: 3 },
		{ to: "path1_16", weight: 3 },
		{ to: "Fajardo", weight: 7 }
	],
	path1_19: [
		{ to: "path1_18", weight: 3 },
		{ to: "GSP", weight: 1 }
	],
	path1_20: [
		{ to: "stairs8", weight: 1 },
		{ to: "Security", weight: 8 }
	],
	path1_21: [
		{ to: "stairs3", weight: 1 },
		{ to: "Perez", weight: 8 }
	],
	Fajardo: [
		{ to: "path1_3", weight: 1 },
		{ to: "path1_18", weight: 7 },
		{ to: "stairs1", weight: 1 }
	],
	MAPEH: [
		{ to: "path1_14", weight: 1 }
	],
	Discipline: [
		{ to: "path1_15", weight: 1 }
	],
	CR: [
		{ to: "path1_17", weight: 2 }
	],
	Gym: [
		{ to: "path1_5", weight: 13 },
		{ to: "path2_11", weight: 5 },
		{ to: "path2_10", weight: 3 }
	],
	GSP: [
		{ to: "path1_19", weight: 1 }
	],
	path2_1: [
		{ to: "path1_7", weight: 11 },
		{ to: "path2_2", weight: 2 },
		{ to: "Security", weight: 3 }
	],
	path2_2: [
		{ to: "path2_1", weight: 2 },
		{ to: "path2_7", weight: 11 },
		{ to: "path2_3", weight: 5 }
	],
	path2_3: [
		{ to: "path2_2", weight: 5 },
		{ to: "path2_4", weight: 3 }
	],
	path2_4: [
		{ to: "path2_3", weight: 3 },
		{ to: "path2_10", weight: 5 },
		{ to: "path2_5", weight: 5 },
		{ to: "SHS", weight: 2}
	],
	path2_5: [
		{ to: "path2_4", weight: 5 },
		{ to: "path2_6", weight: 4 },
		{ to: "AVR", weight: 2 }
	],
	path2_6: [
		{ to: "path2_8", weight: 5 },
		{ to: "path2_5", weight: 4 },
		{ to: "path3_16", weight: 3 }
	],
	path2_7: [
		{ to: "path2_8", weight: 1 },
		{ to: "path2_2", weight: 11 }
	],
	path2_8: [
		{ to: "path2_6", weight: 5 },
		{ to: "path2_7", weight: 1 }
	],
	path2_9: [
		//{ to: "stairs7", weight: 1 },
		{ to: "Security", weight: 8 }
	],
	path2_10: [
		{ to: "path2_4", weight: 5 },
		{ to: "path3_17", weight: 10 },
		{ to: "Gym", weight: 3 }
	],
	path2_11: [
		{ to: "Gym", weight: 5 },
		{ to: "path2_12", weight: 3 }
	],
	path2_12: [
		{ to: "path2_11", weight: 3 },
		{ to: "path2_16", weight: 5 },
		{ to: "path2_13", weight: 6 }
	],
	path2_13: [
		{ to: "path2_12", weight: 6 },
		{ to: "Canteen", weight: 2 },
		{ to: "path1_10", weight: 6 }
	],
	path2_14: [
		{ to: "path2_15", weight: 1 },
		{ to: "Canteen", weight: 2 },
		{ to: "path1_12", weight: 6 }
	],
	path2_15: [
		{ to: "path2_16", weight: 6 },
		{ to: "path2_14", weight: 1 }
	],
	path2_16: [
		{ to: "path2_15", weight: 6 },
		{ to: "path2_17", weight: 2 },
		{ to: "path2_12", weight: 5 }
	],
	path2_17: [
		{ to: "path2_16", weight: 2 },
		{ to: "Perez", weight: 1 },
		{ to: "path2_18", weight: 14 }
	],
	path2_18: [
		{ to: "path2_17", weight: 14 },
		{ to: "path3_1", weight: 2 },
		{ to: "path2_19", weight: 1 }
	],
	path2_19: [
		//{ to: "stairs4", weight: 1 },
		{ to: "Perez", weight: 14 },
		{ to: "path2_18", weight: 1 }
	],
	Perez: [
		{ to: "path2_19", weight: 14 },
		{ to: "path1_21", weight: 14 },
		{ to: "path2_17", weight: 1 }
	],
	Canteen: [
		{ to: "path2_13", weight: 2 },
		{ to: "path2_14", weight: 2 }
	],
	SHS: [
		{ to: "path2_4", weight: 2 } 
	],
	AVR: [
		{ to: "path2_5", weight: 2 }
	],
	Security: [
		{ to: "path2_1", weight: 3 },
		{ to: "path1_20", weight: 8 },
		{ to: "path2_9", weight: 8 }
	],
	path3_1: [
		{ to: "path2_18", weight: 2 },
		{ to: "CRg", weight: 2 },
		{ to: "path3_2", weight: 2 }
	],
	path3_2: [
		{ to: "Canteen_mr", weight: 2 },
		{ to: "path3_3", weight: 2 },
		{ to: "path3_1", weight: 2 }
	],
	path3_3: [
		{ to: "path3_22", weight: 2 },
		{ to: "path3_2", weight: 2 },
		{ to: "path3_4", weight: 3 }
	],
	path3_4: [
		{ to: "path3_3", weight: 3 },
		{ to: "path3_5", weight: 6 },
		{ to: "path3_8", weight: 3 }
	],
	path3_5: [
		{ to: "path3_6", weight: 3 },
		{ to: "DPWH", weight: 2 },
		{ to: "path3_4", weight: 8 }
	],
	path3_6: [
		{ to: "path3_5", weight: 3 },
		{ to: "path3_19", weight: 4 },
		{ to: "path3_7", weight: 2 }
	],
	path3_7: [
		{ to: "path3_6", weight: 2 },
		{ to: "path3_8", weight: 4 },
		{ to: "Library", weight: 7 }
	],
	path3_8: [
		{ to: "path3_7", weight: 4 },
		{ to: "path3_9", weight: 3 },
		{ to: "path3_4", weight: 3 }
	],
	path3_9: [
		{ to: "path3_8", weight: 3 },
		{ to: "path3_10", weight: 3 }
	],
	path3_10: [
		{ to: "path3_9", weight: 3 },
		{ to: "path3_11", weight: 3 }
	],
	path3_11: [
		{ to: "path3_10", weight: 3 },
		{ to: "path3_12", weight: 3 }
	],
	path3_12: [
		{ to: "path3_11", weight: 3 },
		{ to: "path3_13", weight: 4 }
	],
	path3_13: [
		{ to: "SHSB", weight: 2 },
		{ to: "path3_12", weight: 4 },
		{ to: "path3_14", weight: 6 }
	],
	path3_14: [
		{ to: "path3_13", weight: 6 },
		{ to: "path3_15", weight: 2 }
	],
	path3_15: [
		{ to: "path3_14", weight: 2 },
		{ to: "path3_16", weight: 1 },
		{ to: "JHS", weight: 3 }
	],
	path3_16: [
		{ to: "path3_17", weight: 6 },
		{ to: "path2_6", weight: 2 },
		{ to: "path3_15", weight: 1 }
	],
	path3_17: [
		{ to: "path3_16", weight: 6 },
		{ to: "path3_18", weight: 4 },
		{ to: "path2_10", weight: 10 }
	],
	path3_18: [
		{ to: "path3_17", weight: 4 },
		{ to: "path3_12", weight: 3 }
	],
	path3_19: [
		{ to: "path3_6", weight: 4 },
		{ to: "path3_20", weight: 6 },
		{ to: "SPJ", weight: 1 }
	],
	path3_20: [
		{ to: "path3_19", weight: 6 },
		{ to: "path3_21", weight: 2 }
	],
	path3_21: [
		{ to: "path3_20", weight: 2 },
		{ to: "CRb", weight: 2 }
	],
	path3_22: [
		{ to: "path3_3", weight: 2 },
		{ to: "DPWH", weight: 7 },
		//{ to: "stairs5", weight: 1 }
	],
	path3_23: [
		//{ to: "stairs6", weight: 1 },
		{ to: "DPWH", weight: 4 }
	],
	SPJ: [
		{ to: "path3_19", weight: 1 }
	],
	Library: [
		{ to: "path3_7", weight: 7 }
	],
	SHSB: [
		{ to: "path3_13", weight: 2 }
	],
	JHS: [
		{ to: "path3_15", weight: 3 }
	],
	DPWH: [
		{ to: "path3_5", weight: 2 },
		{ to: "path3_23", weight: 4 },
		{ to: "path3_22", weight: 7 }
	],
	CRg: [
		{ to: "path3_1", weight: 2 }
	],
	CRb: [
		{ to: "path3_21", weight: 2 }
	],
	Canteen_mr: [
		{ to: "path3_2", weight: 2 }
	],
	/*stairs1: [
		{ to: "Fajardo", weight: 1 }
	],
	stairs3: [
		{ to: "path1_13", weight: 1 },
		{ to: "path1_21", weight: 1 }
	],
	stairs4: [
		{ to: "path2_19", weight: 1 }
	],
	stairs5: [
		{ to: "path3_22", weight: 1 }
	],
	stairs6: [
		{ to: "path3_23", weight: 1 }
	],
	stairs7: [
		{ to: "path2_9", weight: 2 }
	],
	stairs8: [
		{ to: "path1_1", weight: 2 },
		{ to: "path1_20", weight: 2 }
	]*/
	
	
	
};
	
	
	
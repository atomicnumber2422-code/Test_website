const nodes = [
	//Buildings and Locations
	{
		id: "Gate", 
		name: "Main Gate", 
		map: "GENERAL_MAP.png", 
		x: 28.83, 
		y: 87.65, 
		type: "room",
		floor: 0,
		selectable : true
	},
	{
		id: "Fajardo", 
		name: "Fajardo Building", 
		map: "GENERAL_MAP.png", 
		x: 16.41, 
		y: 58.23, 
		type: "room",
		floor: 0,
		selectable : true
	},
	{
		id: "SB", 
		name: "Security Bank Building", 
		map: "GENERAL_MAP.png", 
		x: 52.22, 
		y: 76.26, 
		type: "room",
		floor: 0,
		selectable : true
	},
	{
		id: "SHS", 
		name: "Senior High School (SHS) Buidling", 
		map: "GENERAL_MAP.png", 
		x: 74.34, 
		y: 51.06, 
		type: "room",
		floor: 0,
		selectable : true
	},
	{
		id: "DPWH", 
		name: "DPWH Building", 
		map: "GENERAL_MAP.png", 
		x: 87.04, 
		y: 26.8, 
		type: "room",
		floor: 0,
		selectable : true
	},
	{
		id: "Perez", 
		name: "Perez Building", 
		map: "GENERAL_MAP.png", 
		x: 48.63, 
		y: 26.8, 
		type: "room",
		floor: 0,
		selectable : true
	},
	{
		id: "CR", 
		name: "CR", 
		map: "GENERAL_MAP.png", 
		x: 13.68, 
		y: 22.96, 
		type: "room",
		floor: 0,
		selectable : true
	},
	{
		id: "Discipline", 
		name: "Discipline Office", 
		map: "GENERAL_MAP.png", 
		x: 13.68, 
		y: 22.96, 
		type: "room",
		floor: 0,
		selectable : true
	},
	{
		id: "MAPEH", 
		name: "MAPEH Department", 
		map: "GENERAL_MAP.png", 
		x: 23.21, 
		y: 22.38, 
		type: "room",
		floor: 0,
		selectable : true
	},
	{
		id: "Canteen", 
		name: "Canteen", 
		map: "GENERAL_MAP.png", 
		x: 35.06, 
		y: 32.67, 
		type: "room",
		floor: 0,
		selectable : true
	},
	{
		id: "Gym", 
		name: "Gymnasium", 
		map: "GENERAL_MAP.png", 
		x: 50.5, 
		y: 50.99, 
		type: "room",
		floor: 0,
		selectable : true
	},
	{
		id: "AVR", 
		name: "Audio Visual Room", 
		map: "GENERAL_MAP.png", 
		x: 64.11, 
		y: 69.6, 
		type: "room",
		floor: 0,
		selectable : true
	},
	{
		id: "JHS", 
		name: "JHS Faculty Office", 
		map: "GENERAL_MAP.png", 
		x: 71.85, 
		y: 69.6, 
		type: "room",
		floor: 0,
		selectable : true
	},
	{
		id: "SHSF", 
		name: "SHS Faculty Office", 
		map: "GENERAL_MAP.png", 
		x: 56.25, 
		y: 69.6, 
		type: "room",
		floor: 0,
		selectable : true
	},
	{
		id: "CanteenMR", 
		name: "Canteen (Mang Rey)", 
		map: "GENERAL_MAP.png", 
		x: 74.33, 
		y: 21.3, 
		type: "room",
		floor: 0,
		selectable : true
	},
	{
		id: "CRg", 
		name: "CR (Girls)", 
		map: "GENERAL_MAP.png", 
		x: 71.16, 
		y: 21.3, 
		type: "room",
		floor: 0,
		selectable : true
	},
	{
		id: "CRb", 
		name: "CR (Boys)", 
		map: "GENERAL_MAP.png", 
		x: 93.65, 
		y: 45.89, 
		type: "room",
		floor: 0,
		selectable : true
	},
	{
		id: "SPJ", 
		name: "SPJ Lab", 
		map: "GENERAL_MAP.png", 
		x: 94.26, 
		y: 33.46, 
		type: "room",
		floor: 0,
		selectable : true
	},
	{
		id: "GSP", 
		name: "GSP Garden", 
		map: "GENERAL_MAP.png", 
		x: 21.17, 
		y: 31.36, 
		type: "room",
		floor: 0,
		selectable : true
	},
	{
		id: "Library", 
		name: "Library", 
		map: "GENERAL_MAP.png", 
		x: 85.25, 
		y: 46.64, 
		type: "room",
		floor: 0,
		selectable : true
	},
	{
		id: "Registrar", 
		name: "Registrar's Office", 
		map: "GENERAL_MAP.png", 
		x: 77.94, 
		y: 44.04, 
		type: "room",
		floor: 0,
		selectable : true
	},
	{
		id: "Finance", 
		name: "Finance's Office", 
		map: "GENERAL_MAP.png", 
		x: 77.94, 
		y: 51.06, 
		type: "room",
		floor: 0,
		selectable : true
	},
	{
		id: "Principal", 
		name: "Principal's Office", 
		map: "GENERAL_MAP.png", 
		x: 77.94, 
		y: 57.95, 
		type: "room",
		floor: 0,
		selectable : true
	},
//Path
	{
		id: "path1_1", 
		map: "GENERAL_MAP.png", 
		x: 28.83, 
		y: 85.82, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path1_2", 
		map: "GENERAL_MAP.png", 
		x: 18.36, 
		y: 85.82, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path1_3", 
		map: "GENERAL_MAP.png", 
		x: 18.36, 
		y: 58.23, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path1_4", 
		map: "GENERAL_MAP.png", 
		x: 18.36, 
		y: 50.99, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path1_5", 
		map: "GENERAL_MAP.png", 
		x: 16.41, 
		y: 35.49, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path1_6", 
		map: "GENERAL_MAP.png", 
		x: 16.41, 
		y: 27.89, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path1_7", 
		map: "GENERAL_MAP.png", 
		x: 13.68, 
		y: 27.89, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path1_8", 
		map: "GENERAL_MAP.png", 
		x: 21.17, 
		y: 35.49, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path1_9", 
		map: "GENERAL_MAP.png", 
		x: 26.31, 
		y: 35.49, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path1_10", 
		map: "GENERAL_MAP.png", 
		x: 26.31, 
		y: 48.09, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path1_11", 
		map: "GENERAL_MAP.png", 
		x: 28.83, 
		y: 48.09, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path1_12", 
		map: "GENERAL_MAP.png", 
		x: 28.83, 
		y: 50.99, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path1_13", 
		map: "GENERAL_MAP.png", 
		x: 28.83, 
		y: 76.26, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path1_14", 
		map: "GENERAL_MAP.png", 
		x: 13.68, 
		y: 27.89, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path1_15", 
		map: "GENERAL_MAP.png", 
		x: 23.21, 
		y: 27.89, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path1_16", 
		map: "GENERAL_MAP.png", 
		x: 26.31, 
		y: 27.89, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path1_17", 
		map: "GENERAL_MAP.png", 
		x: 35.06, 
		y: 27.89, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path1_18", 
		map: "GENERAL_MAP.png", 
		x: 35.06, 
		y: 26.8, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path1_19", 
		map: "GENERAL_MAP.png", 
		x: 35.06, 
		y: 38.68, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path1_20", 
		map: "GENERAL_MAP.png", 
		x: 32.13, 
		y: 76.26, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path2_1", 
		map: "GENERAL_MAP.png", 
		x: 45.45, 
		y: 38.68, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path2_2", 
		map: "GENERAL_MAP.png", 
		x: 50.5, 
		y: 38.68, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path2_3", 
		map: "GENERAL_MAP.png", 
		x: 58.86, 
		y: 38.68, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path2_4", 
		map: "GENERAL_MAP.png", 
		x: 66.84, 
		y: 38.68, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path2_5", 
		map: "GENERAL_MAP.png", 
		x: 70.06, 
		y: 38.68, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path2_6", 
		map: "GENERAL_MAP.png", 
		x: 70.06, 
		y: 44.04, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path2_7", 
		map: "GENERAL_MAP.png", 
		x: 70.14, 
		y: 50.99, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path2_8", 
		map: "GENERAL_MAP.png", 
		x: 68.35, 
		y: 50.99, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path2_9", 
		map: "GENERAL_MAP.png", 
		x: 68.35, 
		y: 50.99, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path2_10", 
		map: "GENERAL_MAP.png", 
		x: 56.25, 
		y: 50.99, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path2_11", 
		map: "GENERAL_MAP.png", 
		x: 52.22, 
		y: 62.14, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path2_12", 
		map: "GENERAL_MAP.png", 
		x: 56.25, 
		y: 62.14, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path2_13", 
		map: "GENERAL_MAP.png", 
		x: 64.11, 
		y: 62.14, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path2_14", 
		map: "GENERAL_MAP.png", 
		x: 68.39, 
		y: 62.14, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path2_15", 
		map: "GENERAL_MAP.png", 
		x: 70.47, 
		y: 62.14, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path2_16", 
		map: "GENERAL_MAP.png", 
		x: 45.45, 
		y: 26.8, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path2_17", 
		map: "GENERAL_MAP.png", 
		x: 68.35, 
		y: 69.6, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path2_18", 
		map: "GENERAL_MAP.png", 
		x: 68.44, 
		y: 76.26, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path2_19", 
		map: "GENERAL_MAP.png", 
		x: 66.17, 
		y: 76.26, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path2_21", 
		map: "GENERAL_MAP.png", 
		x: 68.84, 
		y: 26.8, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path2_22", 
		map: "GENERAL_MAP.png", 
		x: 71.16, 
		y: 26.8, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path3_1", 
		map: "GENERAL_MAP.png", 
		x: 74.33, 
		y: 26.8, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path3_2", 
		map: "GENERAL_MAP.png", 
		x: 77.19, 
		y: 26.8, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path3_3", 
		map: "GENERAL_MAP.png", 
		x: 81.22, 
		y: 26.8, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path3_4", 
		map: "GENERAL_MAP.png", 
		x: 81.22, 
		y: 33.46, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path3_5", 
		map: "GENERAL_MAP.png", 
		x: 85.25, 
		y: 33.46, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path3_6", 
		map: "GENERAL_MAP.png", 
		x: 87.04, 
		y: 33.46, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path3_7", 
		map: "GENERAL_MAP.png", 
		x: 92.18, 
		y: 33.46, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path3_8", 
		map: "GENERAL_MAP.png", 
		x: 92.18, 
		y: 42.43, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path3_9", 
		map: "GENERAL_MAP.png", 
		x: 93.65, 
		y: 42.43, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path3_10", 
		map: "GENERAL_MAP.png", 
		x: 81.22, 
		y: 38.51, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path3_11", 
		map: "GENERAL_MAP.png", 
		x: 77.76, 
		y: 38.51, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path3_12", 
		map: "GENERAL_MAP.png", 
		x: 74.34, 
		y: 38.51, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path3_13", 
		map: "GENERAL_MAP.png", 
		x: 74.34, 
		y: 44.04, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path3_14", 
		map: "GENERAL_MAP.png", 
		x: 74.34, 
		y: 62.36, 
		type: "path",
		floor: 0,
		selectable : false
	},
	{
		id: "path3_15", 
		map: "GENERAL_MAP.png", 
		x: 74.34, 
		y: 57.95, 
		type: "path",
		floor: 0,
		selectable : false
	}
];
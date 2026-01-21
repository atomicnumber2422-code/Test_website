const nodes = [
	//Buildings and Locations
	{
		id: "Gate", 
		name: "Main Gate", 
		map: "SCIWAY_MAP.png", 
		x: 27.30, 
		y: 90.33, 
		type: "poi",
		selectable : true
	},
	{
		id: "Fajardo", 
		name: "Fajardo Building", 
		map: "SCIWAY_MAP.png", 
		x: 14.4, 
		y: 53, 
		type: "poi",
		selectable : true
	},
	{
		id: "Security", 
		name: "Security Bank Building", 
		map: "SCIWAY_MAP.png", 
		x: 48.73, 
		y: 84.11, 
		type: "poi",
		selectable : true
	},
	{
		id: "CR", 
		name: "CR", 
		map: "SCIWAY_MAP.png", 
		x: 11.51, 
		y: 9.44, 
		type: "poi",
		selectable : true
	},
	{
		id: "GSP", 
		name: "GSP Garden", 
		map: "SCIWAY_MAP.png", 
		x: 19.4, 
		y: 19.58, 
		type: "poi",
		selectable : true
	},
	{
		id: "MAPEH", 
		name: "MAPEH Department", 
		map: "SCIWAY_MAP.png", 
		x: 21.51, 
		y: 9.44, 
		type: "poi",
		selectable : true
	},
	{
		id: "Discipline", 
		name: "Discipline Office", 
		map: "SCIWAY_MAP.png", 
		x: 17.51, 
		y: 9.44, 
		type: "poi",
		selectable : true
	},
	{
		id: "Perez", 
		name: "Perez Building", 
		map: "SCIWAY_MAP.png", 
		x: 48.18, 
		y: 8.52, 
		type: "poi",
		selectable : true
	},
	{
		id: "Canteen", 
		name: "Canteen", 
		map: "SCIWAY_MAP.png", 
		x: 33.96, 
		y: 21.42, 
		type: "poi",
		selectable : true
	},
	{
		id: "Gym", 
		name: "Gymnasium", 
		map: "SCIWAY_MAP.png", 
		x: 50.29, 
		y: 43.78, 
		type: "poi",
		selectable : true
	},
	{
		id: "CRg", 
		name: "CR (girls)", 
		map: "SCIWAY_MAP.png", 
		x: 72.18, 
		y: 7.82, 
		type: "poi",
		selectable : true
	},
	{
		id: "Canteen_mr", 
		name: "Canteen - Mang Rey", 
		map: "SCIWAY_MAP.png", 
		x: 75.73, 
		y: 7.82, 
		type: "poi",
		selectable : true
	},
	{
		id: "DPWH", 
		name: "DPWH Building", 
		map: "SCIWAY_MAP.png", 
		x: 89.84, 
		y: 7.82, 
		type: "poi",
		selectable : true
	},
	{
		id: "SPJ", 
		name: "SPJ Building", 
		map: "SCIWAY_MAP.png", 
		x: 96.62, 
		y: 22.57, 
		type: "poi",
		selectable : true
	},
	{
		id: "Library", 
		name: "Library", 
		map: "SCIWAY_MAP.png", 
		x: 87.62, 
		y: 39.86, 
		type: "poi",
		selectable : true
	},
	{
		id: "SHSB", 
		name: "SHS Building", 
		map: "SCIWAY_MAP.png", 
		x: 79.07, 
		y: 43.78, 
		type: "poi",
		selectable : true
	},
	{
		id: "AVR", 
		name: "Audio Visual Room (AVR)", 
		map: "SCIWAY_MAP.png", 
		x: 64.07, 
		y: 66.36, 
		type: "poi",
		selectable : true
	},
	{
		id: "JHS", 
		name: "JHS Faculty Office", 
		map: "SCIWAY_MAP.png", 
		x: 73.07, 
		y: 66.36, 
		type: "poi",
		selectable : true
	},
	{
		id: "SHS", 
		name: "SHS Faculty Office", 
		map: "SCIWAY_MAP.png", 
		x: 56.51, 
		y: 66.36, 
		type: "poi",
		selectable : true
	},
	{
		id: "CRb", 
		name: "CR (boys)", 
		map: "SCIWAY_MAP.png", 
		x: 96.07, 
		y: 37.55, 
		type: "poi",
		selectable : true
	},
	
	//Path
	{
		id: "path1_1", 
		map: "SCIWAY_MAP.png", 
		x: 27.30, 
		y: 87.11, 
		type: "path",
		selectable : false
	},
	{
		id: "path1_2", 
		map: "SCIWAY_MAP.png", 
		x: 16.29, 
		y: 87.11, 
		type: "path",
		selectable : false
	},
	{
		id: "path1_3", 
		map: "SCIWAY_MAP.png", 
		x: 16.29, 
		y: 53, 
		type: "path",
		selectable : false
	},
	{
		id: "path1_4", 
		map: "SCIWAY_MAP.png", 
		x: 16.29, 
		y: 43.78, 
		type: "path",
		selectable : false
	},
	{
		id: "path1_5", 
		map: "SCIWAY_MAP.png", 
		x: 27.30, 
		y: 43.78, 
		type: "path",
		selectable : false
	},
	{
		id: "path1_6", 
		map: "SCIWAY_MAP.png", 
		x: 27.30, 
		y: 53, 
		type: "path",
		selectable : false
	},
	{
		id: "path1_7", 
		map: "SCIWAY_MAP.png", 
		x: 27.30, 
		y: 74.89, 
		type: "path",
		selectable : false
	},
	{
		id: "path1_8", 
		map: "SCIWAY_MAP.png", 
		x: 27.30, 
		y: 40.55, 
		type: "path",
		selectable : false
	},
	{
		id: "path1_9", 
		map: "SCIWAY_MAP.png", 
		x: 24.73, 
		y: 40.55, 
		type: "path",
		selectable : false
	},
	{
		id: "path1_10", 
		map: "SCIWAY_MAP.png", 
		x: 24.73, 
		y: 28.8, 
		type: "path",
		selectable : false
	},
	{
		id: "path1_11", 
		map: "SCIWAY_MAP.png", 
		x: 24.73, 
		y: 24.88, 
		type: "path",
		selectable : false
	},
	{
		id: "path1_12", 
		map: "SCIWAY_MAP.png", 
		x: 24.73, 
		y: 15.66, 
		type: "path",
		selectable : false
	},
	{
		id: "path1_13", 
		map: "SCIWAY_MAP.png", 
		x: 24.73, 
		y: 5.52, 
		type: "path",
		selectable : false
	},
	{
		id: "path1_14", 
		map: "SCIWAY_MAP.png", 
		x: 21.51, 
		y: 15.66, 
		type: "path",
		selectable : false
	},
	{
		id: "path1_15", 
		map: "SCIWAY_MAP.png", 
		x: 17.51, 
		y: 15.66, 
		type: "path",
		selectable : false
	},
	{
		id: "path1_16", 
		map: "SCIWAY_MAP.png", 
		x: 14.4, 
		y: 15.66, 
		type: "path",
		selectable : false
	},
	{
		id: "path1_17", 
		map: "SCIWAY_MAP.png", 
		x: 11.51, 
		y: 15.66, 
		type: "path",
		selectable : false
	},
	{
		id: "path1_18", 
		map: "SCIWAY_MAP.png", 
		x: 14.4, 
		y: 24.88, 
		type: "path",
		selectable : false
	},
	{
		id: "path1_19", 
		map: "SCIWAY_MAP.png", 
		x: 19.4, 
		y: 24.88, 
		type: "path",
		selectable : false
	},
	{
		id: "path1_20", 
		map: "SCIWAY_MAP.png", 
		x: 30.84, 
		y: 84.11, 
		type: "path",
		selectable : false
	},
	{
		id: "path1_21", 
		map: "SCIWAY_MAP.png", 
		x: 27.4, 
		y: 8.52, 
		type: "path",
		selectable : false
	},
	{
		id: "path2_1", 
		map: "SCIWAY_MAP.png", 
		x: 48.73, 
		y: 74.89, 
		type: "path",
		selectable : false
	},
	{
		id: "path2_2", 
		map: "SCIWAY_MAP.png", 
		x: 51.84, 
		y: 74.89, 
		type: "path",
		selectable : false
	},
	{
		id: "path2_3", 
		map: "SCIWAY_MAP.png", 
		x: 51.84, 
		y: 58.07, 
		type: "path",
		selectable : false
	},
	{
		id: "path2_4", 
		map: "SCIWAY_MAP.png", 
		x: 56.51, 
		y: 58.07, 
		type: "path",
		selectable : false
	},
	{
		id: "path2_5", 
		map: "SCIWAY_MAP.png", 
		x: 64.07, 
		y: 58.07, 
		type: "path",
		selectable : false
	},
	{
		id: "path2_6", 
		map: "SCIWAY_MAP.png", 
		x: 69.07, 
		y: 58.07, 
		type: "path",
		selectable : false
	},
	{
		id: "path2_7", 
		map: "SCIWAY_MAP.png", 
		x: 67.51, 
		y: 74.89, 
		type: "path",
		selectable : false
	},
	{
		id: "path2_8", 
		map: "SCIWAY_MAP.png", 
		x: 69.07, 
		y: 74.89, 
		type: "path",
		selectable : false
	},
	{
		id: "path2_9", 
		map: "SCIWAY_MAP.png", 
		x: 66.4, 
		y: 84.11, 
		type: "path",
		selectable : false
	},
	{
		id: "path2_10", 
		map: "SCIWAY_MAP.png", 
		x: 56.51, 
		y: 43.78, 
		type: "path",
		selectable : false
	},
	{
		id: "path2_11", 
		map: "SCIWAY_MAP.png", 
		x: 50.29, 
		y: 28.8, 
		type: "path",
		selectable : false
	},
	{
		id: "path2_12", 
		map: "SCIWAY_MAP.png", 
		x: 45.07, 
		y: 28.8, 
		type: "path",
		selectable : false
	},
	{
		id: "path2_13", 
		map: "SCIWAY_MAP.png", 
		x: 33.96, 
		y: 28.8, 
		type: "path",
		selectable : false
	},
	{
		id: "path2_14", 
		map: "SCIWAY_MAP.png", 
		x: 33.96, 
		y: 15.66, 
		type: "path",
		selectable : false
	},
	{
		id: "path2_15", 
		map: "SCIWAY_MAP.png", 
		x: 33.96, 
		y: 13.82, 
		type: "path",
		selectable : false
	},
	{
		id: "path2_16", 
		map: "SCIWAY_MAP.png", 
		x: 45.07, 
		y: 13.82, 
		type: "path",
		selectable : false
	},
	{
		id: "path2_17", 
		map: "SCIWAY_MAP.png", 
		x: 48.18, 
		y: 13.82, 
		type: "path",
		selectable : false
	},
	{
		id: "path2_18", 
		map: "SCIWAY_MAP.png", 
		x: 69.29, 
		y: 13.82, 
		type: "path",
		selectable : false
	},
	{
		id: "path2_19", 
		map: "SCIWAY_MAP.png", 
		x: 69.29, 
		y: 8.52, 
		type: "path",
		selectable : false
	},
	
	{
		id: "path3_1", 
		map: "SCIWAY_MAP.png", 
		x: 72.18, 
		y: 13.82, 
		type: "path",
		selectable : false
	},
	{
		id: "path3_2", 
		map: "SCIWAY_MAP.png", 
		x: 75.73, 
		y: 13.82, 
		type: "path",
		selectable : false
	},
	{
		id: "path3_3", 
		map: "SCIWAY_MAP.png", 
		x: 78.51, 
		y: 13.82, 
		type: "path",
		selectable : false
	},
	{
		id: "path3_4", 
		map: "SCIWAY_MAP.png", 
		x: 82.84, 
		y: 13.82, 
		type: "path",
		selectable : false
	},
	{
		id: "path3_5", 
		map: "SCIWAY_MAP.png", 
		x: 89.84, 
		y: 13.82, 
		type: "path",
		selectable : false
	},
	{
		id: "path3_6", 
		map: "SCIWAY_MAP.png", 
		x: 89.84, 
		y: 22.57, 
		type: "path",
		selectable : false
	},
	{
		id: "path3_7", 
		map: "SCIWAY_MAP.png", 
		x: 87.62, 
		y: 22.57, 
		type: "path",
		selectable : false
	},
	{
		id: "path3_8", 
		map: "SCIWAY_MAP.png", 
		x: 82.84, 
		y: 22.57, 
		type: "path",
		selectable : false
	},
	{
		id: "path3_9", 
		map: "SCIWAY_MAP.png", 
		x: 82.84, 
		y: 28.11, 
		type: "path",
		selectable : false
	},
	{
		id: "path3_10", 
		map: "SCIWAY_MAP.png", 
		x: 79.29, 
		y: 28.11, 
		type: "path",
		selectable : false
	},
	{
		id: "path3_11", 
		map: "SCIWAY_MAP.png", 
		x: 75.62, 
		y: 28.11, 
		type: "path",
		selectable : false
	},
	{
		id: "path3_12", 
		map: "SCIWAY_MAP.png", 
		x: 75.62, 
		y: 35.25, 
		type: "path",
		selectable : false
	},
	{
		id: "path3_13", 
		map: "SCIWAY_MAP.png", 
		x: 75.62, 
		y: 43.78, 
		type: "path",
		selectable : false
	},
	{
		id: "path3_14", 
		map: "SCIWAY_MAP.png", 
		x: 75.62, 
		y: 58.07, 
		type: "path",
		selectable : false
	},
	{
		id: "path3_15", 
		map: "SCIWAY_MAP.png", 
		x: 73.07, 
		y: 58.07, 
		type: "path",
		selectable : false
	},
	{
		id: "path3_16", 
		map: "SCIWAY_MAP.png", 
		x: 71.29, 
		y: 58.07, 
		type: "path",
		selectable : false
	},
	{
		id: "path3_17", 
		map: "SCIWAY_MAP.png", 
		x: 71.29, 
		y: 43.78, 
		type: "path",
		selectable : false
	},
	{
		id: "path3_18", 
		map: "SCIWAY_MAP.png", 
		x: 71.29, 
		y: 35.25, 
		type: "path",
		selectable : false
	},
	{
		id: "path3_19", 
		map: "SCIWAY_MAP.png", 
		x: 94.4, 
		y: 22.57, 
		type: "path",
		selectable : false
	},
	{
		id: "path3_20", 
		map: "SCIWAY_MAP.png", 
		x: 94.4, 
		y: 33.41, 
		type: "path",
		selectable : false
	},
	{
		id: "path3_21", 
		map: "SCIWAY_MAP.png", 
		x: 96.07, 
		y: 33.41, 
		type: "path",
		selectable : false
	},
	{
		id: "path3_22", 
		map: "SCIWAY_MAP.png", 
		x: 78.51, 
		y: 7.82, 
		type: "path",
		selectable : false
	},
	{
		id: "path3_23", 
		map: "SCIWAY_MAP.png", 
		x: 97.29, 
		y: 7.82, 
		type: "path",
		selectable : false
	},
	
	//stairs
	{
		id: "stairs1", 
		map: "SCIWAY_MAP.png", 
		x: 11.84, 
		y: 53, 
		type: "stairs",
		selectable : false
	},
	{
		id: "stairs2", 
		map: "SCIWAY_MAP.png", 
		x: 0, 
		y: 0, 
		type: "stairs",
		selectable : false
	},
	{
		id: "stairs3", 
		map: "SCIWAY_MAP.png", 
		x: 27.4, 
		y: 5.52, 
		type: "stairs",
		selectable : false
	},
	{
		id: "stairs4", 
		map: "SCIWAY_MAP.png", 
		x: 69.29, 
		y: 5.52, 
		type: "stairs",
		selectable : false
	},
	{
		id: "stairs5", 
		map: "SCIWAY_MAP.png", 
		x: 78.51, 
		y: 5.06, 
		type: "stairs",
		selectable : false
	},
	{
		id: "stairs6", 
		map: "SCIWAY_MAP.png", 
		x: 97.29, 
		y: 5.06, 
		type: "stairs",
		selectable : false
	},
	{
		id: "stairs7", 
		map: "SCIWAY_MAP.png", 
		x: 66.4, 
		y: 87.11, 
		type: "stairs",
		selectable : false
	},
	{
		id: "stairs8", 
		map: "SCIWAY_MAP.png", 
		x: 30.84, 
		y: 87.11, 
		type: "stairs",
		selectable : false
	}
	
	
];
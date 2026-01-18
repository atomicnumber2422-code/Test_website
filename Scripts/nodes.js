const nodes = [
	//Buildings
	{id: "Gate", name: "Main Gate", map: "GENERAL_MAP_FINAL.png", x: 23.89, y: 95.93, type: "poi"},
	{id: "Fajardo", name: "Fajardo Building", map: "GENERAL_MAP_FINAL.png", x: 8.57, y: 57.59, type: "poi"},
	{id: "CR", name: "CR", map: "GENERAL_MAP_FINAL.png", x: 6.68, y: 10.76, type: "poi"},
	{id: "GSP", name: "GSP Garden", map: "GENERAL_MAP_FINAL.png", x: 15.59, y: 22.12, type: "poi"},
	{id: "MAPEH", name: "MAPEH Department", map: "GENERAL_MAP_FINAL.png", x: 17.65, y: 10.76, type: "poi"},
	{id: "Discipline", name: "Discipline Office", map: "GENERAL_MAP_FINAL.png", x: 13.53, y: 10.76, type: "poi"},
	{id: "Perez", name: "Perez Building", map: "GENERAL_MAP_FINAL.png", x: 45.92, y: 9.27, type: "poi"},
	{id: "Canteen", name: "Canteen", map: "GENERAL_MAP_FINAL.png", x: 30.84, y: 24.17, type: "poi"},
	{id: "Gym", name: "Gymnasium", map: "GENERAL_MAP_FINAL.png", x: 47.94, y: 46.89, type: "poi"},
	{id: "CR (girls)", name: "CR (girls)", map: "GENERAL_MAP_FINAL.png", x: 70.93, y: 9.27, type: "poi"},
	{id: "Canteen (Mang Rey)", name: "Canteen (Mang Rey)", map: "GENERAL_MAP_FINAL.png", x: 74.01, y: 9.27, type: "poi"},
	{id: "DPWH", name: "DPWH Building", map: "GENERAL_MAP_FINAL.png", x: 89.23, y: 9.27, type: "poi"},
	{id: "SPJ", name: "SPJ Building", map: "GENERAL_MAP_FINAL.png", x: 96.45, y: 25.19, type: "poi"},
	{id: "CR (boys)", name: "CR (boys)", map: "GENERAL_MAP_FINAL.png", x: 96.12, y: 40.99, type: "poi"},
	{id: "Library", name: "Library", map: "GENERAL_MAP_FINAL.png", x: 87.23, y: 42.98, type: "poi"},
	{id: "SHS", name: "SHS Building", map: "GENERAL_MAP_FINAL.png", x: 77.67, y: 48.04, type: "poi"},
	{id: "JHS Faculty", name: "JHS Faculty", map: "GENERAL_MAP_FINAL.png", x: 71.9, y: 71.28, type: "poi"},
	{id: "AVR", name: "Audio Visual Room (AVR)", map: "GENERAL_MAP_FINAL.png", x: 62.67, y: 71.28, type: "poi"},
	{id: "SHS Faculty", name: "SHS Faculty", map: "GENERAL_MAP_FINAL.png", x: 54.34, y: 71.28, type: "poi"},
	{id: "Security", name: "Security Bank Building", map: "GENERAL_MAP_FINAL.png", x: 45.67, y: 88.92, type: "poi"},
	
	//Paths
	{
		id:"path1_1",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 23.84,
		y: 93.07
	},
	{
		id:"path1_2",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 11.65,
		y: 93.07
	},
	{
		id:"path1_3",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 11.65,
		y: 57.59
	},
	{
		id:"path1_4",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 8.57,
		y: 28.50
	},
	{
		id:"path1_5",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 15.59,
		y: 28.50
	},
	{
		id:"path1_6",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 20.90,
		y: 28.50
	},
	{
		id:"path1_7",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 20.90,
		y: 17.86
	},
	{
		id:"path1_8",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 17.65,
		y: 17.86
	},
	{
		id:"path1_9",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 13.53,
		y: 17.86
	},
	{
		id:"path1_10",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 8.57,
		y: 17.86
	},
	{
		id:"path1_11",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 6.68,
		y: 17.86
	},
	{
		id:"path1_12",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 20.90,
		y: 43.76
	},
	{
		id:"path1_13",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 23.84,
		y: 43.76
	},
	{
		id:"path1_14",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 23.84,
		y: 46.89
	},
	{
		id:"path1_15",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 20.90,
		y: 6.86
	},
	{
		id:"path1_16",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 23.64,
		y: 9.27
	},
	{
		id:"path1_17",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 23.64,
		y: 6.86
	},
	{
		id:"path1_18",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 23.84,
		y: 79.94
	},
	{
		id:"path1_19",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 11.65,
		y: 47.94
	}
	
	/*{Stairs -> Fajardo
		id:"path1_20",
		type:"path",
		map:"GENERAL_MAP_FINAL.png",
		x: 11.65,
		y: 47.94
	}*/
	
];
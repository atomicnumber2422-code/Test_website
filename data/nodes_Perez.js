const nodes = [
//1st floor nodes
	{
			id:"MAPEH",
			name:"MAPEH Department",
			map:"PEREZ_FINALBLDG_1.png",
			x: 9.18,
			y: 52.77,
			type:"room",
			floor: 0,
			selectable: true
	},
	{
			id:"Yamanaka",
			name:"8-Yamanaka",
			map:"PEREZ_FINALBLDG_1.png",
			x: 35.4,
			y: 37.22,
			type:"room",
			floor: 0,
			selectable: true
	},
	{
			id:"Venter",
			name:"8-Venter",
			map:"PEREZ_FINALBLDG_1.png",
			x: 45.51,
			y: 37.22,
			type:"room",
			floor: 0,
			selectable: true
	},
	{
			id:"ChemLab",
			name:"Chemistry Lab",
			map:"PEREZ_FINALBLDG_1.png",
			x: 54.96,
			y: 37.22,
			type:"room",
			floor: 0,
			selectable: true
	},
	{
			id:"HT",
			name:"Head Teachers' Office",
			map:"PEREZ_FINALBLDG_1.png",
			x: 63.73,
			y: 37.22,
			type:"room",
			floor: 0,
			selectable: true
	},
	{
			id:"Nicolelis",
			name:"8-Nicolelis",
			map:"PEREZ_FINALBLDG_1.png",
			x: 71.29,
			y: 37.22,
			type:"room",
			floor: 0,
			selectable: true
	},
	{
			id:"MathDept",
			name:"Math Department",
			map:"PEREZ_FINALBLDG_1.png",
			x: 80.73,
			y: 37.22,
			type:"room",
			floor: 0,
			selectable: true
	},
	{
			id:"SSLG",
			name:"SSLG",
			map:"PEREZ_FINALBLDG_1.png",
			x: 89.73,
			y: 37.22,
			type:"room",
			floor: 0,
			selectable: true
	},
	{
			id:"path1_1",
			map:"PEREZ_FINALBLDG_1.png",
			x: 96.51,
			y: 88.79,
			type:"path",
			floor: 0,
			selectable: false
	},
	{
			id:"path1_2",
			map:"PEREZ_FINALBLDG_1.png",
			x: 89.73,
			y: 88.79,
			type:"path",
			floor: 0,
			selectable: false
	},
	{
			id:"path1_3",
			map:"PEREZ_FINALBLDG_1.png",
			x: 80.73,
			y: 88.79,
			type:"path",
			floor: 0,
			selectable: false
	},
	{
			id:"path1_4",
			map:"PEREZ_FINALBLDG_1.png",
			x: 71.29,
			y: 88.79,
			type:"path",
			floor: 0,
			selectable: false
	},
	{
			id:"path1_5",
			map:"PEREZ_FINALBLDG_1.png",
			x: 63.73,
			y: 88.79,
			type:"path",
			floor: 0,
			selectable: false
	},
	{
			id:"path1_6",
			map:"PEREZ_FINALBLDG_1.png",
			x: 54.96,
			y: 88.79,
			type:"path",
			floor: 0,
			selectable: false
	},
	{
			id:"path1_7",
			map:"PEREZ_FINALBLDG_1.png",
			x: 45.51,
			y: 88.79,
			type:"path",
			floor: 0,
			selectable: false
	},
	{
			id:"path1_8",
			map:"PEREZ_FINALBLDG_1.png",
			x: 35.4,
			y: 88.79,
			type:"path",
			floor: 0,
			selectable: false
	},
	{
			id:"path1_9",
			map:"PEREZ_FINALBLDG_1.png",
			x: 27.29,
			y: 88.79,
			type:"path",
			floor: 0,
			selectable: false
	},
	{
			id:"path1_10",
			map:"PEREZ_FINALBLDG_1.png",
			x: 20.4,
			y: 88.79,
			type:"path",
			floor: 0,
			selectable: false
	},
	{
			id:"path1_11",
			map:"PEREZ_FINALBLDG_1.png",
			x: 20.4,
			y: 52.77,
			type:"path",
			floor: 0,
			selectable: false
	},
	{
			id:"stair1_1",
			map:"PEREZ_FINALBLDG_1.png",
			x: 96.51,
			y: 22.9,
			type:"stair",
			floor: 0,
			selectable: false
	},
	{
			id:"stair1_2",
			map:"PEREZ_FINALBLDG_1.png",
			x: 27.29,
			y: 22.9,
			type:"stair",
			floor: 0,
			selectable: false
	},

//2nd Floor Nodes
	{
			id:"DelMundo",
			name:"10-Del Mundo",
			map:"PEREZ_FINALBLDG_2.png",
			x: 84.62,
			y: 34.03,
			type:"room",
			floor: 1,
			selectable: true
	},
	{
			id:"Zara",
			name:"10-Zara",
			map:"PEREZ_FINALBLDG_2.png",
			x: 70.29,
			y: 34.03,
			type:"room",
			floor: 1,
			selectable: true
	},
	{
			id:"Quisimbing",
			name:"10-Quisimbing",
			map:"PEREZ_FINALBLDG_2.png",
			x: 57.29,
			y: 34.03,
			type:"room",
			floor: 1,
			selectable: true
	},
	{
			id:"Alcala",
			name:"10-Alcala",
			map:"PEREZ_FINALBLDG_2.png",
			x: 43.62,
			y: 34.03,
			type:"room",
			floor: 1,
			selectable: true
	},
	{
			id:"Olivera",
			name:"10-Olivera",
			map:"PEREZ_FINALBLDG_2.png",
			x: 29.73,
			y: 34.03,
			type:"room",
			floor: 1,
			selectable: true
	},
	{
			id:"Juliano",
			name:"10-Juliana",
			map:"PEREZ_FINALBLDG_2.png",
			x: 16.29,
			y: 34.03,
			type:"room",
			floor: 1,
			selectable: true
	},
	{
			id:"path2_1",
			map:"PEREZ_FINALBLDG_2.png",
			x: 95.29,
			y: 86.96,
			type:"path",
			floor: 1,
			selectable: false
	},
	{
			id:"path2_2",
			map:"PEREZ_FINALBLDG_2.png",
			x: 84.62,
			y: 86.96,
			type:"path",
			floor: 1,
			selectable: false
	},
	{
			id:"path2_3",
			map:"PEREZ_FINALBLDG_2.png",
			x: 70.29,
			y: 86.96,
			type:"path",
			floor: 1,
			selectable: false
	},
	{
			id:"path2_4",
			map:"PEREZ_FINALBLDG_2.png",
			x: 57.29,
			y: 86.96,
			type:"path",
			floor: 1,
			selectable: false
	},
	{
			id:"path2_5",
			map:"PEREZ_FINALBLDG_2.png",
			x: 43.62,
			y: 86.96,
			type:"path",
			floor: 1,
			selectable: false
	},
	{
			id:"path2_6",
			map:"PEREZ_FINALBLDG_2.png",
			x: 29.73,
			y: 86.96,
			type:"path",
			floor: 1,
			selectable: false
	},
	{
			id:"path2_7",
			map:"PEREZ_FINALBLDG_2.png",
			x: 16.29,
			y: 86.96,
			type:"path",
			floor: 1,
			selectable: false
	},
	{
			id:"path2_8",
			map:"PEREZ_FINALBLDG_2.png",
			x: 4.84,
			y: 86.96,
			type:"path",
			floor: 1,
			selectable: false
	},
	{
			id:"stair2_1",
			map:"PEREZ_FINALBLDG_2.png",
			x: 95.29,
			y: 23.37,
			type:"stair",
			floor: 1,
			selectable: false
	},
	{
			id:"stair2_2",
			map:"PEREZ_FINALBLDG_2.png",
			x: 4.84,
			y: 23.37,
			type:"stair",
			floor: 1,
			selectable: false
	}
]
		
			
var config = {
        container: "#basic-example",
        animateOnInit: true,


        connectors: {
            type: 'step'
        },
        node: {
            HTMLclass: 'nodeExample1',
            collapsable: true
        },
        animation: {
                nodeAnimation: "easeOutBounce",
                nodeSpeed: 700,
                connectorsAnimation: "bounce",
                connectorsSpeed: 700
            }

    },
    film = {
        collapsed: true,
        text: {
            name: "Race 3",
            // childrenDropLevel: 0,
        },
    },

    cast = {
        parent: film,
        text:{
            name: "Cast",
            title: "64s%",
        },
        stackChildren: true,
        collapsed: true,
    },
    music = {
        parent: film,
        stackChildren: true,
        collapsed: true,
        text:{
            name: "Music",
            title: "69%",
        },
    },
    direction = {
        parent: film,
        collapsed: true,
        text:{
            name: "Direction/Story",
            title: "24%",
        },
    },

    dialogues = {
        parent: film,
        collapsed: true,
        text:{
            name: "Dialogues",
            title: "62%"
        }
    },


    cast2 = {
        parent: cast,
        text:{
            name: "Jacqueline Fernandez",
            title: "63%",
        },
    },
    cast3 = {
        parent: cast,
        text:{
            name: "Anil Kapoor",
            title: "76%"
        },
    },
    cast4 = {
        parent: cast,
        text:{
            name: "Salman Khan",
            title: "86%"
        },
    },
    songs = {
        parent: music,
        text:{
            name: "Songs",
            title: "87%"
        },
    },
    bgm = {
        parent: music,
        text:{
            name: "BGM",
            title: "71%"
        }
    },
    director = {
        parent: direction,
        text:{
            name: "Director",
            title: "58%"
        }
    },
    story = {
        parent: direction,
        text:{
            name: "Story",
            title: "36%"
        }
    },



    dialogue1 = {
        parent: dialogues,
        text:{
            name: '"Yeh Race Zindagi Ki Race Hai … Kisi Ki Zindagi Leke Hi Khatam Hogi"',
            title: "76%"
        }
    },


    chart_config = [
        config,
        film,
        cast,
        music,
        cast2,
        cast3,
        cast4,
        songs,
        bgm,
        direction,
        director,
        story,
        dialogues,
        dialogue1,
    ];

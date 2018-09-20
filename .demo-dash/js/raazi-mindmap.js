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
        text: {
            name: "Sanju",
            // childrenDropLevel: 0,
        },
    },

    cast = {
        parent: film,
        text:{
            name: "Cast",
            title: "80%",
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
            title: "73%",
        },
    },
    direction = {
        parent: film,
        collapsed: true,
        text:{
            name: "Direction/Story",
            title: "80%",
        },
    },
    cast1 = {
        parent: cast,
        text:{
            name: "Ranbir Kapoor",
            title: "94%"
        },
    },
    cast2 = {
        parent: cast,
        text:{
            name: "Vishal Kaushal",
            title: "84%",
        },
    },
    cast3 = {
        parent: cast,
        text:{
            name: "Dia Mirza",
            title: "67%"
        },
    },
    cast4 = {
        parent: cast,
        text:{
            name: "Mansha Koirala",
            title: "56%"
        },
    },
    songs = {
        parent: music,
        text:{
            name: "Songs",
            title: "94%"
        },
    },
    bgm = {
        parent: music,
        text:{
            name: "BGM",
            title: "89%"
        }
    },
    director = {
        parent: direction,
        text:{
            name: "Director",
            title: "84%"
        }
    },
    story = {
        parent: direction,
        text:{
            name: "Story",
            title: "81%"
        }
    },

    dialogues = {
        parent: film,
        collapsed: true,
        text:{
            name: "Dialogues",
            title: "96%"
        }
    },

    dialogue1 = {
        parent: dialogues,
        text:{
            name: '"watan aghe kuch bhi nahi khudh bhi nahi"',
            title: "96%"
        }
    },


    chart_config = [
        config,
        film,
        cast,
        music,
        cast1,
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

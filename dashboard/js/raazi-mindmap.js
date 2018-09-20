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
            title: "82%",
        },
    },
    cast1 = {
        parent: cast,
        text:{
            name: "Ranbir Kapoor",
            title: "95%"
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
            title: "69%"
        },
    },
    cast4 = {
        parent: cast,
        text:{
            name: "Mansha Koirala",
            title: "66%"
        },
    },
    songs = {
        parent: music,
        text:{
            name: "Songs",
            title: "91%"
        },
    },
    bgm = {
        parent: music,
        text:{
            name: "BGM",
            title: "94%"
        }
    },
    director = {
        parent: direction,
        text:{
            name: "Director",
            title: "75%"
        }
    },
    story = {
        parent: direction,
        text:{
            name: "Story",
            title: "78%"
        }
    },

    dialogues = {
        parent: film,
        collapsed: true,
        text:{
            name: "Dialogues",
            title: "86%"
        }
    },

    dialogue1 = {
        parent: dialogues,
        text:{
            name: '"The first time I took drugs, it was because my father didnt like me. The second time, it was because my mother was dying. The third time, I was an addict."',
            title: "93%"
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

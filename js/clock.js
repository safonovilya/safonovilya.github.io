

const NumbersMap = {
    1: [
        {"h": "90",  "m": "180"},
        {"h": "270", "m": "90"},
        {"h": "270", "m": "180"},
        {"h": "225", "m": "225"},

        {"h": "90", "m": "0"},
        {"h": "180",  "m": "270"},
        {"h": "180", "m": "0"},
        {"h": "225", "m": "225"},

        {"h": "225", "m": "225"},
        {"h": "180", "m": "0"},
        {"h": "180", "m": "0"},
        {"h": "225", "m": "225"},

        {"h": "225", "m": "225"},
        {"h": "180", "m": "0"},
        {"h": "180", "m": "0"},
        {"h": "225", "m": "225"},

        {"h": "90",  "m": "180"},
        {"h": "0", "m": "270"},
        {"h": "0", "m": "90"},
        {"h": "180", "m": "270"},

        {"h": "90", "m": "0"},
        {"h": "90", "m": "270"},
        {"h": "90", "m": "270"},
        {"h": "0",  "m": "270"}
    ],
    8: [
        {"h": "90",  "m": "180"},
        {"h": "90",  "m": "270"},
        {"h": "90",  "m": "270"},
        {"h": "180", "m": "270"},

        {"h": "180", "m": "0"},
        {"h": "90",  "m": "180"},
        {"h": "180", "m": "270"},
        {"h": "180", "m": "0"},

        {"h": "0", "m": "135"},
        {"h": "0", "m": "90"},
        {"h": "0", "m": "270"},
        {"h": "0", "m": "225"},

        {"h": "45", "m": "180"},
        {"h": "90",  "m": "180"},
        {"h": "180", "m": "270"},
        {"h": "315", "m": "180"},

        {"h": "180", "m": "0"},
        {"h": "0", "m": "90"},
        {"h": "0", "m": "270"},
        {"h": "0", "m": "180"},

        {"h": "90", "m": "0"},
        {"h": "90", "m": "270"},
        {"h": "90", "m": "270"},
        {"h": "0",  "m": "270"}
    ]
};

const elements = document.getElementsByTagName("article");
const allClassList = [0,45,90,135,180,225,270,315].map(c=> `deg${c}`);
const number = 8;
setTimeout(()=> {
    for (let i=0; i< elements.length; i++) {
        const el = elements[i];
        // debugger;
        el.getElementsByClassName("hours-container")[0].classList.remove(...allClassList);
        el.getElementsByClassName("minutes-container")[0].classList.remove(...allClassList);
        el.getElementsByClassName("hours-container")[0].classList.add(`deg${NumbersMap[number][i].h}`);
        el.getElementsByClassName("minutes-container")[0].classList.add(`deg${NumbersMap[number][i].m}`);
    }

}, 2000);

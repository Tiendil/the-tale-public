
if (!window.pgf) pgf = {};

if (!pgf.descriptions) pgf.descriptions = {};

if (!pgf.descriptions.templates) pgf.descriptions.templates = {};


pgf.descriptions.templates['common-empty'] = {
    name: "пустой макет",
    gender: "M",
    text: " <br/>"
        + " <br/>" 
        + "",
    variables: {
        text1: { 1: {text: ""},
                 2: {text: ""}},
        text2: { 1: {text: ""},
                 2: {text: ""},
                 3: {text: ""},
                 4: {text: ""},
                 5: {text: ""}},
        text3: { 1: {text: ""},
                2: {text: ""},
                3: {text: ""},
                4: {text: ""},
                5: {text: ""} }
    }
};

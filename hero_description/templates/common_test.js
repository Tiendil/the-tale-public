
if (!window.pgf) pgf = {};

if (!pgf.descriptions) pgf.descriptions = {};

if (!pgf.descriptions.templates) pgf.descriptions.templates = {};


pgf.descriptions.templates['common-test'] = {
    name: "тестовый макет",
    gender: "M",
    text: "Герой - [[rasa]], [[rost]] роста с [[lico]] лицом. <br/>"
        + "Когда он смотрит на [[predmet]], они крошаться. <br/>"
        + "Собаки при виде его начинают [[sobachi_voi]] выть.",
    variables: {
        rasa: { 1: {text: "эльф"},
                2: {text: "человек"},
                3: {text: "орк"},
				4: {text: "хобогоблин"},
                5: {text: "гоблин"}},
        rost: { 1: {text: "высокого"},
                 2: {text: "среднего"},
                 3: {text: "огромного"},
                 4: {text: "внушительного"},
                 5: {text: "маленького"}},
        lico: { 1: {text: "мужественным"},
                2: {text: "серьёзным"},
                3: {text: "узким"},
                4: {text: "суровым"},
                5: {text: "тяжёлым"},
                6: {text: "милым"}},
        predmet: { 1: {text: "камни"},
                   2: {text: "стены"},
               3: {text: "валуны"}},
        sobachi_voi: { 1: {text: "тоскливо"},
                       2: {text: "тихо"},
                   3: {text: "заунывно и испугано"} }
    }
};

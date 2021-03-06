
if (!window.pgf) pgf = {};

if (!pgf.descriptions) pgf.descriptions = {};

if (!pgf.descriptions.templates) pgf.descriptions.templates = {};


pgf.descriptions.templates['unbeknown-female'] = {
    name: "неизвестная женщина",
    gender: "F",
    text: "Из грязной подворотни вышел объект. Неизвестная в темном плаще, минуту назад решившая, что потеряла цель в этом проклятом городе, с облегчение вздохнула. <br/> "
	    + "Снова пойдя по следу, она старалась держаться в тени, благо ночь была темной. Объект шел в трущобы… <br/>"
        + "  <br/>"
		+ "На заросший крапивой пустырь с трех сторон выводили три узкие дороги, с четвертой стояла покосившаяся разбитая телега без колеса. Пригибаясь и прячась в крапиве, разговаривали двое. В свете звезд можно было разглядеть, что тот, который вышел на пустырь вторым, сильно взволнован. <br/>"
		+ "- Ты принес? – спросил другой, обладатель рябой морды. Получив в руки небольшой сверток, продолжил, - За тобой следят. Мириэль послала за тобой наемника. Это [[race]]. Рост [[stature]], волосы [[hair_color]]. Кожа [[skin_color]]. [[constitution]]. У неё [[eyes_color]] глаза, [[costume]]. [[jewel]] [[sign]] Она профессионал. Больше сюда не приходи… <br/>"
		+ "  <br/>"
        + "Проклятье, подумала Героиня, описание более чем точное. Поплотнее запахнув плащ и проследив за тем, как с пустыря уходят в разные стороны рябой и объект, Героиня решила, [[decision]]",
    variables: {
        decision: { 1: {text: "что теперь будет еще интереснее довести дело до конца. Выйдя из-за телеги, она двинулась следом за объектом."},
                    2: {text: "что доводить дело до конца слишком рискованно. Выйдя из-за телеги, она двинулась по третьей дороге."}},
		sign: { 1: {text: "Шрам на лице, через левую скулу."},
		        2: {text: "На шее, можно разглядеть из-за воротника, родимое пятно."},
				3: {text: "Шрам на лице, от ожога, и половины уха нет."},
                4: {text: "Вся в шрамах."}},
		jewel: { 1: {text: "На пальце золотой перстень с опалом."},
		         2: {text: "В ушах золотые серьги."},
				 3: {text: "На руках кожаные браслеты."},
                 4: {text: "На шее золотая цепь с кулоном."}},
		costume: { 1: {text: "прилично одета, обычно в шелк"},
		           2: {text: "одевается приметно, обычно в доспехах"},
				   3: {text: "одевается неприметно, с виду обычная горожанка"},
                   4: {text: "одета дорого, обычно в кожу"}},
		eyes_color: { 1: {text: "карие"},
                      2: {text: "голубые"},
                      3: {text: "серые"},
                      4: {text: "зеленые"},
                      5: {text: "янтарные"},
                      6: {text: "серо-голубые"},
                      7: {text: "серо-зеленые"},
                      8: {text: "каре-зеленые"},
                      9: {text: "синие"},
                      10: {text: "темные"},
                      11: {text: "темно-серые"}},
		constitution: { 1: {text: "Хорошо сложена"},
                        2: {text: "Стройная"},
                        3: {text: "Весьма крепкая"},
                        4: {text: "Грузная"},
                        5: {text: "Худощавая"},
                        6: {text: "Крепкая"},
						7: {text: "Толстая"},
                        8: {text: "Средней комплекции"}},
		skin_color: { 1: {text: "золотистая"},
                      2: {text: "молочно-белая"},
                      3: {text: "бронзовая"},
                      4: {text: "сероватая"},
                      5: {text: "медная"},
                      6: {text: "смуглая"},
                      7: {text: "бледная"},
					  10: {text: "светло-зеленая"},
					  11: {text: "темно-зеленая"},
                      12: {text: "зеленоватая"}},
		hair_color: { 1: {text: "черные, как смоль"},
                      2: {text: "темно-русые"},
                      3: {text: "светло-русые"},
                      4: {text: "русые"},
                      5: {text: "рыжие"},
                      6: {text: "огненно-рыжие"},
                      7: {text: "каштановые"},
                      8: {text: "соломенные"},
                      9: {text: "пшеничные"},
                      10: {text: "цвета вороного крыла"},
                      11: {text: "мышиного цвета"},
                      12: {text: "седые"},
                      13: {text: "темно-русые, седые на висках"},
                      14: {text: "светло-русые, седые на висках"},
                      15: {text: "русые, седые на висках"},
                      16: {text: "рыжие, седые на висках"},
                      17: {text: "огненно-рыжие, седые на висках"},
                      18: {text: "каштановые, седые на висках"},
                      19: {text: "соломенные, седые на висках"},
                      20: {text: "пшеничные, седые на висках"},
                      21: {text: "цвета вороного крыла, седые на висках"},
                      22: {text: "мышиного цвета, седые на висках"},
                      23: {text: "темно-русые с ровной седой прядью"},
                      24: {text: "светло-русые с ровной седой прядью"},
                      25: {text: "русые с ровной седой прядью"},
                      26: {text: "рыжие с ровной седой прядью"},
                      27: {text: "огненно-рыжие с ровной седой прядью"},
                      28: {text: "каштановые с ровной седой прядью"},
                      29: {text: "соломенные с ровной седой прядью"},
                      30: {text: "пшеничные с ровной седой прядью"},
                      31: {text: "цвета вороного крыла с ровной седой прядью"},
                      32: {text: "мышиного цвета с ровной седой прядью"}},
		stature: { 1: {text: "выше среднего"},
                   2: {text: "ниже среднего"},
				   3: {text: "средний"}},
        race: { 1: {text: "женщина-человек"},
                2: {text: "женщина-гоблин"},
                3: {text: "женщина-орк"},
                4: {text: "женщина-эльф"},
                5: {text: "женщина-дварф"} }
    }
};

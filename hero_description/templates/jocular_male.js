
if (!window.pgf) pgf = {};

if (!pgf.descriptions) pgf.descriptions = {};

if (!pgf.descriptions.templates) pgf.descriptions.templates = {};


pgf.descriptions.templates['jocular-male'] = {
    name: "шутливое мужское описание",
    gender: "M",
    text: "[[jocular]] <br/> "
	    + "[[incident]] <br/>"
        + "Не-е! Ну, какой такой умысел? Говорю же, шутки ради. <br/>"
		+ "Смешной такой. Как сейчас помню. [[stature]] такой [[race]], глаза [[eyes_color]]. <br/>"
		+ "[[bonus1]] <br/>"
		+ "[[bonus2]] <br/>"
		+ "Приметы? <br/>"
		+ "Так говорю же, кожа оттенка [[skin_color]], с татуировкой. Волосы [[hair_color]]. Прическа у него есть. Волосы, значит, [[hair_type]]. <br/>"
		+ "Татуировка? На [[site]]. Красивая – [[tattoo]]. На руках – [[hands]]. <br/>"
		+ "А чего вы ищите-то его?.. На праздник позвать? Это дело! Не соскучишься с ним, веселиться он любит. <br/>"
        + "Ой, слышь-те, а какие у вас, у Серых Плащей, праздники бывают?",
    variables: {
        bonus1: { 1: {text: "[нет фразы]"},
		          2: {text: "А еще помню, в деревне-то. Праздник был, уж и не упомнишь какой. Герой, как разгулялся, решил народ позабавить. Где, кричит, тут у вас самое большое вымя? Вымя мне! И пошел по деревне, про вымя все покрикивая. Бабы, дуры, коров да коз в лес поволокли, испугались, что Герой что-нибудь со скотиной учинит. Ну зачем ему вымя-то? Ясно ж, что для веселья, потому как даже ни в один хлев, ни в единый сарай не заглянул вымя искавши. По домам ходил только. Смех!"},
                  3: {text: "В кабаке деревенском, на празднике, когда уже веселье полным ходом идет, как зыркнет Герой по сторонам! Взгляд злым, суровым сделал, будто осерчал на кого, и давай бои потешные на кулаках устраивать. И рычит, натурально так. Девки, дурынды, визжат. Мужики перепуганные думали, что он их сейчас поубивает. А Герой говорит, что и вовсе прямо сейчас будет старосту деревенского карать за то, что в деревне кругом навоз. Смешно ведь? За то, что в деревне навоз! А тот поверил, дурак старый. Спрятался. А Герой же шутит. Парень-то он добрый."}},
		bonus2: { 1: {text: "[нет фразы]"},
                  2: {text: "А еще говорят, в каком-то городе и того хлеще. Решил он, слышь-ка, ночью господ двух благородных напугать. В подворотне темной выскочил, да как закричит, мол, кошелек или жизнь! Господа испугались, кошельки на землю побросали и деру. Так и стража ж дает! Героя искали потом, благо он ночью в маске был, а то б ведь и не поверил ни кто, что шутил он. Ночью то той… Не первый случай? Шутить он любит, верю, что не первый…"}},
		eyes_color: { 1: {text: "карие"},
                      2: {text: "голубые"},
                      3: {text: "серые"},
                      4: {text: "зеленые"},
                      5: {text: "янтарные"},
                      6: {text: "серо-голубые"},
                      7: {text: "серо-зеленые"},
                      8: {text: "каре-зеленые"},
                      9: {text: "синие"},
					  10: {text: "голубые, как полуденное небо"},
                      11: {text: "серые, словно свинцовые"},
                      12: {text: "зеленые, как свежая трава"},
                      13: {text: "темно-серые"}},
		tattoo: { 1: {text: "росянка пасть скалит"},
                  2: {text: "щит и меч"},
                  3: {text: "секира и наковальня"},
                  4: {text: "лук и колчан"},
                  5: {text: "знаки странные, как их,.. ка-ба-ческие или харчевня-лические, так как-то"},
                  6: {text: "колбы всякие дымящиеся"},
                  7: {text: "солнце над барханами"},
                  8: {text: "голая девка"},
                  9: {text: "грудастая голая девка"},
				  10: {text: "зверь невиданный скалится"},
                  11: {text: "пучок крысиных хвостов и надпись: начни с малого"},
                  12: {text: "стол с явствами и надпись: когда я ем - я глух и нем, хитёр, быстр, поразительно умён"},
				  13: {text: "мешок денег и надпись: главный это не тот, кто руководит, а тот, кто делит деньги"},
                  14: {text: "кинжал и темного стекла флакон с черепом"},
                  15: {text: "огромное здание с куполами"},
				  16: {text: "цветущая вишня и надпись: Желтый лист плывет. У какого берега, цикада, вдруг проснешься ты?"},
                  17: {text: "цветущая вишня и надпись: Первый снег под утро. Он едва-едва прикрыл листики нарцисса."},
                  18: {text: "дерево, на ветвях снег и ниже надпись: Может быть, кости мои выбелит ветер - он в сердце холодом мне дохнул."},
				  19: {text: "цветущая вишня и надпись: Печальный мир! Даже когда расцветают вишни… Даже тогда…"},
                  20: {text: "вьющаяся дорога и надпись: Дорога-судьба. Что там - за поворотом? Понедельник..."},
                  21: {text: "вьющаяся дорога и надпись: Спелые звезды над ровной дорогой, но как хочется спать!"},
				  22: {text: "его лицо и надпись: Хлопая в ладоши, мы славим героя - вот он, с блеском в глазах."},
				  23: {text: "горный пейзаж, заснеженные пики"},
                  24: {text: "ночной лес"},
                  25: {text: "гидра выныривающая из болота"},
				  26: {text: "конь бегущий по заливному лугу"},
				  27: {text: "шаманский бубен"},
                  28: {text: "белый лебедь на озере"}},
		hands: { 1: {text: "цветы с шипами"},
                 2: {text: "луна и солнце"},
                 3: {text: "черепа с костями"},
                 4: {text: "цветы"},
                 5: {text: "голые девки"},
                 6: {text: "грудастые голые девки"},
                 7: {text: "солнце и парящие птицы"},
                 8: {text: "луна и летучая мышь"},
                 9: {text: "переплетающиеся змеи"},
				 10: {text: "растительные узоры"},
				 11: {text: "надпись: они могут все"},
                 12: {text: "надпись: из них еще ни кто не вырывался"}},
		site: { 1: {text: "спине"},
		        2: {text: "груди"},
                3: {text: "ноге"}},
		skin_color: { 1: {text: "золотистого"},
                      2: {text: "молочно-белого"},
                      3: {text: "бронзового"},
                      4: {text: "сероватого"},
                      5: {text: "медного"},
                      6: {text: "медового"},
                      7: {text: "светло-золотистого"},
                      8: {text: "темно-бежевого"},
                      9: {text: "светло-бежевого"},
					  10: {text: "светло-зеленого"},
					  11: {text: "темно-зеленого"},
                      12: {text: "зеленоватого"}},
		hair_type: { 1: {text: "гребнем выбриты"},
                     2: {text: "торчат во все стороны"},
                     3: {text: "в косички мелкие все сплетены"},
                     4: {text: "тут везде выбриты, а тут чуб оставлен длинный"},
                     5: {text: "причудливо остриженные"},
                     6: {text: "криво остриженные"},
                     7: {text: "перехваченные на лбу тесьмой"},
                     8: {text: "убранные в конский хвост"},
                     9: {text: "собранные в хвост"},
                     10: {text: "заплетенные в косу"},
                     11: {text: "заплетенные на висках в две косички"},
                     12: {text: "ассиметрично остриженные"},
					 13: {text: "распущенные"},
					 14: {text: "с бритыми висками"},
                     15: {text: "иголками ежиными эдакими торчат"}},
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
		stature: { 1: {text: "Высокий"},
                   2: {text: "Среднего роста"},
                   3: {text: "Низкорослый"},
                   4: {text: "Очень высокй"},
                   5: {text: "Очень низкорослый"},
                   6: {text: "Не очень высокй"},
                   7: {text: "Не дюже-то низенькийй"},
                   8: {text: "Не высокй"},
				   9: {text: "Среднего роста"}},
		incident: { 1: {text: "Раз, помнится, было дело. Искал наш градоуправитель, кого бы с письмом гонцом отправить. Вызвался Герой. Вот смеху-то было, когда на свадьбе градоуправительского сына гости без вина сидели, потому как Герой, шутки ради, письмо не донес, а там, в аккурат, предоплата за поставку вина того была. Ну и не пришло вино-то…"},
                    2: {text: "Как-то раз Герой взялся письмо отнести. Любопытно же, что в письме-то. Конверт вскрыл, а там дарственная на домик в городе. Ну, он смеха ради бумагу себе оставил. Представляете рожи господ, что письма не дождавшись к дому тому пошли? Он открывает, значит, и говорит, мол, какая такая дарственная? Эта что ли? Ну так дом мой-то теперь, шли б вы, господа, пока я стражу не скликал. Вот смеху-то…"}},
		jocular: { 1: {text: "Герой смешной. Когда он в город приходит и в трактире эти свои шуточки начинает омачивать, все умирают от хохота… Я вам точно говорю, наизабавнейший парень."},
                   2: {text: "Он очень веселый. Когда Герой в трактире развлекаться начинает, все рыдают просто от смеха-то… Присмешной парень."}},
        race: { 1: {text: "человек"},
                2: {text: "гоблин"},
                3: {text: "орк"},
                4: {text: "эльф"},
                5: {text: "дварф"} }
    }
};

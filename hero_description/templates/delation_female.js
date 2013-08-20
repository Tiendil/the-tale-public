
if (!window.pgf) pgf = {};

if (!pgf.descriptions) pgf.descriptions = {};

if (!pgf.descriptions.templates) pgf.descriptions.templates = {};


pgf.descriptions.templates['delation-female'] = {
    name: "донос на женщину",
    gender: "F",
    text: "   О преступнице злостной спешу сообщить вашему доблестному Ордену Серых Плащей. <br/> "
	    + "   Сея негодяйка принадлежит к роду [[race]] и преступлений совершила множество, не боясь совсем, что внешность имеет приметную, кою укажу в конце письма своего, нагла зело и узнанной быть не опасается. <br/>"
        + "   О первом деянии её могу сообщить следующее: [[act]] <br/>"
		+ "   [[bonus1]] <br/>"
		+ "   Ещё известно достоверно, что она [[ritual]]. И это тоже подозрительно. <br/>"
		+ "   [[bonus2]] <br/>"
		+ "   [[bonus3]] <br/>"
		+ "   Имя своё, Героиня, нахалка не скрывает. А внешности оная следующей. <br/>"
		+ "   Росту [[stature]], сложения [[shape]]. <br/>"
		+ "   Волосы [[hair_color]], [[hair_type]]. <br/>"
		+ "   Глаза [[view]], [[eyes_color]]. <br/>"
		+ "   Кожа оттенка [[skin_color]]. <br/>"
		+ "   Одежду носит [[costume]], обувь [[shoes]], а оружие [[weapon]]. <br/>"
        + "   Татуировки имеет на руках. Там [[hands]]. А на [[site]] [[tattoo]].",
    variables: {
        bonus1: { 1: {text: "[нет фразы]"},
		          2: {text: "Так же известно, что она регулярно грабит честных купцов и ворует письма, кои обещает доставить адресату за вознаграждение."},
                  3: {text: "Так же сообщаю, что она постоянно за кем-нибудь шпионит, а потом беда у тех возникает и проблемы многочисленные."}},
		bonus2: { 1: {text: "[нет фразы]"},
		          2: {text: "Совратила она ещё сына нашего старосты и сбегла, а у того свадьба скоро."},
		          3: {text: "Совратила она ещё сына нашего старосты и сбегла, а у того свадьба скоро. И нашего кузнеца, тот теперь работать не хочет, все о блуде думает."},
		          4: {text: "Совратила она ещё сына нашего старосты и сбегла, а у того свадьба скоро. И нашего кузнеца, тот теперь работать не хочет, все о блуде думает. А так же юного сына кузнеца, за что и вовсе голову ей отрубить след."},
                  5: {text: "Совратила она ещё сына нашего старосты и сбегла, а у того свадьба скоро. И нашего кузнеца, тот теперь работать не хочет, все о блуде думает. А так же юного сына кузнеца, за что и вовсе голову ей отрубить след. А опосля и жена старосты от неё еле сбегла!"}},
		bonus3: { 1: {text: "[нет фразы]"},
                  2: {text: "В городе на стенах надписи похабные пишет, власти порочащие. А в кабаках благородные лица бьёт и песни пошлые горланит, мужику подобно."}},
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
		costume: { 1: {text: "дорогую"},
                   2: {text: "дешевую"},
                   3: {text: "в заплатах всю"},
                   4: {text: "очень дорогую"},
                   5: {text: "очень дешевую"},
                   6: {text: "из золотой парчи"},
                   7: {text: "из шелка, расшитую"},
                   8: {text: "из кожи черной"},
				   9: {text: "из кожи белой"}},
		shoes: { 1: {text: "- высокие сапоги"},
                 2: {text: "дешевую"},
                 3: {text: "- высокие ботинки"},
                 4: {text: "- тяжелую"},
                 5: {text: "с тиснением"},
                 6: {text: "дорогущую"},
                 7: {text: "краденную"},
                 8: {text: "растоптанную"},
				 9: {text: "грязную"}},
		weapon: { 1: {text: "устрашающее"},
                  2: {text: "хорошее"},
                  3: {text: "зазубренное"},
                  4: {text: "дорогое"},
                  5: {text: "солидное"},
                  6: {text: "большое, страшное"},
                  7: {text: "не дюже-то страшное"},
                  8: {text: "не приметное"},
				  9: {text: "разбойничье"}},
		ritual: { 1: {text: "приносит кровавые жертвы, кому не ведомо"},
                  2: {text: "в медитации впадает и трансы, что нормальный кто делать не может"},
				  3: {text: "символы странные вырезает всюду, может, то проклятья на кого-то страшные"},
				  4: {text: "благовония жжет постоянно, а от них, может, дуреет совсем"},
                  5: {text: "молится часто, а кому не ведомо"}},
		act: { 1: {text: "личностью этой был жестоко убит благородный лорд, свидетелем того я был лично."},
		       2: {text: "личностью этой был страшно оскорблен некий весьма благородный господин."},
               3: {text: "личностью этой была украдена лошадь одного очень уважаемого господина."}},
		shape: { 1: {text: "субтильного"},
		         2: {text: "крепкого"},
				 3: {text: "тщедушного"},
				 4: {text: "округлого, с бедрами"},
				 5: {text: "солидного, воинского"},
                 6: {text: "мощного"}},
		view: { 1: {text: "не добрые"},
		        2: {text: "чуть косые"},
				3: {text: "злые"},
				4: {text: "холодные"},
				5: {text: "хитрые"},
                6: {text: "бесстыжие, шелудивые"}},
		tattoo: { 1: {text: "нету"},
                  2: {text: "щит и меч"},
                  3: {text: "секира и наковальня"},
                  4: {text: "лук и колчан"},
                  5: {text: "знаки странные, как их,.. ка-ба-ческие или харчевня-лические, так как-то"},
                  6: {text: "колбы всякие дымящиеся"},
                  7: {text: "солнце над барханами"},
                  8: {text: "голый юноша"},
                  9: {text: "совсем голый юноша"},
				  10: {text: "зверь невиданный скалится"},
                  11: {text: "пучок крысиных хвостов и надпись: начни с малого"},
                  12: {text: "стол с явствами и надпись: когда я ем - я глуха и нема, хитра, быстра, поразительно умна"},
				  13: {text: "мешок денег и надпись: главный это не тот, кто руководит, а тот, кто делит деньги"},
                  14: {text: "кинжал и темного стекла флакон с черепом"},
                  15: {text: "огромное здание с куполами"},
				  16: {text: "цветущая вишня и надпись: Желтый лист плывет. У какого берега, цикада, вдруг проснешься ты?"},
                  17: {text: "цветущая вишня и надпись: Первый снег под утро. Он едва-едва прикрыл листики нарцисса."},
                  18: {text: "дерево, на ветвях снег и ниже надпись: Может быть, кости мои выбелит ветер - он в сердце холодом мне дохнул."},
				  19: {text: "цветущая вишня и надпись: Печальный мир! Даже когда расцветают вишни… Даже тогда…"},
                  20: {text: "вьющаяся дорога и надпись: Дорога-судьба. Что там - за поворотом? Понедельник..."},
                  21: {text: "вьющаяся дорога и надпись: Спелые звезды над ровной дорогой, но как хочется спать!"},
				  22: {text: "её лицо и надпись: Хлопая в ладоши, мы славим героиню - вот она, с блеском в глазах."},
				  23: {text: "горный пейзаж, заснеженные пики"},
                  24: {text: "ночной лес"},
                  25: {text: "гидра выныривающая из болота"},
				  26: {text: "конь бегущий по заливному лугу"},
				  27: {text: "шаманский бубен"},
				  28: {text: "росянка пасть скалит"},
				  29: {text: "написано: Лучшее, что ты видел"},
                  30: {text: "белый лебедь на озере"}},
		hands: { 1: {text: "цветы с шипами"},
                 2: {text: "луна и солнце"},
                 3: {text: "черепа с костями"},
                 4: {text: "цветы"},
                 5: {text: "голые юноши"},
                 6: {text: "вообще голые юноши"},
                 7: {text: "солнце и парящие птицы"},
                 8: {text: "луна и летучая мышь"},
                 9: {text: "переплетающиеся змеи"},
				 10: {text: "растительные узоры"},
				 11: {text: "надпись: они могут все"},
				 11: {text: "юноши в позах развратных, голые совсем"},
                 12: {text: "надпись: из них еще ни кто не вырывался"}},
		site: { 1: {text: "спине"},
		        2: {text: "груди"},
                3: {text: "ногах"}},
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
					 15: {text: "в косы заплетенные"},
					 16: {text: "только выбриты совсем"},
                     17: {text: "иголками ежиными эдакими торчат"}},
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
		stature: { 1: {text: "высокого"},
                   2: {text: "среднего"},
                   3: {text: "низкого"},
                   4: {text: "очень высокого"},
                   5: {text: "очень низкого"},
                   6: {text: "не очень высокого"},
                   7: {text: "не дюже-то низкого"},
                   8: {text: "не высокого"},
				   9: {text: "среднего"}},
        race: { 1: {text: "человеческому"},
                2: {text: "гоблинскому"},
                3: {text: "оркскому"},
                4: {text: "эльфийскому"},
                5: {text: "дварфовскому"} }
    }
};
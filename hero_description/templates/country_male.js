
if (!window.pgf) pgf = {};

if (!pgf.descriptions) pgf.descriptions = {};

if (!pgf.descriptions.templates) pgf.descriptions.templates = {};


pgf.descriptions.templates['country-male'] = {
    name: "деревенское мужское описание",
    gender: "M",
    text: "…Он, значить, [[race]]. Росту [[stature]], ага, и фигуры [[constitution]]… Глаза? Глаза-то у него [[eyes_color]], [[view]]. Точно говорю. У нас кажный житель его знает… <br/> "
        + "Имя? Сам Героем назвался, а уж правда иль нет, то мне не ведомо. Но узнать-то его не шибко сложно. Волосы у него [[hair_type]], [[hair_color]]. Кожа прям [[skin_color]], ага. Поступь, значить, [[footstep]], сразу видать, что [[profession]]… <br/>"
        + "[[bonus1]] <br/>"
        + "[[bonus2]] <br/>"  		
        + "Как откудова знаю? Он же ж часто мимо нашей деревни-то ходит взад-вперед. Тварей диких гоняет.",
    variables: {
        bonus1: { 1: {text: "[нет фразы]"},
		          2: {text: "А силища у него ого-го! Раз, выпимши, быка старосты нашего меж рог стукнул, тот пал замертво. Но не обидел, золотом возместил, да так сыпанул, как за коня рыцарского."},
				  3: {text: "А еще ловок очень! Раз как-то котенок старостеной дочки меньшей на дерево влез, да и мявчит оттудова. А Герой, значить, не хуже кота на дерево взлетел, снял зверька, да быстро-быстро вниз. Дочка старосты и разреветься не успела."},
                  4: {text: "Правду сказать, не шибко-то Героя у нас любят. Он, конечным делом, для деревни заступа, но, как придет в кабак наш, мужики-то жен да девок прячут, ибо, ежели он сильно выпимши станет, то спасу бабам от него нету."}},
		bonus2: { 1: {text: "[нет фразы]"},
		          2: {text: "А одевается как? Любо дорого посмотреть. Весь в парче, да шелке, в злате с каменьями."},
		          3: {text: "В одежде Герой тож приметен зело! Шкуры страховидлов всяческих, сапоги высоченные из кожи этой, как бишь ее?.. Эко… акзо… эзотической, во! Да шнурки кожные с клыками разными, да когтьми."},
                  4: {text: "А одет скромно, ага. Придет, значить, в деревню-то нашу, глянешь на него – нищеброд. Пыльный весь, плащ грязью забрызган. Но ежели приглядишься, то видать и меч-то знатный и бронь дорогущую, да и ботинки такие, что и за всю жись об трак не стопчешь."}},
        constitution: { 1: {text: "знатной"},
                        2: {text: "стройной"},
                        3: {text: "складной"},
                        4: {text: "жилистой"},
				        5: {text: "видной"},
				        6: {text: "ладной"},
                        7: {text: "мощной"}},
        skin_color: { 1: {text: "золотистая"},
                      2: {text: "молочно-белая"},
                      3: {text: "бронзовая"},
                      4: {text: "сероватая"},
                      5: {text: "медная"},
                      6: {text: "медовая"},
                      7: {text: "светло-золотистая"},
                      8: {text: "темно-бежевая"},
                      9: {text: "светло-бежевая"},
			          10: {text: "медовая, девки так и заглядываются"},
                      11: {text: "светло-золотистая, девки так и заглядываются"},
			          12: {text: "молочно-белая, девки шеи себе сворачивают, на него оглядываясь"},
                      13: {text: "бронзовая, девки так и заглядываются"},
                      14: {text: "темно-бежевая, ничего такого"},
                      15: {text: "светло-бежевая, бледная"},
					  16: {text: "светло-зеленая, бледная"},
					  17: {text: "темно-зеленая"},
					  18: {text: "зеленая, как листва пожухлая"},
                      19: {text: "опаловая"}},
        footstep: { 1: {text: "тяжелая"},
                    2: {text: "легкая"},
                    3: {text: "как у лорда"},
                    4: {text: "важная, степенная"},
					5: {text: "степенная, но плавная"},
				    6: {text: "не идет даже, а плывет"}},				 				
        profession: { 1: {text: "воин из первых"},
                      2: {text: "не из простых"},
                      3: {text: "многое повидал"},
                      4: {text: "лучше не связываться"},
                      5: {text: "прерожденный убивец"}},
        hair_type: { 1: {text: "непослушные"},
                     2: {text: "торчащие во все стороны"},
                     3: {text: "вьющиеся"},
                     4: {text: "вьющиеся на концах"},
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
                     15: {text: "шелковистые"}},
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
        eyes_color: { 1: {text: "карие"},
                      2: {text: "голубые"},
                      3: {text: "серые"},
                      4: {text: "зеленые"},
                      5: {text: "янтарные"},
                      6: {text: "серо-голубые"},
                      7: {text: "серо-зеленые"},
                      8: {text: "каре-зеленые"},
                      9: {text: "синие"},
                      10: {text: "темно-серые"}},
        view: { 1: {text: "суровые"},
                2: {text: "тяжелые, как молоты кузнецкие. Зыркнет на тебя, аж ударит будто."},
                3: {text: "внимательные"},
                4: {text: "острые, колючие, что гвозди"},
                5: {text: "слегка пренебрежительные, будто в навоз вступил, но это только кажется. Добрый он."},
				6: {text: "слегка пренебрежительные, как не на человека живого глядит, а на собаку дворовую. Правда собак-то он любит."},
                7: {text: "цепкие"},
				8: {text: "хитрые, как у кота шкодливого"},
				9: {text: "жесткие"},
                10: {text: "шельмовские"},
                11: {text: "лукавые"},
                12: {text: "немного надменные, благородных кровей будто"},
				13: {text: "холодные, что твой лед"},
				14: {text: "добрые"},
				15: {text: "злые"},
                16: {text: "надменные, как у сборщика налогов"}},
        stature: { 1: {text: "высокого"},
                   2: {text: "среднего"},
                   3: {text: "низкого"},
                   4: {text: "очень высокого"},
                   5: {text: "очень низкого"},
                   6: {text: "не очень высокого"},
                   7: {text: "не очень низкого"},
                   8: {text: "невысокого"},
				   9: {text: "огромного"}},
        race: { 1: {text: "человек"},
                2: {text: "гоблин"},
                3: {text: "орк"},
                4: {text: "эльф"},
                5: {text: "дварф"} }
    }
};

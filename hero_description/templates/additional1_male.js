
if (!window.pgf) pgf = {};

if (!pgf.descriptions) pgf.descriptions = {};

if (!pgf.descriptions.templates) pgf.descriptions.templates = {};


pgf.descriptions.templates['additional1_male'] = {
    name: "1-е дополнительное мужское описание",
    gender: "M",
    text: "Этот мужчина [[race]] называет себя Героем. Роста он [[stature]], сложения [[constitution]]. <br/> "
        + "[[bonus1]] <br/>"
		+ "Волосы свои, [[hair_color]] и [[hair_type]], Герой [[hairstyle]]. Взгляд [[eyes_color]] глаз [[view]]. <br/>"
		+ "[[bonus2]] <br/>"
		+ "Походка [[footstep]], вызывающая ассоциации [[associations]]. Но главное в облике - это лицо, [[face]], [[scars]] – на взгляд многих женщин крайне очаровательное. <br/>"
		+ "[[bonus3]] <br/>"
		+ "Сказать, что слава о нем опережает его самого [[fame]]. Добавить стоит, справедливости ради, что его [[portrait]] портрет висит [[fan]]. <br/>"
        + "Одевается Герой [[style_of_dress]]. В мирной жизни он предпочитает [[costume]]. Но это редко можно увидеть, большую часть времени Герой с оружием в руках и в доспехах [[profession]].",
    variables: {
        bonus1: { 1: {text: "[нет фразы]"},
		          2: {text: "Многие находят его привлекательным."},
                  3: {text: "Немного нескладный, но по своему обаятельный."}},
        bonus2: { 1: {text: "[нет фразы]"},
		          2: {text: "При этом, когда он смотрит на придорожные валуны, те крошатся в мелкую щебенку."},
                  3: {text: "Когда он смотрит этим взглядом на дома, те пытаются отползти в сторону."}},
		bonus3: { 1: {text: "[нет фразы]"},
		          2: {text: "Что, конечно, ничуть не мешает ему быть покорителем их сердец."},
                  3: {text: "Он, конечно, оставляет о себе самое яркое впечатление."}},
		profession: { 1: {text: "исследует мир"},
                      2: {text: "пугает монстров на трактах"},
			          3: {text: "наводит порядок на дорогах Пандоры"},
                      4: {text: "сеет хаос на трактах Пандоры"},
					  5: {text: "доказывает всему миру, что именно он достоин славы, богатсв и уважения"},
                      6: {text: "повергает в ужас придорожных бестий и разбойников"}},
		costume: { 1: {text: "пестрые ткани, разные клыки и кусочки меха на кожанных шнурках"},
                   2: {text: "шелка и золото"},
			       3: {text: "широкополые шляпы и плащи"},
                   4: {text: "грубую кожу с серебряными заклепками"},
                   5: {text: "мягкую кожу и высокие сапоги"}},
		style_of_dress: { 1: {text: "вычурно, можно сказать, странно"},
                          2: {text: "скромно, но со вкусом"},
			              3: {text: "по последней моде"},
                          4: {text: "мрачно, во все черное"},
                          5: {text: "дорого, не без пижонства"}},
		fan: { 1: {text: "в спальне юной дочери старосты деревни"},
               2: {text: "в кабинете знатного лорда"},
			   3: {text: "чуть ли не в каждом эльфийском художественном музее"},
               4: {text: "некой молодой вдовы, потерявшей мужа при загадочных обстоятельствах"},
               5: {text: "в спальне искушенного в живописи и не только очень влиятельного аристократа"}},
		portrait: { 1: {text: "простенький"},
                    2: {text: "дорогой"},
					3: {text: "весьма льстивый"},
                    4: {text: "очень похожий, в полный рост"},
                    5: {text: "слегка приукрашенный"}},
		fame: { 1: {text: "- сильно ему польстить"},
                2: {text: "- это не сказать ни чего"},
                3: {text: "было бы справедливо"},
                4: {text: "- конечно, приукрасить, но совсем немного"}},
        face: { 1: {text: "суровое"},
                2: {text: "доброе"},
                3: {text: "злое"},
                4: {text: "приятное"},
				5: {text: "узкое, аристократическое"},
				6: {text: "широкое, мужественное"},
                7: {text: "мягкое"}},
	    scars: { 1: {text: "с тонким шрамом"},
                 2: {text: "чистое, без единого шрама"},
                 3: {text: "с ужасным шрамом через скулу и рот"},
                 4: {text: "с рваным шрамом от чьих-то клыков"}},
        associations: { 1: {text: "с опасным хищником"},
                        2: {text: "неприятные, настораживающие"},
                        3: {text: "с чем-то холодным и липким, ползущим по спине"},
                        4: {text: "с близкой опасностью"}},
        footstep: { 1: {text: "тяжелая"},
                    2: {text: "быстрая"},
                    3: {text: "неторопливая"},
					4: {text: "плавная, кошачья"},
                    5: {text: "чуть ленивая"},
                    6: {text: "легкая"}},
        hairstyle: { 1: {text: "укладывает в сложную прическу"},
                     2: {text: "оставляет свободно падать на плечи"},
                     3: {text: "стрижет весьма коротко"},
                     4: {text: "собирает в хвост"},
                     5: {text: "бреет наголо"},
                     6: {text: "заплетает в маленькие косичьки"},
                     7: {text: "заплетает в две косы"},
					 8: {text: "бреет, оставляя гребень"},
                     9: {text: "заплетает в косу"}},
        hair_type: { 1: {text: "непослушные"},
                     2: {text: "прямые"},
                     3: {text: "вьющиеся"}},
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
        view: { 1: {text: "лукавый, улыбчивый"},
                2: {text: "хитрый, смелый"},
                3: {text: "твердый, как сталь"},
                4: {text: "оценивающий, надменный"},
                5: {text: "пренебрежительный, брезгливый"},
                6: {text: "пристальный, жесткий"},
                7: {text: "холодный, строгий"},
                8: {text: "проницательный, понимающий"},
                9: {text: "принадлежит убийце"},
                10: {text: "неприятный, скользкий"},
                11: {text: "холодный, липкий"},
                12: {text: "осторожный, внимательный"},
                13: {text: "гордый, смелый"},
                14: {text: "цепкий, горделивый"}},
        eyes_color: { 1: {text: "карих"},
                      2: {text: "голубых"},
                      3: {text: "серых"},
                      4: {text: "зеленых"},
                      5: {text: "янтарных"},
                      6: {text: "серо-голубых"},
                      7: {text: "серо-зеленых"},
                      8: {text: "каре-зеленых"},
                      9: {text: "синих"},
					  10: {text: "темно-серых"},
					  11: {text: "раскосых карих"},
                      12: {text: "раскосых голубых"},
                      13: {text: "раскосых серых"},
                      14: {text: "раскосых зеленых"},
                      15: {text: "раскосых янтарных"},
                      16: {text: "раскосых серо-голубых"},
                      17: {text: "раскосых серо-зеленых"},
                      18: {text: "раскосых каре-зеленых"},
                      19: {text: "раскосых синих"},
					  20: {text: "раскосых темно-серых"},
					  21: {text: "больших карих"},
                      22: {text: "больших голубых"},
                      23: {text: "больших серых"},
                      24: {text: "больших зеленых"},
                      25: {text: "больших янтарных"},
                      26: {text: "больших серо-голубых"},
                      27: {text: "больших серо-зеленых"},
                      28: {text: "больших каре-зеленых"},
                      29: {text: "больших синих"},
                      30: {text: "больших темно-серых"}},
        constitution: { 1: {text: "худощавого"},
                        2: {text: "стройного"},
                        3: {text: "весьма крепкого"},
                        4: {text: "неприметного"},
                        5: {text: "необычайно худощавого"},
                        6: {text: "необычайно крепкого"},
                        7: {text: "крепкого"}},
        stature: { 1: {text: "высокого"},
                   2: {text: "среднего"},
                   3: {text: "низкого"},
                   4: {text: "очень высокого"},
                   5: {text: "очень низкого"},
                   6: {text: "не очень высокого"},
                   7: {text: "не очень низкого"},
                   8: {text: "невысокого"},
				   9: {text: "среднего"}},
        race: { 1: {text: "человек"},
                2: {text: "гоблин"},
                3: {text: "орк"},
                4: {text: "эльф"},
                5: {text: "дварф"} }
    }
};

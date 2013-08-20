
if (!window.pgf) pgf = {};

if (!pgf.descriptions) pgf.descriptions = {};

if (!pgf.descriptions.templates) pgf.descriptions.templates = {};


pgf.descriptions.templates['on-the-hill-male'] = {
    name: "мужчина на холме",
    gender: "M",
    text: "[[race]] на холме был [[stature]], [[constitution]] сложения. Его [[view]] [[eyes_color]] глаза осмотрели лагерь внизу. Медленно вытянув из ножен оружие, незнакомец начал спускаться… <br/> "
	    + "  <br/>"
        + "У костра сидели трое. [[victim]] и двое молодых помощников. Путь был непростым, и путники расслаблялись при помощи водки. <br/>"
		+ "[[onset]] Его [[hair_color]] [[hair_type]] волосы скрывал [[headwear]]. <br/>"
		+ "Первый из молодых упал, держа в руке кожаный кубок с сивухой. Второй успел крикнуть и даже выхватить топор, да так и рухнул лицом в кострище, с открытым в крике ртом. <br/>"
		+ "[[the_eyes_of_death]] <br/>"
		+ "  <br/>"
		+ "- Передавай привет ангелам-хранителям, - произнес [[voice]] голос. <br/>"
		+ "  <br/>"
		+ "Истекающий кровью хотел было спросить, мол, от кого? Он умирал, и ему и впрямь было интересно, кто его убил, но горло не послушалось. Вместо вопроса наружу толчком плеснула кровь, и раздался лишь жалкий тихий всхлип. Незнакомец все же понял. <br/>"
		+ "  <br/>"
		+ "- Скажи им, что меня зовут Героем. <br/>"
		+ "  <br/>"
		+ "Проклятье, подумал лежащий на испачканной кровью траве, человек. Угораздило же напороться. Еще подумал, что слышал ведь о том, что Герой сейчас в этих краях. Подумал, что нужно было не останавливаться здесь на ночь, и умер. <br/>"
		+ "  <br/>"
        + "[[bonus1]]",
    variables: {
        bonus1: { 1: {text: "[нет фразы]"},
		          2: {text: "От костра воняло паленым."},
				  3: {text: "Далеко в ночном лесу завыл волк."},
				  4: {text: "Начинал накрапывать дождь."},
		          5: {text: "Убийца зябко поежился, вытер клинок об остывавшее тело и пошел к холму. Холодало."},
                  6: {text: "Убийца подошел к костру, поднял бутыль с водкой, глотнул. Закашлялся, буркнул что-то вроде: «как вы это пьете»; и ушел в ночь."}},
		voice: { 1: {text: "мерзкий с присвистом"},
		         2: {text: "сильный звучный"},
				 3: {text: "недменный, тянущий гласные"},
				 4: {text: "веселый"},
                 5: {text: "тихий хриплый"}},
		the_eyes_of_death: { 1: {text: "Последний успел уклониться, получил концом клинка в плечо. Вскочил, попытался бежать, но силы, вдруг, покинули его. Что-то толкнуло его вперед, он упал, хотел подергать ногами, понял, что не чувствует их. Вообще ни чего не чувствует ниже середины спины. Опершись на руки, смог перевернуться на спину, увидел над собой, блестящие в свете притухшего костра, глаза. Глаза Смерти."},
                             2: {text: "Старший в тройке успел вскочить, но тут же получил концом клинка в шею. Начал отступать, что-то темное и горячее толчками плескало на рубаху. Он попытался еще зажать рану рукой, но силы быстро покидали. Сумел вытянуть нож и упал. Опершись на руки, оскальзываясь на мокрой от крови траве, сумел приподняться и увидел над собой, блестящие в свете притухшего костра, глаза. Глаза Смерти."}},
		headwear: { 1: {text: "шлем"},
                    2: {text: "глубокий капюшон"}},
        hair_type: { 1: {text: "непослушные"},
                     2: {text: "растрепанные"},
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
		onset: { 1: {text: "Все трое обернулись, услышав твердые тяжелые шаги. Из темноты, ничуть не скрываясь, к костру шел некто в доспехах."},
                 2: {text: "Ни один не услышал легкие кошачьи шаги. В темноте, тихо-тихо, к костру подкрался некто в плаще."}},
		victim: { 1: {text: "Купец"},
                  2: {text: "Разбойник"}},
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
		view: { 1: {text: "лукавые"},
                2: {text: "хитрые"},
                3: {text: "твердые, как сталь"},
                4: {text: "надменные"},
                5: {text: "жесткие"},
                6: {text: "холодные"},
                7: {text: "проницательные"},
                8: {text: "неприятные"},
                9: {text: "внимательные"},
				10: {text: "цепкие"},
                11: {text: "спокойные"},
				12: {text: "холодные, ледяные"},
                13: {text: "бесстрастные"},
                14: {text: "ехидные"}},
		constitution: { 1: {text: "худощавого"},
                        2: {text: "стройного"},
                        3: {text: "весьма крепкого"},
                        4: {text: "неприметного"},
                        5: {text: "необычайно худощавого"},
                        6: {text: "необычайно крепкого"},
                        7: {text: "крепкого"}},
		stature: { 1: {text: "высок"},
                   2: {text: "среднего роста"},
                   3: {text: "низок"},
                   4: {text: "очень высок"},
                   5: {text: "очень низок"},
                   6: {text: "не очень высок"},
                   7: {text: "не высок"},
				   8: {text: "среднего роста"}},
        race: { 1: {text: "Человек"},
                2: {text: "Гоблин"},
                3: {text: "Орк"},
                4: {text: "Эльф"},
                5: {text: "Дварф"} }
    }
};
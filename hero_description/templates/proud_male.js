
if (!window.pgf) pgf = {};

if (!pgf.descriptions) pgf.descriptions = {};

if (!pgf.descriptions.templates) pgf.descriptions.templates = {};


pgf.descriptions.templates['proud-male'] = {
    name: "горделивое мужское описание",
    gender: "M",
    text: "Этот [[stature]] [[race]] есть олицетворение мужественности и [[personalization]]. Герой – имя достойное [[calling]]. <br/> "
	    + "[[view]] [[eyes_color]] глаза отмечают каждую деталь вокруг. [[footstep]] походка как бы говорит нам: «вот идет воин, прячься [[foe]]». И [foe]] прячется, бежит в ужасе и страхе. <br/>"
        + "Герой диктует моду, [[imitators]] такие же прически: [[hairdo]]. Ему подражают в одежде: [[costume]], [[bijou]]. <br/>"
		+ "[[popularity]] о нем можно услышать в [[place_of_honor]]. Женщины… Они [[women]]. <br/>"
		+ "[[bonus1]] <br/>"
		+ "[[bonus2]] <br/>"
		+ "[[bonus3]] <br/>"
		+ "[[bonus4]] <br/>"
		+ "[[bonus5]] <br/>"
        + "[[bonus6]]",
    variables: {
        bonus1: { 1: {text: "[нет фразы]"},
                  2: {text: "Слава опережает героя."}},
		bonus2: { 1: {text: "[нет фразы]"},
                  2: {text: "Он руками гнет подковы."}},
		bonus3: { 1: {text: "[нет фразы]"},
                  2: {text: "Разбойники пугают им своих бандитских детей и, порой, друг друга."}},
		bonus4: { 1: {text: "[нет фразы]"},
                  2: {text: "Городские ворота отворяются сами собой, дома расступаются, изгороди уступают дорогу, когда в город входит Он."}},
		bonus5: { 1: {text: "[нет фразы]"},
                  2: {text: "Имя ему – Победитель тварей."}},
		bonus6: { 1: {text: "[нет фразы]"},
                  2: {text: "Обычный парень. Просто один из нас."}},
        women: { 1: {text: "десятками мечтают о нем"},
                 2: {text: "ждут его повсюду"},
                 3: {text: "без ума от него"},
                 4: {text: "хотят быть единственными в его жизни, но безрезультатно"},
                 5: {text: "и только они знают о его личной жизни, но, конечно, не ведают друг о друге"}},
		place_of_honor: { 1: {text: "каждой деревне"},
                          2: {text: "любом трактире"},
                          3: {text: "самых разных местах"},
                          4: {text: "в лучших домах знати"},
                          5: {text: "любых компаниях"},
					      6: {text: "каждом городе"},
                          7: {text: "где угодно, от богатых рыцарских замков, до самых грязных притонов"}},
        popularity: { 1: {text: "Рассказы"},
                      2: {text: "Истории"},
                      3: {text: "Стихи"},
                      4: {text: "Песни"},
                      5: {text: "Забавные куплеты"},
					  6: {text: "Оды"},
					  7: {text: "Сказки"},
                      8: {text: "Эпос"}},
		bijou: { 1: {text: "яркие украшения"},
                 2: {text: "на кожаных шнурках зубы и когти монстров"},
                 3: {text: "плетеные шнурочки, ленты и бусины"},
                 4: {text: "неброские украшения"},
                 5: {text: "вычурные ювелирные изделия"},
                 6: {text: "редкие драгоценности"}},
		costume: { 1: {text: "грубая кожа"},
                   2: {text: "мягкая кожа"},
                   3: {text: "драгоценная парча"},
                   4: {text: "яркий шелк"},
				   5: {text: "грубая кожа с заклепками и множеством застежек"},
                   6: {text: "мягкая кожа с тиснением"},
                   7: {text: "неброские ткани"},
                   8: {text: "яркий шелк с вышивкой"},
                   9: {text: "строгийе костюмы"},
                   10: {text: "удобные походные костюмы"}},
		hairdo: { 1: {text: "заплетают волосы в две косы"},
                  2: {text: "заплетают косу"},
                  3: {text: "бреются налысо"},
                  4: {text: "выбривают гребни"},
                  5: {text: "смачивая волосы сахарной водой, делают торчащие в разные стороны иглы"},
                  6: {text: "крайне сложные, в создании которых не обойтись без десятка шпилек"}},
		imitators: { 1: {text: "жители деревень носят"},
                     2: {text: "жители городов носят"},
                     3: {text: "сельская молодежь носит"},
                     4: {text: "городская молодежь носит"},
                     5: {text: "городские модники носят"},
                     6: {text: "очень многие носят"}},		   
		foe: { 1: {text: "враг"},
               2: {text: "недруг"},
               3: {text: "бандит"},
               4: {text: "разбойник"},
               5: {text: "всяк подлец"},
			   6: {text: "монстр"},
			   7: {text: "бестия"},
               8: {text: "неприятель"}},
		footstep: { 1: {text: "Тяжелая"},
                    2: {text: "Быстрая"},
                    3: {text: "Неторопливая"},
					4: {text: "По кошачьи плавная"},
                    5: {text: "Чуть ленивая"},
					6: {text: "Уверенная и целеустремленная"},
                    7: {text: "Легкая"}},
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
		view: { 1: {text: "Ясные"},
                2: {text: "Благородные"},
                3: {text: "Слегка накрашенные"},
                4: {text: "Выразительные"},
                5: {text: "Красивые"},
                6: {text: "Проницательные"}},
		calling: { 1: {text: "рыцаря дороги"},
                   2: {text: "сокрушителя бестий"},
                   3: {text: "воина хаоса"},
                   4: {text: "воина порядка"},
				   5: {text: "победителя"},
				   6: {text: "славного воина"},
				   7: {text: "покорителя трактов"},
				   8: {text: "искателя приключений"},
                   9: {text: "защитника хаоса"},
                   10: {text: "защитника порядка"}},
		personalization: { 1: {text: "надежности"},
                           2: {text: "спокойствия"},
                           3: {text: "невозмутимости"},
                           4: {text: "чести"},
                           5: {text: "доблести"},
						   6: {text: "отваги"},
						   7: {text: "благочестия"},
                           8: {text: "силы"}},
		stature: { 1: {text: "высокого роста"},
                   2: {text: "среднего роста"},
                   3: {text: "низкорослый"},
                   4: {text: "очень высокого роста"},
                   5: {text: "очень низкорослый"},
                   6: {text: "не очень высокого роста"},
                   7: {text: "не очень низкорослый"},
                   8: {text: "невысокого роста"},
				   9: {text: "среднего роста"}},
        race: { 1: {text: "человек"},
                2: {text: "гоблин"},
                3: {text: "орк"},
                4: {text: "эльф"},
                5: {text: "дварф"} }
    }
};

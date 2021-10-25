/**
 * Добавить Елемент Разум из него можно развить заклинание Подчинение животных и людей, елементали
 */
const mix = (color_1, color_2, weight = 50) => {
    color_1 = color_1.substr(1);
    color_2 = color_2.substr(1);
    function d2h (d) {return d.toString(16);}
    function h2d (h) {return parseInt(h, 16);}
    var color = "#";
    for (var i = 0; i <= 5; i += 2) {
        var v1 = h2d(color_1.substr(i, 2)),
            v2 = h2d(color_2.substr(i, 2)),
            val = d2h(Math.floor(v2 + (v1 - v2) * (weight / 100.0)));

        while (val.length < 2) {val = '0' + val;}

        color += val;
    }

    return color;
}

export const getElements = () => {
    return [...baseElements];
}
export const getSynergies = () => {
    return [...synergiesElements.map(synergy => {
        let parent_1 = baseElements.find(e => e.id === synergy.parents[0][0]),
            parent_2 = baseElements.find(e => e.id === synergy.parents[0][1]);
        return {
            ...synergy,
            colors: {
                primary: mix(parent_1.colors.primary, parent_2.colors.primary),
                secondary: mix(parent_1.colors.secondary, parent_2.colors.secondary),
            }
        }
    })];
}
const baseElements = [
    {
        id: 'light',
        label: 'Свет',
        description: 'Яркий ослепляющий свет',
        colors: {
            primary: '#fff952',
            secondary: '#fffdbd'
        },
    },
    {
        id: 'dark',
        label: 'Тьма',
        description: 'Всепоглощающая тьма',
        colors: {
            primary: '#3c0078',
            secondary: '#290052'
        },
    },
    {
        id: 'fire',
        label: 'Огонь',
        description: 'Жаркое пламя',
        colors: {
            primary: '#e34f00',
            secondary: '#e38400'
        },
    },
    {
        id: 'water',
        label: 'Вода',
        description: 'Быстротечная вода',
        colors: {
            primary: '#006bbd',
            secondary: '#7ac5ff'
        },
    },
    {
        id: 'air',
        label: 'Ветер',
        description: 'Вольный ветер',
        colors: {
            primary: '#e0feff',
            secondary: '#edfeff'
        },
    },
    {
        id: 'earth',
        label: 'Земля',
        description: 'Твердь земная',
        colors: {
            primary: '#914b00',
            secondary: '#784e22'
        },
    },
    {
        id: 'electricity',
        label: 'Молния',
        description: 'Неудержимая молния',
        colors: {
            primary: '#ffd000',
            secondary: '#bdfdff'
        },
    }
];

const synergiesElements = [
    {
        id: 'chaos',
        label: 'Хаос',
        description: 'Хаос что неподвластен смертным',
        parents: [['light', 'dark']],
    },
    {
        id: 'white_fire',
        label: 'Белое Пламя',
        description: 'Пламя что ослепляет своим сиянием!',
        parents: [['light', 'fire']],
    },
    {
        id: 'black_fire',
        label: 'Черное пламя',
        description: 'Пламя что пожирает сам свет!',
        parents: [['dark', 'fire']],
    },
    {
        id: 'holy_water',
        label: 'Святая Вода',
        description: 'Чистая вода словно слеза Бога!',
        parents: [['light', 'water'],]
    },
    {
        id: 'poison',
        label: 'Яд',
        description: 'Смертельный яд!',
        parents: [
            ['electricity', 'water'],
            ['dark', 'water'],
            ['dark', 'air'],
        ],
    },
    {
        id: 'steam',
        label: 'Пар',
        description: 'Непроглядные клубы пара!',
        parents: [['fire', 'water']],
    },
    {
        id: 'flash',
        label: 'Вспышка',
        description: 'Яркое сияние что лишает зрения!',
        parents: [['light', 'air']],
    },
    {
        id: 'fire_tornado',
        label: 'Огненое торнадо',
        description: 'Ураган пламени что разрушает и превращает в пепел все на своем пути!',
        parents: [['fire', 'air']],
    },
    {
        id: 'ice',
        label: 'Лед',
        description: 'Глыба льда что тверже камня!',
        parents: [['air', 'water']],
    },
    {
        id: 'life',
        label: 'Жизнь',
        description: 'Источник жизненой сили!',
        parents: [['light', 'earth']],
    },
    {
        id: 'corruption',
        label: 'Разложение',
        description: 'Разрушительное влияние что отравляет саму суть вещей!',
        parents: [['dark', 'earth']],
    },
    {
        id: 'lava',
        label: 'Лава',
        description: 'Поток жаркой магмы!',
        parents: [['fire', 'earth']],
    },
    {
        id: 'tree',
        label: 'Дерево',
        description: 'Дерево породы что тверже самой стали!',
        parents: [['water', 'earth']],
    },
    {
        id: 'dust',
        label: 'Пыль',
        description: 'Мелкие частички земли способные забрятся куда угодно!',
        parents: [['air', 'earth']],
    },
    {
        id: 'teleport',
        label: 'Телепорт',
        description: 'Мгновенное перемещение материи на любые растояния!',
        parents: [['electricity', 'light']],
    },
    {
        id: 'dark_ightning',
        label: 'Темная молния',
        description: 'Мновенный разряд енергии что поражает саму суть души!',
        parents: [['electricity', 'dark']],
    },
    {
        id: 'plasma',
        label: 'Плазма',
        description: 'Поток вещества что горячее самого Солнца!',
        parents: [
            ['electricity', 'fire'],
            ['electricity', 'air'],
        ],
    },
    {
        id: 'explosion',
        label: 'Взрыв',
        description: 'Ударная волна енергии!',
        parents: [['electricity', 'earth']],
    }
]
/**
 * Light
 * Dark
 * Fire
 * Water
 * Air
 * Earth
 * Electricity
 * Crystal
 * Astral
 */

/**
 * Chaos
 * White fire
 * Black fire
 * Holy water
 * Poison
 * Steam
 * Flash
 * Огненное торнадо
 * Ice
 * Life
 * Сorruption
 * Lava
 * Tree
 * Dust
 * Teleport
 * Dark Lightning
 * Plasma
 * Explosion
 * Enhance
 * Resistance
 */

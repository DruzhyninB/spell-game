/**
 * Добавить Елемент Разум из него можно развить заклинание Подчинение животных и людей, елементали
 */

export const getElements = () => {
    return [...baseElements];
}
export const getSynergiesElements = () => {
    return [...synergiesElements];
}
const baseElements = [
    {
        id: 'light',
        label: 'Свет',
        colors: {
            primary: '#fff952',
            secondary: '#fffdbd'
        },
    },
    {
        id: 'dark',
        label: 'Тьма',
        colors: {
            primary: '#3c0078',
            secondary: '#290052'
        },
    },
    {
        id: 'fire',
        label: 'Огонь',
        colors: {
            primary: '#e34f00',
            secondary: '#e38400'
        },
    },
    {
        id: 'water',
        label: 'Вода',
        colors: {
            primary: '#006bbd',
            secondary: '#7ac5ff'
        },
    },
    {
        id: 'air',
        label: 'Ветер',
        colors: {
            primary: '#e0feff',
            secondary: '#edfeff'
        },
    },
    {
        id: 'earth',
        label: 'Земля',
        colors: {
            primary: '#914b00',
            secondary: '#784e22'
        },
    },
    {
        id: 'electricity',
        label: 'Молния',
        colors: {
            primary: '#ffd000',
            secondary: '#bdfdff'
        },
    },
    // {
    //     id: 'crystal',
    //     label: 'Кристал',
    // },
    // {
    //     id: 'astral',
    //     label: 'Астрал',
    // }
];

const synergiesElements = [
    {
        id: 'chaos',
        label: 'Хаос',
        parents: [['light', 'dark']],
    },
    {
        id: 'white_fire',
        label: 'Белое Пламя',
        parents: [['light', 'fire']],
    },
    {
        id: 'black_fire',
        label: 'Черное пламя',
        parents: [['dark', 'fire']],
    },
    {
        id: 'holy_water',
        label: 'Святая Вода',
        parents: [['light', 'water'],]
    },
    {
        id: 'poison',
        label: 'Яд',
        parents: [
            ['dark', 'water'],
            ['dark', 'air'],
            ['electricity', 'water'],
        ],
    },
    {
        id: 'steam',
        label: 'Пар',
        parents: [['fire', 'water']],
    },
    {
        id: 'flash',
        label: 'Вспышка',
        parents: [['light', 'air']],
    },
    {
        id: 'fire_tornado',
        label: 'Огненое торнадо',
        parents: [['fire', 'air']],
    },
    {
        id: 'ice',
        label: 'Лед',
        parents: [['air', 'water']],
    },
    {
        id: 'life',
        label: 'Жизнь',
        parents: [['light', 'earth']],
    },
    {
        id: 'corruption',
        label: 'Разложение',
        parents: [['dark', 'earth']],
    },
    {
        id: 'lava',
        label: 'Лава',
        parents: [['fire', 'earth']],
    },
    {
        id: 'tree',
        label: 'Дерево',
        parents: [['water', 'earth']],
    },
    {
        id: 'dust',
        label: 'Пыль',
        parents: [['air', 'earth']],
    },
    {
        id: 'teleport',
        label: 'Телепорт',
        parents: [['electricity', 'light']],
    },
    {
        id: 'dark_ightning',
        label: 'Темная молния',
        parents: [['electricity', 'dark']],
    },
    {
        id: 'plasma',
        label: 'Плазма',
        parents: [
            ['electricity', 'fire'],
            ['electricity', 'air'],
        ],
    },
    {
        id: 'explosion',
        label: 'Взрыв',
        parents: [['electricity', 'earth']],
    },
    // {
    //     id: 'enhance',
    //     label: 'Усилиние',
    //     parents: [['fire', 'earth']],
    // },
    // {
    //     id: 'resistance',
    //     label: 'Сопротивление',
    //     parents: [['fire', 'earth']],
    // },
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

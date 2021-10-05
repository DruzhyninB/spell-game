/**
 * Добавить Елемент Разум из него можно развить заклинание Подчинение животных и людей, елементали
 */

export const getElements = () => {
    return baseElements.map(element => {
        return new Element(element);
    });
}

export class Element {
    constructor(props) {
        this.id = props.name;
        this.label = props.label;
        this.synergies = props.synergies;
    }
}

export class SynergyElement extends Element {
    constructor(props) {
        super(props);
        this.parents = props.parents;
    }
}

const baseElements = [
    {
        name: 'light',
        label: 'Свет',
        colors: {
            primary: '',
            secondary: ''
        },
    },
    {
        name: 'dark',
        label: 'Тьма',
        colors: {
            primary: '',
            secondary: ''
        },
    },
    {
        name: 'fire',
        label: 'Огонь',
        colors: {
            primary: '',
            secondary: ''
        },
    },
    {
        name: 'water',
        label: 'Вода',
        colors: {
            primary: '',
            secondary: ''
        },
    },
    {
        name: 'air',
        label: 'Ветер',
        colors: {
            primary: '',
            secondary: ''
        },
    },
    {
        name: 'earth',
        label: 'Земля',
        colors: {
            primary: '',
            secondary: ''
        },
    },
    {
        name: 'electricity',
        label: 'Молния',
        colors: {
            primary: '',
            secondary: ''
        },
    },
    // {
    //     name: 'crystal',
    //     label: 'Кристал',
    // },
    // {
    //     name: 'astral',
    //     label: 'Астрал',
    // }
];

const synergiesElements = [
    {
        name: 'chaos',
        label: 'Хаос',
        parents: [['light', 'dark']],
    },
    {
        name: 'white_fire',
        label: 'Белое Пламя',
        parents: [['light', 'fire']],
    },
    {
        name: 'black_fire',
        label: 'Черное пламя',
        parents: [['dark', 'fire']],
    },
    {
        name: 'holy_water',
        label: 'Святая Вода',
        parents: [['light', 'water'],]
    },
    {
        name: 'poison',
        label: 'Яд',
        parents: [
            ['dark', 'water'],
            ['dark', 'air'],
            ['electricity', 'water'],
        ],
    },
    {
        name: 'steam',
        label: 'Пар',
        parents: [['fire', 'water']],
    },
    {
        name: 'flash',
        label: 'Вспышка',
        parents: [['light', 'air']],
    },
    {
        name: 'fire_tornado',
        label: 'Огненое торнадо',
        parents: [['fire', 'air']],
    },
    {
        name: 'ice',
        label: 'Лед',
        parents: [['air', 'water']],
    },
    {
        name: 'life',
        label: 'Жизнь',
        parents: [['light', 'earth']],
    },
    {
        name: 'corruption',
        label: 'Разложение',
        parents: [['dark', 'earth']],
    },
    {
        name: 'lava',
        label: 'Лава',
        parents: [['fire', 'earth']],
    },
    {
        name: 'tree',
        label: 'Дерево',
        parents: [['water', 'earth']],
    },
    {
        name: 'dust',
        label: 'Пыль',
        parents: [['air', 'earth']],
    },
    {
        name: 'teleport',
        label: 'Телепорт',
        parents: [['electricity', 'light']],
    },
    {
        name: 'dark_ightning',
        label: 'Темная молния',
        parents: [['electricity', 'dark']],
    },
    {
        name: 'plasma',
        label: 'Плазма',
        parents: [
            ['electricity', 'fire'],
            ['electricity', 'air'],
        ],
    },
    {
        name: 'explosion',
        label: 'Взрыв',
        parents: [['electricity', 'earth']],
    },
    // {
    //     name: 'enhance',
    //     label: 'Усилиние',
    //     parents: [['fire', 'earth']],
    // },
    // {
    //     name: 'resistance',
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

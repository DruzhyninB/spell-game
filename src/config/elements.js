export const getElements = () => {
    return elements.map(s => ({
        ...s,
        type: 'element'
    }));
}

const elements = [
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
    },
    {
        id: "chaos",
        label: "Хаос",
        description: "Хаос что неподвластен смертным",
        parents: [
            ["light", "dark"]
        ],
        colors: {
            "primary": "#9d7c65",
            "secondary": "#947e87"
        }
    },
    {
        id: "white_fire",
        label: "Белое Пламя",
        description: "Пламя что ослепляет своим сиянием!",
        parents: [
            ["light", "fire"]
        ],
        colors: {
            "primary": "#f1a429",
            "secondary": "#f1c05e"
        }
    },
    {
        id: "black_fire",
        label: "Черное пламя",
        description: "Пламя что пожирает сам свет!",
        parents: [
            ["dark", "fire"]
        ],
        colors: {
            "primary": "#8f273c",
            "secondary": "#864229"
        }
    }, {
        id: "holy_water",
        label: "Святая Вода",
        description: "Чистая вода словно слеза Бога!",
        parents: [
            ["light", "water"]
        ],
        colors: {
            "primary": "#7fb287",
            "secondary": "#bce1de"
        }
    }, {
        id: "poison",
        label: "Яд",
        description: "Смертельный яд!",
        parents: [
            ["electricity", "water"],
            ["dark", "water"],
            ["dark", "air"]
        ],
        colors: {
            "primary": "#7f9d5e",
            "secondary": "#9be1ff"
        }
    }, {
        id: "steam",
        label: "Пар",
        description: "Непроглядные клубы пара!",
        parents: [
            ["fire", "water"]
        ],
        colors: {
            "primary": "#715d5e",
            "secondary": "#aea47f"
        }
    }, {
        id: "flash",
        label: "Вспышка",
        description: "Яркое сияние что лишает зрения!",
        parents: [
            ["light", "air"]
        ],
        colors: {
            "primary": "#effba8",
            "secondary": "#f6fdde"
        }
    }, {
        id: "fire_tornado",
        label: "Огненое торнадо",
        description: "Ураган пламени что разрушает и превращает в пепел все на своем пути!",
        parents: [
            ["fire", "air"]
        ],
        colors: {
            "primary": "#e1a67f",
            "secondary": "#e8c17f"
        }
    }, {
        id: "ice",
        label: "Лед",
        description: "Глыба льда что тверже камня!",
        parents: [
            ["air", "water"]
        ],
        colors: {
            "primary": "#70b4de",
            "secondary": "#b3e1ff"
        }
    }, {
        id: "life",
        label: "Жизнь",
        description: "Источник жизненой сили!",
        parents: [
            ["light", "earth"]
        ],
        colors: {
            "primary": "#c8a229",
            "secondary": "#bba56f"
        }
    }, {
        id: "corruption",
        label: "Разложение",
        description: "Разрушительное влияние что разрушает саму суть вещей!",
        parents: [
            ["dark", "earth"]
        ],
        colors: {
            "primary": "#66253c",
            "secondary": "#50273a"
        }
    }, {
        id: "lava",
        label: "Лава",
        description: "Поток жаркой магмы!",
        parents: [
            ["fire", "earth"]
        ],
        colors: {
            "primary": "#ba4d00",
            "secondary": "#ad6911"
        }
    }, {
        id: "tree",
        label: "Дерево",
        description: "Дерево породы что тверже самой стали!",
        parents: [
            ["water", "earth"]
        ],
        colors: {
            "primary": "#485b5e",
            "secondary": "#798990"
        }
    }, {
        id: "dust",
        label: "Пыль",
        description: "Мелкие частички земли способные забрятся куда угодно!",
        parents: [
            ["air", "earth"]
        ],
        colors: {
            "primary": "#b8a47f",
            "secondary": "#b2a690"
        }
    },
    {
        id: "dark_ightning",
        label: "Темная молния",
        description: "Мновенный разряд енергии что поражает саму суть души!",
        parents: [
            ["electricity", "dark"]
        ],
        colors: {
            "primary": "#9d683c",
            "secondary": "#737ea8"
        }
    }, {
        id: "plasma",
        label: "Плазма",
        description: "Поток вещества что горячее самого Солнца!",
        parents: [
            ["electricity", "fire"],
            ["electricity", "air"],
            ["electricity", "light"]
        ],
        colors: {
            "primary": "#f18f00",
            "secondary": "#d0c07f"
        }
    }, {
        id: "explosion",
        label: "Взрыв",
        description: "Ударная волна енергии!",
        parents: [
            ["electricity", "earth"]
        ],
        colors: {
            "primary": "#c88d00",
            "secondary": "#9aa590"
        }
    }
];
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

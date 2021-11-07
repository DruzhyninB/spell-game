export const getShapes = () => {
    return [...shapes];
}

export const shapes = [
    {
        id: 'target',
        label: 'Цель',
        description: 'Заклинание применяется к цели',
        icon:''
    },
    {
        id: 'area',
        label: 'Зона',
        description: 'Заклинание применяется к области пространства',
        icon:''
    },
    {
        id: 'skillshot',
        label: 'Снаряд',
        description: 'Заклинаниу высвобождается в виде снаряда енергии',
        icon:''
    },
    {
        id: 'enchant',
        label: 'Зачаровываение',
        description: 'Заклинаниу высвобождается в виде снаряда енергии',
        icon:''
    }
]
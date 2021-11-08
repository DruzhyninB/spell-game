/**
 * Добавить Елемент Разум из него можно развить заклинание Подчинение животных и людей, елементали
 */

export const getSources = () => {
    return sources.map(s => ({
        ...s,
        type: 'source'
    }));
}
const sources = [
    {
        id: 'mana',
        label: 'Мана',
        colors: {
            primary: '#0037c2',
            secondary: '#9ebaff'
        },
    },
    {
        id: 'divine',
        label: 'Божественная',
        colors: {
            primary: '#ffcb1f',
            secondary: '#ffedb3'
        },
    },
    {
        id: 'demonic',
        label: 'Демоническая',
        colors: {
            primary: '#780016',
            secondary: '#4a1d25'
        },
    },
    {
        id: 'astral',
        label: 'Астральная',
        colors: {
            primary: '#00c6d4',
            secondary: '#d885ff'
        },
    },
];
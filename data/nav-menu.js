const getNavMenu = () => {
    return [
        {
            name: 'About',
            link: '#about'
        },
        {
            name: 'Mission',
            link: '#mission'
        },
        {
            name: 'Values',
            link: '#values'
        },
        // {
        //     name: 'Services',
        //     link: '#services'
        // },
        // {
        //     name: 'Overview',
        //     link: '#overview'
        // },
        {
            name: 'Team',
            link: '#team'
        },
        {
            name: 'Sustainability',
            link: '#sustainability'
        },
        {
            name: 'Mines',
            link: '#mines'
        },
        {
            name: 'Projects',
            link: '#projects'
        },
    ]
}

const getButtonName = () => 'Sign In'

export {getNavMenu, getButtonName}
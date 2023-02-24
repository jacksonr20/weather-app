const questionOptions = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you want to do?',
        choices: [
        {
            value: 1,
            name: `${'1'.green}. Find City`,
        },
        {
            value: 2,
            name: `${'2'.green}. Historical`,
        },
        {
            value: 0,
            name: `${'0'.green}. Exit`,
        }],
    }
];

export { questionOptions }
import inquirer from 'inquirer';

const pause = async () => {
  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Press ${'Enter'.green} para continuar`,
    },
  ];

  // eslint-disable-next-line no-console
  console.log('\n');
  await inquirer.prompt(question);
};

export { pause };

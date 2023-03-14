import inquirer from 'inquirer';

const displayPlaces = async (places = []) => {
  const choices = places.map(({ id, name }, i) => {
    const idx = `${i + 1}.`.green;
    return {
      value: [id],
      name: `${idx} ${[name]}`,
    };
  });
  choices.unshift({
    value: '0',
    name: `${'0.'.green} Cancel`,
  });

  const selectPlace = [
    {
      type: 'list',
      name: 'id',
      message: 'Select the place: ',
      choices,
    },
  ];

  const { id } = await inquirer.prompt(selectPlace);
  console.log({ selectedId: id });
  return id[0];
};

export { displayPlaces };

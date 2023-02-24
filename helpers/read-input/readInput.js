import inquirer from "inquirer";

const readInput = async( message ) => {
    const question = [
      {
        type: 'input',
        name: 'place',
        message,
        validate( value ) {
            if (value.length === 0) {
                return 'Please enter a value';
            }
            return true;
        }
      }
    ];

    const { place } = await inquirer.prompt(question);

    return place
}

export { readInput }
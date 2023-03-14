import inquirer from 'inquirer';
import { questionOptions } from '../questions/inquirerQuestions.js';

const inquirerMenu = async () => {
  console.clear();
  console.log('======================'.green);
  console.log('   Select an option   '.white);
  console.log('======================\n'.green);

  const { option } = await inquirer.prompt(questionOptions);

  return option;
};

export { inquirerMenu };

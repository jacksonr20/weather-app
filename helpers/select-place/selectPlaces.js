import inquirer from "inquirer";

const displayPlaces = async (places = []) => {
    const choices = places.map(({ id, name }, i) => {
      const idx = `${i + 1}.`.green;
  
      return {
        value: [ id ],
        name: `${ idx } ${[ name ]}`,
      };
    });
    
    choices.unshift({
        value: `0`,
        name: `${'0.'.green} Cancel`,
    })

    const selectPlace = [
      {
        type: "list",
        name: "id",
        message: "Select the place: ",
        choices,
      },
    ];
  
    const { id } = await inquirer.prompt( selectPlace );
  
    return id;
  };

//   const confirmDelete = async( message ) => {
//     const question = [
//         {
//             type: 'confirm',
//             name: 'ok',
//             message,
//         }
//     ];

//     const { ok } = await inquirer.prompt( question );
//     return ok;
//   } 

  export { displayPlaces }
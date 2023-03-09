(() => {

  // función para obtener información de una película por Id
  function getMovieById(id: string) {
    console.log({ id });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getMovieCastById(id: string) {
    console.log({ id });
  }

  // funcion para obtener el bio del actor por el id
  function getActorBioById(id: string) {
    console.log({ id });
  }

  // Crear una película
  interface Movie {
    title: string;
    description: string;
    rating: string;
    cast: string[];
  }

  function createMovie({ title, description, rating, cast }: Movie) {
    console.log({ title, description, rating, cast });
  }

  function checkFullName(fullName: string) {
    if (fullName === 'fernando') return false;


    return true;
  }

  // Crea un nuevo actor
  function createActor(fullName: string, birthdate: Date): boolean {

    // tarea asincrona para verificar nombre
    // ..
    // ..
    checkFullName(fullName);
    console.log('Crear actor');

    return true;

  }

  //Parte 2

  // const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
  //   let result;
  //   if (isDead) {
  //     result = 1500;
  //   } else {
  //     if (isSeparated) {
  //       result = 2500;
  //     } else {
  //       if (isRetired) {
  //         result = 3000;
  //       } else {
  //         result = 4000;
  //       }
  //     }
  //   }

  //   return result;
  // }

  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
    let result: number;
    if (isDead) return result = 1500;
    if (isSeparated) return result = 2500;
    
    return (isRetired) ? 3000 : 4000
  }



})();





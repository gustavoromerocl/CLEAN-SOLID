(() => {

  // función para obtener información de una película por Id
  function getMovieById( id: string ) {
      console.log({ id });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getMovieCastById( id: string ) {
      console.log({ id });
  }

  // funcion para obtener el bio del actor por el id
  function getActorBioById( id: string ) {
      console.log({ id });
  }
  
  // Crear una película
  interface Movie {
    title:        string;
    description:  string;
    rating:       string;
    cast:         string[];
  }

  function createMovie({ title, description, rating, cast }: Movie ) {
      console.log({ title, description, rating, cast });
  }

  function checkFullName( fullName: string) {
    if ( fullName === 'fernando' ) return false;

    
    return true;    
  }

  // Crea un nuevo actor
  function createActor( fullName: string, birthdate: Date ): boolean {
      
      // tarea asincrona para verificar nombre
      // ..
      // ..
    checkFullName(fullName);
    console.log('Crear actor');

    return true;    

  }

  


})();





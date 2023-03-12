(() => {
  //No aplicando el principio de responsabilidad única
  type Gender = 'M' | 'F';

  class Person {
    constructor(
      public name       : string,
      public gender     : Gender,
      public birthdate  : Date
    ) { }
  }

  class User extends Person {
    public lastAccess: Date;

    constructor(
      public email    : string,
      public role     : string,
      name            : string,
      gender:         Gender,
      birthdate:      Date
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory : string,
      public lastOpenFolder   : string,
      email                   : string,
      role                    : string,
      name                    : string,
      gender:                 Gender,
      birthdate:              Date
    ) { 
      super(email,role, name, gender, birthdate );
    }
  }

  const newPerson = new Person('Fernando', 'M', new Date('1990-11-27'));
  console.log({ newPerson })
  const userSettings = new UserSettings(
    'users/home',
    '/home',
    'gandresrp@gmail.com',
    'admin',
    'Gustavo',
    'M',
    new Date('1990-11-27'),
  )

  console.log({ userSettings, areCredentialsValid: userSettings.checkCredentials() })
})()
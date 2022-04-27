export const translateCognitoMesssages = (message: string) => {
  switch (message) {
    case "Incorrect username or password.":
      return "Usuário ou senha incorreta."
    case "An account with the given email already exists.":
      return "Já existe uma conta com este email"
    case "Password did not conform with policy: Password must have uppercase characters":
      return "A senha deverá conter letra maíuscula"
    case "Password did not conform with policy: Password must have numeric characters":
      return "A senha deverá conter números"
    case "Password did not conform with policy: Password must have symbol characters":
      return "A senha deverá conter caractéres especiais"
  }
}


const generateHelloString = (language = "english") => {
  switch (language) {
    case "english":
      return "Hello";
      break;
    case "gurmukhi":
      return "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ";
      break;
    case "italian":
      return "Bonjourno";
      break;
    case "french":
      return "Bonjour";
      break;
    case "german":
      return "Guten Tag";
      break;
    case "bulgarian":
      return "Здравейте";
      break;
    default:
      throw RangeError(`Unknown language ${language}`);
  }
}

module.exports={generateHelloString}

// ES5

export function sayHelloIfILikeYou(name, iLikeYou) {
  /**
   * Take a paramenter called name
   * Take a second parameter called iLikeYou with possible values of true or false
   * If iLikeYou is true, return a string that greets the name, else return a string that says "I don't like you"
   * e.g. with name="John" and random=.2, return "Hello, John". The COMMA IS IMPORTANT!
   * e.g. with name="John" and random=.8, return "I don't like you". The COMMA IS IMPORTANT!
   * */
  if (iLikeYou) {
    return `Hello, ${name}`;
  } else {
    return `I don't like you`;
  }
}

// ES6

export const sayHelloIfItIsSunny = (name, weather) => {
  /**
   * * Take a paramenter called name
   * Take a variable called weather with possible values of "sunny", "rainy", "cloudy"
   * If the weather is sunny, return a string that greets the name, else return a string that says "I don't "weather" weather"
   * e.g. with name="John" and weather="sunny", return "Hello, John. What a sunny day". The COMMA IS IMPORTANT!
   * e.g. with name="John" and weather="rainy", return "I don't like rainy weather".
   * */
  if (weather === 'sunny') {
    return `Hello, ${name}. What a sunny day`;
  } else {
    return `I don't like ${weather} weather`;
  }
};

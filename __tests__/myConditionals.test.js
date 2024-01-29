import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { sayHelloIfILikeYou, sayHelloIfItIsSunny } from '../myConditionals.js';

describe('sayHelloIfILikeYou', () => {
  it('should greet the provided name or say "I don\'t like you" based on a random number', () => {
    assert.strictEqual(sayHelloIfILikeYou('John', true), 'Hello, John');
    assert.strictEqual(sayHelloIfILikeYou('John', false), "I don't like you");
  });
});

describe('sayHelloIfItIsSunny', () => {
  it('should greet the provided name if it is sunny or say "I don\'t like {weather} weather" otherwise', () => {
    assert.strictEqual(sayHelloIfItIsSunny('John', 'sunny'), 'Hello, John. What a sunny day');
    assert.strictEqual(sayHelloIfItIsSunny('John', 'rainy'), "I don't like rainy weather");
    assert.strictEqual(sayHelloIfItIsSunny('John', 'cloudy'), "I don't like cloudy weather");
  });
});

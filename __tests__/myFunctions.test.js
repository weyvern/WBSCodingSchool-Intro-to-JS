import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { sayHello1, sayHello2 } from '../myFunctions.js';

describe('sayHello1', () => {
  it('should greet the provided name', () => {
    assert.strictEqual(sayHello1('John'), 'Hello, John');
  });
});

describe('sayHello2', () => {
  it('should greet the provided name according to the time of day', () => {
    assert.strictEqual(sayHello2('Jane', 'morning'), 'Good morning, Jane');
    assert.strictEqual(sayHello2('John', 'evening'), 'Good evening, John');
    assert.strictEqual(sayHello2('Jenny', 'night'), 'Good night, Jenny');
  });
});

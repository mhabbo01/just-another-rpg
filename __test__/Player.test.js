
const Potion = require('../lib/Potion.js');
jest.mock('../lib/Potion.js');
console.log(new Potion());
const Player = require('../lib/Player.js');
const { expect } = require('@jest/globals');

test('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]));
});
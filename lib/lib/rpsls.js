#!/usr/bin/env node
export function rps(player_shot) {
    if (!player_shot) {
        let game = {
            'player': 'rock'
        }
        return game;
    }
    const rules = {
        "rock": ["scissors"],
        "paper": ["rock"],
        "scissors": ["paper"]
    }
    let options = Object.keys(rules);
    let game = {
        'player': `${player_shot}`,
        'opponent': `${options[Math.floor(Math.random() * options.length)]}`,
        'result': ''
    };
    if (!options.includes(game.player.toLowerCase())) {
        console.error("Invalid option")
        throw new RangeError();
    } else if (game.player == game.opponent) {
        game.result = 'tie';
    } else if (rules[game.player.toLowerCase()].includes(game.opponent)) {
        game.result = 'win';
    } else {
        game.result = 'lose';
    }
    return game;
}

export function rpsls(player_shot) {
    if (!player_shot) {
        let game = {
            'player': 'rock'
        }
        return game;
    }
    const rules = {
        "rock": ["scissors", "lizard"],
        "paper": ["rock", "spock"],
        "scissors": ["paper", "lizard"],
        "lizard": ["paper", "spock"],
        "spock": ["rock", "scissors"]
    }
    let options = Object.keys(rules);
    let game = {
        'player': `${player_shot.toLowerCase()}`,
        'opponent': `${options[Math.floor(Math.random() * options.length)]}`,
        'result': ''
    };
    if (!options.includes(game.player)) {
        console.error("Invalid option")
        throw new RangeError();
    } else if (game.player == game.opponent) {
        game.result = 'tie';
    } else if (rules[game.player].includes(game.opponent)) {
        game.result = 'win';
    } else {
        game.result = 'lose';
    }
    return game;
}
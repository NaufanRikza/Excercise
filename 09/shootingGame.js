class Player {
  #name;
  #health;
  #power;

  constructor(name = "", health = 100, power = 10) {
    this.#name = name;
    this.#health = health;
    this.#power = power;
  }

  hit(power = 0) {
    this.#health -= power;
    if (this.#health < 0) {
      this.#health = 0;
    }
  }

  useItem(item = {}) {
    if (item.health > 0) {
      this.#health += item.health;
      console.log(
        `player ${this.#name} used the item and got ${item.health} health`
      );
    }
    if (item.power > 0) {
      this.#power += item.power;
      console.log(
        `player ${this.#name} used the item and got ${item.power} power`
      );
    }
  }

  showStatus() {
    const status = `Player ${this.#name}(Health => ${this.#health} Power => ${
      this.#power
    })`;
    console.log(status);
  }

  getPower() {
    return this.#power;
  }

  getHealth() {
    return this.#health;
  }

  getName() {
    return this.#name;
  }
}

class ShootingGame {
  #player1;
  #player2;
  #item = ["health", "power"];
  // #powerItem = [0, 10];

  constructor(player1, player2) {
    this.#player1 = player1;
    this.#player2 = player2;
  }

  getRandomIntem() {
    let health = 0;
    let power = 0;
    if (this.#item[Math.round(Math.random())] === "health") {
      health = 10;
    } else {
      power = 10;
    }
    return {
      health: health,
      power: power,
    };
  }

  start() {
    let winner = "";
    console.log("Game Start!!");
    while (true) {
      this.#player1.showStatus();
      this.#player2.showStatus();

      this.#player1.useItem(this.getRandomIntem());
      this.#player2.useItem(this.getRandomIntem());

      this.#player1.hit(this.#player2.getPower());
      if (this.#player1.getHealth() <= 0) {
        winner = this.#player2.getName();
        break;
      }
      this.#player2.hit(this.#player1.getPower());
      if (this.#player2.getHealth() <= 0) {
        winner = this.#player1.getName();
        break;
      }
      console.log();
    }
    console.log();
    this.#player1.showStatus();
    this.#player2.showStatus();
    console.log();

    console.log(winner, "is the winner");
  }
}

const player1 = new Player("Robert", 100, 10);
const player2 = new Player("Emil", 100, 10);

const game = new ShootingGame(player1, player2);
game.start();

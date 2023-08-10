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
  #healthItem = [0, 10];
  #powerItem = [0, 10];

  constructor(player1, player2) {
    this.#player1 = player1;
    this.#player2 = player2;
  }

  getRandomIntem() {
    return {
      health: this.#healthItem[Math.round(Math.random())],
      power: this.#powerItem[Math.round(Math.random())],
    };
  }

  start() {
    console.log("Game Start!!");
    while (this.#player1.getHealth() > 0 && this.#player2.getHealth() > 0) {
      this.#player1.showStatus();
      this.#player2.showStatus();

      this.#player1.useItem(this.getRandomIntem());
      this.#player2.useItem(this.getRandomIntem());

      this.#player1.hit(this.#player2.getPower());
      this.#player2.hit(this.#player1.getPower());
      console.log();
    }

    const winner =
      this.#player1.getHealth() > 0 && this.#player2.getHealth() <= 0
        ? this.#player1.getName()
        : this.#player2.getName();

    console.log(winner, "is the winner");
  }
}

const player1 = new Player("Robert", 100, 10);
const player2 = new Player("Emil", 100, 10);

const game = new ShootingGame(player1, player2);
game.start();

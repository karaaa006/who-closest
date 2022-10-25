<template>
  <div class="game-board">
    <div class="question">
      {{ question.text }}
    </div>
    <form class="answer-form">
      <input type="number" class="answer-input" />
      <button class="answer-btn" type="submit">OK</button>
    </form>
    <div class="player-list">
      <PlayerCard
        v-for="player in playerList"
        :userName="player.name"
        :score="player.score"
        :isMe="player.isMe"
      />
    </div>
  </div>
</template>

<script>
import PlayerCardVue from "./PlayerCard.vue";

export default {
  data() {
    return {
      playerList: [
        { name: "test-666", score: 0, isMe: true },
        { name: "kara", score: 0, isMe: false },
        { name: "test-3", score: 0, isMe: false },
        { name: "test-4", score: 0, isMe: false },
      ],
      question: {
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia neque dolorum iste perspiciatis libero minus eos nihil iure sapiente sed nulla nostrum consequuntur quibusdam impedit, atque dolores aliquid deserunt illum?",
        answer: 1992,
      },
    };
  },
  components: {
    PlayerCard: PlayerCardVue,
  },
};
</script>

<style lang="scss">
.game-board {
  padding: 25px;
  border: 1px solid #cccccc;
  border-radius: 10px;
}

.question {
  margin-bottom: 15px;
}

.answer-form {
  display: flex;
  justify-content: center;
  gap: 10px;

  margin-bottom: 50px;
}

.answer-input {
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #cccccc;
}

.answer-btn {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;

  border: 1px solid #cccccc;
  border-radius: 10px;

  cursor: pointer;
}

.player-list {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
</style>

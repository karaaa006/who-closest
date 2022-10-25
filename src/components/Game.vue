<template>
  <div class="game-board">
    <div class="question-topic">{{ question.topic }}</div>
    <div class="question">
      {{ question.text }}
    </div>
    <form class="answer-form" @submit.prevent="setAnswer">
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
import { db } from "../api/firestore.js";
import {
  collection,
  doc,
  getCountFromServer,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export default {
  components: {
    PlayerCard: PlayerCardVue,
  },
  data() {
    return {
      playerList: [
        { name: "me", score: 0, isMe: true },
        { name: "kara", score: 0, isMe: false },
        { name: "test-3", score: 0, isMe: false },
        { name: "test-4", score: 0, isMe: false },
      ],
      question: {
        text: "",
        answer: 0,
        topic: "",
        id: 0,
      },
      answer: 0,
    };
  },
  async mounted() {
    const collectionRef = collection(db, "questions");
    const docsCountFromServer = await getCountFromServer(collectionRef);
    const docsCount = docsCountFromServer.data().count;

    const randomId = Math.ceil(Math.random() * docsCount) - 1;
    const q = query(collectionRef, where("id", "==", randomId));
    const querySnapshot = await getDocs(q);
    const randomQuestion = querySnapshot.docs[0].data();

    this.question = randomQuestion;
  },
  methods: {
    setAnswer(typedAnswer) {
      console.log(typedAnswer);
      this.answer = typedAnswer;
    },
  },
};
</script>

<style lang="scss">
.game-board {
  padding: 25px;
  border: 1px solid #cccccc;
  border-radius: 10px;
}

.question-topic {
  width: fit-content;

  padding: 5px 10px;
  margin-left: auto;
  border-radius: 10px;

  background-color: var(--accent-cl-opacity);

  line-height: 1;
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

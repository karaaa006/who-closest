<template lang="">
  <div class="player" :class="{ me: isMe }">
    <img
      src="https://cdn-icons-png.flaticon.com/512/25/25634.png"
      alt=""
      class="player-photo"
    />
    <div class="player-info-wrap">
      <a class="player-name" href="#">@{{ userName }}</a>
      <div class="player-score">{{ score }} pts</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    userName: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
      default: 0,
    },
    isMe: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss">
.player {
  display: flex;
  align-items: center;
  gap: 10px;

  width: fit-content;
  min-width: 125px;

  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 10px;

  transition: background-color 300ms ease;

  cursor: default;

  &.me {
    border-color: var(--accent-cl);
    border-width: 2px;

    &:hover {
      background-color: var(--accent-cl-opacity);
    }
  }

  &:hover {
    background-color: #eeeeee;
  }
}

.player-photo {
  width: 25px;
  height: 25px;
  object-fit: cover;
}

.player-score {
  font-weight: 600;
}
</style>

<script>
    import { fade } from 'svelte/transition';

    export let text;
    export let onClick;
</script>

<div class="wrapper" in:fade={{duration: 200}}>
    <div class="popup">
        <div class="text">{@html text}</div>
        <div class="button" on:click={onClick}>Понятно</div>
    </div>
</div>

<style lang="scss">
  @media screen and (min-width: $mobile-size-trigger + 1) {
    .wrapper {
      z-index: 100;
      position: absolute;

      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    .popup {
      box-sizing: border-box;
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;

      top: 50%;
      left: 50%;

      width: 581rem;

      padding: 40rem;

      transform: translate(-50%, -50%);
      box-shadow: 0 0 0 9999px rgba(0,0,0, 0.7);
      background-color: rgba(0,0,0, 0.9);
      border: 1px solid #BA7729;
      border-radius: 20px;
    }

    .text {
      margin-bottom: 24rem;

      text-align: center;
      color: white;

      @include font(18rem, 24rem, 400);
    }

    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;

      width: 244rem;
      height: 60rem;

      border-radius: 12rem;
      background-color: #BA7729;
      color: white;
      cursor: pointer;

      @include font(24rem, 24rem, 400);
    }
  }

  @media screen and (max-width: $mobile-size-trigger) {
    .wrapper {
      z-index: 100;
      position: absolute;

      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    .popup {
      box-sizing: border-box;
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;

      top: 50%;
      left: 50%;

      width: 288rem;

      padding: 19rem;

      transform: translate(-50%, -50%);
      box-shadow: 0 0 0 9999px rgba(0,0,0, 0.7);
      background-color: rgba(0,0,0, 0.9);
      border: 1px solid #BA7729;
      border-radius: 20px;
    }

    .text {
      margin-bottom: 24rem;

      text-align: center;
      color: white;

      @include font(16rem, 20rem, 400);
    }

    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;

      width: 244rem;
      height: 50rem;

      border-radius: 12rem;
      background-color: #BA7729;
      color: white;
      cursor: pointer;

      @include font(18rem, 18rem, 400);
    }
  }
</style>

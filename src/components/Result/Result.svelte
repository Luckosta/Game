<script>
    import copySrc from './assets/copy.svg'

    import {result} from "../../data.js";
    import {isMobile, pluralForm, copyTextToClipboard} from "../../helpers/index.js";

    export let score;
    export let onRestartClick;

    let currentResult;

    if (score < 2) {
        currentResult = result[0];
    } else if (score < 4) {
        currentResult = result[1];
    } else {
        currentResult = result[2];
    }

    function onPromocodeClick(e) {
        copyTextToClipboard(e.currentTarget.innerText.trim());
    }
</script>

<div class="result">
    <div class="leftWrapper">
        <div class="score">
            Вы набрали
            {score}
            {pluralForm(score, ['балл', 'балла', 'баллов'])}
        </div>
        <div class="title">{@html currentResult.title}</div>
        {#if isMobile()}
            <img src={currentResult.imgSrc} alt="результат" class="img">
        {/if}
        <div class="text">
            {@html currentResult.text}
            <br><br>
            Весь июнь дарим скидку 20% на покупку продукции Crave по промокоду
        </div>
        <div class="promocode" on:click={onPromocodeClick}>
            <div class="promocodeInner">
                <div class="promocodeText">CRAVE20</div>
                <img src={copySrc} alt="копировать" class="copy">
            </div>
        </div>
        {#if isMobile()}
            <div class="restart" on:click={onRestartClick}>
                <div class="restartInner">
                    <div class="restartText">Пройти заново</div>
                </div>
            </div>
        {/if}
    </div>
    {#if !isMobile()}
        <div class="rightWrapper">
            <img src={currentResult.imgSrc} alt="результат" class="img">
            <div class="restart" on:click={onRestartClick}>
                <div class="restartInner">
                    <div class="restartText">Пройти заново</div>
                </div>
            </div>
        </div>
    {/if}
</div>

<style lang="scss">
  @media screen and (min-width: $mobile-size-trigger + 1) {
    .result {
        display: flex;
    }

    .leftWrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      margin-top: 42rem;
    }

    .score {
      margin-bottom: 24rem;
      color: #BFC6CD;

      @include font(27rem, 32rem, 400);
    }

    .title {
      width: 630rem;
      margin-bottom: 24rem;

      @include font-linear;
      @include font(72rem, 72rem, 400, HighVoltage);
    }

    .text {
      width: 573rem;
      margin-bottom: 24rem;

      color: #BFC6CD;

      @include font(27rem, 120%, 400);
    }

    .promocode {
      padding: 1px;

      background: $linear;
      border-radius: 12px;

      cursor: pointer;
    }

    .promocodeInner {
      display: flex;
      align-items: center;
      padding: 8rem 11rem;

      background-color: #302711;
      border-radius: 11px;
    }

    .promocodeText {
      margin-right: 12rem;

      @include font-linear;
      @include font(40rem, 40rem, 400, HighVoltage);
    }

    .copy {
      width: 38rem;
    }

    .rightWrapper {
      margin-top: 37rem;
    }

    .img {
      width: 499rem;
      height: 477rem;

      margin-bottom: 30rem;
    }

    .restart {
      box-sizing: border-box;

      width: 499rem;
      height: 70rem;

      padding: 1px;

      border-radius: 20px;
      background: $linear;

      cursor: pointer;
    }

    .restartInner {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 100%;
      border-radius: 19px;
      background-color: black;
    }

    .restartText {
      @include font-linear;
      @include font(27rem, 120%, 400);
    }
  }

  @media screen and (max-width: $mobile-size-trigger) {
    .result {
      display: flex;
    }

    .leftWrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      width: 288rem;
      margin-top: 20rem;
    }

    .score {
      margin-bottom: 12rem;
      color: #BFC6CD;

      @include font(16rem, 24rem, 400);
    }

    .title {
      width: 300rem;
      margin-bottom: 12rem;

      @include font-linear;
      @include font(40rem, 40rem, 400, HighVoltage);
    }

    .text {
      margin-bottom: 9rem;

      color: #BFC6CD;

      @include font(16rem, 24rem, 400);
    }

    .promocode {
      width: 100%;

      padding: 1px;
      margin-bottom: 32rem;

      background: $linear;
      border-radius: 12px;
    }

    .promocodeInner {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 7rem 0;

      background-color: #302711;
      border-radius: 11px;
    }

    .promocodeText {
      margin-right: 12rem;

      @include font-linear;
      @include font(24rem, 24rem, 400, HighVoltage);
    }

    .copy {
      width: 26rem;
    }

    .img {
      width: 100%;
      height: 275rem;

      margin-bottom: 21rem;
    }

    .restart {
      box-sizing: border-box;

      width: 100%;
      height: 50rem;

      padding: 1px;
      margin-bottom: 20rem;

      border-radius: 20px;
      background: $linear;

      cursor: pointer;
    }

    .restartInner {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 100%;
      border-radius: 19px;
      background-color: black;
    }

    .restartText {
      @include font-linear;
      @include font(27rem, 120%, 400);
    }
  }
</style>

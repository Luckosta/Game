<script>
    import crossSrc from './assets/cross.svg';
    import heartSrc from './assets/heart.svg';

    import {isMobile} from "../../helpers/index.js";

    export let onChoice;
    export let imgSrc;
    export let title;
    export let pagination = 1;

    let pickElem;
    let isMouseDown = false;
    let shouldResetPosition = true;

    let startClientX;
    let startClientY;

    function handleFalsePick() {
        onChoice(false);
    }

    function handleTruePick() {
        onChoice(true);
    }

    function onMouseDown(e) {
        startClientX = e.clientX;
        startClientY = e.clientY;
        isMouseDown = true;
    }

    function onTouchStart(e) {
        startClientX = e.touches[0]?.clientX;
        startClientY = e.touches[0]?.clientY;
        isMouseDown = true;
    }

    function onMouseUp(e) {
        const diff = e.clientX - startClientX;

        if (Math.abs(diff) > 100) {
            pickElem.style.opacity = `0`;
            shouldResetPosition = false;

            diff > 100 ? handleTruePick() : handleFalsePick();
        }

        isMouseDown = false;
    }

    function onTouchEnd(e) {
        const diff = e.changedTouches[0]?.clientX - startClientX;

        if (Math.abs(diff) > 50) {
            pickElem.style.opacity = `0`;
            shouldResetPosition = false;

            diff > 50 ? handleTruePick() : handleFalsePick();
        }

        isMouseDown = false;
    }

    function onMouseMove(e) {
        if (e.buttons !== 1 && isMouseDown) {
            setTimeout(() => {
                isMouseDown = false;
            }, 50);
        }
        if (isMouseDown) {
            const rotation = (e.clientX - startClientX) * 0.05;
            pickElem.style.transform = `translate3d(${e.clientX - startClientX}px, ${e.clientY - startClientY}px, 0) rotate(${rotation}deg)`;
        }
    }

    function onTouchMove(e) {
        if (isMouseDown) {
            const rotation = (e.touches[0]?.clientX - startClientX) * 0.05;
            pickElem.style.transform = `translate3d(${e.touches[0]?.clientX - startClientX}px, ${e.touches[0]?.clientY - startClientY}px, 0) rotate(${rotation}deg)`;
        }
    }

    function resetPosition() {
        if (!pickElem || !shouldResetPosition) {
            return;
        }

        pickElem.style.transform = `translate3d(0, 0, 0)`;
    }

    function onContentChange() {
        shouldResetPosition = true;
    }


    $: !isMouseDown && resetPosition();
    $: title && onContentChange();

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('touchmove', onTouchMove)
</script>

<div class="picker">
    <div class="pagination">{pagination} / 5</div>
    <div class="title">{title}</div>
    <div class="pickerPickWrapper">
        {#if !isMobile()}
            <img class="button" src={crossSrc} alt="крестик" on:click={handleFalsePick}>
        {/if}
        <div class="pickWrapper">
            <div class="background"></div>
            <img src={imgSrc} alt="выбор" draggable="false" class="pick" bind:this={pickElem} on:mousedown={onMouseDown} on:mouseup={onMouseUp} on:touchstart={onTouchStart} on:touchend={onTouchEnd}>
        </div>
        {#if !isMobile()}
            <img class="button" src={heartSrc} alt="сердечко" on:click={handleTruePick}>
        {/if}
        {#if isMobile()}
            <div class="buttonWrapper">
                <img class="button" src={crossSrc} alt="крестик" on:click={handleFalsePick}>
                <img class="button" src={heartSrc} alt="сердечко" on:click={handleTruePick}>
            </div>
        {/if}
    </div>
</div>

<style lang="scss">
  @media screen and (min-width: $mobile-size-trigger + 1) {
    .picker {
      display: flex;
      flex-direction: column;
      align-items: center;

      margin-top: 69rem;
    }

    .title {
      margin-bottom: 25rem;

      @include font-linear;
      @include font(24rem, 28rem, 400);
    }

    .pickerPickWrapper {
      display: flex;
      align-items: center;
    }

    .button {
      width: 258rem;
      height: 258rem;

      cursor: pointer;
    }

    .pickWrapper {
      position: relative;

      margin: 0 113rem;
    }

    .pick,
    .background {
      box-sizing: border-box;

      width: 442rem;
      height: 442rem;

      border-radius: 32px;
      background: $linear;
    }

    .pick {
      z-index: 1;
      position: relative;

      padding: 1px;

      transition: all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .background {
      position: absolute;
      overflow: hidden;

      transform: rotate(-7deg);

      &::before {
        z-index: -1;
        content: '';
        display: block;
        position: absolute;

        top: 1px;
        right: 1px;
        bottom: 1px;
        left: 1px;
        border-radius: 31px;

        background-color: #5D3C15;
      }
    }

    .pagination {
      @include font-linear;
      @include font(32rem, 43rem, 400, HighVoltage);

      margin-bottom: 14rem;
    }
  }

  @media screen and (max-width: $mobile-size-trigger) {
    .picker {
      display: flex;
      flex-direction: column;
      align-items: center;

      margin-top: 24rem;
    }

    .title {
      margin-bottom: 26rem;

      @include font-linear;
      @include font(18rem, 21rem, 400);
    }

    .pickerPickWrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .buttomWrapper {
      display: flex;
    }

    .button {
      width: 60rem;
      height: 60rem;

      cursor: pointer;

      &:first-child {
        margin-right: 32rem;
      }
    }

    .pickWrapper {
      position: relative;

      margin-bottom: 27rem;
    }

    .pick,
    .background {
      box-sizing: border-box;

      width: 259rem;
      height: 259rem;

      border-radius: 32px;
      background: $linear;
    }

    .pick {
      z-index: 1;
      position: relative;

      padding: 1px;

      transition: all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .background {
      position: absolute;
      overflow: hidden;

      transform: rotate(-7deg);

      &::before {
        z-index: -1;
        content: '';
        display: block;
        position: absolute;

        top: 1px;
        right: 1px;
        bottom: 1px;
        left: 1px;
        border-radius: 31px;

        background-color: #5D3C15;
      }
    }

    .pagination {
      @include font-linear;
      @include font(16rem, 21rem, 400, HighVoltage);
      margin-bottom: 8rem;
    }
  }
</style>

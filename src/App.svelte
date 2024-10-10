<script>
    import './App.scss';
    import Picker from './components/Picker/Picker.svelte';
    import Popup from './components/Popup/Popup.svelte';
    import Result from './components/Result/Result.svelte';

    import {data} from "./data.js";

    import { fade } from 'svelte/transition';
    import { isMobile } from './helpers/index.js';

    $: currentStep = 0;
    $: showPopup = false;
    $: isCorrect = false;
    $: showResult = false;

    let score = 0;

    function onStepChange() {
        if (data[currentStep + 1]) {
            currentStep++;
        } else {
            showResult = true;
        }

        showPopup = false;
        isCorrect = false;
    }

    function onChoice(canEat) {
        showPopup = true;
        isCorrect = data[currentStep].answer === canEat;
        isCorrect && score++;
    }

    function onRestartClick() {
        currentStep = 0;
        showPopup = false;
        isCorrect = false;
        showResult = false;
        score = 0;
    }
</script>

<div class="wrapper {showResult ? 'wrapper_result' : ''}">
    {#key [currentStep, showResult]}
        <div class="innerWrapper" in:fade={{delay: 400}} out:fade>
            {#if showResult}
                <Result onRestartClick={onRestartClick} score={score} />
            {:else}
                <Picker {...data[currentStep]} pagination={currentStep + 1} onChoice={onChoice} />
                {#if showPopup}
                    <Popup onClick={onStepChange} text={isCorrect ? data[currentStep].correctText : data[currentStep].incorrectText} />
                {/if}
            {/if}
        </div>
    {/key}
</div>

<style lang="scss">
  .wrapper {
    overflow: hidden;
    position: relative;
    width: 100vw;
    height: 100%;
  }

  .wrapper_result {
    overflow-x: hidden;
    overflow-y: auto;
  }

  .innerWrapper {
    z-index: 1;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;
    height: 100%;
  }
</style>


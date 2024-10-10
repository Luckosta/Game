const mobileSizeTrigger = 768;

export function isMobile() {
    return document.documentElement.clientWidth <= mobileSizeTrigger;
}

export function pluralForm(number, words) {
    number = Number(number);

    const n10 = number % 10;
    const n100 = number % 100;

    if (n100 >= 11 && n100 <= 20) {
        return words[2];
    } else if (n10 === 1) {
        return words[0];
    } else if (n10 >= 2 && n10 <= 4) {
        return words[1];
    } else {
        return words[2];
    }
}

export function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }

    navigator.clipboard.writeText(text);
}

function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        const successful = document.execCommand('copy');
        const msg = successful ? 'successful' : 'unsuccessful';
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
}

import pick1Src from './assets/img/pick-1.jpg';
import pick2Src from './assets/img/pick-2.jpg';
import pick3Src from './assets/img/pick-3.jpg';
import pick4Src from './assets/img/pick-4.jpg';
import pick5Src from './assets/img/pick-5.jpg';

import result1Src from './assets/img/result-1.png';
import result2Src from './assets/img/result-2.png';

export const data = [
    {
        imgSrc: pick1Src,
        title: 'Мясо',
        answer: true,
        correctText: `
            Верно! В&nbsp;мясе содержатся важные витамины и&nbsp;микроэлементы, которые необходимы животным, чтобы оставаться активными и&nbsp;здоровыми! Но&nbsp;домашним кошке или собаке подойдёт не&nbsp;любое мясо.
            <br><br>
            Если используете в&nbsp;рационе питомца мясо, оптимальный вариант&nbsp;&mdash; нежирные сорта, например, индейка, в&nbsp;отварном виде. Но&nbsp;лучшее решение&nbsp;&mdash; сбалансированный корм от&nbsp;Crave, содержащий высокий уровень белка.
        `,
        incorrectText: 'Не&nbsp;совсем верно! Нашим питомцам важны витамины и&nbsp;микроэлементы, содержащиеся в&nbsp;мясе. Важно, в&nbsp;каком виде питомец получает его. Если используете в&nbsp;рационе питомца мясо, оптимальный вариант&nbsp;&mdash; нежирные сорта, например, индейка, в&nbsp;отварном виде. Но&nbsp;лучшее решение&nbsp;&mdash; сбалансированный корм от&nbsp;Crave, содержащий высокий уровень белка.',
    },
    {
        imgSrc: pick2Src,
        title: 'Виноград',
        answer: false,
        correctText: 'Точно',
        incorrectText: 'Ни&nbsp;в&nbsp;коем случае. Виноград токсичен для питомцев.',
    },
    {
        imgSrc: pick3Src,
        title: 'Жареный карп',
        answer: false,
        correctText: 'Правильно',
        incorrectText: 'Любую жареную рыбу&nbsp;&mdash; нельзя.',
    },
    {
        imgSrc: pick4Src,
        title: 'Шоколад',
        answer: false,
        correctText: 'Конечно',
        incorrectText: 'Шоколад&nbsp;&mdash; однозначно нет.',
    },
    {
        imgSrc: pick5Src,
        title: 'Луковое колечко',
        answer: false,
        correctText: 'Именно так',
        incorrectText: 'Лук токсичен для кошек и&nbsp;собак.',
    },
];

export const result = [
    {
        title: 'Вам предстоит многое узнать',
        text: `
            Возможно, вам трудно устоять перед обаянием питомца, когда он&nbsp;просит что-то вкусное со&nbsp;стола.
            <br><br>
            Составить здоровый рацион для кошки и&nbsp;собаки несложно, если заручиться советами ветврача.
        `,
        imgSrc: result1Src,
    },
    {
        title: 'Вы&nbsp;&mdash; заботливый хозяин',
        text: 'Пусть вы&nbsp;промахнулись с&nbsp;несколькими ответами, главное&nbsp;&mdash; вы&nbsp;беспокоитесь о&nbsp;здоровье питомца, поэтому изучили наш материал и&nbsp;прошли этот тест. А&nbsp;раз так, дело за&nbsp;малым: немного освежить знания о&nbsp;правильном питании, спросив совета у&nbsp;вашего ветврача.',
        imgSrc: result2Src,
    },
    {
        title: 'Вы&nbsp;&mdash; эксперт по&nbsp;правильному питанию',
        text: 'Вашему питомцу повезло: вы&nbsp;знаете, что для него полезно, а&nbsp;чего стоит избегать. Так держать!',
        imgSrc: result1Src,
    },
]

let phrases = [
    { text: ' в Баку, в Грузии, в Сухуми - он это видел. Подземные толчки в южной Боливии, южной Мексике...', image: 'https://static.vecteezy.com/system/resources/previews/013/743/891/original/white-snowflake-icon-png.png'},
    { text: ' в марте стал такой ноздреватый, грязный и рыхлый, что все дети собрались на замерзшей луже.', image: 'https://static.vecteezy.com/system/resources/previews/013/743/891/original/white-snowflake-icon-png.png'},
    { text: ' сошел, не пролежав и трех дней. Еще настоящая осень. Конец октября.', image: 'https://static.vecteezy.com/system/resources/previews/013/743/891/original/white-snowflake-icon-png.png'},
    { text: ' сошел еще в марте, и сейчас дни теплые и сухие.', image: 'https://static.vecteezy.com/system/resources/previews/013/743/891/original/white-snowflake-icon-png.png'},
    { text: ', ветер юго-западный до двадцати метров в секун­ду. У нас в Купчине снега не было, третий день под­таивает.', image: 'https://static.vecteezy.com/system/resources/previews/013/743/891/original/white-snowflake-icon-png.png' },
    { text: ' под окнами не сияющий, искрящийся, как в солнечные дни казалось, когда больно вы­ глядывать на улицу, а весь в серых, как и сказать не знаю, налетах каких-то сажи, грязи и пыли, как буд­то пасмурность погоды резче подчеркивает тени на поверхности земли.', image: 'https://static.vecteezy.com/system/resources/previews/013/743/891/original/white-snowflake-icon-png.png' }, 
    { text: '. Время между зимой и весной. Сами мы просто так на улицу не выходим, обязательно идем за покупками, даже просто ходить пить пиво не принято.', image: 'https://static.vecteezy.com/system/resources/previews/013/743/891/original/white-snowflake-icon-png.png'},
    { text: 'а нет, но деревья голые и дети, и люди в теплой одежде. Может, там, где подолгу трясет, и погода портится. Мне показалось пасмурно. Вчерашний день задал задачку. Как это зафиксирова­но одно и то же землетрясение в разных местах, в трех республиках?', image: 'https://static.vecteezy.com/system/resources/previews/013/743/891/original/white-snowflake-icon-png.png' },
    { text: ' сошел, и началось японское время года. Понадобилось всего три или четыре теплых дня с на­чала этой недели, чтобы весь снег растаял. Теперь хо­дим по лужам и не боимся подскользнуться. Начало апреля хорошее. Переворот в Камеруне, но еще не точно.', image: 'https://static.vecteezy.com/system/resources/previews/013/743/891/original/white-snowflake-icon-png.png' },
    { text: ' выпал повторно и лежит, не тает, хотя утром бьшо всего минус один градус. Может, перед Новым годом, перед днем рождения, мы и окажемся в метро у киоска с книгами.', image: 'https://static.vecteezy.com/system/resources/previews/013/743/891/original/white-snowflake-icon-png.png' },
    { text: 'а нападало совсем мало, и двор­ник легко расчищает дорожку. Варю уже второй чай, первый, с вечера оставленный, показался слабым. Прогуливающихся людей сегодня не видно, все спе­шат. Двадцать шестое января, месяц кончается, почти весь месяц простояли морозы. Что поделать? Никуда не соваться, сидеть дома.', image: 'https://static.vecteezy.com/system/resources/previews/013/743/891/original/white-snowflake-icon-png.png' },
  ];

   
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
  
  let button = document.querySelector('.button');
  let phrase = document.querySelector('.phrase');
  let advice = document.querySelector('.advice');
  let image = document.querySelector('.image');
  
  button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text);
    smoothly(image, 'src', randomElement.image);  
  
  if (randomElement.text.length > 160) {
    advice.style.fontSize = '20px';
  } else {
    advice.style.fontSize = '25px';
  }
});

for (i = 0; i <= 0; i = i + 1) {
  smoothly(phrase, 'textContent', phrases[i].text);
  smoothly(image, 'src', phrases[i].image);
}

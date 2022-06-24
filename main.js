const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '名前ちゃん:inserte::insertx:！:inserty:！:insertz::insertf:';
const insertX = ['愛しいなぁもう',
                 'どうしちゃったノカナ',
                 'オハヨウ〜',
                 '髪の毛、切ったのかな',
                 'のお目々、キラキラしてるね'];
const insertY = ['なんちゃッテ',
                 '僕は、すごく心配だよ',　
                 '天気悪いと気分もよくないよね',
                 '今日はどんな一日だった？', 
                 '今から寝ようと思ってたのに、目が覚めちゃったよ',
                　'この🏩、すごいキレイなんだって'];
const insertZ = ['仕事が早く終わりそうなんだけど、ご飯でもどうかな',
                 'ホント可愛すぎだよ〜マッタクもう',
                 '明日も仕事だけどなかなか寝れないよ〜',
                 '学校をサボるなんて、悪い子だなぁ',
                 'こんな日は会社休んで🏩に行こうよ'];
const insertE = ['😍', '👍', '❗️', '💔', '💦', '😱', '😰', '🥺', '😎'];
const insertF = ['🎵', '(^_^)', '(^o^)', '(^з<)', '(笑)'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);
  const eItem = randomValueFromArray(insertE);
  const fItem = randomValueFromArray(insertF);

  newStory = newStory.replace(':inserte:',eItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);
  newStory = newStory.replace(':insertf:',fItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('名前', name);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

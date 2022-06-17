const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '名前ちゃん:insertx:！:inserty:！:insertz::inserte:';
const insertX = ['愛しいなぁもう', 'どうしちゃったノカナ', 'オハヨウ〜'];
const insertY = ['なんちゃッテ', '僕は、すごく心配だよ', '今日はどんな一日だった？'];
const insertZ = ['仕事が早く終わりそうなんだけど、ご飯でもどうかな',
                 'ホント可愛すぎだよ〜マッタクもう',
                 '明日も仕事だけどなかなか寝れないよ〜',
                 '学校をサボるなんて、悪い子だなぁ'];
const insertE = ['😍', '👍', '❗️', '🎵', '(^_^)', '(^o^)', '(^з<)', '(笑)'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);
  const eItem = randomValueFromArray(insertE);

  newStory = newStory.replace(':inserte:',eItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);
  newStory = newStory.replace(':inserte:',eItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('名前', name);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

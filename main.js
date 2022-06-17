const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = ':insertx::inserty::insertz:';
const insertX = ['なんちゃッテ', 'どうしちゃったノカナ', 'オハヨウ〜'];
const insertY = ['愛しいなぁもう', '僕は、すごく心配だよ', '今日はどんな一日だった？'];
const insertZ = ['仕事が早く終わりそうなんだけど、ご飯でもどうかな', 'ホント可愛すぎだよ〜マッタクもう', '明日も仕事だけどなかなか寝れないよ〜'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertz:',zItem);
  newStory = newStory.replace(':insertx:',xItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('お早う', name);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = ':insertx:！:inserty::insertz:名前ちゃん:inserte:';
const insertX = ['ヤッホー🎵', 'オハヨ〜🎵', 'お疲れサマー😃'];
const insertY = ['今日も大変だったんだね😅', '毎日頑張ってて偉いネ😘', '今日はどんな一日だった？'];
const insertZ = ['僕は今日から名古屋に出張だよ😓🚅',
                 'そういえば、今日は旅行で北海道にいるヨ❗️',
                 'そういえば、昨日から出張で福岡に来ているよー😃'];
const insertE = ['は、今は何をしているのカナ❗️❓','に早く会って癒されたいナ^_^❗️','は、お土産は何がいい❗️❓'];

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

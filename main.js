const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'ある日の午後、華氏94度の中、:insertx:は散歩に出かけた。普段:inserty:で過ごしている:insertx:はすぐに疲れてしまった。 そこに、友だちであるアザラシが歩いてきた。アザラシは:insertx::insertz:、どこかへ行ってしまった。アザラシは300ポンドの:insertx:へのプレゼントを運んでいたのである。';
const insertX = ['もくもく', 'なでウサ', 'シロクマ'];
const insertY = ['ネットの世界', '人のいない場所', 'ベッドの中'];
const insertZ = ['の目を見つめてにこにこしながら', 'を見てびっくりしたかと思うと', 'に気づかずに楽しげに歌いながら'];

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
    newStory = newStory.replace('アザラシ', name);
  }

  if (document.getElementById("jp").checked) {
    const weight = `${Math.round(300*0.0714286)}ストーン`;
    const temperature =  `摂氏${Math.round((94-32) * 5 / 9)}度`;
    newStory = newStory.replace('華氏94度', temperature);
    newStory = newStory.replace('300ポンド', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

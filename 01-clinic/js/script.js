// =========================================================
// みなもとリハビリクリニック script.js
// 【つながり】index.html の id や data-day を探して、中身や class を書き換える
// =========================================================


// ---------- 1. スマホのメニューを開け閉めする ----------
// index.html の id="menu-button" と id="global-nav" を探す
const menuButton = document.getElementById('menu-button');
const nav = document.getElementById('global-nav');

menuButton.addEventListener('click', function () {
  // classList.toggle … class="is-open" がなければつけ、あれば外す
  // → style.css の .nav.is-open { display: flex; } が効いてメニューが出る
  const isOpen = nav.classList.toggle('is-open');

  // 読み上げソフト向けに「今開いているか」を伝える
  menuButton.setAttribute('aria-expanded', isOpen);
  menuButton.textContent = isOpen ? '閉じる' : 'メニュー';
});

// メニューの中のリンクを押したら、メニューを閉じる
nav.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    nav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = 'メニュー';
  });
});


// ---------- 2. 曜日ごとの診療時間 ----------
// 0=日曜, 1=月曜 … 6=土曜(JavaScript の決まり)
// ※ index.html の表と同じ内容。表を変えたら、ここも同じように変える
const schedule = {
  0: [],                                // 日曜:休診
  1: ['9:00〜12:30', '15:00〜18:30'],   // 月
  2: ['9:00〜12:30', '15:00〜18:30'],   // 火
  3: ['9:00〜12:30', '15:00〜18:30'],   // 水
  4: ['9:00〜12:30'],                   // 木:午後休診
  5: ['9:00〜12:30', '15:00〜18:30'],   // 金
  6: ['9:00〜13:00']                    // 土:午後休診
};

const today = new Date().getDay(); // 今日の曜日の番号(0〜6)


// ---------- 3. 「本日の診療」に文章を入れる ----------
// index.html の id="today-status" の中身を書き換える
const statusBox = document.getElementById('today-status');
const todayHours = schedule[today];

if (todayHours.length === 0) {
  statusBox.textContent = '休診日です';
} else {
  // join … 配列を「、」でつないで1つの文字にする(例:9:00〜12:30、15:00〜18:30)
  statusBox.textContent = todayHours.join('、');
}


// ---------- 4. 診療時間の表で、今日の列に色をつける ----------
// data-day が今日の番号と同じマスを全部探す
const todayCells = document.querySelectorAll('[data-day="' + today + '"]');

todayCells.forEach(function (cell) {
  cell.classList.add('is-today'); // → style.css の .hours .is-today で色がつく
});


// ---------- 5. フッターの年を今年にする ----------
document.getElementById('year').textContent = new Date().getFullYear();

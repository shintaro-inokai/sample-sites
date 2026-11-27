// =========================================================
// 間取設計室 script.js
// 1. メニューの開閉 2. 作品カードを作る 3. 絞り込み
// 4. 作品を大きく見る窓 5. お問い合わせフォームのチェック
// =========================================================


// ---------- 1. スマホのメニュー(クリニックと同じ書き方) ----------
const menuButton = document.getElementById('menu-button');
const nav = document.getElementById('global-nav');

menuButton.addEventListener('click', function () {
  const isOpen = nav.classList.toggle('is-open'); // → style.css の .nav.is-open
  menuButton.setAttribute('aria-expanded', isOpen);
  menuButton.textContent = isOpen ? '閉じる' : 'メニュー';
});

nav.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    nav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = 'メニュー';
  });
});


// ---------- 2. 作品の一覧データ ----------
// 作品を増やすときは、{ … } を1つコピーして書き換えるだけ。
// HTMLを直接さわらなくても、カードと拡大表示の両方に反映される。
const works = [
  {
    title: '白い箱の家',
    category: '住宅',
    place: 'みなもと市',
    year: 2024,
    photo: 'photo-1523217582562-09d0def993a6',
    alt: '木の横に建つ、白い四角い形の住宅',
    text: '共働きの4人家族の住まい。玄関から洗面所、キッチンまでを一直線につなぎ、帰宅してから家事を始めるまでの動きを短くしました。',
    data: { '用途': '専用住宅', '構造': '鉄筋コンクリート造 2階建て', '延床面積': '112㎡' }
  },
  {
    title: '芝生に開く平屋',
    category: '住宅',
    place: 'あおば町',
    year: 2023,
    photo: 'photo-1787088988806-7ec503692b85',
    alt: '芝生の庭に向かって大きく開いた、石の壁の平屋',
    text: '夫婦2人の平屋。すべての部屋を庭に面して並べ、どこにいても芝生が見えるようにしました。段差のない床で、将来の暮らしにも備えています。',
    data: { '用途': '専用住宅', '構造': '木造 平屋', '延床面積': '96㎡' }
  },
  {
    title: '木と石の家',
    category: '住宅',
    place: 'かわせみ町',
    year: 2022,
    photo: 'photo-1756706718604-ef4af3970e33',
    alt: '木々に囲まれた、コンクリートと木を組み合わせた住宅',
    text: '外壁の一部に木の板を張り、年月とともに色が変わっていく様子を楽しめる家。2階の窓からは、隣の公園の木々が見えます。',
    data: { '用途': '専用住宅', '構造': '木造 2階建て', '延床面積': '124㎡' }
  },
  {
    title: '路地の小さな家',
    category: '住宅',
    place: 'みなもと市',
    year: 2021,
    photo: 'photo-1789720868551-7461cb16fe07',
    alt: '緑に囲まれた、すっきりした形の小さな住宅',
    text: '間口の狭い敷地に建つ3人家族の家。吹き抜けと高い窓で、奥の部屋まで光が届くようにしました。',
    data: { '用途': '専用住宅', '構造': '木造 2階建て', '延床面積': '84㎡' }
  },
  {
    title: 'あかね台の集合住宅',
    category: '集合住宅',
    place: 'あかね台',
    year: 2020,
    photo: 'photo-1595418954089-3341605673d6',
    alt: '窓が規則正しく並ぶ、茶色の外壁の集合住宅',
    text: '全24戸の賃貸住宅。すべての部屋に2方向の窓を設け、風が通り抜けるようにしました。',
    data: { '用途': '共同住宅(24戸)', '構造': '鉄筋コンクリート造 6階建て', '延床面積': '1,480㎡' }
  },
  {
    title: '駅前のカフェ',
    category: '店舗',
    place: 'みなもと駅前',
    year: 2019,
    photo: 'photo-1720442617080-c25f9955194c',
    alt: '建物の入口の前に、テーブルといすが置かれた店舗',
    text: '既存のビルの1階を改修したカフェ。入口の前にテラス席をつくり、通りを歩く人が立ち寄りやすい店にしました。',
    data: { '用途': '飲食店(改修)', '構造': '鉄骨造の1階部分', '床面積': '68㎡' }
  }
];

// Unsplash の写真のURLを作る関数(幅 width を指定できる)
function photoUrl(id, width) {
  return 'https://images.unsplash.com/' + id + '?w=' + width + '&q=80&auto=format&fit=crop';
}


// ---------- 3. 作品のカードを作って並べる ----------
const list = document.getElementById('works-list');

works.forEach(function (work, index) {
  // `…${ }…` の書き方(テンプレート文字列)で、データをHTMLの中に入れる
  const html = `
    <li class="work" data-category="${work.category}">
      <button type="button" class="work-button" data-index="${index}">
        <img src="${photoUrl(work.photo, 900)}" alt="${work.alt}" width="900" height="600" loading="lazy">
        <span class="work-title">${work.title}</span>
        <span class="work-meta">${work.category} ${work.place} ${work.year}年</span>
      </button>
    </li>`;
  list.insertAdjacentHTML('beforeend', html);
});


// ---------- 4. 種類で絞り込む ----------
const filterButtons = document.querySelectorAll('.filter');

filterButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    const selected = button.dataset.filter; // 押したボタンの data-filter(例:"住宅")

    // ボタンの見た目を切り替える
    filterButtons.forEach(function (b) {
      b.classList.remove('is-active');
      b.setAttribute('aria-pressed', 'false');
    });
    button.classList.add('is-active');
    button.setAttribute('aria-pressed', 'true');

    // カードの data-category と比べて、表示・非表示を決める
    document.querySelectorAll('.work').forEach(function (card) {
      const show = selected === 'all' || card.dataset.category === selected;
      card.hidden = !show; // hidden = true で非表示になる
    });
  });
});


// ---------- 5. 作品を大きく見る窓 ----------
// <dialog> はブラウザに用意された「窓」の部品。showModal() で開き、close() で閉じる。
// Esc キーで閉じる機能は、ブラウザが最初から用意してくれている。
const modal = document.getElementById('modal');

list.addEventListener('click', function (event) {
  // 押された場所から一番近い .work-button を探す(写真や文字を押しても反応させるため)
  const button = event.target.closest('.work-button');
  if (!button) return;

  const work = works[button.dataset.index]; // 何番目の作品か → データを取り出す

  document.getElementById('modal-photo').src = photoUrl(work.photo, 1600);
  document.getElementById('modal-photo').alt = work.alt;
  document.getElementById('modal-category').textContent = work.category + ' ' + work.place + ' ' + work.year + '年';
  document.getElementById('modal-title').textContent = work.title;
  document.getElementById('modal-text').textContent = work.text;

  // 用途・構造・面積を dt と dd にして入れる
  const dataBox = document.getElementById('modal-data');
  dataBox.innerHTML = '';
  for (const key in work.data) {
    dataBox.insertAdjacentHTML('beforeend', '<dt>' + key + '</dt><dd>' + work.data[key] + '</dd>');
  }

  modal.showModal();
});

document.getElementById('modal-close').addEventListener('click', function () {
  modal.close();
});

// 窓の外側(暗い部分)を押したら閉じる
modal.addEventListener('click', function (event) {
  if (event.target === modal) modal.close();
});


// ---------- 6. お問い合わせフォームのチェック ----------
const form = document.getElementById('contact-form');

// 1つの欄をチェックして、エラーなら文字を出す関数
function check(id, message, isOk) {
  const input = document.getElementById(id);
  const error = document.getElementById(id + '-error');
  if (isOk(input.value.trim())) {
    error.textContent = '';
    input.removeAttribute('aria-invalid');
    return true;
  }
  error.textContent = message;
  input.setAttribute('aria-invalid', 'true'); // → style.css で枠が太くなる
  return false;
}

form.addEventListener('submit', function (event) {
  event.preventDefault(); // 本当に送信されてページが切り替わるのを止める

  const okName = check('name', 'お名前を入力してください', function (v) { return v !== ''; });
  const okEmail = check('email', 'メールアドレスの形式で入力してください(例:name@example.com)', function (v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); // 「文字@文字.文字」の形かを調べる
  });
  const okMessage = check('message', 'ご相談内容を入力してください', function (v) { return v !== ''; });

  const result = document.getElementById('form-result');
  if (okName && okEmail && okMessage) {
    result.textContent = '入力内容に問題はありません。このサイトはサンプルのため、実際には送信されません。';
    form.reset();
  } else {
    result.textContent = '';
  }
});


// ---------- 7. フッターの年 ----------
document.getElementById('year').textContent = new Date().getFullYear();

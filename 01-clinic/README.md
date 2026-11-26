# みなもとリハビリクリニック(架空)

架空の整形外科・リハビリテーション科クリニックを想定して制作した、Webサイトのサンプルです。
実在の医療機関、人物、住所とは関係ありません。

## 想定した課題
- 患者さん(高齢の方を含む)が「今日やっているか」「どう行けばいいか」をすぐ確認できること
- 初めての人が、受診の流れを事前に知って安心できること

## 工夫したところ
- 今日の曜日を判定して、「本日の診療」の表示と診療時間表の列の強調を自動で切り替える
- 文字を大きめ(17px)にし、色のコントラストを確保して読みやすくした
- スマートフォンではメニューを開閉式にし、診療時間表は横にスクロールできるようにした
- よくある質問は `details` 要素で作り、JavaScript がなくても開閉できるようにした
- キーボード操作(本文へ移動するリンク、フォーカスの表示)に対応した

## 使った技術
HTML / CSS / JavaScript(ライブラリなし)

## ファイル構成
```
01-clinic/
├── index.html     … ページの中身
├── css/style.css  … 見た目
└── js/script.js   … 動き(メニュー開閉、本日の診療、今日の列の強調)
```

## 写真の出典
写真はすべて [Unsplash](https://unsplash.com/) の無料写真(Unsplash License)を使用しています。
- ファーストビュー:https://unsplash.com/photos/pbUWW-CBoqY
- 整形外科:https://unsplash.com/photos/ZzkNkbUxFMc
- リハビリテーション:https://unsplash.com/photos/mvHuY-t4QII
- スポーツ障害:https://unsplash.com/photos/Nt5eeIKH-1s
- 医師紹介:https://unsplash.com/photos/Z08MudCULdo

# 間取設計室(架空)

架空の一級建築士事務所を想定して制作した、Webサイトのサンプルです。
実在の設計事務所、作品、人物、住所とは関係ありません。

## 想定した課題
- 設計事務所を選ぶ人が、まず「どんな建物をつくっているか」を写真で確かめられること
- 気になった作品の詳しい情報(用途、構造、面積)まで、ページを移動せずに見られること

## 工夫したところ
- 作品の情報を JavaScript の配列にまとめ、そこからカードと拡大表示を自動で作るようにした(作品を追加するときはデータを1つ足すだけ)
- 「住宅・集合住宅・店舗」で作品を絞り込める
- 作品をクリックすると、`dialog` 要素で大きな写真と詳細を表示する(Esc キーや外側のクリックで閉じる)
- お問い合わせフォームに入力チェックをつけた(サンプルのため実際には送信しない)
- 文字と色を控えめにして、建物の写真が主役になるデザインにした

## 使った技術
HTML / CSS / JavaScript(ライブラリなし)

## ファイル構成
```
02-architect/
├── index.html     … ページの中身
├── css/style.css  … 見た目
└── js/script.js   … 動き(メニュー、作品データ、絞り込み、拡大表示、フォームのチェック)
```

## 写真の出典
写真はすべて [Unsplash](https://unsplash.com/) の無料写真(Unsplash License)を使用しています。
- ファーストビュー:https://images.unsplash.com/photo-1549791084-5f78368b208b
- 白い箱の家:https://images.unsplash.com/photo-1523217582562-09d0def993a6
- 芝生に開く平屋:https://images.unsplash.com/photo-1787088988806-7ec503692b85
- 木と石の家:https://images.unsplash.com/photo-1756706718604-ef4af3970e33
- 路地の小さな家:https://images.unsplash.com/photo-1789720868551-7461cb16fe07
- あかね台の集合住宅:https://images.unsplash.com/photo-1595418954089-3341605673d6
- 駅前のカフェ:https://images.unsplash.com/photo-1720442617080-c25f9955194c

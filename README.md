# これは何

- 浜松市のウェブサイトで公開されている区名候補募集結果データをプログラムで二次利用しやすいようにJSON形式にしたものです。
- 加工元
  - [行政区再編協議(PDF)](https://www.city.hamamatsu.shizuoka.jp/documents/141080/newr040905gyouzaisei.pdf)
  - PDFのリンクは[ここ](https://www.city.hamamatsu.shizuoka.jp/gikai/iinkai/0409_0410.html)に掲載されています
- ファイル
  - A_Ward_SubmittedList.txt
    - A区の名称案をPDFからコピペして整えたテキストデータです
  - B_Ward_SubmittedList.txt
    - B区の名称案をPDFからコピペして整えたテキストデータです
  - A_Ward_SubmittedList.json
    - テキストデータを加工して作成したJSONです
  - B_Ward_SubmittedList.json
    - テキストデータを加工して作成したJSONです
  - app.js
    - 加工プログラム本体です
    - 実行例
      - `node app.js < A_Ward***.txt > A_Ward***.json`
- JSONデータ構造
  - 凡例
```
[
  {
    "rank":"応募数の順位",
    "name":"名称案",
    "ruby":"よみがな",
    "count":"応募数"
  },
  { ... }
  ...
]
```
- それはそうと浜松市わんにゃんぱー区🐕🐈⛲はやってほしい

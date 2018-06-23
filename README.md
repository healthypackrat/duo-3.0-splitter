# duo-3.0-splitter

## これは何?

[DUO 3.0 CD/**復習用**](https://www.amazon.co.jp/dp/4900790079)の音声を例文ごとに分割するスクリプトです。

## 動作環境

  - macOS High Sierra (10.13.4)

## 必要なもの

  - Ruby
      - 標準でインストールされています
  - ffmpeg
      - `brew install ffmpeg` でインストールしてください

## 使い方

WAVエンコーダを指定してCDをiTunesでインポートしてください。

セクション番号(トラック番号)は作成されるファイル名の先頭の数字で判断するのでトラック名はそのままでいいです。

すべてのトラックを選択して、`情報を見る` からアーティスト名、アルバム名に `DUO 3.0` と入力してください。(`~/Music/iTunes/iTunes Media/Music/DUO 3.0/DUO 3.0` にインポートされます。)

ターミナルを開いてスクリプトにインポートされたファイル名を渡して実行してください。

分割されたファイルは `~/Desktop/DUO 3.0` にMP3フォーマットで出力されます。

`-d` オプションでその他の出力ディレクトリを指定できます。

`-f aac` オプションでAACフォーマットで出力できます。

`-f wav` オプションでWAVフォーマットで出力できます。

`-h` オプションでヘルプを表示できます。

実行例:

```
/usr/bin/ruby bin/duo-3.0-splitter -d ~/Desktop/Test -f aac ~/Music/iTunes/iTunes\ Media/Music/DUO\ 3.0/DUO\ 3.0/*.wav
```

## 参考: ラベルファイルの作り方

[Audacity](https://www.audacityteam.org)で音声ファイルを開きます。

<kbd>Cmd + A</kbd>でトラックを全て選択し、メニューから `[解析] - [Silence Finder...]` を開きます。

`[管理] - [出荷時プリセット] - [デフォルト]` を選択します。

`Minimum duration of silence` に `0.500` を入力して実行します。

<kbd>x</kbd>キーで再生・一時停止しながら不要なラベルを右クリックから削除していきます。

ラベルに例文番号を入力していきます。(<kbd>TAB</kbd>キーで次のラベルに移動できます。)

<kbd>K</kbd>キーでカーソルを末尾に移動させて、<kbd>Cmd + B</kbd>でラベルを作成して `END` と入力します。

`[ファイル] - [Export] - [ラベルの書き出し...]` で保存します。

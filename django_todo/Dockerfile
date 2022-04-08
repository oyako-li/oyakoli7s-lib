# 元となるdockerイメージを指定
FROM python:3
# この環境変数に値を入れることでバッファを無効化する('1'じゃなくてもいい)
ENV PYTHONUNBUFFERED 1
# codeディレクトリを作成
RUN mkdir /code
# codeディレクトリに移動
WORKDIR /code
# txtファイルをcodeディレクトリに配置
COPY requirements.txt /code/
# pipコマンドを最新にし、txtファイル内のパッケージ（後述）をpipインストール
RUN pip install --upgrade pip && pip install -r requirements.txt
# sixone/配下のファイルをcodeディレクトリにコピー
COPY . /code/
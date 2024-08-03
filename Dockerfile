# ベースイメージを指定
FROM node:20

# 作業ディレクトリを作成
WORKDIR /usr/src/app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# ポートを開放
EXPOSE 3000

# アプリケーションを起動
CMD ["node", "index.js"]

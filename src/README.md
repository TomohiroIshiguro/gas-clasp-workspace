# Slack に投稿されたメッセージを要約する

## サービス

1. Slack app (bot)
2. GAS

## ツール

- clasp

## 手順

GAS

1. GAS プロジェクトを作る
2. (clasp 環境を用意して、clone する)
3. Slack からのリクエストに含まれる challenge コードを返す処理を書いて、デプロイする
4. デプロイした Web URL をコピーする

Slack

5. App をつくる
6. Event subscriptions を ON にする
7. GAS 4. でコピーした Web URL をリクエスト URL に貼る
8. リクエスト URL が Verified になったことを確認する
9. Subscribe to bot events で、検知するイベントを選ぶ
10. OAuth & Permissions の Scope を設定する

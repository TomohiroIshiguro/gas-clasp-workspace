

help:
	cat Makefile

### docker

up:
	# コンテナ(仮想環境)を起動する
	# usage: make up
	docker-compose up -d

down:
	# コンテナ(仮想環境)を破棄する
	# usage: make down
	docker-compose down

### clasp

login:
	# Google にログインして、ローカルから GAS への接続情報を取得する
	# usage: make login
	docker exec -it clasp-app sh /clasp-login.sh

clone:
	# ローカルから GAS のプロジェクトを指定して、GAS のコードをダウンロードする
	# usage: make clone ID=(GAS のスクリプト ID)
	docker exec -it clasp-app clasp clone ${ID}

push:
	# 保存した接続情報でローカルのコードを GAS へアップロードする
	# usage: make push
	docker exec -it clasp-app clasp push

pull:
	# 保存した接続情報で GAS のコードをローカルへダウンロードする
	# usage: make pull
	docker exec -it clasp-app clasp pull

clean:
	# コードを削除する
	# usage: make clean
	rm -Rf src
	mkdir src

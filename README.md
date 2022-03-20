## 負荷テスト


```
# テストのコンテナ起動
docker-compose up -d

# テスト実行
docker-compose run --rm k6 run /scripts/script.js

# 結果の表示
```

## 負荷テスト


```
# apiのコンテナ起動
docker-compose -f infra/docker-compose/docker-compose.yml up -d

# テストのコンテナ起動
docker-compose -f infra/docker-compose/stresstest/docker-compose.yml up -d

# テスト実行
docker-compose -f infra/docker-compose/stresstest/docker-compose.yml run --rm k6 run /scripts/script.js

# 結果の表示
```

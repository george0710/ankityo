# kaden

```
docker-compose up -d
```

## iosアプリ実行（パソコンに実機をつないだら実機実行となる）

```
cd src-cordova

cordova platform add ios

cordova prepare

cordova run ios
```

### ※実行権限のエラーが出たら以下のコマンドを実行
```
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
```

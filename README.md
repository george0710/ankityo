# 暗記帳

```
docker-compose up -d
```

## iosアプリ実行（パソコンに実機をつないだら実機実行となる）

##以下初回のみ
```
npm install -g cordova
npm install -g ios-deploy
```

実機インストール
```
npm run build

cd src-cordova

cordova platform add ios

cordova prepare

cordova run ios
```

### ※実行権限のエラーが出たら以下のコマンドを実行
CordovaError: Promise rejected with non-error: 'ios-deploy was not found. Please download
```
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
```

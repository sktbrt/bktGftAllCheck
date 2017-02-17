# bktGftAllCheck
全てのチェックボックスを選択/解除できるjQuery Plugin

## 使い方

```javascript:index.js
$(function(){
  $('#all').bktGftAllCheck();
});
```

```html:index.html
<label><input type="checkbox" name="sweets" value="すべて" id="all" />すべて</label>
<label><input type="checkbox" name="sweets" value="カップケーキ" checked="checked" />カップケーキ</label>
<label><input type="checkbox" name="sweets" value="マフィン" />マフィン</label>
<label><input type="checkbox" name="sweets" value="プリン" />プリン</label>
<label><input type="checkbox" name="sweets" value="パイ" />パイ</label>
<label><input type="checkbox" name="sweets" value="タルト" />タルト</label>
<label><input type="checkbox" name="sweets" value="ロールケーキ" />ロールケーキ</label>
```

![Demo](https://raw.githubusercontent.com/sktbrt/files/master/bktGftAllCheck.gif)

## Event
### bktGftCheckOn
それぞれのチェックボックスが選択されたとき発火する
### bktGftCheckOff
それぞれのチェックボックスが選択解除されたとき発火する
### bktGftCheckAllOn
すべてのチェックボックスが選択されたとき発火する
### bktGftCheckAllOff
すべてのチェックボックスが選択解除されたとき発火する



## piece_of_cake.js (半殘)

> 僅針對 SurveyCake [T******C 同仁每日健康問卷] 撰寫

### 目前問題
1. 輸入框 執行過js腳本後，**一定要手動去新增一些文字再刪除**，送出表單才會成功進入下一步
    * 應是因為 [Event.isTrusted](https://developer.mozilla.org/zh-TW/docs/Web/API/Event/isTrusted) 受到控制，透過 dispatchEvent 等模擬行為方式無法通過校驗
    * 還在嘗試別的破解方法

### Usage

**=> 記得把名字改成自己的!**

**下面提供兩種使用方式，推薦後者**

* Console 模式
  1. 進到問卷畫面
  2. 按 F12 打開 chrome devtools 
  3. Console 
  4. 複製貼上 下面的 `function` 
  
  ```js
  (function(){
    const info = ['廖建銘', 'Tex Liao', '36'];
    const ff = (regex) => Array.from(document.querySelectorAll('span')).filter(e => regex.test(e.innerText)).forEach((e, i) => !(i % 2) && e.children[0].click());
    document.querySelectorAll('input').forEach((e, i) => e.value = info[i]);
    [/^2021\//,/R&D/,/在家工作/,/無不適/,/否/].forEach(e => ff(e));
    document.querySelectorAll('button')[0].click();  
  })()
  ```
  
* Bookmarlet 模式
  1. 瀏覽器書籤 > 右鍵新增網頁  
  2. "名稱"隨便打，網址貼上 下面的 `function`
  
  ```js
  javascript:!function(){const e=["廖建銘","Tex Liao","36"];document.querySelectorAll("input").forEach((c,r)=>c.value=e[r]),[/^2021\//,/R&D/,/在家工作/,/無不適/,/否/].forEach(e=>(e=>Array.from(document.querySelectorAll("span")).filter(c=>e.test(c.innerText)).forEach((e,c)=>!(c%2)&&e.children[0].click()))(e)),document.querySelectorAll("button")[0].click()}();
  ```
  3. 進到問卷畫面
  4. 點剛剛新增的書籤

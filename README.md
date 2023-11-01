# Vue 3.3 맛보기

Vue 3.3버전에서 나온 새로운 문법들을 사용해보고 소개하는 페이지
<br/><br/>

###### [2023-11-01]

막상 사용해보니 아직 실험적 기능이라, 엉망진창 투성이다. 그래서 일단 코드 태그를 꾸며주는 Highlight.js를 Vue에서 어떻게 사용하는지를 설명한다.
<br/>

1. 패키지 다운로드

```shell
npm install highlight.js @highlightjs/vue-plugin
```

<br/>

2. 코드 블럭 테마 및 플러그인 적용 + Highlight 컴포넌트 정의

```javascript
import hljsVuePlugin from "@highlightjs/vue-plugin";
import "highlight.js/lib/common";
import "highlight.js/styles/stackoverflow-dark.min.css"; // 원하는 테마 선택

createApp(App)
    .use(hljsVuePlugin) // 플러그인 적용
    .component("highlightjs", hljsVuePlugin.component) // 전역 컴포넌트 정의
    .mount("#app");
```

<br/>

3. 사용법

```html
<div>
    <highlightjs
        language="vue"
        code="const { name = &#x22;홍길동&#x22;, msg = &#x22;어서오고&#x22; } = defineProps&#x3C;{
   name?: string;
   msg?: string;
}&#x3E;();"
    />
</div>
```

<br/>

4. 결과물

```typescript
const { name = "홍길동", msg = "어서오고" } = defineProps<{
    name?: string;
    msg?: string;
}>();
```

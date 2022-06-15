---

title: "全局初始化"
date: 2022-06-15 11:30:52
publish: false

---
## 实例化

Vue2实例化只需要使用`new 关键字`,在Vue3中，需要引入`createApp`方法

:::: code-group

::: code-group-item vue3

```js
import { createApp } from "vue"
import App from "./App.vue"

const app = createApp(App)
// other code

app.mount("#app")
```
:::

::: code-group-item vue2

```js
import Vue from "vue"
import App from "./App.vue"
new Vue({
  render: h => h(App)
}).$mount("#app")
```
:::

::::

## 全局对象

在Vue2中，如果添加一个可以在应用的任何组件实例中访问的全局 property， 我们可以在main.js中使用 `Vue.prototype`
但是在Vue3中，不再支持使用`Vue.prototype`来添加一个全局的property，而使用`globalProperties`

:::: code-group

::: code-group-item vue3
```js
import { createApp } from "vue"
import App from './App.vue'
import * as echarts from "echarts"

// 实例化app对象
const app = createApp(App)
app.config.globalProperties.$echart = $echarts

```
:::

::: code-group-item vue2

```js
import Vue from "vue"
import * as echarts from "echarts"
Vue.prototype.$echarts = echarts

```
:::

::::

在绑定全局对象之后，vue2里面可以使用`this`关键字来获取到，而在vue3里面，`<script setup></script>` 中,不存在this，需要使用 `getCurrentInstance`

:::: code-group

::: code-group-item vue3

```ts
import { getCurrentInstance, ComponentInternalInstance } from "vue"

const install = getCurrentInstance() as ComponentInternalInstance
const { globalProperties } = install.appContext.config

```
`getCurrentInstance()` 方法返回值是**当前实例或者null**

使用 `as ComponentInternalInstance` 可以避免类型推导为null

:::

封装 `getCurrentInstance()` 方法

```ts
import { ComponentInternalInstance, getCurrentInstance } from "vue"

export const useCurrentInstannce = (): ComponentInternalInstance => {
  const instance = getCurrentInstance() as ComponentInternalInstance
  return instance
}

export const useGlobalProperties = () => {
  const { appContext } = useCurrentInstannce()
  return appContext.config.globalProperties
}

```
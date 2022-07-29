---
title: "通过模型来绘制管道几何体并设置流动效果"
data: 2022-07-29 09:22:01
categories:
  - three.js
tags:
  - three.js
  - Geometry
---

在很多时候，智慧城市、智慧管网、拓扑图等类型的项目，多多少少都会遇到绘制流动管道的需求。而实际开发又不可能会把空间坐标写死，都是基于模型给到的坐标来绘制管道。

## LineSegments与Line以及LineLoop

`LineSegments`和`Line`以及`LineLoop`的唯一区别就是绘制方式不一样，`Line`绘制的时候使用的是`gl.LINE_STRIP`，而`LineSegments`使用的是`gl.LINES`,`LineLoop`使用的是`gl.LINE_LOOP`

模型文件中的线大部分都是`LineSegments`，通过顶点连成线。

示例:

![流动的管道](https://piclog-1257285586.cos.ap-guangzhou.myqcloud.com/uPic/QQ20220729-161117-HD.gif)

事实上实现这类效果并不复杂，难度也不大，关键的点还是在于贴图的流动方向以及`repeat`的次数

示例代码:

```javascript

/**
 * @description 异步加载texture
 * @param {String} url 资源地址
 * @param {String} path 公共路径
 * @param {LoadingManager} manage 加载管理器
 */
export const loadAsyncTexture = async (
  url: string,
  path?: string,
  manage?: LoadingManager
): Promise<Texture> => {
  return new TextureLoader(manage).setPath(path ?? "").loadAsync(url)
}
/**
 * @description gltf模型加载
 * @param {String} url 资源地址
 * @param {LoadingManager} manage 加载管理器
 */
export const loadGLTF = async (
  url: string,
  prefix?: string,
  manage?: LoadingManager
): Promise<GLTF> => {
  return new GLTFLoader(manage).setPath(prefix ?? "").loadAsync(url)
}
/**
 * @description 根据几何体的坐标生成管道
 * @param {BufferGeometry} geometry 几何体
 * @param {Number} tubular 管道的分段数 分段数越多，管道越圆滑(曲率)  100
 * @param {Number} radius 管道半径 默认 0.5
 * @param {number} radial 横截面分段数 分段数越多，管道越圆滑(圆) 默认 12
 * @param {Boolean} closed 是否闭合 默认不闭合
 */
export const createTube = (
  geometry: BufferGeometry,
  tubular?: number,
  radius?: number,
  radial?: number,
  closed?: boolean
): TubeGeometry => {
  const params = {
    tubular: tubular ?? 100,
    radius: radius ?? 0.5,
    radial: radial ?? 12,
    closed: closed ?? false,
  }
  // 获取几何体顶点数组
  const position = Array.from(geometry.getAttribute("position").array) as Array<number>
  const points = []
  const len = position.length
  // 根据顶点数组重新变量生成顶点 Array<number> --> Array<Vector3>
  for (let i = 0; i < len; i += 3) {
    points.push(new Vector3(position[i], position[i + 1], position[i + 2]))
  }
  console.log(points)
  // 生成曲线
  const catCurve = new CatmullRomCurve3(points, params.closed)
  const tubeGeometry = new TubeGeometry(
    catCurve,
    params.tubular,
    params.radius,
    params.radial,
    params.closed
  )
  return tubeGeometry
}
// 加载贴图
const texture = await loadAsyncTexture(url, path, LoadingManager)
texture.wrapS = texture.wrapT = RepeatWrapping
texture.encoding = sRGBEncoding
texture.mapping = EquirectangularReflectionMapping

// 有20段偏移纹理
texture.repeat.x = 20

// 同时需要在帧渲染函数中设置纹理的偏移量
texture.offset.x += 0.2 // + 代表这纹理偏移方向是x轴的正方向

// 加载模型
const model = await loadGLTF(url, prefix, LoadingManager)

model.scene.traverse(i => {
  // 已知i的类型是LineSegments, 其他情况下需要自行(if/switch/...)判断
  const lines = i as LineSegments
  const cube = createTube(i.geometry, 20, 0.2, 8, true)
  const material = new MeshBasicMaterial({
    color:0xffffff,
    transparent: true,
    map: texture
  })
  const mesh = new Mesh(cube, material)

  scene.add(mesh)
})
```

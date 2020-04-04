import {sum} from './math.js'
import logo from './assets/imgs/logo.png'
import './assets/css/my.css'
console.log('Hello Webpack!')
document.getElementById('root').innerHTML = '<h1>Hello333</h1>'

// 使用图片
const image = new Image()
image.src = logo
document.body.appendChild(image) 
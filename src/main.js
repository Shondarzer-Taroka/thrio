import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene()
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
const cubeMaterials = new THREE.MeshBasicMaterial({ color: 'red' })

const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterials)
scene.add(cubeMesh)

const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 200)
const aspectRation=window.innerWidth/window.innerHeight
// const camera = new THREE.OrthographicCamera(-1*aspectRation,1*aspectRation,1,-1,0.1,200)
camera.position.z = 5
// scene.add(camera)

const canvas = document.querySelector('.threejs')
console.log(canvas);

const renderer = new THREE.WebGLRenderer({ canvas: canvas,antialias:true })
renderer.setSize(window.innerWidth, window.innerHeight)
const maxPixelRatio=Math.min(window.devicePixelRatio,2)
renderer.setPixelRatio(maxPixelRatio)
const controls = new OrbitControls(camera, canvas)
controls.enableDamping=true;
controls.autoRotate=true;

window.addEventListener('resize',()=>{
  camera.aspect=window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})


// renderer.setSize(window.innerWidth, window.innerHeight)
const renderLoop=()=>{
  // camera.aspect=window.innerWidth/window.innerHeight;
  // camera.updateProjectionMatrix()
  controls.update() 
  renderer.render(scene, camera)
  window.requestAnimationFrame(renderLoop)
}

renderLoop()


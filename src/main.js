import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene()
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
const cubeMaterials = new THREE.MeshBasicMaterial({ color: 'red' })

const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterials)
scene.add(cubeMesh)
const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 200)
camera.position.z = 5
// scene.add(camera)

const canvas = document.querySelector('.threejs')
console.log(canvas);

const renderer = new THREE.WebGLRenderer({ canvas: canvas })
const controls = new OrbitControls(camera, canvas)
controls.enableDamping=true
controls.autoRotate=true;
renderer.setSize(window.innerWidth, window.innerHeight)

const renderLoop=()=>{
  controls.update() 
  renderer.render(scene, camera)
  window.requestAnimationFrame(renderLoop)
}

renderLoop()


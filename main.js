import * as THREE from 'three';
import './style.css'
import { gsap } from 'gsap';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import mercury from './Assets/mercury/scene.gltf';
import venus from './Assets/venus/scene.gltf';
import earth from './Assets/earth/scene.gltf';
import mars from './Assets/mars/scene.gltf';
import jupiter from './Assets/jupiter/scene.gltf';
import saturn from './Assets/saturn/scene.gltf';
import uranus from './Assets/uranus/scene.gltf';
import neptune from './Assets/neptune/scene.gltf';
import pluto from './Assets/pluton/scene.gltf';
import mercurydat from './planetconfig/mercury.json'
import venusdat from './planetconfig/venus.json'
import earthdat from './planetconfig/earth.json'
import marsdat from './planetconfig/mars.json'
import jupiterdat from './planetconfig/jupiter.json'
import saturndat from './planetconfig/saturn.json'
import uranusdat from './planetconfig/uranus.json'
import neptunedat from './planetconfig/neptune.json'
import plutodat from './planetconfig/pluto.json'

//Window Size
const size = {
	width: window.innerWidth,
	height: window.innerHeight
}
// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#000')




// Create a sphere geometry
var geometry = new THREE.SphereGeometry(500, 64, 64);

// Create a material for the sphere
var material = new THREE.MeshBasicMaterial({ color: 0xffffff });

// Create the sphere mesh
var sphere = new THREE.Mesh(geometry, material);

// Add the sphere to the scene
scene.add(sphere);

// Create a star geometry
var starGeometry = new THREE.BufferGeometry();
var starVertices = [];
for (var i = 0; i < 10000; i++) {
	var x = Math.random() * 2000 - 1000;
	var y = Math.random() * 2000 - 1000;
	var z = Math.random() * 2000 - 1000;
	starVertices.push(x, y, z);
}
starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));

// Create a material for the stars
var starMaterial = new THREE.PointsMaterial({ color: 0xffffff });

// Create the stars mesh
var stars = new THREE.Points(starGeometry, starMaterial);

// Add the stars to the scene
scene.add(stars);




// Instantiate a loader
const loader = new GLTFLoader();

const btn1 = document.getElementById('mercury')
btn1.addEventListener('click', () => {
	// path='./Assets/mars/scene.gltf'
	// const mercurydat = await import('./planetconfig/mercury.json')
	console.log('clicked')
	scene.clear()
	loader.load(
		// resource URL
		mercury,
		// called when the resource is loaded
		function (gltf) {

			scene.add(gltf.scene);

			gltf.animations; // Array<THREE.AnimationClip>
			gltf.scene; // THREE.Group
			gltf.scenes; // Array<THREE.Group>
			gltf.cameras; // Array<THREE.Camera>
			gltf.asset; // Object
			//Timeline
			const t1 = new gsap.timeline({ defaults: { duration: 1 } })
			t1.fromTo(gltf.scene.scale, { z: mercurydat.from, x: mercurydat.from, y: mercurydat.from }, { z: mercurydat.to, x: mercurydat.to, y: mercurydat.to })
		},
		// called while loading is progressing
		function (xhr) {

			console.log((xhr.loaded / xhr.total * 100) + '% loaded');

		},
		// called when loading has errors
		function (error) {

			console.log('An error happened');

		}
	);
	var info = document.getElementById('info')
	info.innerText = ''
	controls.reset()
	const light1 = new THREE.SpotLight('#ffffff', mercurydat.l1i, 0)
	light1.position.set(0, 0, 300)
	scene.add(light1)
	const light2 = new THREE.AmbientLight('#ffffff', mercurydat.l2i, 0)
	light2.position.set(0, 0, 0)
	scene.add(light2);
	scene.add(stars);
	info.innerText = mercurydat.info
	const para = document.createElement("p");
	para.setAttribute('id','p1');
	const node = document.createTextNode(".Sun");
	para.appendChild(node);
	const element = document.getElementById("info");
	element.appendChild(para);
	document.getElementById('p1').style.color='#f4c124'
})

const btn2 = document.getElementById('venus')
btn2.addEventListener('click', () => {
	// path='./Assets/mars/scene.gltf'
	console.log('clicked')
	scene.clear()
	loader.load(
		// resource URL
		venus,
		// called when the resource is loaded
		function (gltf) {

			scene.add(gltf.scene);

			gltf.animations; // Array<THREE.AnimationClip>
			gltf.scene; // THREE.Group
			gltf.scenes; // Array<THREE.Group>
			gltf.cameras; // Array<THREE.Camera>
			gltf.asset; // Object
			//Timeline
			const t1 = new gsap.timeline({ defaults: { duration: 1 } })
			t1.fromTo(gltf.scene.scale, { z: venusdat.from, x: venusdat.from, y: venusdat.from }, { z: venusdat.to, x: venusdat.to, y: venusdat.to })
		},
		// called while loading is progressing
		function (xhr) {

			console.log((xhr.loaded / xhr.total * 100) + '% loaded');

		},
		// called when loading has errors
		function (error) {

			console.log('An error happened');

		}
	);
	var info = document.getElementById('info')
	info.innerText = ''
	controls.reset()
	const light1 = new THREE.SpotLight('#ffffff', venusdat.l1i, 0)
	light1.position.set(0, 0, 300)
	scene.add(light1)
	const light2 = new THREE.AmbientLight('#ffffff', venusdat.l2i, 0)
	light2.position.set(0, 0, 0)
	scene.add(light2);
	scene.add(stars);
	info.innerText = venusdat.info
	const para = document.createElement("p");
	para.setAttribute('id','p1');
	const node = document.createTextNode(".Hottest");
	para.appendChild(node);
	const element = document.getElementById("info");
	element.appendChild(para);
	document.getElementById('p1').style.color='darkorange'
})

const btn3 = document.getElementById('earth')
btn3.addEventListener('click', () => {
	// path='./Assets/mars/scene.gltf'
	console.log('clicked')
	scene.clear()
	loader.load(
		// resource URL
		earth,
		// called when the resource is loaded
		function (gltf) {

			scene.add(gltf.scene);

			gltf.animations; // Array<THREE.AnimationClip>
			gltf.scene; // THREE.Group
			gltf.scenes; // Array<THREE.Group>
			gltf.cameras; // Array<THREE.Camera>
			gltf.asset; // Object
			//Timeline
			const t1 = new gsap.timeline({ defaults: { duration: 1 } })
			t1.fromTo(gltf.scene.scale, { z: earthdat.from, x: earthdat.from, y: earthdat.from }, { z: earthdat.to, x: earthdat.to, y: earthdat.to })
		},
		// called while loading is progressing
		function (xhr) {

			console.log((xhr.loaded / xhr.total * 100) + '% loaded');

		},
		// called when loading has errors
		function (error) {

			console.log('An error happened');

		}
	);
	var info = document.getElementById('info')
	info.innerText = ''
	controls.reset()
	const light1 = new THREE.SpotLight('#ffffff', earthdat.l1i, 0)
	light1.position.set(0, 0, 300)
	scene.add(light1)
	const light2 = new THREE.AmbientLight('#ffffff', earthdat.l2i, 0)
	light2.position.set(0, 0, 0)
	scene.add(light2)
	scene.add(stars);
	info.innerText = earthdat.info
	const para = document.createElement("p");
	para.setAttribute('id','p1');
	const node = document.createTextNode(".Amazing");
	para.appendChild(node);
	const element = document.getElementById("info");
	element.appendChild(para);
	document.getElementById('p1').style.color='deepskyblue'
})

const btn4 = document.getElementById('mars')
btn4.addEventListener('click', () => {
	// path='./Assets/mars/scene.gltf'
	console.log('clicked')
	scene.clear()
	loader.load(
		// resource URL
		mars,
		// called when the resource is loaded
		function (gltf) {

			scene.add(gltf.scene);

			gltf.animations; // Array<THREE.AnimationClip>
			gltf.scene; // THREE.Group
			gltf.scenes; // Array<THREE.Group>
			gltf.cameras; // Array<THREE.Camera>
			gltf.asset; // Object
			//Timeline
			const t1 = new gsap.timeline({ defaults: { duration: 1 } })
			t1.fromTo(gltf.scene.scale, { z: marsdat.from, x: marsdat.from, y: marsdat.from }, { z: marsdat.to, x: marsdat.to, y: marsdat.to })
		},
		// called while loading is progressing
		function (xhr) {

			console.log((xhr.loaded / xhr.total * 100) + '% loaded');

		},
		// called when loading has errors
		function (error) {

			console.log('An error happened');

		}
	);
	var info = document.getElementById('info')
	info.innerText = ''
	controls.reset()
	const light1 = new THREE.SpotLight('#ffffff', marsdat.l1i, 0)
	light1.position.set(0, 0, 300)
	scene.add(light1)
	const light2 = new THREE.AmbientLight('#ffffff', marsdat.l2i, 0)
	light2.position.set(0, 0, 0)
	scene.add(light2);
	scene.add(stars);
	info.innerText = marsdat.info
	const para = document.createElement("p");
	para.setAttribute('id','p1');
	const node = document.createTextNode(".Planet");
	para.appendChild(node);
	const element = document.getElementById("info");
	element.appendChild(para);
	document.getElementById('p1').style.color='crimson'
})

const btn5 = document.getElementById('jupiter')
btn5.addEventListener('click', () => {
	// path='./Assets/mars/scene.gltf'
	console.log('clicked')
	scene.clear()
	loader.load(
		// resource URL
		jupiter,
		// called when the resource is loaded
		function (gltf) {

			scene.add(gltf.scene);

			gltf.animations; // Array<THREE.AnimationClip>
			gltf.scene; // THREE.Group
			gltf.scenes; // Array<THREE.Group>
			gltf.cameras; // Array<THREE.Camera>
			gltf.asset; // Object
			//Timeline
			const t1 = new gsap.timeline({ defaults: { duration: 1 } })
			t1.fromTo(gltf.scene.scale, { z: jupiterdat.from, x: jupiterdat.from, y: jupiterdat.from }, { z: jupiterdat.to, x: jupiterdat.to, y: jupiterdat.to })
		},
		// called while loading is progressing
		function (xhr) {

			console.log((xhr.loaded / xhr.total * 100) + '% loaded');

		},
		// called when loading has errors
		function (error) {

			console.log('An error happened');

		}
	);
	var info = document.getElementById('info')
	info.innerText = ''
	controls.reset()
	const light1 = new THREE.SpotLight('#ffffff', jupiterdat.l1i, 0)
	light1.position.set(0, 0, 300)
	scene.add(light1)
	const light2 = new THREE.AmbientLight('#ffffff', jupiterdat.l2i, 0)
	light2.position.set(0, 0, 0)
	scene.add(light2);
	scene.add(stars);
	info.innerText = jupiterdat.info
	const para = document.createElement("p");
	para.setAttribute('id','p1');
	const node = document.createTextNode(".Giant");
	para.appendChild(node);
	const element = document.getElementById("info");
	element.appendChild(para);
	document.getElementById('p1').style.color='peachpuff'
})

const btn6 = document.getElementById('saturn')
btn6.addEventListener('click', () => {
	// path='./Assets/mars/scene.gltf'
	console.log('clicked')
	scene.clear()
	loader.load(
		// resource URL
		saturn,
		// called when the resource is loaded
		function (gltf) {

			scene.add(gltf.scene);

			gltf.animations; // Array<THREE.AnimationClip>
			gltf.scene; // THREE.Group
			gltf.scenes; // Array<THREE.Group>
			gltf.cameras; // Array<THREE.Camera>
			gltf.asset; // Object
			//Timeline
			const t1 = new gsap.timeline({ defaults: { duration: 1 } })
			t1.fromTo(gltf.scene.scale, { z: saturndat.from, x: saturndat.from, y: saturndat.from }, { z: saturndat.to, x: saturndat.to, y: saturndat.to })
		},
		// called while loading is progressing
		function (xhr) {

			console.log((xhr.loaded / xhr.total * 100) + '% loaded');

		},
		// called when loading has errors
		function (error) {

			console.log('An error happened');

		}
	);
	var info = document.getElementById('info')
	info.innerText = ''
	controls.reset()
	const light1 = new THREE.SpotLight('#ffffff', saturndat.l1i, 0)
	light1.position.set(0, 0, 300)
	scene.add(light1)
	const light2 = new THREE.AmbientLight('#ffffff', saturndat.l2i, 0)
	light2.position.set(0, 0, 0)
	scene.add(light2);
	scene.add(stars);
	info.innerText = saturndat.info
	const para = document.createElement("p");
	para.setAttribute('id','p1');
	const node = document.createTextNode(".Rings");
	para.appendChild(node);
	const element = document.getElementById("info");
	element.appendChild(para);
	document.getElementById('p1').style.color='#f2de8e'
})

const btn7 = document.getElementById('uranus')
btn7.addEventListener('click', () => {
	// path='./Assets/mars/scene.gltf'
	console.log('clicked')
	scene.clear()
	loader.load(
		// resource URL
		uranus,
		// called when the resource is loaded
		function (gltf) {

			scene.add(gltf.scene);

			gltf.animations; // Array<THREE.AnimationClip>
			gltf.scene; // THREE.Group
			gltf.scenes; // Array<THREE.Group>
			gltf.cameras; // Array<THREE.Camera>
			gltf.asset; // Object
			//Timeline
			const t1 = new gsap.timeline({ defaults: { duration: 1 } })
			t1.fromTo(gltf.scene.scale, { z: uranusdat.from, x: uranusdat.from, y: uranusdat.from }, { z: uranusdat.to, x: uranusdat.to, y: uranusdat.to })
		},
		// called while loading is progressing
		function (xhr) {

			console.log((xhr.loaded / xhr.total * 100) + '% loaded');

		},
		// called when loading has errors
		function (error) {

			console.log('An error happened');

		}
	);
	var info = document.getElementById('info')
	info.innerText = ''
	controls.reset()
	const light1 = new THREE.SpotLight('#ffffff', uranusdat.l1i, 0)
	light1.position.set(0, 0, 300)
	scene.add(light1)
	const light2 = new THREE.AmbientLight('#ffffff', uranusdat.l2i, 0)
	light2.position.set(0, 0, 0)
	scene.add(light2);
	scene.add(stars);
	info.innerText = uranusdat.info
	const para = document.createElement("p");
	para.setAttribute('id','p1');
	const node = document.createTextNode(".Planet");
	para.appendChild(node);
	const element = document.getElementById("info");
	element.appendChild(para);
	document.getElementById('p1').style.color='#47f6fd'
})

const btn8 = document.getElementById('neptune')
btn8.addEventListener('click', () => {
	// path='./Assets/mars/scene.gltf'
	console.log('clicked')
	scene.clear()
	loader.load(
		// resource URL
		neptune,
		// called when the resource is loaded
		function (gltf) {

			scene.add(gltf.scene);

			gltf.animations; // Array<THREE.AnimationClip>
			gltf.scene; // THREE.Group
			gltf.scenes; // Array<THREE.Group>
			gltf.cameras; // Array<THREE.Camera>
			gltf.asset; // Object
			//Timeline
			const t1 = new gsap.timeline({ defaults: { duration: 1 } })
			t1.fromTo(gltf.scene.scale, { z: neptunedat.from, x: neptunedat.from, y: neptunedat.from }, { z: neptunedat.to, x: neptunedat.to, y: neptunedat.to })
		},
		// called while loading is progressing
		function (xhr) {

			console.log((xhr.loaded / xhr.total * 100) + '% loaded');

		},
		// called when loading has errors
		function (error) {

			console.log('An error happened');

		}
	);
	var info = document.getElementById('info')
	info.innerText = ''
	controls.reset()
	const light1 = new THREE.SpotLight('#ffffff', neptunedat.l1i, 0)
	light1.position.set(0, 0, 300)
	scene.add(light1)
	const light2 = new THREE.AmbientLight('#ffffff', neptunedat.l2i, 0)
	light2.position.set(0, 0, 0)
	scene.add(light2);
	scene.add(stars);
	info.innerText = neptunedat.info
	const para = document.createElement("p");
	para.setAttribute('id','p1');
	const node = document.createTextNode(".Rains");
	para.appendChild(node);
	const element = document.getElementById("info");
	element.appendChild(para);
	document.getElementById('p1').style.color='mediumblue'
})

const btn9 = document.getElementById('pluto')
btn9.addEventListener('click', () => {
	// path='./Assets/mars/scene.gltf'
	console.log('clicked')
	scene.clear()
	loader.load(
		// resource URL
		pluto,
		// called when the resource is loaded
		function (gltf) {

			scene.add(gltf.scene);

			gltf.animations; // Array<THREE.AnimationClip>
			gltf.scene; // THREE.Group
			gltf.scenes; // Array<THREE.Group>
			gltf.cameras; // Array<THREE.Camera>
			gltf.asset; // Object
			//Timeline
			const t1 = new gsap.timeline({ defaults: { duration: 1 } })
			t1.fromTo(gltf.scene.scale, { z: plutodat.from, x: plutodat.from, y: plutodat.from }, { z: plutodat.to, x: plutodat.to, y: plutodat.to })
		},
		// called while loading is progressing
		function (xhr) {

			console.log((xhr.loaded / xhr.total * 100) + '% loaded');

		},
		// called when loading has errors
		function (error) {

			console.log('An error happened');

		}
	);
	var info = document.getElementById('info')
	info.innerText = ''
	controls.reset()
	const light1 = new THREE.SpotLight('#ffffff', plutodat.l1i, 0)
	light1.position.set(0, 0, 300)
	scene.add(light1)
	const light2 = new THREE.AmbientLight('#ffffff', plutodat.l2i, 0)
	light2.position.set(0, 0, 0)
	scene.add(light2);
	scene.add(stars);
	info.innerText = plutodat.info
	const para = document.createElement("p");
	para.setAttribute('id','p1');
	const node = document.createTextNode("Planet");
	para.appendChild(node);
	const element = document.getElementById("info");
	element.appendChild(para);
	document.getElementById('p1').style.color='grey'
	document.getElementById('p1').style.textDecoration = "line-through";
	document.getElementById('p1').style.fontStyle = "italic";
	
})


// Lights
// const light1 = new THREE.SpotLight('#ffffff', 2, 0)
// light1.position.set(0, 0, 300)
// scene.add(light1)
// const light2 = new THREE.AmbientLight('#ffffff',1.5, 0)
// light2.position.set(0, 0, 0)
// scene.add(light2)

// Camera
const camera = new THREE.PerspectiveCamera(45, size.width / size.height);
camera.position.y = 0.1
camera.position.z = 1
scene.add(camera);
//Renderer
const canvas = document.querySelector(".can")
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(size.width, size.height)
renderer.setPixelRatio(1.5)
renderer.render(scene, camera)
//Controlls
const controls = new OrbitControls(camera, canvas)
controls.saveState()
controls.enableDamping = true
controls.dampingFactor = 0.02
controls.enablePan = false
controls.enableZoom = true
controls.autoRotate = true
controls.autoRotateSpeed = 2
controls.maxDistance = 5
controls.minDistance = 0.5
controls.zoomSpeed = 3




//Resize
window.addEventListener("resize", () => {
	console.log(window.innerWidth)
	size.width = window.innerWidth
	size.height = window.innerHeight
	camera.aspect = size.width / size.height
	camera.updateProjectionMatrix()
	renderer.setSize(size.width, size.height)
})

//Animate
const loop = () => {
	controls.update()
	// light.position.x -= .1
	renderer.render(scene, camera)
	window.requestAnimationFrame(loop)
}
loop()

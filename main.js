import * as THREE from 'three';
import { VRButton } from 'three/addons/webxr/VRButton.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
/////////////////////
renderer.xr.enabled = true;
renderer.xr.setReferenceSpaceType( 'local' );
//////////////////////////////
document.body.appendChild(renderer.domElement);
document.body.appendChild( VRButton.createButton( renderer ) );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
cube.position.x=50;
scene.add( cube );
camera.position.z = 5;
function animate() {

    cube.rotation.y += 0.01;
    renderer.render(scene, camera);

}

import * as THREE from '/build/three.module.js';
import Stats from '/jsm/libs/stats.module.js';
import {OrbitControls} from '/jsm/controls/OrbitControls.js';
import {bar} from '../../utils/KeyboardState';

console.log(bar());
const cameraUp = new THREE.Vector3(0, 1, 0)
const cameraPosition = new THREE.Vector3(0, -30, 15);
const cameraLookAt = new THREE.Vector3(0, 0, 0);

// let keyboard = teste();
// console.log('1');
// console.log(keyboard);


main();

function main(){

    var scene = new THREE.Scene();    // Create main scene

    var renderer = new THREE.WebGLRenderer();    // View function in util/utils
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    var camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000 ); // Specify camera type like this
    camera.position.copy(cameraPosition); 
    camera.lookAt(cameraLookAt);
    camera.up.copy(cameraUp);

    var trackballControls = new OrbitControls(camera, renderer.domElement);

    // Show axes (parameter is size of each axis)
    var axesHelper = new THREE.AxesHelper( 12 );
    scene.add( axesHelper );

    // create the ground plane
    var planeGeometry = new THREE.PlaneGeometry(20, 20);
    planeGeometry.translate(0.0, 0.0, -0.02); // To avoid conflict with the axeshelper
    var planeMaterial = new THREE.MeshBasicMaterial({
        color: "rgba(150, 150, 150)",
        side: THREE.DoubleSide,
    });
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    scene.add(plane);

    var cubeGeometry = new THREE.BoxGeometry(3, 3, 3); // 'width', 'height', and 'depth'
    var cubeMaterial = new THREE.MeshNormalMaterial();
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(0.0, 0.0, 1.5);
    scene.add(cube);


    // Listen window size changes
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        render();
    }, false);

    const stats = Stats();          // To show FPS information
    document.body.appendChild(stats.dom);

    const render = function (){
        requestAnimationFrame(render);
        trackballControls.update(); // Enable mouse movements
        //keyboardUpdate()
        renderer.render(scene, camera); // Render scene
        stats.update(); // Update FPS
    }

    render();
}

 
function keyboardUpdate() {

    keyboard.update();

    var speed = 30;
  	var moveDistance = speed * clock.getDelta();

  	if ( keyboard.down("left") )   cube.translateX( -1 );
  	if ( keyboard.down("right") )  cube.translateX(  1 );
    if ( keyboard.down("up") )     cube.translateY(  1 );
  	if ( keyboard.down("down") )   cube.translateY( -1 );

  	if ( keyboard.pressed("A") )  cube.translateX( -moveDistance );
  	if ( keyboard.pressed("D") )  cube.translateX(  moveDistance );
    if ( keyboard.pressed("W") )  cube.translateY(  moveDistance );
  	if ( keyboard.pressed("S") )  cube.translateY( -moveDistance );

  	if ( keyboard.pressed("space") ) cube.position.set(0.0, 0.0, 2.0);
  }
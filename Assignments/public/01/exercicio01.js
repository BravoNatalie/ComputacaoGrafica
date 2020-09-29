import * as THREE from '/build/three.module.js';
import Stats from '/jsm/libs/stats.module.js';
import {OrbitControls} from '/jsm/controls/OrbitControls.js';

main();

function main(){

    var scene = new THREE.Scene();    // Create main scene

    var renderer = new THREE.WebGLRenderer();    // View function in util/utils
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    var camera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight, 0.1, 1000 ); // Specify camera type like this
    camera.position.set(0, -30, 15); // Set position like this
    camera.lookAt(new THREE.Vector3(0, 0, 0)); // Set look at coordinate like this

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
    // add the plane to the scene
    scene.add(plane);

    // create a cube 1
    var cubeGeometry = new THREE.BoxGeometry(4, 4, 4); // 'width', 'height', and 'depth'
    var cubeMaterial = new THREE.MeshNormalMaterial();
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(0.0, 0.0, 2.0);
    // add the cube to the scene
    scene.add(cube);

    //  // Use this to show information onscreen
    // controls = new InfoBox();
    // controls.add("Basic Scene");
    // controls.addParagraph();
    // controls.add("Use mouse to interact:");
    // controls.add("* Left button to rotate");
    // controls.add("* Right button to translate (pan)");
    // controls.add("* Scroll to zoom in/out.");
    // controls.show();

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
        renderer.render(scene, camera); // Render scene
        stats.update(); // Update FPS
    }

    render();
}

 

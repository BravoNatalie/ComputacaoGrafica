

function main() {
  var stats = initStats(); // To show FPS information
  var scene = new THREE.Scene(); // Create main scene
  var renderer = initRenderer(); // View function in util/utils
  var camera = initCamera(new THREE.Vector3(0, -30, 15)); // Init camera in this position

  // Enable mouse rotation, pan, zoom etc.
  var trackballControls = new THREE.TrackballControls(
    camera,
    renderer.domElement
  );

  // Show axes (parameter is size of each axis)
  var axesHelper = new THREE.AxesHelper(12);
  scene.add(axesHelper);

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

  var cubesDefinition = {
    size: 2,
    spacingInBetween: 2,
    numberOfCubes: 9,
    currentPosition: {
      x: 0.0,
      y: 0.0,
      z: 1.0,
    },
  };

  const handler = {
    set: function(obj, prop, value){
    
      if(prop === 'x'){
        console.log('mudou x');
      } else if(prop === 'y'){

      } else if(prop === 'z'){
        
      }
    }
  };

  var proxyX = new Proxy(cubesDefinition.currentPosition, handler);

  for (var i = 0; i <= cubesDefinition.numberOfCubes; i++) {
    // create a cube
    var cubeGeometry = new THREE.BoxGeometry(
      cubesDefinition.size,
      cubesDefinition.size,
      cubesDefinition.size
    );
    var cubeMaterial = new THREE.MeshNormalMaterial();
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    // position the cube
    cube.position.set(
      cubesDefinition.currentPosition.x,
      cubesDefinition.currentPosition.y,
      cubesDefinition.currentPosition.z
    );

    cubesDefinition.currentPosition.x +=
      cubesDefinition.spacingInBetween + cubesDefinition.size / 2;

    // add the cube to the scene
    scene.add(cube);
  }

  // Use this to show information onscreen
  controls = new InfoBox();
  controls.add("Basic Scene");
  controls.addParagraph();
  controls.add("Use mouse to interact:");
  controls.add("* Left button to rotate");
  controls.add("* Right button to translate (pan)");
  controls.add("* Scroll to zoom in/out.");
  controls.show();

  // Listen window size changes
  window.addEventListener(
    "resize",
    function () {
      onWindowResize(camera, renderer);
    },
    false
  );

  render();
  function render() {
    stats.update(); // Update FPS
    trackballControls.update(); // Enable mouse movements
    requestAnimationFrame(render);
    renderer.render(scene, camera); // Render scene
  }
}

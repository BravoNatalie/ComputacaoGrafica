let cameraUp = new THREE.Vector3(0.0, 1.0, 0.0)
let cameraPosition = new THREE.Vector3(0.0, -30.0, 15.0);
let cameraLookAt = new THREE.Vector3(1.0, 0.0, 1.0);

function changeCamera() {
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.copy(cameraPosition);
    camera.lookAt(cameraLookAt); 
    camera.up.copy(cameraUp);
    return camera;
}

function main()
{
  var stats = initStats();          
  var scene = new THREE.Scene();    
  var renderer = initRenderer();    
  var camera = changeCamera(); 
  var clock = new THREE.Clock();

  // Show text information onscreen
  showInformation();
  secondInfoBox();

  // To use the keyboard
  var keyboard = new KeyboardState();

  // Enable mouse rotation, pan, zoom etc.
  var trackballControls = new THREE.TrackballControls(camera, renderer.domElement );

  // Show axes (parameter is size of each axis)
  var axesHelper = new THREE.AxesHelper( 12 );
  scene.add( axesHelper );

  // create the ground plane
  var planeGeometry = new THREE.PlaneGeometry(20, 20);
  planeGeometry.translate(0.0, 0.0, -0.02); // To avoid conflict with the axeshelper
  var planeMaterial = new THREE.MeshBasicMaterial({
      color: "rgb(150, 150, 150)",
      side: THREE.DoubleSide
  });
  var plane = new THREE.Mesh(planeGeometry, planeMaterial);
  // add the plane to the scene
  scene.add(plane);

  // create a cube
  var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
  var cubeMaterial = new THREE.MeshNormalMaterial();
  var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  // position the cube
  cube.position.set(0.0, 0.0, 2.0);
  // add the cube to the scene
  scene.add(cube);

  // Listen window size changes
  window.addEventListener( 'resize', function(){onWindowResize(camera, renderer)}, false );

  render();

  function keyboardUpdate() {
    keyboard.update();

    var speed = 10;
    var moveDistance = speed * clock.getDelta();
    var delta = 1.0;
      
    // change camera position vector (x and Z)
  	if ( keyboard.pressed("left") )   {cameraPosition.x -= delta;}
  	if ( keyboard.pressed("right") )  {cameraPosition.x += delta;}
    if ( keyboard.pressed("up") )     {cameraPosition.z += delta;}
    if ( keyboard.pressed("down") )   {cameraPosition.z -= delta;}
      
    // change camera lookAt vector 
  	if ( keyboard.pressed("A") )  {cameraLookAt.x -= delta; }
  	if ( keyboard.pressed("D") )  {cameraLookAt.x += delta;}
    if ( keyboard.pressed("W") )  {cameraLookAt.z += delta;}
    if ( keyboard.pressed("S") )  {cameraLookAt.z -= delta;}
      
    
    // chande camera UP vector
    if ( keyboard.pressed("Q") ) {cameraUp.add(new THREE.Vector3(1, 0, -1)); console.log(camera);}
    if ( keyboard.pressed("E") ) {cameraUp.add(new THREE.Vector3(-1, 0, 1));console.log(camera);}

    camera = changeCamera();
    trackballControls = new THREE.TrackballControls(camera, renderer.domElement );
   
    }

  function showInformation()
  {
    // Use this to show information onscreen
    controls = new InfoBox();
      controls.add("Controls:");
      controls.addParagraph();
      controls.add("Press WASD to change the Look At value");
      controls.add("Press arrow keys to move in relation to X and Z");
      controls.add("Press Q and E to change the Up value");
      controls.show();
  }
e
  function secondInfoBox(){
      infobox = new SecondaryBox();
      infobox.changeMessage(`Pos: ` + cameraPosition.x + ' ' + cameraPosition.y + ' ' + cameraPosition.z 
                            + '  Look: ' + cameraLookAt.x + ' ' + cameraLookAt.y + ' ' + cameraLookAt.z + ' '
                            + ' Up: ' + cameraUp.x + ' ' + cameraUp.y + ' ' + cameraUp.z);
  }

  function render()
  {
    stats.update(); // Update FPS
    requestAnimationFrame(render); // Show events
    trackballControls.update();
    keyboardUpdate();
    secondInfoBox();
    renderer.render(scene, camera) // Render scene
  }
}

 class Skeleton{
   constructor(x,z){
      this.position = {x: x, y: 1.05, z: z};

      //torso
      this.lowerJoin = Helper.createSphere(0.35, 32, 32, "rgb(255,0,50)");
      //scene.add(lowerJoin);

      Helper.resetObjectMatrix(this.lowerJoin);
      Helper.setSpherePosition(this.lowerJoin, this.position.x, this.position.y, this.position.z);

      var c1 = Helper.createCone(0.15, 2.0, 25, "rgb(0,0,180)");
      this.lowerJoin.add(c1);
      Helper.resetObjectMatrix(c1);
      Helper.setConePosition(c1,0);

      var midJoin = Helper.createSphere();
      c1.add(midJoin);
      Helper.resetObjectMatrix(midJoin);
      Helper.setSpherePosition(midJoin);

      var c2 = Helper.createCone();
      midJoin.add(c2);
      Helper.resetObjectMatrix(c2);
      Helper.setConePosition(c2,0);


      var upperJoin = Helper.createSphere();
      c2.add(upperJoin);
      Helper.resetObjectMatrix(upperJoin);
      Helper.setSpherePosition(upperJoin);


      var neck = Helper.createCone();
      upperJoin.add(neck);
      Helper.resetObjectMatrix(neck);
      Helper.setConePosition(neck,0);


      var headJoin = Helper.createSphere();
      neck.add(headJoin);
      Helper.resetObjectMatrix(headJoin);
      Helper.setSpherePosition(headJoin, 0.0, 0.8, 0.0);

      /* ARM */
      // direito
      var c3 = Helper.createCone(0.15, 0.7, 25, "rgb(0,0,180)");
      upperJoin.add(c3);
      Helper.resetObjectMatrix(c3);
      Helper.setConePosition(c3,degreesToRadians(100), 0.0, 0.35, 0.0);

      var shoulder = Helper.createSphere();
      c3.add(shoulder);
      Helper.resetObjectMatrix(shoulder);
      Helper.setSpherePosition(shoulder, 0.0, 0.5, 0.0);

      var c4 = Helper.createCone();
      shoulder.add(c4);
      Helper.resetObjectMatrix(c4);
      Helper.setConePosition(c4,degreesToRadians(75));

      var elbow = Helper.createSphere();
      c4.add(elbow);
      Helper.resetObjectMatrix(elbow);
      Helper.setSpherePosition(elbow);

      var c5 = Helper.createCone();
      elbow.add(c5);
      Helper.resetObjectMatrix(c5);
      Helper.setConePosition(c5,degreesToRadians(0));

      var fist = Helper.createSphere();
      c5.add(fist);
      Helper.resetObjectMatrix(fist);
      Helper.setSpherePosition(fist);

      // arms
      // esquerdo
      var c6 = Helper.createCone(0.15, 0.7, 25, "rgb(0,0,180)");
      upperJoin.add(c6);
      Helper.resetObjectMatrix(c6);
      Helper.setConePosition(c6,degreesToRadians(-100), 0.0, 0.35, 0.0);

      var shoulderE = Helper.createSphere();
      c6.add(shoulderE);
      Helper.resetObjectMatrix(shoulderE);
      Helper.setSpherePosition(shoulderE, 0.0, 0.5, 0.0);

      var c7 = Helper.createCone();
      shoulderE.add(c7);
      Helper.resetObjectMatrix(c7);
      Helper.setConePosition(c7,degreesToRadians(-75));

      var elbowE = Helper.createSphere();
      c7.add(elbowE);
      Helper.resetObjectMatrix(elbowE);
      Helper.setSpherePosition(elbowE);

      var c8 = Helper.createCone();
      elbowE.add(c8);
      Helper.resetObjectMatrix(c8);
      Helper.setConePosition(c8,degreesToRadians(0));

      var fistE = Helper.createSphere();
      c8.add(fistE);
      Helper.resetObjectMatrix(fistE);
      Helper.setSpherePosition(fistE);

      /* LEGS */
      //esquerda

      var c9 = Helper.createCone(0.15, 1.0, 25, "rgb(0,0,180)");
      this.lowerJoin.add(c9);
      Helper.resetObjectMatrix(c9);
      Helper.setConePosition(c9,degreesToRadians(-120), 0.0, 0.5, 0.0);

      var hipE = Helper.createSphere();
      c9.add(hipE);
      Helper.resetObjectMatrix(hipE);
      Helper.setSpherePosition(hipE, 0.0, 0.5, 0.0);

      var c10 = Helper.createCone(0.15, 3.0, 25, "rgb(0,0,180)");
      hipE.add(c10);
      Helper.resetObjectMatrix(c10);
      Helper.setConePosition(c10,degreesToRadians(-55), 0.0, 1.5, 0.0);

      var kneeE = Helper.createSphere();
      c10.add(kneeE);
      Helper.resetObjectMatrix(kneeE);
      Helper.setSpherePosition(kneeE, 0.0, 1.0, 0.0);

      var c11 = Helper.createCone(0.15, 2.5, 25, "rgb(0,0,180)");
      kneeE.add(c11);
      Helper.resetObjectMatrix(c11);
      Helper.setConePosition(c11,degreesToRadians(0), 0.0, 1.25, 0.0);


      var ankleE = Helper.createSphere();
      c11.add(ankleE);
      Helper.resetObjectMatrix(ankleE);
      Helper.setSpherePosition(ankleE, 0.0, 1.0, 0.0);

      /* LEGS */
      //esquerda

      var c12 = Helper.createCone(0.15, 1.0, 25, "rgb(0,0,180)");
      this.lowerJoin.add(c12);
      Helper.resetObjectMatrix(c12);
      Helper.setConePosition(c12,degreesToRadians(120), 0.0, 0.5, 0.0);

      var hipD = Helper.createSphere();
      c12.add(hipD);
      Helper.resetObjectMatrix(hipD);
      Helper.setSpherePosition(hipD, 0.0, 0.5, 0.0);

      var c13 = Helper.createCone(0.15, 3.0, 25, "rgb(0,0,180)");
      hipD.add(c13);
      Helper.resetObjectMatrix(c13);
      Helper.setConePosition(c13,degreesToRadians(55), 0.0, 1.5, 0.0);

      var kneeD = Helper.createSphere();
      c13.add(kneeD);
      Helper.resetObjectMatrix(kneeD);
      Helper.setSpherePosition(kneeD, 0.0, 1.0, 0.0);

      var c14 = Helper.createCone(0.15, 2.5, 25, "rgb(0,0,180)");
      kneeD.add(c14);
      Helper.resetObjectMatrix(c14);
      Helper.setConePosition(c14,degreesToRadians(0), 0.0, 1.25, 0.0);


      var ankleD = Helper.createSphere();
      c14.add(ankleD);
      Helper.resetObjectMatrix(ankleD);
      Helper.setSpherePosition(ankleD, 0.0, 1.0, 0.0);


      this.skeleton = {
        "torso": {
          "spheres":{
            "midJoin": midJoin, 
            "upperJoin": upperJoin,
            "headJoin": headJoin,
            "lowerJoin": this.lowerJoin
          },
          "cones": {
            "c1": {"mesh":c1, "angle": degreesToRadians(0)},
            "c2": {"mesh":c2, "angle": degreesToRadians(0)},
            "neck": {"mesh":neck, "angle": degreesToRadians(0)}
          }      
        },
        "rightSide":{
          "arm":{
            "spheres": {
              "shoulder": shoulder,
              "elbow": elbow,
              "fist": fist
            },
            "cones": {
              "c1": {"mesh":c3, "angle": degreesToRadians(100)},
              "c2": {"mesh":c4, "angle": degreesToRadians(75)}, 
              "c3": {"mesh": c5, "angle": degreesToRadians(0)}
            }
          },
          "leg":{
            "spheres": {
              "hip": hipD,
              "knee": kneeD,
              "ankle": ankleD
            },
            "cones": {
              "c1": {"mesh":c12, "angle": degreesToRadians(120)}, //160
              "c2": {"mesh": c13, "angle": degreesToRadians(50)}, // 0
              "c3": {"mesh": c14,  "angle": degreesToRadians(10)} 
            }
          }
        },
        "leftSide":{
          "arm":{
            "spheres": {
              "shoulder": shoulderE,
              "elbow": elbowE,
              "fist": fistE
            },
            "cones": {
              "c1": {"mesh":c6, "angle": degreesToRadians(-95)},
              "c2": {"mesh": c7, "angle": degreesToRadians(-90)}, 
              "c3": {"mesh": c8, "angle": degreesToRadians(0)}
            }
          },
          "leg":{
            "spheres": {
              "hip": hipE,
              "knee": kneeE,
              "ankle": ankleE
            },
            "cones": {
              "c1": {"mesh":c9, "angle": degreesToRadians(-120)},
              "c2": {"mesh": c10, "angle": degreesToRadians(-50)}, 
              "c3": {"mesh": c11, "angle": degreesToRadians(-10)} 
            }
          }
        }    
      };
   }

   getSkeleton(){
    return this.lowerJoin;
   }

   getSkeletonObject(){
     return this.skeleton;
   }

 }

 class Helper{
  static mat4 = new THREE.Matrix4();

   static resetObjectMatrix(object){
    object.matrixAutoUpdate = false;
    object.matrix.identity();
  }
  
  static setSpherePosition(sphere, x=0.0, y=1.0, z=0.0){
    sphere.matrix.multiply(this.mat4.makeTranslation(x, y, z));
  }
  
  static setConePosition(cone, angle, x=0.0, y=1.0, z=0.0){
    cone.matrix.multiply(this.mat4.makeRotationZ(angle));
    cone.matrix.multiply(this.mat4.makeTranslation(x, y, z));
  }

  static createSphere(radius=0.2, widthSegments=32, heightSegments=32, color="rgb(180,180,255)") {
    var sphereGeometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
    var sphereMaterial = new THREE.MeshPhongMaterial({
      color: color,
    });
    var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.receiveShadow = true;
    sphere.castShadow = true;
    return sphere;
  }
  
  static createCone(radius=0.15, height=2.0, radialSegment=25, color="rgb(0,0,180)") {
    var coneGeometry = new THREE.ConeGeometry(radius, height, radialSegment);
    var coneMaterial = new THREE.MeshPhongMaterial({ color: color });
    var cone = new THREE.Mesh(coneGeometry, coneMaterial);
    cone.receiveShadow = true;
    cone.castShadow = true;
    return cone;
  }
 }

 
 
 function main() {

  var stats = initStats(); 
  var scene = new THREE.Scene(); 
  var renderer = initRenderer(); 
  var camera = initCamera(new THREE.Vector3(15, 15, 15)); 
  var light = initDefaultLighting(scene, new THREE.Vector3(11, 36, 23));

  var trackballControls = new THREE.TrackballControls(
    camera,
    renderer.domElement
  );

  var axesHelper = new THREE.AxesHelper(12);
  axesHelper.translateY(-4.35);
  axesHelper.visible = true;
  scene.add(axesHelper);

  var groundPlane = createGroundPlane(100, 100); // width and height
  groundPlane.rotateX(degreesToRadians(-90));
  groundPlane.translateZ(-4.37);
  scene.add(groundPlane);

  // // var mat4 = new THREE.Matrix4();

  // /* Construindo os esqueletos */
  
  let skeletonObject_01 = new Skeleton(0,0);
  let skeleton_01 = skeletonObject_01.getSkeleton();
  scene.add(skeleton_01);
  

  let skeleton_02 = new Skeleton(-10,6);
  scene.add(skeleton_02.getSkeleton());

  let skeleton_03 = new Skeleton(7,-10);
  scene.add(skeleton_03.getSkeleton());

  let skeleton_04 = new Skeleton(3,20);
  scene.add(skeleton_04.getSkeleton());

  let skeleton_05 = new Skeleton(21,0);
  scene.add(skeleton_05.getSkeleton());




  

  // //   /* INICIO: Segundo trabalho */

  
  var tween = new TWEEN.Tween(skeleton_01.position)
    .to({ x : -10.0, z:-15.0}, 3000)
    .delay(2000)
    .onUpdate(() => {
      Helper.resetObjectMatrix(skeleton_01);
      Helper.setSpherePosition(skeleton_01, skeleton_01.position.x, 1.05, skeleton_01.position.z);
    })
    .onComplete(() => {
      //qualquer coisa
    })
    .start()
    .repeat(3)
    .yoyo(true);


  


  //   /* FIM: Segundo trabalho */
  
  window.addEventListener( 'resize', function(){onWindowResize(camera, renderer)}, false );

  render();
  function render()
  {
    stats.update(); // Update FPS
    trackballControls.update(); // Enable mouse movements
    requestAnimationFrame(render);
    TWEEN.update();
    renderer.render(scene, camera) // Render scene
  }

} 


 class Skeleton{
   constructor(x,z){
      this.position = {x: x, y: 1.05, z: z};
      this.createSkeleton();
      this.createTweens();
   }

   createSkeleton(){
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
            "c2": {"mesh": c13, "angle": degreesToRadians(55)}, // 0
            "c3": {"mesh": c14,  "angle": degreesToRadians(0)} 
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
            "c1": {"mesh":c6, "angle": degreesToRadians(-100)},
            "c2": {"mesh": c7, "angle": degreesToRadians(-75)}, 
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
            "c2": {"mesh": c10, "angle": degreesToRadians(-55)}, 
            "c3": {"mesh": c11, "angle": degreesToRadians(0)} 
          }
        }
      }    
    };
   }

   createTweens(){
      let rightArmC2 = this.skeleton.rightSide.arm.cones.c2;
      let rightArmC3 = this.skeleton.rightSide.arm.cones.c3;
    
      let leftArmC2 = this.skeleton.leftSide.arm.cones.c2;
      let leftArmC3 = this.skeleton.leftSide.arm.cones.c3;
    
      let rightLegC2 = this.skeleton.rightSide.leg.cones.c2;
      let rightLegC3 = this.skeleton.rightSide.leg.cones.c3;
    
      let leftLegC2 = this.skeleton.leftSide.leg.cones.c2;
      let leftLegC3 = this.skeleton.leftSide.leg.cones.c3;
    
      let seconds = 1500;
      let easingFunction = TWEEN.Easing.Cubic.InOut;
      let armAngle = 20;
      let forearmAngle = 30;
      let thighAngle = 15;
      let legAngle = 30;

      this.allTweens = [];
    
      /// Perna Direita
      ///panturrilha
      var initRightLegC3 = {a: 0};
      var targetRightLegC3 = {a: -legAngle};
      var targetRightLeg2C3 = {a: 0};
      
      var lastAngleRLC3 = 0;
      var tweenRightLegC3= new TWEEN.Tween(initRightLegC3)
      .to(targetRightLegC3, seconds)
      .easing(easingFunction)
      .onUpdate(() => {
        Helper.changePositionX(rightLegC3, degreesToRadians(initRightLegC3.a), 1.25);
        lastAngleRLC3 = initRightLegC3.a;
      })
      .yoyo(true);
      
      var lastAngleRL2C3 = 0;
      var tweenRightLeg2C3 = new TWEEN.Tween(initRightLegC3)
      .to(targetRightLeg2C3, seconds)
      .easing(easingFunction)
      .onUpdate(() => {
        Helper.changePositionX(rightLegC3, degreesToRadians(initRightLegC3.a), 1.25);
        lastAngleRL2C3 = initRightLegC3.a;
      })
      .yoyo(true);
      
      tweenRightLegC3.chain(tweenRightLeg2C3);
      tweenRightLeg2C3.chain(tweenRightLegC3);
    
      this.allTweens.push(tweenRightLegC3);
    
      ///perna
      var initRightLegC2 = {a: 0};
      var targetRightLegC2 = {a: -thighAngle};
      var targetRightLeg2C2 = {a: thighAngle};
    
      var tweenRightLegC2 = new TWEEN.Tween(initRightLegC2)
      .to(targetRightLegC2, seconds)
      .easing(easingFunction)
      .onUpdate(() => {
        Helper.changePositionY(rightLegC2, degreesToRadians(initRightLegC2.a), 1.5);
      })
      .yoyo(true);
    
      var tweenRightLeg2C2 = new TWEEN.Tween(initRightLegC2)
      .to(targetRightLeg2C2, seconds)
      .easing(easingFunction)
      .onUpdate(() => {
        Helper.changePositionY(rightLegC2, degreesToRadians(initRightLegC2.a), 1.5);
      })
      .yoyo(true);
      
      tweenRightLegC2.chain(tweenRightLeg2C2);
      tweenRightLeg2C2.chain(tweenRightLegC2);
    
      this.allTweens.push(tweenRightLegC2);
    
      /// Perna Esquerda
      ///panturrilha
      var initLegC3 = {a: 0};
      var targetLegC3 = {a: 0};
      var targetLeg2C3 = {a: -legAngle};
    
      var tweenLegC3= new TWEEN.Tween(initLegC3)
      .to(targetLegC3, seconds)
      .easing(easingFunction)
      .onUpdate(() => {
        Helper.changePositionX(leftLegC3, degreesToRadians(initLegC3.a), 1.25);
      })
      .yoyo(true);
    
      var tweenLeg2C3 = new TWEEN.Tween(initLegC3)
      .to(targetLeg2C3, seconds)
      .easing(easingFunction)
      .onUpdate(() => {
        Helper.changePositionX(leftLegC3, degreesToRadians(initLegC3.a), 1.25);
      })
      .yoyo(true);
      
      tweenLegC3.chain(tweenLeg2C3);
      tweenLeg2C3.chain(tweenLegC3);
    
      this.allTweens.push(tweenLegC3);
    
      ///perna
      var initLegC2 = {a: 0};
      var targetLegC2 = {a: -thighAngle};
      var targetLeg2C2 = {a: thighAngle};
    
      var tweenLegC2 = new TWEEN.Tween(initLegC2)
      .to(targetLegC2, seconds)
      .easing(easingFunction)
      .onUpdate(() => {
        Helper.changePositionY(leftLegC2, degreesToRadians(initLegC2.a), 1.5);
      })
      .yoyo(true);
    
      var tweenLeg2C2 = new TWEEN.Tween(initLegC2)
      .to(targetLeg2C2, seconds)
      .easing(easingFunction)
      .onUpdate(() => {
        Helper.changePositionY(leftLegC2, degreesToRadians(initLegC2.a), 1.5);
      })
      .yoyo(true);
      
      tweenLegC2.chain(tweenLeg2C2);
      tweenLeg2C2.chain(tweenLegC2);
    
      this.allTweens.push(tweenLegC2);

      /// braço direito

      /// antebraço
      var initC3 = {a: 0};
      var targetC3 = {a: forearmAngle};
      var target2C3 = {a: 0};

      var tweenC3 = new TWEEN.Tween(initC3)
        .to(targetC3, seconds)
        .easing(easingFunction)
        .onUpdate(() => {
          Helper.changePositionX(rightArmC3, degreesToRadians(initC3.a));
        })
        .yoyo(true);

        var tween2C3 = new TWEEN.Tween(initC3)
        .to(target2C3, seconds)
        .easing(easingFunction)
        .onUpdate(() => {
          Helper.changePositionX(rightArmC3, degreesToRadians(initC3.a));
        })
        //.repeat(1)
        .yoyo(true);

      tweenC3.chain(tween2C3);
      tween2C3.chain(tweenC3);

      this.allTweens.push(tweenC3);
    
      ///braço
      var init = {a: 0};
      var target = {a: armAngle};
      var target2 = {a: -armAngle};

      var tweenC1 = new TWEEN.Tween(init)
        .to(target, seconds)
        .easing(easingFunction)
        .onUpdate(() => {
          Helper.changePositionY(rightArmC2, degreesToRadians(init.a));
        })
        .yoyo(true);

        var tweenC11 = new TWEEN.Tween(init)
        .to(target2, seconds)
        .easing(easingFunction)
        .onUpdate(() => {
          Helper.changePositionY(rightArmC2, degreesToRadians(init.a));
        })
        //.repeat(1)
        .yoyo(true);

      tweenC1.chain(tweenC11);
      tweenC11.chain(tweenC1);

      this.allTweens.push(tweenC1);

      /// braço esquerdo

      /// antebraço
      var initLeftArmC3 = {a: 0};
      var targetLeftArmC3 = {a: 0};
      var targetLeftArm2C3 = {a: forearmAngle};

      var tweenLeftArmC3 = new TWEEN.Tween(initLeftArmC3)
        .to(targetLeftArmC3, seconds)
        .easing(TWEEN.Easing.Cubic.InOut)
        .onUpdate(() => {
          Helper.changePositionX(leftArmC3, degreesToRadians(initLeftArmC3.a));
        })
        .yoyo(true);

        var tweenLeftArm2C3 = new TWEEN.Tween(initLeftArmC3)
        .to(targetLeftArm2C3, seconds)
        .easing(TWEEN.Easing.Cubic.InOut)
        .onUpdate(() => {
          Helper.changePositionX(leftArmC3, degreesToRadians(initLeftArmC3.a));
        })
        //.repeat(1)
        .yoyo(true);

      tweenLeftArmC3.chain(tweenLeftArm2C3);
      tweenLeftArm2C3.chain(tweenLeftArmC3);

      this.allTweens.push(tweenLeftArmC3);
    
      ///braço
      var initLeftArmC2 = {a: 0};
      var targetLeftArmC2 = {a: armAngle};
      var targetLeftArm2C2 = {a: -armAngle};

      var tweenLeftArmC2 = new TWEEN.Tween(initLeftArmC2)
        .to(targetLeftArmC2, seconds)
        .easing(TWEEN.Easing.Cubic.InOut)
        .onUpdate(() => {
          Helper.changePositionY(leftArmC2, degreesToRadians(initLeftArmC2.a));
        })
        .yoyo(true);

        var tweenLeftArm2C2 = new TWEEN.Tween(initLeftArmC2)
        .to(targetLeftArm2C2, seconds)
        .easing(TWEEN.Easing.Cubic.InOut)
        .onUpdate(() => {
          Helper.changePositionY(leftArmC2, degreesToRadians(initLeftArmC2.a));
        })
        //.repeat(1)
        .yoyo(true);

      tweenLeftArmC2.chain(tweenLeftArm2C2);
      tweenLeftArm2C2.chain(tweenLeftArmC2);
      
      this.allTweens.push(tweenLeftArmC2);
  
   }

   getTweenGroup(){
     return new TweenGroup(this.allTweens);
   }

   getSkeleton(){
    return this.lowerJoin;
   }

   getSkeletonStructure(){
     return this.skeleton;
   }

 }

 class TweenGroup{
   constructor(array){
     this.tweenList = array;
   }

   start(){
    this.tweenList.forEach(t =>{
      t.start();
    });
   }

   stop(){
    this.tweenList.forEach(t =>{
      t.stop();
    });
   }
 }

 class Helper{
  static mat4 = new THREE.Matrix4();

   static resetObjectMatrix(object){
    object.matrixAutoUpdate = false;
    object.matrix.identity();
  }
  
  static setSpherePosition(sphere, x=0.0, y=1.0, z=0.0){
    sphere.position.x = x;
    sphere.position.y = y;
    sphere.position.z = z;
    sphere.matrix.multiply(this.mat4.makeTranslation(x, y, z));
  }
  
  static setConePosition(cone, angle, x=0.0, y=1.0, z=0.0){
    cone.matrix.multiply(this.mat4.makeRotationZ(angle));
    cone.matrix.multiply(this.mat4.makeTranslation(x, y, z));
  }

  static changePositionY(object, angle, y=1.0){
    Helper.resetObjectMatrix(object.mesh);
    object.mesh.matrix.multiply(this.mat4.makeRotationY(angle));
    Helper.setConePosition(object.mesh, object.angle, 0.0, y, 0.0);
  }

  static changePositionX(object, angle, y=1.0){
    Helper.resetObjectMatrix(object.mesh);
    object.mesh.matrix.multiply(this.mat4.makeRotationX(angle));
    Helper.setConePosition(object.mesh, object.angle, 0.0, y, 0.0);
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



  // /* Construindo os esqueletos */
  
  let skeletonObject_01 = new Skeleton(0,0);
  let skeleton_01 = skeletonObject_01.getSkeleton();
  scene.add(skeleton_01);
  let skeletonTween_01 =  skeletonObject_01.getTweenGroup();
  
  let skeletonObject_02 = new Skeleton(-10,6);
  let skeleton_02 = skeletonObject_02.getSkeleton();
  scene.add(skeleton_02);
  let skeletonTween_02 =  skeletonObject_02.getTweenGroup();

  let skeletonObject_03 = new Skeleton(7,-10);
  let skeleton_03 = skeletonObject_03.getSkeleton();
  scene.add(skeleton_03);
  let skeletonTween_03 =  skeletonObject_03.getTweenGroup();

  let skeletonObject_04 = new Skeleton(3,20);
  let skeleton_04 = skeletonObject_04.getSkeleton();
  scene.add(skeleton_04);
  let skeletonTween_04 =  skeletonObject_04.getTweenGroup();

  let skeletonObject_05 = new Skeleton(21,0);
  let skeleton_05 = skeletonObject_05.getSkeleton();
  scene.add(skeleton_05);
  let skeletonTween_05 =  skeletonObject_05.getTweenGroup();


  /* Importante: */

  /* var tween = new TWEEN.Tween(skeleton_01.position)
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
    .yoyo(true); */


  

  buildInterface();
  function buildInterface() {
      var controls = {
        start: () => {
          console.log("start");

          skeletonTween_01.start();
          skeletonTween_02.start();
          skeletonTween_03.start();
          skeletonTween_04.start();
          skeletonTween_05.start();
        },
        stop: () => {
          console.log("stop");
        
          skeletonTween_01.stop();
          skeletonTween_02.stop();
          skeletonTween_03.stop();
          skeletonTween_04.stop();
          skeletonTween_05.stop();
        },
        pause: () => {
          console.log("pause");
          walkAnimationOn = !walkAnimationOn;
          stop = false;
        },
        viewAxes: () => {
          axesHelper.visible = !axesHelper.visible;
        }
      };

      // GUI interface
      var gui = new dat.GUI();
      var folder = gui.addFolder("Actions");
      folder
      .add(controls, "start", true)
      .name("Start");
      
      folder
      .add(controls, "stop", false)
      .name("Stop");

      folder
      .add(controls, "pause", false)
      .name("Pause");

      folder.open();
      gui.add(controls, "viewAxes").name("View Axes");
    }


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


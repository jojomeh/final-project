(function (global) {
  'use strict';

  var cameraHelper;

  function onSetup() {
    var gridHelper = new THREE.GridHelper(500, 500);
    VRWorld.scene.add(gridHelper);

    cameraHelper = new THREE.CameraHelper(VRWorld.vrCamera);
    VRWorld.scene.add(cameraHelper);

    lightSetup();
    setupFondo();
    setupMeshes();
  }

  function lightSetup() {
    var ambient = new THREE.AmbientLight(0xffffff, 0.3);
    VRWorld.scene.add(ambient);

    // Key fill rim
    var keyLight = new THREE.DirectionalLight(0xffffff, 0.7);
    keyLight.position.set(-35, 30, 35);

    var fillLight = new THREE.DirectionalLight(0xffffff, 0.1);
    fillLight.position.set(30, 20, 20);

    var rimLight = new THREE.DirectionalLight(0xffffff, 0.3);
    rimLight.position.set(-10, 30, -30);

    VRWorld.scene.add(keyLight);
    VRWorld.scene.add(fillLight);
    VRWorld.scene.add(rimLight);
  }

  function setupFondo() {
    var geometry = new THREE.SphereBufferGeometry(300, 32, 32);

    // invert the geometry on the x-axis so that all of the faces point inward
    geometry.scale( - 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( {
      map: new THREE.TextureLoader().load('assets/space.jpg'  )
    });
    var mesh = new THREE.Mesh( geometry, material );
    VRWorld.scene.add(mesh);
  }

  function setupMeshes() {
    var loader = new THREE.OBJLoader();

    loader.load('assets/alien.obj', onLoadAlien);
    loader.load('assets/asteroid1.obj', onLoadAsteroid1);
    loader.load('assets/moon.obj', onLoadMoon);
    loader.load('assets/robot_low.obj', onLoadRobot);
    loader.load('assets/Femal_Base_Mesh.obj', onLoadFem);
    loader.load('assets/space_fighter.obj', onLoadSpace);


  }

  function onLoadAlien (objectLoaded) {
    var mesh = objectLoaded.children[0];

    var material = new THREE.MeshPhongMaterial({
      color   : FFBDBD,
      shading : THREE.SmoothShading
    });

    var alienMesh = new THREE.Mesh(mesh.geometry, material);
    alienMesh.scale.set(0.1, 0.1, 0.1);
    alienMesh.position.x = 50;
    alienMesh.rotateY(180);
    VRWorld.scene.add(alienMesh);
  }



  function onLoadAsteroid1 (objectLoaded) {
    var mesh = objectLoaded.children[0];

    for (var i = 0; i < 20; i++) {
      var material = new THREE.MeshPhongMaterial({
        color   : new THREE.Color(Math.random(), Math.random(), Math.random()),
        shading : THREE.SmoothShading
      });

      var asteroid1Mesh = new THREE.Mesh(mesh.geometry, material);
      asteroid1Mesh.position.x = Math.random() * 300 - 150;
      asteroid1Mesh.position.y = Math.random() * 300 - 150;
      asteroid1Mesh.position.z = Math.random() * 400 - 200;
      asteroid1Mesh.rotateX(Math.random())
      asteroid1Mesh.rotateY(Math.random())
      asteroid1Mesh.rotateZ(Math.random())
      var scale = Math.random() * 1.5;
      asteroid1Mesh.scale.set(scale, scale, scale);
      VRWorld.scene.add(asteroid1Mesh);
    }
  }

  function onLoadMoon (objectLoaded) {
    var mesh = objectLoaded.children[0];

    var material = new THREE.MeshPhongMaterial({
      color   : 0xff0000,
      shading : THREE.SmoothShading
    });

    var moonMesh = new THREE.Mesh(mesh.geometry, material);
    VRWorld.scene.add(moonMesh);
    moonMesh.position.x = 50;
    moonMesh.position.y = 20
    moonMesh.rotateY(90);
  }

  function onUpdate() {
     cameraHelper.update();
  }

    function onLoadRobot (objectLoaded) {
      var mesh = objectLoaded.children[0];

      var material = new THREE.MeshPhongMaterial({
        color   : 0xff0000,
        shading : THREE.SmoothShading
      });

      var robotMesh = new THREE.Mesh(mesh.geometry, material);
      VRWorld.scene.add(robotMesh);
      robotMesh.position.x = -20;
      robotMesh.position.y = 10;
      robotMesh.position.z = 20;
      robotMesh.rotateX(130);
      robotMesh.rotateY(140);
    robotMesh.scale.set(0.1, 0.1, 0.1);
    }

    function onUpdate() {
       cameraHelper.update();
    }

function onLoadFem (objectLoaded) {
  var mesh = objectLoaded.children[0];

  var material = new THREE.MeshPhongMaterial({
    color   : 0xff0000,
    shading : THREE.SmoothShading
  });

  var femMesh = new THREE.Mesh(mesh.geometry, material);
  VRWorld.scene.add(femMesh);
  femMesh.position.x = 5;
  femMesh.position.y = 10;
  femMesh.rotateX(180);
  femMesh.rotateY(180);
}

function onUpdate() {
   cameraHelper.update();
}



///--aqui bye

    function onLoadMoon (objectLoaded) {
      var mesh = objectLoaded.children[0];

      var material = new THREE.MeshPhongMaterial({
        color   : 0xff0000,
        shading : THREE.SmoothShading
      });

      var moonMesh = new THREE.Mesh(mesh.geometry, material);
      VRWorld.scene.add(moonMesh);
      moonMesh.position.x = 50;
      moonMesh.position.y = 20
      moonMesh.rotateY(90);
    }

    function onUpdate() {
       cameraHelper.update();
    }
      //----------space


          function onLoadSpace (objectLoaded) {
            var mesh = objectLoaded.children[0];

            var material = new THREE.MeshPhongMaterial({
              color   : 0xff0000,
              shading : THREE.SmoothShading
            });

            var SpaceMesh = new THREE.Mesh(mesh.geometry, material);
            VRWorld.scene.add(SpaceMesh);
            SpaceMesh.position.x = -20;
            SpaceMesh.position.y = 15;
            SpaceMesh.position.z = 10;
            SpaceMesh.rotateX(-90);
            SpaceMesh.rotateY(-90);
            SpaceMesh.rotateZ(-90);

          }

          function onUpdate() {
             cameraHelper.update();
          }


  // -- DENTRO DE AQUI

  var VRApp = {
    onSetup  : onSetup,
    onUpdate : onUpdate
  };

  global.VRApp = VRApp;
})(this);

<script setup>
import * as THREE from 'three';
import particleFire from 'three-particle-fire';
import { onMounted } from 'vue';

particleFire.install({ THREE });

const spaceImg = require('@/assets/space.jpg');
const meteoriteImg = require('@/assets/meteorite.jpg');
const meteoriteNormalImg = require('@/assets/meteorite_normal.png');

const clock = new THREE.Clock();

onMounted(() => {
  // Setup

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.setZ(30);
  camera.position.setX(-3);

  renderer.render(scene, camera);

  // Fire
  const fireRadius = 3;
  const fireHeight = 9;
  const particleCount = 2000;
  const height = window.innerHeight;

  const geometry0 = new particleFire.Geometry(fireRadius, fireHeight, particleCount);
  const material0 = new particleFire.Material({ color: 0xff2200 });
  material0.setPerspective(camera.fov, height);
  const particleFireMesh0 = new THREE.Points(geometry0, material0);
  particleFireMesh0.position.set(2, 1, -5);
  particleFireMesh0.rotateZ(50);
  scene.add(particleFireMesh0);

  // Lights

  const pointLight = new THREE.PointLight(0xffffff);
  pointLight.position.set(0, 0, 0);

  const ambientLight = new THREE.AmbientLight(0xffffff);
  scene.add(pointLight, ambientLight);

  // Helpers

  // const lightHelper = new THREE.PointLightHelper(pointLight)
  // const gridHelper = new THREE.GridHelper(200, 50);
  // scene.add(lightHelper, gridHelper)
  const axesHelper = new THREE.AxesHelper(5);
  scene.add(axesHelper);

  function addStar() {
    const geometry1 = new THREE.SphereGeometry(0.25, 24, 24);
    const material1 = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(geometry1, material1);

    const [x, y, z] = Array(3)
      .fill()
      .map(() => THREE.MathUtils.randFloatSpread(100));

    star.position.set(x, y, z);
    scene.add(star);
  }

  Array(200).fill().forEach(addStar);

  // Background

  const spaceTexture = new THREE.TextureLoader().load(spaceImg);
  scene.background = spaceTexture;

  // Meteorite

  const meteoriteTexture = new THREE.TextureLoader().load(meteoriteImg);
  const meteoriteTextureNormal = new THREE.TextureLoader().load(meteoriteNormalImg);

  const meteorite = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 16),
    new THREE.MeshBasicMaterial({
      map: meteoriteTexture,
      normalMap: meteoriteTextureNormal,
      color: 0x2b3442,
    }),
  );

  scene.add(meteorite);

  meteorite.position.z = -5;
  meteorite.position.x = 2;

  // Scroll Animation

  function moveCamera() {
    const t = document.body.getBoundingClientRect().top;

    meteorite.rotation.y += 0.01;
    meteorite.rotation.z += 0.01;

    camera.position.z = t * -0.01;
    camera.position.x = t * -0.0002;
    camera.rotation.y = t * -0.0002;
  }

  document.body.onscroll = moveCamera;
  moveCamera();

  // Animation Loop

  function animate() {
    const delta = clock.getDelta();

    requestAnimationFrame(animate);

    // controls.update();

    particleFireMesh0.material.update(delta);

    renderer.render(scene, camera);
  }

  clock.start();
  animate();
});
</script>

<template>
  <canvas id="bg"></canvas>

  <main>
    <header>
      <h1>meteorite Delaney</h1>
      <p>🚀 Welcome to my website!</p>
    </header>

    <blockquote>
      <p>I like making stuff and putting it on the internet</p>
    </blockquote>

    <section>
      <h2>📜 Manifesto</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </section>

    <section class="light">
      <h2>👩🏽‍🚀 Projects</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <h2>🏆 Accomplishments</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </section>

    <blockquote>
      <p>The best way out is always through <br />-Robert Frost</p>
    </blockquote>

    <section class="left">
      <h2>🌮 Work History</h2>

      <h3>McDonalds</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <h3>Burger King</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <h3>Taco Bell</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </section>
  </main>
</template>

<style lang="less" scoped>
canvas {
  position: fixed;
  top: 0;
  left: 0;
}

:root {
  --dark-bg: rgba(15, 15, 15, 0.95);
  --spacing: 350px;

  font-family: brandon-grotesque, sans-serif;
  font-weight: 400;
  font-style: normal;
}

main {
  width: 100vw;
  color: white;
  z-index: 99;
  position: absolute;
  width: 100%;
  margin: 0px auto;
  padding: 120px 0px;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
}

h1,
h2,
h3,
blockquote {
  font-family: elevon, sans-serif;
  font-weight: 700;
  font-style: normal;
}

canvas {
  position: fixed;
  top: 0;
  left: 0;
}

header {
  background: var(--dark-bg);
  grid-column: 2 / span 5;
  font-size: 2.5rem;
  padding: 2rem;
  margin-bottom: var(--spacing);
}

section {
  grid-column: 2 / 8;
  padding: 1rem;
  background: var(--dark-bg);
  font-size: 1.25rem;
  line-height: 1.5;
  margin-bottom: var(--spacing);
}

blockquote {
  margin: 0;
  padding: 0;
  grid-column: 2 / span 9;
  margin-bottom: var(--spacing);
}

blockquote p {
  color: black;
  background-color: white;
  font-size: 4rem;
  display: inline;
  line-height: 1;
}

.left {
  grid-column: 6 / 12;
}
</style>

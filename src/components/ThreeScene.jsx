import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function ThreeScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.domElement.style.pointerEvents = "none"; // allow UI clicks through
    container.appendChild(renderer.domElement);

    // Scene & camera
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x001b34); // deep sky/blue
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    const radius = 6;
    let theta = 0;
    camera.position.set(radius, 0, 0);
    camera.lookAt(0, 0, 0);

    // Lights
    const hemi = new THREE.HemisphereLight(0x8899ff, 0x220000, 0.6);
    scene.add(hemi);
    const point = new THREE.PointLight(0xffaa88, 1.2, 50);
    point.position.set(5, 5, 5);
    scene.add(point);

    // Load texture and create sphere (composite if PNG has transparency)
    const loader = new THREE.TextureLoader();
    loader.load(
      "/port.png",
      (tex) => {
        // if texture image has transparency, composite it onto a filled canvas
        const img = tex.image;
        let finalTexture = tex;

        if (img && img.width && img.height) {
          // create canvas and draw background + image to remove alpha holes
          const canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext("2d");

          // fill with matching sky blue (adjust to taste)
          ctx.fillStyle = "#052a66";
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          // draw the loaded image on top
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

          // create a Three.js texture from the canvas
          finalTexture = new THREE.CanvasTexture(canvas);
          finalTexture.encoding = THREE.sRGBEncoding;
          finalTexture.needsUpdate = true;
        } else {
          tex.encoding = THREE.sRGBEncoding;
          tex.needsUpdate = true;
        }

        // ensure correct wrap (not required but safe)
        finalTexture.wrapS = THREE.RepeatWrapping;
        finalTexture.wrapT = THREE.RepeatWrapping;
        finalTexture.repeat.set(1, 1);

        const geom = new THREE.SphereGeometry(2.3, 64, 64);
        const mat = new THREE.MeshStandardMaterial({
          map: finalTexture,
          metalness: 0.2,
          roughness: 0.6,
          emissive: new THREE.Color(0x001122).multiplyScalar(0.25),
        });
        const sphere = new THREE.Mesh(geom, mat);
        scene.add(sphere);

        // subtle atmosphere
        const atmGeo = new THREE.SphereGeometry(2.36, 32, 32);
        const atmMat = new THREE.MeshBasicMaterial({
          color: 0x1ea6ff,
          transparent: true,
          opacity: 0.04,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });
        const atmosphere = new THREE.Mesh(atmGeo, atmMat);
        scene.add(atmosphere);

        // animation loop (keeps subtle motion)
        let reqId;
        const animate = () => {
          theta += 0.004;
          camera.position.x = radius * Math.cos(theta);
          camera.position.z = radius * Math.sin(theta);
          camera.lookAt(0, 0, 0);

          sphere.rotation.y += 0.0018;
          renderer.render(scene, camera);
          reqId = requestAnimationFrame(animate);
        };
        animate();

        // resize handler
        const onResize = () => {
          const w = container.clientWidth || window.innerWidth;
          const h = container.clientHeight || window.innerHeight;
          renderer.setSize(w, h);
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.render(scene, camera);
        };
        window.addEventListener("resize", onResize);

        // cleanup specific to this load
        mountRef.current.__cleanup = () => {
          window.removeEventListener("resize", onResize);
          cancelAnimationFrame(reqId);
          // dispose resources
          geom.dispose && geom.dispose();
          mat.dispose && mat.dispose();
          atmGeo.dispose && atmGeo.dispose();
          atmMat.dispose && atmMat.dispose();
          finalTexture.dispose && finalTexture.dispose();
        };
      },
      undefined,
      (err) => {
        console.error("Texture load error:", err);
      }
    );

    // Optional OrbitControls (won't work if pointerEvents is 'none' on canvas)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.enablePan = false;
    controls.enableZoom = true;

    // overall cleanup
    return () => {
      controls.dispose();
      if (mountRef.current && mountRef.current.__cleanup) {
        mountRef.current.__cleanup();
      }
      try {
        renderer.forceContextLoss();
      } catch {}
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose && renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
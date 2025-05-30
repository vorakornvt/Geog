import React, { useEffect, useRef } from "react";
import * as THREE from "three";

function World() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    const scene = new THREE.Scene();

    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const textureLoader = new THREE.TextureLoader();
    const textureURL = "/earth-texture.jpg";

    textureLoader.load(
      textureURL,
      (texture) => {
        const geometry = new THREE.SphereGeometry(1, 64, 64);
        const material = new THREE.MeshStandardMaterial({
          map: texture,
          transparent: true,
          opacity: 0.9,
          emissive: new THREE.Color(0x00fc97),
          emissiveIntensity: 0.5,
        });

        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        // Soft even lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 3);
        scene.add(ambientLight);

        const animate = () => {
          sphere.rotation.y += 0.005;
          renderer.render(scene, camera);
        };

        renderer.setAnimationLoop(animate);
      },
      undefined,
      (error) => {
        console.error("Texture loading failed:", error);
      }
    );

    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      renderer.setSize(newWidth, newHeight);
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      renderer.dispose();
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "100%",
        background: "transparent",
      }}
    />
  );
}

export default World;

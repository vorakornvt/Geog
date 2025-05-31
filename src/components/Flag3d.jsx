import React, { useEffect, useRef } from "react";
import * as THREE from "three";

function Flag3d({ prop }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    const scene = new THREE.Scene();

    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(0, 0, 5).normalize();
    scene.add(light);

    const textureLoader = new THREE.TextureLoader();

    textureLoader.load(
      prop,
      (texture) => {
        const geometry = new THREE.PlaneGeometry(2, 1.2, 32, 32);

        const material = new THREE.MeshStandardMaterial({
          map: texture,
          side: THREE.DoubleSide,
        });

        const flag = new THREE.Mesh(geometry, material);
        scene.add(flag);

        const initialVertices = geometry.attributes.position.array.slice();

        let clock = new THREE.Clock();

        const animate = () => {
          const time = clock.getElapsedTime();

          const pos = geometry.attributes.position;
          for (let i = 0; i < pos.count; i++) {
            const ix = i * 3;
            const x = initialVertices[ix];
            const y = initialVertices[ix + 1];
            pos.array[ix + 2] = Math.sin(x * 3 + time * 3) * 0.1;
          }

          pos.needsUpdate = true;

          renderer.render(scene, camera);
          requestAnimationFrame(animate);
        };

        animate();
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
  }, [prop]);

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

export default Flag3d;

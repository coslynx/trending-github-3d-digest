import React, { useRef, useEffect } from 'react';
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  AmbientLight,
  DirectionalLight,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
} from 'three';
import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const cubeRef = useRef<Mesh>(null);

  useEffect(() => {
    try {
      const scene = new Scene();
      const camera = new PerspectiveCamera(
        75,
        (mountRef.current?.clientWidth || 1) / (mountRef.current?.clientHeight || 1),
        0.1,
        1000
      );
      camera.position.set(0, 0, 5);

      const renderer = new WebGLRenderer({ antialias: true });
      renderer.setSize(mountRef.current?.clientWidth || 0, mountRef.current?.clientHeight || 0);

      const ambientLight = new AmbientLight(0x404040);
      scene.add(ambientLight);

      const directionalLight = new DirectionalLight(0xffffff, 0.5);
      directionalLight.position.set(1, 1, 1);
      scene.add(directionalLight);

      const geometry = new BoxGeometry(1, 1, 1);
      const material = new MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new Mesh(geometry, material);
      scene.add(cube);
      cubeRef.current = cube;

      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement);
      }

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.25;
      controls.enableZoom = true;

      const animate = () => {
        if (cubeRef.current) {
          cubeRef.current.rotation.x += 0.01;
          cubeRef.current.rotation.y += 0.01;
        }
        controls.update();
        renderer.render(scene, camera);
      };

      const handleResize = () => {
        camera.aspect = (mountRef.current?.clientWidth || 1) / (mountRef.current?.clientHeight || 1);
        camera.updateProjectionMatrix();
        renderer.setSize(mountRef.current?.clientWidth || 0, mountRef.current?.clientHeight || 0);
      };

      window.addEventListener('resize', handleResize);

      const animationFrameId = requestAnimationFrame(function renderLoop() {
        animate();
        requestAnimationFrame(renderLoop);
      });

      return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
        if (mountRef.current) {
          mountRef.current.removeChild(renderer.domElement);
        }
      };
    } catch (error: unknown) {
      console.error('Error initializing Three.js:', error);
      return () => { };
    }
  }, []);

  return <div className="three-scene-container" ref={mountRef} style={{ width: '100%', height: '500px' }}></div>;
};

export default ThreeScene;
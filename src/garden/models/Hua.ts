import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import huaGltfUrl from '../gltf/hua.glb?url';

const loadGLTFs = (group: THREE.Group) => {
    const loader = new GLTFLoader();
    loader.load(huaGltfUrl, (gltf) => {
        const hua = gltf.scene;
        hua.traverse((n) => {
            n.castShadow = true;
            n.receiveShadow = true;
        });
        hua.scale.set(10, 10, 10);
        hua.position.z = 75;

        for (let i = 0; i < 6; i++) {
            const h = hua.clone();
            h.position.set(1 + i * 17.5, 0, 75);
            group.add(h);
        }
        for (let i = 0; i < 4; i++) {
            const h = hua.clone();
            h.position.set(36 + i * 17.5, 0, 66);
            group.add(h);
        }
    });
}

export const createHua = () => {
    var group = new THREE.Group();
    loadGLTFs(group);
    return group;
}
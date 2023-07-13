import * as THREE from 'three'
const Plane = (w: number, h: number) => {
    const geometry = new THREE.BoxGeometry(w, 0.01, h);
    geometry.translate(w / 2, 0.005, -h / 2);
    const material = new THREE.MeshStandardMaterial({ color: 0xc6c6c6, side: THREE.DoubleSide });
    const mesh = new THREE.Mesh(geometry, material);
    // mesh.receiveShadow = true;
    // mesh.castShadow = true;
    // mesh.rotateX(-Math.PI / 2);


    return mesh;
}

const Ding = () => {
    const group = new THREE.Group();

    const d1 = Plane(106 + 2.4, 68 + 53 + 2.4);
    d1.position.set(-1.2, 29.000, -1.2);
    group.add(d1);

    const d2 = Plane(70 + 2.4, 10 + 2.4);
    d2.position.set(36 - 1.2, 29.000, 10 - 1.2);
    group.add(d2);

    return group;
}
const Di = () => {
    const group = new THREE.Group();
    const d1 = Plane(106 + 2.4, 68 + 53 + 2.4);
    d1.position.set(-1.2, -0.001, -1.2);
    group.add(d1);
    const d2 = Plane(70 + 2.4, 10 + 2.4);
    d2.position.set(36 - 1.2, -0.001, 10 - 1.2);
    group.add(d2);
    return group;
}
export const createDingAndZhuan = () => {
    const group = new THREE.Group();

    group.add(Ding());
    group.add(Di());

    group.position.y = 2;

    return group;
}
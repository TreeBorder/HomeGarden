import * as THREE from 'three';
const boxH = (x: number, y: number, z: number) => {
    const geometry = new THREE.BoxGeometry(x, y, z);
    const material = new THREE.MeshPhysicalMaterial({ color: 0xc6c6c6 });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return mesh;
}
const boxZ = (x: number, y: number, z: number) => {
    const geometry = new THREE.BoxGeometry(x, y, z);
    const material = new THREE.MeshPhysicalMaterial({ color: 0xdd8a1a });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return mesh;
}

const box75 = (x: number, y: number, z: number) => {
    const b75 = boxH(2, 6, 75);
    b75.position.x += x;
    b75.position.y += 3 + y;
    b75.position.z += 37.5 + z;
    return b75;
}

const box65 = (x: number, y: number, z: number) => {
    const b65 = boxH(2, 6, 65);
    b65.position.x += 106 + x;
    b65.position.y += 3 + y;
    b65.position.z += 42.5 + z;
    return b65;
}

const box106 = () => {
    const b106 = boxH(106 * 6, 6, 2);
    b106.position.x = -106;
    b106.position.y = 3;
    b106.position.z = 76;
    return b106;
}

const b12 = (x: number, y: number, z: number) => {
    const b12 = boxH(2, 12, 2);
    b12.position.x += x;
    b12.position.y += y + 6 + 6;
    b12.position.z += z + 1;
    return b12;
}

const b11 = (x: number, y: number, z: number) => {
    const b11 = boxZ(1, 11, 0.5);
    b11.position.x += x;
    b11.position.y += y + 5.5 + 6;
    b11.position.z += z + 0.25;
    return b11;
}

const b11X75 = (x: number, y: number, z: number) => {
    const group = new THREE.Group();
    for (let i = 0; i < 37; i++) {
        const b = boxZ(0.5, 11, 1);
        b.position.set(x, y + 11.5, z + 2 * i + 2);
        group.add(b);
    }
    return group;
}
const b11X65 = (x: number, y: number, z: number) => {
    const group = new THREE.Group();
    for (let i = 0; i < 32; i++) {
        const b = boxZ(0.5, 11, 1);
        b.position.set(x, y + 11.5, z + 2 * i + 12);
        group.add(b);
    }
    return group;
}

export const createWeilan = () => {
    const group = new THREE.Group();

    group.add(box75(-106 * 4 + 1, 0, 0));
    group.add(box75(-106 * 2, 0, 0));
    group.add(box75(0, 0, 0));
    group.add(box75(106 * 2 - 1, 0, 0));

    group.add(box65(-106 * 4, 0, 0));
    group.add(box65(-106 * 2, 0, 0));
    group.add(box65(0, 0, 0));

    group.add(box106());

    group.add(b12(-106 * 4 + 1, 0, 75));
    group.add(b12(-106 * 3, 0, 75));
    group.add(b12(-106 * 2, 0, 75));
    group.add(b12(-106 * 1, 0, 75));
    group.add(b12(0, 0, 75));
    group.add(b12(106 * 1, 0, 75));
    group.add(b12(106 * 2 - 1, 0, 75));

    for (let i = 0; i < 315; i++) {
        group.add(b11(-106 * 4 + 4 + 2 * i, 0, 75.75));
    }
    group.add(b11X75(-106 * 4 + 1, 0, 0));
    group.add(b11X75(-106 * 2, 0, 0));
    group.add(b11X75(0, 0, 0));
    group.add(b11X75(106 * 2 - 1, 0, 0));

    group.add(b11X65(-106 * 3, 0, 0));
    group.add(b11X65(-106 * 1, 0, 0));
    group.add(b11X65(106, 0, 0));
    return group;
}
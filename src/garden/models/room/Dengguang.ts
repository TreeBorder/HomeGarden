import * as THREE from 'three'

const BasicLight = (x: number, y: number, z: number) => {
    const light = new THREE.PointLight(0xffffff, 1, 40);
    light.castShadow = true;
    light.position.set(x, y, z);
    return light;
}

// const KeTing = (group: THREE.Group) => {
//     const light = BasicLight(56, 30.95, -30);
//     light.position.set(56, 30.95, -30);
//     // light.distance = 100;
//     // light.visible = true;
//     // light.shadow.camera.far = 100;

//     light.shadow.mapSize.width = 5120;  // default
//     light.shadow.mapSize.height = 5120; // default

//     // var shadowHelper = new THREE.CameraHelper(light.shadow.camera);
//     group.add(light);
//     // group.add(shadowHelper);
// }

export const createDengguang = () => {
    const group = new THREE.Group();
    // KeTing(group);
    group.add(BasicLight(56, 30.95, -30));//客厅
    group.add(BasicLight(19.2, 30.95, -20));//主卧
    group.add(BasicLight(12, 30.95, -60));//主卫生间
    group.add(BasicLight(53.5 / 4 + 8.5, 30.95, -68 - 19 - 17));//北卧室西
    group.add(BasicLight(53.5 / 4 * 3 + 8.5, 30.95, -68 - 19 - 17));//北卧室东
    group.add(BasicLight(53.5 + 8.5 + 15.5, 30.95, -68 - 19 - 17));//厨房
    group.add(BasicLight(17, 30.95, -68 - 19 / 2 - 1.2));//客卫
    group.add(BasicLight(76 + 15, 30.95, -26));//书房
    return group;
}
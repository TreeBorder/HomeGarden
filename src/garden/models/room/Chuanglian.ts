import * as THREE from 'three'
// import zhuwoGlbUrl from '../../gltf/zhuwochuanghu2.glb?url'
// import beiwoGlbUrl from '../../gltf/beiwoxch.glb?url'
import yangtaiGlbUrl from '../../gltf/menghuanlian.glb?url'
// import weishengjianGlbUrl from '../../gltf/weishengjianch.glb?url'
// import chufangGlbUrl from '../../gltf/chufangchuanghu.glb?url'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// const Zhuwo = (group: THREE.Group) => {
//     const loader = new GLTFLoader();
//     loader.load(zhuwoGlbUrl, (gltf) => {
//         const zhuwochuanghu = gltf.scene;
//         zhuwochuanghu.scale.set(45, 32.5, 35);
//         // zhuwochuanghu.traverse((n) => {
//         //     n.castShadow = true;
//         //     n.receiveShadow = true;
//         // });

//         zhuwochuanghu.position.set(8, 11, -0.5);
//         group.add(zhuwochuanghu);
//     });
// }

// const BeiWo = (group: THREE.Group) => {
//     const loader = new GLTFLoader();
//     loader.load(beiwoGlbUrl, (gltf) => {
//         const beiwoch = gltf.scene;
//         beiwoch.scale.set(45, 35, 35);
//         const xc = beiwoch.clone();
//         xc.position.set(14.5, 11, -0.5 - 68 - 53);
//         const dc = beiwoch.clone();
//         dc.position.set(53.5 / 2 + 8.45 + 4.8 + 1, 11, -0.5 - 68 - 53);
//         group.add(xc);
//         group.add(dc);
//     });
// }
const Yangtai = (group: THREE.Group) => {
    const loader = new GLTFLoader();
    loader.load(yangtaiGlbUrl, (gltf) => {
        const ch = gltf.scene;
        ch.scale.set(12, 8, 13);
        ch.rotateY(Math.PI / 2);
        ch.position.set(43 + 54, 3.1, 7);
        group.add(ch);
    });
}
// const ChuFang = (group: THREE.Group) => {
//     const loader = new GLTFLoader();
//     loader.load(chufangGlbUrl, (gltf) => {
//         const ch = gltf.scene;
//         ch.scale.set(14, 10, 14);
//         ch.position.set(53.5 + 19.5, 11, -68 - 53 + 6.4);
//         group.add(ch);
//     });
// }
// const Weishengjian = (group: THREE.Group) => {
//     const loader = new GLTFLoader();
//     loader.load(weishengjianGlbUrl, (gltf) => {
//         const ch = gltf.scene;
//         ch.scale.set(12, 8, 12);
//         const kch = ch.clone();
//         kch.rotateY(Math.PI / 2);
//         kch.position.set(8.5, 11, -68 - 10.7);
//         ch.position.set(1.2, 11, -68 - 1.2);
//         group.add(ch);
//         group.add(kch);
//     });
// }

export const createChuanglian = () => {
    const group = new THREE.Group();
    // Zhuwo(group);
    // BeiWo(group);
    Yangtai(group);
    // ChuFang(group);
    // Weishengjian(group);
    return group;
}
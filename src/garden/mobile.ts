import * as THREE from 'three';
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';
// import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
import { TouchController } from "@verseengine/three-touch-controller";
import { createSan } from './models/San';
import { createBuilding } from './models/Jianzhu';
import grassUrl from '../assets/texture/grass2.jpg';
import { createWeilan } from './models/Weilan';
import { createYinghua } from './models/Yinghua';
import { createQingshiban } from './models/Qingshiban';
import { createTudi } from './models/Tudi';
import { createCaidi } from './models/Caidi';
import { createHua } from './models/Hua';
import { createRoom } from './models/room';

export default class Garden {
    scene: THREE.Scene
    // camera: THREE.OrthographicCamera
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer
    width: number
    height: number
    top: number
    left: number
    // controls: OrbitControls
    // controls: FirstPersonControls
    // controls: PointerLockControls
    controls: TouchController
    clock: THREE.Clock
    raycaster: THREE.Raycaster
    pointer: THREE.Vector2
    overed?: THREE.Object3D
    velocity: THREE.Vector3 //移动速度变量
    direction: THREE.Vector3 //移动的方向变量
    rotation: THREE.Vector3 //当前的相机朝向
    controlsEnabled: boolean;
    // moveForward: boolean;
    // moveBackward: boolean;
    // moveLeft: boolean;
    // moveRight: boolean;

    constructor(dom: HTMLCanvasElement) {
        this.scene = new THREE.Scene()
        const canvas = dom.getBoundingClientRect();
        this.width = canvas.width; //窗口宽度
        this.height = canvas.height; //窗口高度
        this.top = canvas.top;
        this.left = canvas.left;
        var k = this.width / this.height; //窗口宽高比
        // var s = 50; //三维场景显示范围控制系数，系数越大，显示的范围越大
        // this.centerXY = [114.303798, 35.75397];
        // this.camera = new THREE.OrthographicCamera(
        //     -s * k,
        //     s * k,
        //     s,
        //     -s,
        //     0.1,
        //     2000
        // );
        this.camera = new THREE.PerspectiveCamera(45, k, 1, 1000);
        this.renderer = new THREE.WebGLRenderer({
            canvas: dom,
            antialias: true,
            alpha: true,
        });
        // this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        // this.controls.maxPolarAngle = Math.PI * 0.5;
        this.scene.background = new THREE.Color(0x87ceeb);
        // this.controls = new FirstPersonControls(this.camera, this.renderer.domElement);
        // this.controls.enabled = true;
        // this.controls.lookSpeed = 0.03;
        // this.controls.lookAt(-30, 0, 35);
        // this.controls.movementSpeed = 6;
        // this.controls.noFly = false;
        // this.controls.constrainVertical = true; //约束垂直
        // this.controls.verticalMin = 1.0;
        // this.controls.verticalMax = 2.0;

        // this.controls = new PointerLockControls(this.camera, this.renderer.domElement);
        // this.controls.getObject().position.y = 17;
        // this.controls.getObject().position.x = 100;
        // this.controls.pointerSpeed = 0.7;
        this.controls = new TouchController(this.camera);
        this.controls.moveSpeed = 6;

        // dom.addEventListener('click', () => {
        //     // if (this.controls.isLocked) this.controls.unlock;
        //     // else
        //     this.controls.lock();
        // });
        // document.addEventListener('keyup', this.onKeyUp);
        // document.addEventListener('keydown', this.onKeyDown);

        // // this.controls.addEventListener()
        // this.controls.connect();

        // this.controls.

        this.velocity = new THREE.Vector3(); //移动速度变量
        this.direction = new THREE.Vector3(); //移动的方向变量
        this.rotation = new THREE.Vector3(); //当前的相机朝向
        this.controlsEnabled = false;
        // this.moveForward = false;
        // this.moveBackward = false;
        // this.moveLeft = false;
        // this.moveRight = false;

        this.clock = new THREE.Clock();

        // this.scene.add(this.controls.getObject());
        // this.controls.lon = 0; //进入初始视角x轴的角度
        // this.controls.lat = 0; //初始视角进入后y轴的角度


        this.raycaster = new THREE.Raycaster()
        this.pointer = new THREE.Vector2()

        this.init()
    }
    private init = () => {
        // this.camera.position.set(200, 200, 600);
        // // this.scene.position.set(220, this.height / 4, 200);
        // this.camera.lookAt(this.scene.position);
        // this.camera.position.set(50, 17, 25);
        // this.camera.lookAt(30, 14, 75);
        this.camera.position.set(-33, 17, 75);
        this.camera.lookAt(50, 14, -50);
        var ambient = new THREE.AmbientLight(0xcccccc);
        this.scene.add(ambient);

        this.createBasic();
        this.createModels();
        // var axisHelper = new THREE.AxesHelper(1000);
        // this.scene.add(axisHelper);

        // var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        // directionalLight.position.set(0, 80000, 1000);
        // this.scene.add(directionalLight);

        var directionalLight = new THREE.DirectionalLight(0xd9d9d9, 0.8);
        directionalLight.castShadow = true;
        directionalLight.position.set(100, 2000, 1550);
        // directionalLight.lookAt(0, 0, 75);

        directionalLight.shadow.mapSize.width = 5120;  // default
        directionalLight.shadow.mapSize.height = 5120; // default
        // directionalLight.shadow.camera.lookAt(-10000, 0, 100);

        directionalLight.shadow.camera.near = 10;    // default
        directionalLight.shadow.camera.far = 3000;     // default
        directionalLight.shadow.camera.left = -300;
        directionalLight.shadow.camera.top = 300;
        directionalLight.shadow.camera.right = 300;
        directionalLight.shadow.camera.bottom = -300;

        // directionalLight.shadow.camera.left = 5000;
        // directionalLight.shadow.camera.setViewOffset(5000, 5000, 3000, 2500, 5000, 5000);
        // directionalLight.shadow.camera.right = 1000;
        // directionalLight.shadow.camera.bottom = 10;
        this.scene.add(directionalLight);

        this.scene.position.x = -40;
        this.renderer.shadowMap.enabled = true;
        this.renderer.setClearAlpha(0);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.width, this.height);

        // this.controls.update(this.clock.getDelta());
        // this.controls.update();
        this.animate();
    }
    // private onKeyDown = (event: KeyboardEvent) => {
    //     switch (event.code) {
    //         case "ArrowUp": // up
    //         case "KeyW": // w
    //             this.moveForward = true;
    //             // this.controls.moveForward(6);
    //             break;
    //         case "ArrowLeft": // left
    //         case "KeyA": // a
    //             this.moveLeft = true;
    //             // this.controls.moveRight(-6);
    //             break;
    //         case "ArrowDown": // down
    //         case "KeyS": // s
    //             this.moveBackward = true;
    //             // this.controls.moveForward(-6);
    //             break;
    //         case "ArrowRight": // right
    //         case "KeyD": // d
    //             this.moveRight = true;
    //             // this.controls.moveRight(6);
    //             break;
    //     }
    // }
    // private onKeyUp = (event: KeyboardEvent) => {
    //     switch (event.code) {
    //         case "ArrowUp": // up
    //         case "KeyW": // w
    //             this.moveForward = false;
    //             break;
    //         case "ArrowLeft": // left
    //         case "KeyA": // a
    //             this.moveLeft = false;
    //             break;
    //         case "ArrowDown": // down
    //         case "KeyS": // s
    //             this.moveBackward = false;
    //             break;
    //         case "ArrowRight": // right
    //         case "KeyD": // d
    //             this.moveRight = false;
    //             break;
    //     }
    // }
    private createBasic = () => {
        // const geometry = new THREE.PlaneGeometry(100, 75);
        // const material = new THREE.MeshBasicMaterial({ color: 0x666666 });
        // const mesh = new THREE.Mesh(geometry, material);
        // mesh.rotateX(-Math.PI / 2);



        this.scene.add(this.createGrass(1000, 500));
    }
    private createGrass(x: number, y: number) {
        // const x = 2300, y = 3400;
        var texture = new THREE.TextureLoader().load(grassUrl);
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(x / 100, y / 100);
        var basicRoadGeometry = new THREE.PlaneGeometry(x, y);
        var basicMeterial = new THREE.MeshStandardMaterial({
            map: texture,
            // color: 0xf1f1f1,
            transparent: true,
            // opacity: 0.2,
            side: THREE.DoubleSide
        });
        var basic = new THREE.Mesh(basicRoadGeometry, basicMeterial);

        basic.rotateX(Math.PI / 2);

        basic.position.y = -1;
        basic.receiveShadow = true;
        // var basic2
        return basic;
    }

    private createModels = () => {
        this.scene.add(createBuilding());
        this.scene.add(createSan());
        this.scene.add(createWeilan());
        this.scene.add(createYinghua());
        this.scene.add(createQingshiban());
        this.scene.add(createTudi());
        this.scene.add(createCaidi());
        this.scene.add(createHua());
        this.scene.add(createRoom());
    }
    private render = () => {
        this.renderer.render(this.scene, this.camera);
        // if (this.controls.isLocked) {
        //     // let delta = this.clock.getDelta();

        //     // this.controls.getObject().translateX(this.velocity.x * delta);
        //     // this.controls.getObject().translateY(this.velocity.y * delta);
        //     // this.controls.getObject().translateZ(this.velocity.z * delta);
        //     // console.log("sss");
        //     if (this.moveForward) this.controls.moveForward(0.3);
        //     if (this.moveBackward) this.controls.moveForward(-0.3);
        //     if (this.moveLeft) this.controls.moveRight(-0.3);
        //     if (this.moveRight) this.controls.moveRight(0.3);
        // }
    }
    private animate = () => {
        // this.controls.update();
        requestAnimationFrame(this.animate);

        this.render();
        this.controls.tick(this.clock.getDelta());
        // this.controls.update();

        // this.lineTexture.offset.x -= 0.02;
    }
}
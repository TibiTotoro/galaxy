import React, { Component } from "react"
import ReactDOM from "react-dom"
import * as THREE from "three"
import planets from "~content/planets.json"
class App extends Component {
    constructor(){
        super()
        this.scene = new THREE.Scene()
    }
   
    createSphereObject(object, array ) {
        var material = new THREE.MeshLambertMaterial({ color: 0xffffff, map: object.texture, transparent: true,  lights:true  } ); 
        var radius = object.radius;
        var geometry =  new THREE.SphereGeometry(radius, 32, 32 );
        object.minorSemiaxis = object.majorSemiaxis * Math.sqrt(1 - Math.pow(object.eccentricity ,2));
        var mesh = new THREE.Mesh(geometry, material);
        mesh.name = object.name;
        mesh.radius = object.radius;
        this.scene.add( mesh );
        array.push( mesh ); 
    }

    createSphereClone(object, array ) {
        var material = new THREE.MeshLambertMaterial({ color: 0xffffff, transparent: true, opacity:0, needsUpdate:true  } ); 
        var radius = object.radius + 1;
        var geometry =  new THREE.SphereGeometry(radius, 32, 32 );
        var mesh = new THREE.Mesh(geometry, material);
        mesh.name = object.name;
        mesh.radius = object.radius + 1;
        this.scene.add( mesh );
        array.push( mesh ); 
        objectsClick.push( mesh );
    }


    initPlanets() {
        planets.forEach((item, i) => {
        this.createSphereObject(planets[i], planetMeshes)
        createSphereClone(planets[i], planetMeshesClones)
        })
    }

  componentDidMount() {
    // === THREE.JS CODE START ===
    var scene = new THREE.Scene()
    //var textureScene = new THREE.TextureLoader().load( "img/milky.jpg" );
    var camera = new THREE.PerspectiveCamera(
      35,
      window.innerWidth / window.innerHeight,
      1,
      30000
    )
    var textureScene = new THREE.TextureLoader().load("/images/3d/milky.jpg")
    // camera.position.set( 0,2000, 8000 );
    //camera.lookAt( scene.position );
    var renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)
    var geometry = new THREE.BoxGeometry(1, 1, 1)
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    var cube = new THREE.Mesh(geometry, material)
    scene.add(cube)
    scene.background = textureScene
    camera.position.z = 5
    var animate = function() {
      requestAnimationFrame(animate)
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      renderer.render(scene, camera)
    }
    this.initPlanets()
    animate()
    // === THREE.JS EXAMPLE CODE END ===
  }
  render() {
    return <div />
  }
}
export default App

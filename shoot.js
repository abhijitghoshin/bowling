AFRAME.registerComponent("ball", {
  init: function () {
    this.shootBall();
  },
  shootBall: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "z") {
        var ball = document.createElement("a-entity");

        ball.setAttribute("geometry", {
          primitive: "sphere",
          radius: 0.20,
        });

        ball.setAttribute("material", "color", "black");
ball.setAttribute("dynamic-body",{
  shape:"sphere",mass:"0"
})
        var cam = document.querySelector("#camera");

        pos = cam.getAttribute("position");

        ball.setAttribute("position", {
          x: pos.x,
          y: pos.y,
          z: pos.z,
        });

        var camera = document.querySelector("#camera").object3D;

        //get the camera direction as Three.js Vector
        var direction = new THREE.Vector3();
        camera.getWorldDirection(direction);

        //set the velocity and it's direction
        ball.setAttribute("velocity", direction.multiplyScalar(-10));

        var scene = document.querySelector("#scene");
ball.addEventListener("collide",this.removeball )
        scene.appendChild(ball);
      }
    });
  },
  removeball:function(e){
var element=e.detail.target.el
var elementhit=e.detail.body.el
if(elementhit.id.includes("box")){
  elementhit.setAttribute("material",{
    opacity:0.6,transparent:true
  })
  
  var impulse = new CANNON.Vec3(-2, 2, 1); 
  var worldPoint = new CANNON.Vec3().copy( elementHit.getAttribute("position") );
elementHit.body.applyImpulse(impulse, worldPoint);

  element.removeEventListener("collide",this.shoot)
  var scene = document.querySelector("#scene");
  scene.removeChild(el)
}
  }
});



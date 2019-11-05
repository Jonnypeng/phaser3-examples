var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        create: create,
        update: update
    }
};

var path;
var curve;
var circle;
var pathShape;

var game = new Phaser.Game(config);

function create ()
{
    circle = this.add.graphics();
    circle.fillStyle(0xff0000,1);
    circle.fillCircle(0,0,16);

    path = { t: 0, vec: new Phaser.Math.Vector2() };

    var startPoint = new Phaser.Math.Vector2(100, 500);
    var controlPoint1 = new Phaser.Math.Vector2(50, 100);
    var endPoint = new Phaser.Math.Vector2(700, 500);

    curve = new Phaser.Curves.QuadraticBezier(startPoint, controlPoint1, endPoint);

    pathShape = this.add.graphics();
    pathShape.lineStyle(1,0x00ff00,1);

    curve.draw(pathShape);

    this.tweens.add({
        targets: path,
        t: 1,
        ease: 'Sine.easeInOut',
        duration: 3000,
        yoyo: true,
        repeat: -1,
        onUpdate:()=>{
            console.log(path);
            curve.getPoint(path.t,path.vec);
            circle.setPosition(path.vec.x,path.vec.y);
        }
    });
}

function update ()
{
    // graphics.clear();

    // graphics.lineStyle(1, 0x00ff00, 1);

    // curve.draw(graphics);

    // curve.getPoint(path.t, path.vec);

    // graphics.fillStyle(0xff0000, 1);
    // graphics.fillCircle(path.vec.x, path.vec.y, 16);
}

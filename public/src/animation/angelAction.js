var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.atlas('cube', 'assets/animations/cube.png', 'assets/animations/cube.json');
    this.load.atlas('angelAction', 'assets/animations/angelAction.png', 'assets/animations/angelAction.json'); 
}

function create ()
{
    let layer = this.add.container(0,0);

    this.anims.create({
        key: 'spin',
        frames: this.anims.generateFrameNames('cube', { prefix: 'frame', start: 0, end: 23 }),
        frameRate: 50,
        repeat: -1
    });

    // let cube = this.add.sprite(400,300,"cube");
    // cube.play('spin');
    let cube = new Phaser.GameObjects.Sprite(this,400,300,"cube");
    layer.add(cube);
    cube.play('spin');

    this.anims.create({
        key:"action",
        frames:this.anims.generateFrameNames('angelAction',{ prefix:'angelAction1000',start:0,end:12}),
        frameRate:24,
        repeat:-1
    });

    let angelAction = this.add.sprite(400,300,"angelAction");
    angelAction.play('action');
}

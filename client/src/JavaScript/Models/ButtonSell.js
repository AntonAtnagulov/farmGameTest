import ThreeMeshUI from 'three-mesh-ui'

export default function buttonSell () {
    const container = new ThreeMeshUI.Block({
        height: 40,
        width: 80,
        fontFamily: './Roboto-msdf.json',
        fontTexture: './Roboto-msdf.png',
        borderRadius: 12,
    });
    container.name = 'sellAll'

    const textBlock = new ThreeMeshUI.Block({
        height: 40,
        width: 80,
        textAlign: 'center',
        justifyContent: 'center',
        background: '#1DBAA9',
    });
    textBlock.name = 'sellAll'

    const text = new ThreeMeshUI.Text({
        content: 'SELL ALL',
        fontSize: 15,
        fontFamily: './font_regular..json',
        fontTexture: './Roboto-msdf.png',
    });

    textBlock.add( text );
    
    container.add(textBlock)
    container.position.set(300, 30, -170)
    container.rotation.x = 50*Math.PI/180;
    container.rotation.y = 20*Math.PI/180;
    container.rotation.z = 10*Math.PI/180;
    return container
}
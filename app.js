addItem = text => {
  let div = document.createElement( 'div' )
  div.innerHTML = text
  document.body.appendChild( div )
}
addItem( 'Javascript Synchronous Loop' )
let items = [ 1, 2, 3, 4, 5, 6, 7, 8 ]

runLoop = async () => {
  for ( const item of items ) {
    await new Promise( resolve => setTimeout( resolve, 1000 ) )
    addItem( item )
  }
}

runLoop()
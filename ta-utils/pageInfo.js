// mousedown, mouseup, mousemove, keydown, keyup

function commonEventLog(e, type, isLog) {
  const data = {
    type,
    // domPath: e.path,
    mousedown: {
      coord: {
        x: e.screenX??0,
        y: e.screenY??0,
        button: e.button,
      },
      dom:{
        class: e.target.className,
      },
    },
    keydown:{
      key: e.key,
    },

  }
  if (isLog) {
    console.log(data)
  }
}

function makeListener(type, callback) {
  document.addEventListener(type, callback)
}

/**
 *
 * @param eventName
 * @param storageCallback (e,eventName)=>{} || false，如果传入这个参数，那么框架会通过storageCallback将事件传入callback，请自行通过callback进行
 */
function createListener(eventName, storageCallback){
  makeListener(eventName, (e) => {
    if (typeof storageCallback === 'function') {
      storageCallback.call(this, e, eventName)
    } else {
      commonEventLog(e, eventName, storageCallback)
    }
  })
}

export {
  createListener,
}

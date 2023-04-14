if (!window['hotkeyMap']) {
    window['hotkeyMap'] = {};
}
function bindEvent(el, binding) {
    const value = binding.value;
    let selector = document;
    if (Array.isArray(value)) {
        actualBindKey(value, el);
    }
    else {
        if (value['selector']) {
            selector = value['selector'];
        }
        for (const k in value) {
            if (k === 'selector') {
                continue;
            }
            const v = value[k];
            actualBindKey(v, el);
        }
    }
    selector.onkeydown = (ev) => {
        const ctrlKey = ev.ctrlKey;
        const altKey = ev.altKey;
        const shiftKey = ev.shiftKey;
        const key = ev.key;
        let keys = '';
        if (ctrlKey) {
            keys += 'ev.ctrlKey&&';
        }
        if (altKey) {
            keys += 'ev.altKey&&';
        }
        if (shiftKey) {
            keys += 'ev.shiftKey&&';
        }
        if (key) {
            keys += `ev.key.toLowerCase() === '${key.toLowerCase()}'`;
        }
        const m = window['hotkeyMap'][keys];
        if (!m) {
            ev.stopPropagation();
            return;
        }
        const _el = m['el'];
        const _callback = m['callback'];
        if (eval(m['hotkey'])) {
            if (_callback) {
                _callback.call(null, _el, ev);
            }
            else {
                if (/msie/i.test(navigator.userAgent)) { //IE
                    _el.fireEvent('onclick');
                }
                else {
                    const e = new MouseEvent('click', {
                        bubbles: false,
                        cancelable: false,
                    });
                    _el.dispatchEvent(e);
                }
            }
        }
    };
}
function unbindEvent() {
    // do nothing
}
function actualBindKey(field, el) {
    const callback = field['callback'];
    const hotkey = field['hotkey'];
    const rel = field['el'];
    const hotkeyArr = [];
    if (hotkey.indexOf('ctrl') >= 0) {
        hotkeyArr.push('ev.ctrlKey');
    }
    if (hotkey.indexOf('alt') >= 0) {
        hotkeyArr.push('ev.altKey');
    }
    if (hotkey.indexOf('shift') >= 0) {
        hotkeyArr.push('ev.shiftKey');
    }
    hotkey.forEach(key => {
        switch (key.toLowerCase()) {
            case 'ctrl':
            case 'alt':
            case 'shift':
                break;
            default:
                hotkeyArr.push(`ev.key.toLowerCase() === '${key.toLowerCase()}'`);
                break;
        }
    });
    const hotkeyStr = hotkeyArr.join('&&');
    if (!window['hotkeyMap'][hotkeyStr]) {
        window['hotkeyMap'][hotkeyStr] = {
            el: rel !== null && rel !== void 0 ? rel : el,
            hotkey,
            callback,
        };
    }
}
const buildDirective = function () {
    return {
        bind(el, binding) {
            if (binding.value !== binding.oldValue) {
                unbindEvent();
                bindEvent(el, binding);
            }
        },
        componentUpdated(el, binding) {
            if (binding.value !== binding.oldValue) {
                unbindEvent();
                bindEvent(el, binding);
            }
        },
        unbind: unbindEvent,
    };
};
const plugin = {
    install(Vue) {
        Vue.directive('hotkey', buildDirective());
    },
    directive: buildDirective(),
};
export default plugin;

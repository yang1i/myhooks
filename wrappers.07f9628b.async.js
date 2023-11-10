(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{MZF8:function(e,t,n){"use strict";var r=n("ogwx");n.d(t,"a",(function(){return r["b"]}));n("VCU9")},OYlG:function(e,t,n){"use strict";n.r(t);var r=n("mn0l"),o=n("ahKI"),u=n.n(o),s=n("RGYn"),a=n("DBVu"),i=n("GAyR"),c=n("7JWa"),l="/**\n * title: useBoolean \u57fa\u7840\u7528\u6cd5\n * desc: \u5207\u6362 boolean\uff0c\u53ef\u4ee5\u63a5\u6536\u9ed8\u8ba4\u503c\n * */\n\nimport React from 'react'\nimport { useBoolean } from 'myHooks'\n\nexport default () => {\n    const [state, { toggle, setTrue, setFalse }] = useBoolean(true);\n\n    return (\n        <div>\n            <p>Effect: {JSON.stringify(state)}</p>\n            <p>\n                <button onClick={toggle}>Toggle</button>\n            </p>\n            <p>\n                <button onClick={setTrue}>setTrue</button>\n            </p>\n            <p>\n                <button onClick={setFalse}>setFlase</button>\n            </p>\n        </div>\n    )\n}",p="import React from 'react'\nimport useCountdown from '..'\n\nexport default () => {\n    const count = useCountdown(6000)\n    return (\n        <p>\u5012\u8ba1\u65f6: {count / 1000}</p>\n    )\n}",d="import React, { useState, useEffect, useRef, useCallback } from 'react'\n\nfunction useCountdown(initialCount: number): number {\n    const [count, setCount] = useState(initialCount)\n    const timer = useRef<number>()\n\n    const clear = useCallback(() => {\n        timer.current && window.clearTimeout(timer.current)\n    }, [])\n\n    useEffect(() => {\n        if (initialCount <= 0) return\n        let remain = initialCount\n        function handler() {\n            clear()\n            timer.current = setTimeout(() => {\n                if (remain > 0) {\n                    remain -= 1000\n                    setCount(remain)\n                    handler()\n                } else {\n                    clear()\n                }\n            }, 1000);\n        }\n        handler()\n        return () => {\n            clear()\n        }\n\n    }, [initialCount])\n\n    return count\n}\n\nexport default useCountdown",m="import React, { useState } from 'react'\nimport useDebounce from '..'\n\nexport default () => {\n    const [value, setValue] = useState<string>('')\n    const debouncedValue = useDebounce(value, 1000)\n\n    return (\n        <div>\n            <input style={{ width: 200 }} value={value} onChange={(e) => setValue(e.target.value)} />\n            <p style={{ marginTop: 20 }}>DebouncedValue: {debouncedValue}</p>\n        </div>\n    )\n}",f="import React, { useState, useEffect } from 'react'\n\nfunction useDebounce<T>(value: T, waitTime: number) {\n    const [debounced, setDebounced] = useState(value)\n\n    useEffect(() => {\n        const timer = setTimeout(() => {\n            setDebounced(value)\n        }, waitTime);\n\n        return () => clearTimeout(timer)\n    }, [value, waitTime])\n\n    return debounced\n}\n\nexport default useDebounce",b="import React, { useState, useEffect } from 'react'\nimport useLatest from '..'\n/**\n * desc: \u8fd4\u56de\u7684\u6c38\u8fdc\u662f\u6700\u65b0\u503c\n */\nexport default () => {\n    const [count, setCount] = useState(0)\n    const countRef = useLatest(count)\n\n    useEffect(() => {\n        const interval = setInterval(() => {\n            console.log('countRef', countRef.current)\n            // setCount(pre => pre + 1)\n            setCount(countRef.current + 1)\n        }, 1000)\n        return () => clearInterval(interval)\n    }, [])\n\n    return <p>count: {count}</p>\n}",h="import { useRef } from 'react'\n/**\n * @param value \u7528useRef\u4fdd\u5b58\u7684\u503c\uff0c\u53ef\u4ee5\u662f\u4efb\u610f\u503c\n * @returns \u5f53\u524d\u503c\u7684\u5f15\u7528\n */\nfunction useLatest<T>(value: T) {\n    const ref = useRef(value)\n    ref.current = value;\n    return ref\n}\nexport default useLatest",v="import React, { useState } from 'react'\nimport useThrottle from \"..\";\n\nexport default () => {\n    const [value, setValue] = useState<string>('')\n    const throttleValue = useThrottle(value, 500)\n    return (\n        <div>\n            <input value={value} onChange={(e) => setValue(e.target.value)} style={{ width: 280 }} />\n            <p style={{ marginTop: 20 }}>throttleValue: {throttleValue}</p>\n        </div>\n    )\n}",g="import { useState, useEffect, useRef } from 'react'\nimport useUnmount from '../useUnmount'\n\nfunction useThrottle<T>(value: T, waitTime: number = 1000) {\n    const [state, setState] = useState<T>(value)\n    const timeout = useRef<ReturnType<typeof setTimeout>>()\n    const nextValue = useRef<T>()\n    const isUpdating = useRef<boolean>(false)\n\n    useEffect(() => {\n        if (!timeout.current) {\n            setState(value)\n            const handler = () => {\n                if (isUpdating.current) {\n                    isUpdating.current = false\n                    setState(nextValue.current)\n                    timeout.current = setTimeout(handler, waitTime)\n                } else {\n                    timeout.current = undefined\n                }\n            }\n            timeout.current = setTimeout(handler, waitTime)\n        } else {\n            nextValue.current = value\n            isUpdating.current = true\n        }\n    }, [value])\n\n    useUnmount(() => {\n        timeout.current && clearTimeout(timeout.current)\n    })\n    return state\n}\n\nexport default useThrottle",w="import { useEffect } from 'react'\nimport useLatest from '../useLatest'\n\nfunction useUnmount(fn: () => void) {\n    const fnRef = useLatest(fn)\n\n    useEffect(() => () => {\n        fnRef.current()\n    }, [])\n}\nexport default useUnmount",x="import React from 'react'\nimport { useTitle } from 'myHooks'\n\nexport default () => {\n    useTitle('page title')\n    return (\n        <div>\n            <p>Set title of the page</p>\n        </div>\n    )\n}",O='/**\n * title: useToggle \u57fa\u7840\u7528\u6cd5\n * desc: \u5f53actions\u4e2d\u7684\u503c\u6ca1\u6709\u521d\u59cb\u5316\u65f6\uff0c\u9ed8\u8ba4\u662ffalse\n * */ \n\nimport React from \'react\';\nimport { useToggle } from \'myHooks\';\n\nexport default () => {\n    const [state, { toggle, setLeft, setRight }] = useToggle();\n    return (\n        <div>\n            <p>\u5f53\u524d state \u7684\u503c\u4e3a: {`${state}`}</p>\n            <p>\n                <button type="button" onClick={toggle}>toggle \u5207\u6362</button>\n                <button type="button" onClick={setLeft}>setLeft \u5207\u6362</button>\n                <button type="button" onClick={setRight}>setRight \u5207\u6362</button>\n            </p>\n        </div>\n    )\n}',T="/**\n * title: useToggle \u81ea\u5b9a\u4e49\u503c\u7684\u5207\u6362\n * desc: \u5f53actions\u4e2d\u7684\u503c\u6ca1\u6709\u521d\u59cb\u5316\u65f6\uff0c\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\n * */ \n\nimport React from 'react';\nimport { useToggle } from 'myHooks';\n\nexport default () => {\n    const [state, { toggle, setLeft, setRight }] = useToggle('\u663e\u793a', '\u9690\u85cf');\n    return (\n        <div>\n            <p>\u5f53\u524d state \u7684\u503c\u4e3a: {`${state}`}</p>\n            <p>\n                <button type=\"button\" onClick={toggle}>toggle \u5207\u6362</button>\n                <button type=\"button\" onClick={setLeft}>setLeft \u5207\u6362</button>\n                <button type=\"button\" onClick={setRight}>setRight \u5207\u6362</button>\n            </p>\n        </div>\n    )\n}",k="import React from 'react'\nimport { message } from 'antd'\nimport { useBoolean, useUnmount } from 'myHooks';\n\nexport default () => {\n    const [state, { toggle }] = useBoolean(true)\n    useUnmount(() => {\n        message.info('unmount')\n    })\n    return (\n        <div>\n            <button onClick={toggle}>{state ? 'unmount' : 'mount'}</button>\n            {state && <p>Hello world</p>}\n        </div>\n    )\n}",y="import React from 'react'\nimport { useUpdate } from 'myHooks'\n\nexport default () => {\n    const update = useUpdate()\n    return (\n        <>\n            <p>\u66f4\u65b0\u65f6\u95f4: {Date.now()}</p>\n            <button onClick={update}>\u66f4\u65b0</button>\n        </>\n    )\n}",j={"useboolean-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(17),n.e(3)]).then(n.bind(null,"yoie"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:l}},dependencies:{react:{version:"18.2.0"}},identifier:"useboolean-demo1"}},"usecountdown-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(17),n.e(3)]).then(n.bind(null,"x7FD"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:p},"index.ts":{import:"..",content:d}},dependencies:{react:{version:"18.2.0"}},identifier:"usecountdown-demo1"}},"usedebounce-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(17),n.e(3)]).then(n.bind(null,"eWij"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:m},"index.ts":{import:"..",content:f}},dependencies:{react:{version:"18.2.0"}},identifier:"usedebounce-demo1"}},"uselatest-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(17),n.e(3)]).then(n.bind(null,"OCTU"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:b},"index.ts":{import:"..",content:h}},dependencies:{react:{version:"18.2.0"}},identifier:"uselatest-demo1"}},"usethrottle-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(17),n.e(3)]).then(n.bind(null,"aFWa"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:v},"index.ts":{import:"..",content:g},"useUnmount/index.ts":{import:"../useUnmount",content:w},"useLatest/index.ts":{import:"..",content:h}},dependencies:{react:{version:"18.2.0"}},identifier:"usethrottle-demo1"}},"usetitle-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(17),n.e(3)]).then(n.bind(null,"dA01"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:x}},dependencies:{react:{version:"18.2.0"}},identifier:"usetitle-demo1"}},"usetoggle-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(17),n.e(3)]).then(n.bind(null,"82LI"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:O}},dependencies:{react:{version:"18.2.0"}},identifier:"usetoggle-demo1"}},"usetoggle-demo2":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(17),n.e(3)]).then(n.bind(null,"Dr+N"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:T}},dependencies:{react:{version:"18.2.0"}},identifier:"usetoggle-demo2"}},"useunmount-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(17),n.e(3)]).then(n.bind(null,"y7Gi"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:k}},dependencies:{react:{version:">=16.9.0"},antd:{version:"5.10.2"},"react-dom":{version:">=16.9.0"}},identifier:"useunmount-demo1"}},"useupdate-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(17),n.e(3)]).then(n.bind(null,"INwW"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:y}},dependencies:{react:{version:"18.2.0"}},identifier:"useupdate-demo1"}}},R=n("Zs1V"),C=n("2+/V"),S=n.n(C);t["default"]=e=>u.a.createElement(S.a,Object(r["a"])({},e,{config:s,demos:j,apis:R}))},RGYn:function(e){e.exports=JSON.parse('{"menus":{"en-US":{"*":[{"path":"/","title":"\u9996\u9875","meta":{}}],"/guide":[{"title":"\u4ecb\u7ecd","path":"/guide"}],"/hooks":[{"title":"\u751f\u547d\u5468\u671f","children":[{"path":"/hooks/use-unmount","title":"useUnmount"}]},{"title":"\u72b6\u6001","children":[{"path":"/hooks/use-toggle","title":"useToggle"},{"path":"/hooks/use-boolean","title":"useBoolean"},{"path":"/hooks/use-debounce","title":"useDebounce"},{"path":"/hooks/use-throttle","title":"useThrottle"}]},{"title":"DOM","children":[{"path":"/hooks/use-title","title":"useTitle"}]},{"title":"Effect","children":[{"path":"/hooks/use-update","title":"useUpdate"}]},{"title":"\u4e1a\u52a1","children":[{"path":"/hooks/use-countdown","title":"useCountdown"}]},{"title":"\u8fdb\u9636","children":[{"path":"/hooks/use-latest","title":"useLatest"}]}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"title":"\u6307\u5357","path":"/guide"},{"title":"Hooks","path":"/hooks"}]},"title":"myhooks","mode":"site","repository":{"url":"","branch":"master"},"theme":{},"exportStatic":{}}')},Zs1V:function(e){e.exports=JSON.parse("{}")}}]);
(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/pages/Room.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)"); //for only client side rendering
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"); // {}not export , wout curly- default export
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const ReactPlayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/node_modules/react-player/lib/index.js [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-player/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = ReactPlayer;
const Room = ()=>{
    _s();
    const [userstream, setUserstream] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const callstream = async ()=>{
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
        });
        setUserstream(stream);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReactPlayer, {
                    className: "react-player",
                    controls: true,
                    url: "https://www.youtube.com/watch?v=wtAiUJUVawg&list=RDwtAiUJUVawg&start_radio=1   "
                }, void 0, false, {
                    fileName: "[project]/src/app/pages/Room.jsx",
                    lineNumber: 18,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/pages/Room.jsx",
                lineNumber: 17,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: callstream,
                    children: "stream"
                }, void 0, false, {
                    fileName: "[project]/src/app/pages/Room.jsx",
                    lineNumber: 22,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/pages/Room.jsx",
                lineNumber: 21,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReactPlayer, {
                    className: "react-player",
                    controls: true,
                    url: userstream
                }, void 0, false, {
                    fileName: "[project]/src/app/pages/Room.jsx",
                    lineNumber: 25,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/pages/Room.jsx",
                lineNumber: 24,
                columnNumber: 6
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/pages/Room.jsx",
        lineNumber: 16,
        columnNumber: 4
    }, this);
};
_s(Room, "vdLZxm279ebxdzlWdnCDIWx2PXc=");
_c1 = Room;
const __TURBOPACK__default__export__ = Room;
var _c, _c1;
__turbopack_context__.k.register(_c, "ReactPlayer");
__turbopack_context__.k.register(_c1, "Room");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/uploadform.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const UploadForm = ()=>{
    _s();
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [author, setAuthor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleFileChange = (e)=>{
        setSelectedFile(e.target.files[0]);
    };
    const handleUpload = async ()=>{
        if (!title || !author) {
            alert('Title and Author are required fields.');
            return;
        }
        try {
            const formData = new FormData();
            formData.append('filename', selectedFile.name); //appending only filename
            const initializeRes = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('http://localhost:8080/upload/initialize', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const { uploadId } = initializeRes.data;
            console.log('Upload id is ', uploadId); //part---1
            //part---2
            const chunkSize = 5 * 1024 * 1024; // 5 MB chunks
            const totalChunks = Math.ceil(selectedFile.size / chunkSize);
            let start = 0;
            const uploadPromises = [];
            for(let chunkIndex = 0; chunkIndex < totalChunks; chunkIndex++){
                const chunk = selectedFile.slice(start, start + chunkSize);
                start += chunkSize;
                const chunkFormData = new FormData();
                chunkFormData.append('filename', selectedFile.name);
                chunkFormData.append('chunk', chunk);
                chunkFormData.append('totalChunks', totalChunks);
                chunkFormData.append('chunkIndex', chunkIndex);
                chunkFormData.append('uploadId', uploadId);
                const uploadPromise = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('http://localhost:8080/upload', chunkFormData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                uploadPromises.push(uploadPromise);
            }
            await Promise.all(uploadPromises);
            //part-----3
            const completeRes = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('http://localhost:8080/upload/complete', {
                filename: selectedFile.name,
                totalChunks: totalChunks,
                uploadId: uploadId,
                title: title,
                description: description,
                author: author
            });
            console.log(completeRes.data);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto max-w-lg p-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            encType: "multipart/form-data",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "title",
                        placeholder: "Title",
                        value: title,
                        onChange: (e)=>setTitle(e.target.value),
                        required: true,
                        className: "px-3 py-2 w-full border rounded-md focus:outline-none   focus:border-blue-500"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/uploadform.jsx",
                        lineNumber: 91,
                        columnNumber: 2
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/uploadform.jsx",
                    lineNumber: 90,
                    columnNumber: 2
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "description",
                        placeholder: "Description",
                        value: description,
                        onChange: (e)=>setDescription(e.target.value),
                        className: "px-3 py-2 w-full border rounded-md focus:outline-none   focus:border-blue-500"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/uploadform.jsx",
                        lineNumber: 101,
                        columnNumber: 2
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/uploadform.jsx",
                    lineNumber: 100,
                    columnNumber: 2
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "author",
                        placeholder: "Author",
                        value: author,
                        onChange: (e)=>setAuthor(e.target.value),
                        required: true,
                        className: "px-3 py-2 w-full border rounded-md focus:outline-none   focus:border-blue-500"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/uploadform.jsx",
                        lineNumber: 110,
                        columnNumber: 2
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/uploadform.jsx",
                    lineNumber: 109,
                    columnNumber: 2
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        name: "file",
                        onChange: handleFileChange,
                        className: "px-3 py-2 w-full border rounded-md focus:outline-none   focus:border-blue-500"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/uploadform.jsx",
                        lineNumber: 120,
                        columnNumber: 2
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/uploadform.jsx",
                    lineNumber: 119,
                    columnNumber: 2
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: handleUpload,
                    className: "text-white bg-gradient-to-br from-purple-600 to-blue-500   hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300   dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center",
                    children: "Upload"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/uploadform.jsx",
                    lineNumber: 126,
                    columnNumber: 2
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/uploadform.jsx",
            lineNumber: 89,
            columnNumber: 2
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/uploadform.jsx",
        lineNumber: 88,
        columnNumber: 2
    }, this);
};
_s(UploadForm, "QfIQN31tXPJsAkaVAs12Ja/Gcrs=");
_c = UploadForm;
const __TURBOPACK__default__export__ = UploadForm;
var _c;
__turbopack_context__.k.register(_c, "UploadForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/pages/youtubehome.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const ReactPlayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/node_modules/react-player/lib/index.js [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-player/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = ReactPlayer;
const YouTubeHome = ()=>{
    _s();
    const [videos, setVideos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "YouTubeHome.useEffect": ()=>{
            const getVideos = {
                "YouTubeHome.useEffect.getVideos": async ()=>{
                    try {
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('http://localhost:8082/watch/home');
                        console.log(res);
                        setVideos(res.data);
                        setLoading(false); // Set loading to false when videos are fetched
                    } catch (error) {
                        console.log('Error in fetching videos : ', error);
                        setLoading(false);
                    }
                }
            }["YouTubeHome.useEffect.getVideos"];
            getVideos();
        }
    }["YouTubeHome.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto flex justify-center items-center   h-screen",
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/app/pages/youtubehome.jsx",
            lineNumber: 26,
            columnNumber: 2
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   lg:grid-cols-4 xl:grid-cols-5 gap-4 m-10",
            children: videos.map((video)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border rounded-md overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReactPlayer, {
                                url: video.url,
                                width: "360px",
                                height: "180px",
                                controls: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/pages/youtubehome.jsx",
                                lineNumber: 35,
                                columnNumber: 2
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/pages/youtubehome.jsx",
                            lineNumber: 34,
                            columnNumber: 2
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-semibold   mb-2",
                                    children: video.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/youtubehome.jsx",
                                    lineNumber: 42,
                                    columnNumber: 2
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700",
                                    children: [
                                        "Author",
                                        video.author
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/pages/youtubehome.jsx",
                                    lineNumber: 44,
                                    columnNumber: 2
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700",
                                    children: video.description
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/youtubehome.jsx",
                                    lineNumber: 46,
                                    columnNumber: 2
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/pages/youtubehome.jsx",
                            lineNumber: 41,
                            columnNumber: 2
                        }, this)
                    ]
                }, video.id, true, {
                    fileName: "[project]/src/app/pages/youtubehome.jsx",
                    lineNumber: 32,
                    columnNumber: 2
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/app/pages/youtubehome.jsx",
            lineNumber: 29,
            columnNumber: 2
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/pages/youtubehome.jsx",
        lineNumber: 24,
        columnNumber: 2
    }, this);
};
_s(YouTubeHome, "PSjXGNrNjip6pTLeZjdJtTN37Qw=");
_c1 = YouTubeHome;
const __TURBOPACK__default__export__ = YouTubeHome;
var _c, _c1;
__turbopack_context__.k.register(_c, "ReactPlayer");
__turbopack_context__.k.register(_c1, "YouTubeHome");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_a5c92e1a._.js.map
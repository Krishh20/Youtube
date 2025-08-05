(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/upload/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
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
    const { data } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UploadForm.useEffect": ()=>{
            console.log('data-------', data);
            if (!data) {
                console.log('redirecting');
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redirect"])("/");
            }
        }
    }["UploadForm.useEffect"], []);
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
                        fileName: "[project]/src/app/upload/page.jsx",
                        lineNumber: 104,
                        columnNumber: 2
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/upload/page.jsx",
                    lineNumber: 103,
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
                        fileName: "[project]/src/app/upload/page.jsx",
                        lineNumber: 114,
                        columnNumber: 2
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/upload/page.jsx",
                    lineNumber: 113,
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
                        fileName: "[project]/src/app/upload/page.jsx",
                        lineNumber: 123,
                        columnNumber: 2
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/upload/page.jsx",
                    lineNumber: 122,
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
                        fileName: "[project]/src/app/upload/page.jsx",
                        lineNumber: 133,
                        columnNumber: 2
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/upload/page.jsx",
                    lineNumber: 132,
                    columnNumber: 2
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: handleUpload,
                    className: "text-white bg-gradient-to-br from-purple-600 to-blue-500   hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300   dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center",
                    children: "Upload"
                }, void 0, false, {
                    fileName: "[project]/src/app/upload/page.jsx",
                    lineNumber: 139,
                    columnNumber: 2
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/upload/page.jsx",
            lineNumber: 102,
            columnNumber: 2
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/upload/page.jsx",
        lineNumber: 101,
        columnNumber: 2
    }, this);
};
_s(UploadForm, "Tb6dOmFIQtZAI/ZPTHdp4faGCog=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = UploadForm;
const __TURBOPACK__default__export__ = UploadForm;
var _c;
__turbopack_context__.k.register(_c, "UploadForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_71fcb285._.js.map
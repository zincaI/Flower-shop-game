import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps, useNavigate } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Dialog, Tooltip } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useState } from "react";
// \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
// node_modules/@react-router/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = /* @__PURE__ */ __exportAll({
	default: () => handleRequest,
	streamTimeout: () => streamTimeout
});
var streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
	if (request.method.toUpperCase() === "HEAD") return new Response(null, {
		status: responseStatusCode,
		headers: responseHeaders
	});
	return new Promise((resolve, reject) => {
		let shellRendered = false;
		let userAgent = request.headers.get("user-agent");
		let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
		let timeoutId = setTimeout(() => abort(), 6e3);
		const { pipe, abort } = renderToPipeableStream(/* @__PURE__ */ jsx(ServerRouter, {
			context: routerContext,
			url: request.url
		}), {
			[readyOption]() {
				shellRendered = true;
				const body = new PassThrough({ final(callback) {
					clearTimeout(timeoutId);
					timeoutId = void 0;
					callback();
				} });
				const stream = createReadableStreamFromReadable(body);
				responseHeaders.set("Content-Type", "text/html");
				pipe(body);
				resolve(new Response(stream, {
					headers: responseHeaders,
					status: responseStatusCode
				}));
			},
			onShellError(error) {
				reject(error);
			},
			onError(error) {
				responseStatusCode = 500;
				if (shellRendered) console.error(error);
			}
		});
	});
}
// app/root.tsx
var root_exports = /* @__PURE__ */ __exportAll({ default: () => root_default });
var root_default = UNSAFE_withComponentProps(function App() {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsxs("head", { children: [
			/* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
			/* @__PURE__ */ jsx("meta", {
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			}),
			/* @__PURE__ */ jsx(Meta, {}),
			/* @__PURE__ */ jsx(Links, {})
		] }), /* @__PURE__ */ jsxs("body", { children: [
			/* @__PURE__ */ jsx(Outlet, {}),
			/* @__PURE__ */ jsx(ScrollRestoration, {}),
			/* @__PURE__ */ jsx(Scripts, {})
		] })]
	});
});
// src/components/Button.tsx
function Button({ ...props }) {
	return /* @__PURE__ */ jsx("button", {
		className: "open-button open-button--hover open-button--active",
		...props
	});
}
// src/components/StartMenu.tsx
function StartMenu() {
	const navigate = useNavigate();
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsx("h1", { children: "Welcome to the Flower Shop Game!" }),
		/* @__PURE__ */ jsx("p", { children: "Click the button below to start your flower shop adventure." }),
		/* @__PURE__ */ jsxs("div", {
			className: "button-container",
			children: [/* @__PURE__ */ jsx(Button, {
				onClick: () => {
					navigate("/level");
				},
				children: "Start Game"
			}), /* @__PURE__ */ jsx(Button, { children: "Stats" })]
		})
	] });
}
// src/pages/StartPage.tsx
var StartPage_exports = /* @__PURE__ */ __exportAll({ default: () => StartPage_default });
function StartPage() {
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", {
		className: "background",
		children: /* @__PURE__ */ jsx(StartMenu, {})
	}) });
}
var StartPage_default = UNSAFE_withComponentProps(StartPage);
// src/components/Modal.tsx
function Modal({ open, onOpenChange }) {
	return /* @__PURE__ */ jsx(Dialog.Root, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ jsxs(Dialog.Portal, { children: [/* @__PURE__ */ jsx(Dialog.Overlay, { className: "modal-overlay" }), /* @__PURE__ */ jsxs(Dialog.Content, {
			className: "modal",
			children: [
				/* @__PURE__ */ jsx(Dialog.Title, { children: "Edit profile" }),
				/* @__PURE__ */ jsx(Dialog.Description, { children: "Make changes to your profile here. Click save when you're done." }),
				/* @__PURE__ */ jsx(Dialog.Close, {
					asChild: true,
					children: /* @__PURE__ */ jsx("button", {
						type: "button",
						"aria-label": "Close",
						children: /* @__PURE__ */ jsx(Cross2Icon, {})
					})
				})
			]
		})] })
	});
}
// src/components/Tooltip.tsx
function TooltipComponent({ message, children }) {
	return /* @__PURE__ */ jsx(Tooltip.Provider, { children: /* @__PURE__ */ jsxs(Tooltip.Root, { children: [/* @__PURE__ */ jsx(Tooltip.Trigger, {
		asChild: true,
		children: /* @__PURE__ */ jsx("div", { children })
	}), /* @__PURE__ */ jsx(Tooltip.Portal, { children: /* @__PURE__ */ jsx(Tooltip.Content, {
		className: "game-tooltip",
		children: message
	}) })] }) });
}
// src/pages/Level.tsx
var Level_exports = /* @__PURE__ */ __exportAll({ default: () => Level_default });
var Level_default = UNSAFE_withComponentProps(function Level() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
		className: "level-scene",
		children: [/* @__PURE__ */ jsx("div", { className: "sky" }), /* @__PURE__ */ jsxs("div", {
			className: "table",
			children: [
				/* @__PURE__ */ jsx(TooltipComponent, {
					message: "Packaging. Press to adjust the ribbon and wrapping paper of the bouquet",
					children: /* @__PURE__ */ jsx("button", {
						className: "packaging button",
						onClick: () => setIsModalOpen(true)
					})
				}),
				/* @__PURE__ */ jsx(TooltipComponent, {
					message: "Mat. Press it to reveal the current state of the bouquet",
					children: /* @__PURE__ */ jsx("button", {
						className: "mat button",
						onClick: () => {}
					})
				}),
				/* @__PURE__ */ jsx(TooltipComponent, {
					message: "Flowers. Press to select flowers for the bouquet.",
					children: /* @__PURE__ */ jsx("button", {
						className: "flowers button",
						onClick: () => {}
					})
				})
			]
		})]
	}), /* @__PURE__ */ jsx(Modal, {
		open: isModalOpen,
		onOpenChange: setIsModalOpen
	})] });
});
// \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/assets/entry.client-HXEjesij.js",
		"imports": ["/assets/jsx-runtime-Dsii5NYo.js", "/assets/react-dom-B7BvYYFE.js"],
		"css": []
	},
	"routes": {
		"root": {
			"id": "root",
			"parentId": void 0,
			"path": "",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/root-D7pbakLE.js",
			"imports": ["/assets/jsx-runtime-Dsii5NYo.js", "/assets/react-dom-B7BvYYFE.js"],
			"css": ["/assets/root-C4jab27M.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"../src/pages/StartPage": {
			"id": "../src/pages/StartPage",
			"parentId": "root",
			"path": "/",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/StartPage-CuH_Nn2m.js",
			"imports": ["/assets/jsx-runtime-Dsii5NYo.js"],
			"css": ["/assets/StartPage-D9W8rw3H.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"../src/pages/Level": {
			"id": "../src/pages/Level",
			"parentId": "root",
			"path": "/level",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/Level-Bc2ijezl.js",
			"imports": ["/assets/jsx-runtime-Dsii5NYo.js", "/assets/react-dom-B7BvYYFE.js"],
			"css": ["/assets/Level-DziSXv4Q.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-3e744b91.js",
	"version": "3e744b91",
	"sri": void 0
};
// \0virtual:react-router/server-build
var assetsBuildDirectory = "build\\client";
var basename = "/";
var future = {
	"unstable_customRouteDiscovery": false,
	"unstable_enableNodeReadableStream": false,
	"unstable_optimizeDeps": false
};
var ssr = true;
var unstable_apiOnly = false;
var unstable_apiServerOrigin = void 0;
var isSpaMode = false;
var prerender = [];
var routeDiscovery = {
	"mode": "lazy",
	"manifestPath": "/__manifest"
};
var publicPath = "/";
var entry = { module: entry_server_node_exports };
var routes = {
	"root": {
		id: "root",
		parentId: void 0,
		path: "",
		index: void 0,
		caseSensitive: void 0,
		module: root_exports
	},
	"../src/pages/StartPage": {
		id: "../src/pages/StartPage",
		parentId: "root",
		path: "/",
		index: void 0,
		caseSensitive: void 0,
		module: StartPage_exports
	},
	"../src/pages/Level": {
		id: "../src/pages/Level",
		parentId: "root",
		path: "/level",
		index: void 0,
		caseSensitive: void 0,
		module: Level_exports
	}
};
var allowedActionOrigins = false;
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr, unstable_apiOnly, unstable_apiServerOrigin };

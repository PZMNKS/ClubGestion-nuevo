import { Toaster, toast as sonnerToast, useSonner } from "sonner";
import { Button } from "@/components/ui/button";
import type { ErrorComponentProps } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Página no encontrada
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Esta página no existe o cambió de ubicación.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          No pudimos cargar esta página
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Intenta nuevamente o vuelve al inicio.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-primary/90"
          >
            Intentar nuevamente
          </Button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
}

export const MOBILE_VIEWPORT_SYNC_SCRIPT = `(function(){try{var d=document.documentElement;var applying=false;var latchedZoomedMobile=false;function detectPhone(w){var ua=navigator.userAgent||"";var uaDataMobile=Boolean(navigator.userAgentData&&navigator.userAgentData.mobile);if(uaDataMobile||/Android.*Mobile|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone|Mobile.*Firefox|CriOS|FxiOS|SamsungBrowser.*Mobile/i.test(ua)){return true;}var hasTouch=Boolean((navigator.maxTouchPoints&&navigator.maxTouchPoints>0)||"ontouchstart" in window);if(!hasTouch){return false;}var sw=window.screen&&window.screen.width?window.screen.width:0;var sh=window.screen&&window.screen.height?window.screen.height:0;var minScreen=sw>0&&sh>0?Math.min(sw,sh):0;if(minScreen>0&&minScreen<=560){return true;}var ow=window.outerWidth||0;var oh=window.outerHeight||0;var minOuter=ow>0&&oh>0?Math.min(ow,oh):ow;if(minOuter>0&&minOuter<=560){return true;}var hasMobileOrientation=typeof window.orientation!=="undefined";var coarsePrimary=typeof window.matchMedia==="function"&&window.matchMedia("(pointer: coarse)").matches;var noPrimaryHover=typeof window.matchMedia==="function"&&window.matchMedia("(hover: none)").matches;var vvScale=window.visualViewport&&window.visualViewport.scale?window.visualViewport.scale:1;if((hasMobileOrientation||(coarsePrimary&&noPrimaryHover))&&vvScale>0&&vvScale<0.9){latchedZoomedMobile=true;}if(latchedZoomedMobile){return true;}if(/Macintosh|MacIntel/i.test(ua)&&navigator.maxTouchPoints>1&&(minScreen===0||minScreen<700)){return true;}if(hasMobileOrientation&&coarsePrimary&&(minScreen===0||minScreen<=600||minOuter<=600||Math.abs(w-980)<=40)){return true;}return false;}function detectLandscape(w,h){if(window.screen&&window.screen.orientation&&typeof window.screen.orientation.type==="string"){return window.screen.orientation.type.indexOf("landscape")===0;}if(typeof window.orientation==="number"){return Math.abs(window.orientation)===90;}var sw=window.screen&&window.screen.width?window.screen.width:0;var sh=window.screen&&window.screen.height?window.screen.height:0;if(sw>0&&sh>0&&sw!==sh){return sw>sh;}return w>h*1.15;}function sync(){if(applying){return;}applying=true;try{var w=d.clientWidth||window.innerWidth||0;var h=window.innerHeight||d.clientHeight||0;if(w<=0){return;}var isPhone=detectPhone(w);var isLandscape=detectLandscape(w,h);var orient=isLandscape?"landscape":"portrait";if(isPhone){if(d.getAttribute("data-mobile-device")!=="true"){d.setAttribute("data-mobile-device","true");}if(d.getAttribute("data-mobile-orientation")!==orient){d.setAttribute("data-mobile-orientation",orient);}}else{d.removeAttribute("data-mobile-device");d.removeAttribute("data-mobile-orientation");}var refSpan=isLandscape?h:w;if(isPhone&&refSpan>=480){var s=Math.min(Math.max(refSpan/390,1),5);var px=(16*s).toFixed(2)+"px";var sStr=s.toFixed(4);if(d.style.fontSize!==px){d.style.fontSize=px;}if(d.style.getPropertyValue("--mobile-root-font-size")!==px){d.style.setProperty("--mobile-root-font-size",px);}if(d.style.getPropertyValue("--mobile-forced-scale")!==sStr){d.style.setProperty("--mobile-forced-scale",sStr);}if(d.getAttribute("data-mobile-forced-viewport")!=="true"){d.setAttribute("data-mobile-forced-viewport","true");}}else if(d.hasAttribute("data-mobile-forced-viewport")){d.style.fontSize="";d.style.removeProperty("--mobile-root-font-size");d.style.removeProperty("--mobile-forced-scale");d.removeAttribute("data-mobile-forced-viewport");}}finally{applying=false;}}window.__syncMobileViewport=sync;sync();window.addEventListener("resize",sync,{passive:true});window.addEventListener("orientationchange",sync,{passive:true});window.addEventListener("pageshow",sync,{passive:true});window.addEventListener("load",sync,{passive:true});document.addEventListener("DOMContentLoaded",sync,{passive:true});if(window.visualViewport){window.visualViewport.addEventListener("resize",sync,{passive:true});}if(typeof ResizeObserver==="function"){new ResizeObserver(sync).observe(d);}if(typeof MutationObserver==="function"){new MutationObserver(function(){if(!applying){sync();}}).observe(d,{attributes:true,attributeFilter:["style","data-mobile-forced-viewport","data-mobile-device","data-mobile-orientation"]});}}catch(e){}})();`;

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
        { name: "HandheldFriendly", content: "true" },
        { name: "MobileOptimized", content: "width" },
        { name: "theme-color", content: "#f6f7fb" },
        { title: "Club Conecta Chile" },
        {
          name: "description",
          content:
            "Plataforma de gestión comunitaria y deportiva para socios, jugadores y dirigentes.",
        },
        {
          property: "og:title",
          content: "Club Conecta Chile",
        },
        {
          property: "og:description",
          content:
            "Plataforma de gestión comunitaria y deportiva para socios, jugadores y dirigentes.",
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:title",
          content: "Club Conecta Chile",
        },
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
        },
      ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  },
);

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{let f=window.fetch;Object.defineProperty(window,'fetch',{get(){return f},set(v){f=v},configurable:true,enumerable:true})}catch(e){}})();${MOBILE_VIEWPORT_SYNC_SCRIPT}`,
          }}
        />
        <HeadContent />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function MobileViewportGuard() {
  const router = useRouter();

  useEffect(() => {
    const runSync = () => {
      const win = window as Window & { __syncMobileViewport?: () => void };
      win.__syncMobileViewport?.();
    };
    runSync();
    const unsub = router.subscribe("onResolved", runSync);
    return () => {
      unsub();
    };
  }, [router]);

  return null;
}

function SingleToastGuard() {
  const { toasts } = useSonner();

  useEffect(() => {
    if (toasts.length > 1) {
      toasts.slice(1).forEach((t) => {
        sonnerToast.dismiss(t.id);
      });
    }
  }, [toasts]);

  return null;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /><Toaster position="top-center" richColors closeButton /> breaks all child routes. */}
      <Outlet />
      <MobileViewportGuard />
      <SingleToastGuard />
      <Toaster position="top-center" richColors closeButton visibleToasts={1} />
    </QueryClientProvider>
  );
}

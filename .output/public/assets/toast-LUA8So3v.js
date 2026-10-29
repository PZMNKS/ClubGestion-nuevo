import { u as e } from "./index-D8svfn-J.js";
function t() {
  e.dismiss();
}
var n = Object.assign((n, r) => (t(), e(n, r)), {
  success: (n, r) => (t(), e.success(n, r)),
  info: (n, r) => (t(), e.info(n, r)),
  warning: (n, r) => (t(), e.warning(n, r)),
  error: (n, r) => (t(), e.error(n, r)),
  loading: (n, r) => (t(), e.loading(n, r)),
  message: (n, r) => (t(), e.message(n, r)),
  custom: (n, r) => (t(), e.custom(n, r)),
  promise: (...n) => (t(), e.promise(...n)),
  dismiss: e.dismiss,
  getHistory: e.getHistory,
  getToasts: e.getToasts,
});
export { n as t };

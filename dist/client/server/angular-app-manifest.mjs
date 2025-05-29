
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/products"
  },
  {
    "renderMode": 2,
    "route": "/categories/family"
  },
  {
    "renderMode": 2,
    "route": "/categories/family/product"
  },
  {
    "renderMode": 2,
    "route": "/admin"
  },
  {
    "renderMode": 2,
    "route": "/admin/login"
  },
  {
    "renderMode": 2,
    "route": "/admin/edit"
  },
  {
    "renderMode": 2,
    "route": "/admin/add"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 33307, hash: '6f99ca998db468b2ee62c717c0c4b2fd072c1794aa294b0cb32f245bc4c8926e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 33664, hash: '23705f08c4c6f97bc6f586cd507e446f1403a1d75e5c35ce4263cfaba4d4bcbf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'products/index.html': {size: 46139, hash: 'ee41ac0f0db1ed0c1b83483de736ac8ec6c062731cae2dc9860dbf561db3fc0d', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'categories/family/index.html': {size: 47211, hash: '95d4a0d41f90fc1b2038a5f0bd554608eb9ade35c1216ffb311f3ed24cde903a', text: () => import('./assets-chunks/categories_family_index_html.mjs').then(m => m.default)},
    'index.html': {size: 49310, hash: '058e42c54ad49413807b580501ed48964031c04c8f0567657588112fbadc6f91', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'admin/index.html': {size: 45957, hash: 'aff9a2a6c209876cd35ae60389252d129adb7ac654c9e99c74a9d3e978d3da3a', text: () => import('./assets-chunks/admin_index_html.mjs').then(m => m.default)},
    'admin/login/index.html': {size: 40711, hash: '8332188cab175ec67e8e823f6adc2074b84d33ab681260efd6b8a52a5093f3a3', text: () => import('./assets-chunks/admin_login_index_html.mjs').then(m => m.default)},
    'categories/family/product/index.html': {size: 44720, hash: 'c700d8088d672eadd52b8b1cf132272b5a3303835498d0f53adfb900f30f2eac', text: () => import('./assets-chunks/categories_family_product_index_html.mjs').then(m => m.default)},
    'admin/edit/index.html': {size: 47795, hash: '800f9dfd59a74a1dc6eea6a2b4412dfee06706f903dd9434bea19b8c08eac8d3', text: () => import('./assets-chunks/admin_edit_index_html.mjs').then(m => m.default)},
    'admin/add/index.html': {size: 47488, hash: '5b3c27629bbe6ae475cfb5f89e5ac6fc43a8a08377e2d5e3ce98d915206746f3', text: () => import('./assets-chunks/admin_add_index_html.mjs').then(m => m.default)},
    'styles-G2ZM6ZGO.css': {size: 947, hash: 'eLwMuaXZmUo', text: () => import('./assets-chunks/styles-G2ZM6ZGO_css.mjs').then(m => m.default)}
  },
};

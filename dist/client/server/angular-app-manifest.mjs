
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
    'index.csr.html': {size: 33307, hash: '81001f98190109697bb4338482f72e03927dbe2f198a1564f6e2c5b4a0b395cd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 33664, hash: 'f7c01e4b3314fc71d9fcaa9f7f6ef572cfa3c5e07a64fd78836d639c4843db1e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 50634, hash: '3f3d3c6a3c42e4859f8d81b385afe9b81b9adba521ab083a130dc71a38abad7c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 47993, hash: '2b1dfbd2eb3b616a9e0f728404841255e8a4273dec0ff235866e4fd820bf54c3', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'admin/index.html': {size: 47526, hash: '169481df83f62ed233cfb2052fd3bb09652fdb340b6082fba2a4d3c060e3de06', text: () => import('./assets-chunks/admin_index_html.mjs').then(m => m.default)},
    'admin/login/index.html': {size: 41253, hash: 'b4fe54fba50ef124d16acc5c559da3e347c89e422e887e5feae0df2a390955f8', text: () => import('./assets-chunks/admin_login_index_html.mjs').then(m => m.default)},
    'categories/family/index.html': {size: 48989, hash: '886fd2a404ccab57e8a70f20c4864a4f0b2a6459362c4df8669a90805dbb6386', text: () => import('./assets-chunks/categories_family_index_html.mjs').then(m => m.default)},
    'categories/family/product/index.html': {size: 45315, hash: '7725fcc3c12f9a01b6c67c05d47fe85409533c048207297efc65cd407b734e66', text: () => import('./assets-chunks/categories_family_product_index_html.mjs').then(m => m.default)},
    'admin/edit/index.html': {size: 48351, hash: '5c54e09cef382174d87eaecb19960ab4daf245d6f11fe2d6503402871ed5d6bf', text: () => import('./assets-chunks/admin_edit_index_html.mjs').then(m => m.default)},
    'admin/add/index.html': {size: 48044, hash: '4d959a001c1ba02586ee8a5b041b94890d58f92b555f026c9a0e4478b67db10b', text: () => import('./assets-chunks/admin_add_index_html.mjs').then(m => m.default)},
    'styles-75JESERN.css': {size: 1052, hash: 'Yr8vGE0rrLQ', text: () => import('./assets-chunks/styles-75JESERN_css.mjs').then(m => m.default)}
  },
};

// hook demo
export default (enforce?: 'pre' | 'post') => {
    return {
        name: 'hook-plugin',
        enforce,
        buildStart() {
            console.log('buildStart', enforce)
        },
        resolveId() {
            console.log('buildStart', enforce)
        }
        // configResolved(config) {
        //     console.log('configResolved', config.root)
        // },
        // configureServer(server) {
        //     console.log('configureServer', server.config.root)
        // },
        // transform(code, id) {
        //     console.log('transform', id)
        //     return code
        // },
        // transformIndexHtml(html) {}
    }
}

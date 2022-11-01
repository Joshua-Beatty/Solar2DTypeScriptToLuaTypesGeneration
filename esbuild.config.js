const esbuild = require('esbuild')
const rimraf = require('rimraf')
// Automatically exclude all node_modules from the bundled version
const { nodeExternalsPlugin } = require('esbuild-node-externals')
console.time('⚡ build');
rimraf('./lib/', () => {
    esbuild.build({
        entryPoints: ['./src/index.ts'],
        outfile: 'lib/index.js',
        bundle: true,
        minify: true,
        platform: 'node',
        sourcemap: true,
        target: 'node16',
        plugins: [nodeExternalsPlugin()]
    }).catch(() => process.exit(1)).then(() => {
        console.timeEnd('⚡ build');
        console.log()
    });
})
module.exports = (grunt) ->
    grunt.initConfig
        pkg: grunt.file.readJSON('package.json')
        less:
            dev:
                paths: ['site/themes/automato/static/less']
                src: ['site/themes/automato/static/less/styles.less']
                dest: 'site/static/css/style.css'
            dist:
                paths: ['site/themes/automato/static/less']
                src: ['site/themes/automato/static/less/styles.less']
                dest: 'site/static/css/style.min.css'
                options:
                    plugins: [
                        new (require 'less-plugin-autoprefix') browsers: ['> 0.1%']
                        new (require 'less-plugin-clean-css') {}
                    ]
        coffee:
            options:
                join: true             # Concatenate before, not after compilation.
                sourceMap: true        # Make a source map.
                sourceRoot: '/coffee/' # URL debugger should use to download .coffee files.
                inline: true           # Embed coffee source inside the source map.
            build:
                src: 'coffee/mysite.coffee'
                dest: 'site/static/js/mysite.js'
        uglify:
            options:
                sourceMap: true
                sourceMapIn: 'site/static/js/mysite.js.map'
            dist:
                src: 'site/static/js/mysite.js'
                dest: 'site/static/js/mysite.min.js'
        copy:
            # This task is not required if `inline` source maps are used.
            coffee:
                src: 'coffee/*'
                dest: 'site/static/'
        responsive_images:
            process:
                options:
                    engine: 'im'
                    separator: '_'
                    tryAnimated: true
                    sizes: [
                        # Copy the source.
                        { rename: false, width: '100%', height: '100%' }
                        # different sizes for non cropped images
                        #{ name: '2000', width: 2000 }
                        { name: '1024', width: 1024 }
                        { name: '768', width: 768 }
                        { name: '480', width: 768 }

                        #{ name: 'wide', width: 1024, height :300, aspectRatio:false }
                        #{ name: 'thumb', width: 200, height :200, aspectRatio:false }



                    ]
                files: [
                    expand: true
                    cwd: 'img'
                    src: '**/*.{gif,jpg,jpeg,png,svg}'
                    dest: 'site/static/img'
                ]



        svg_sprite        : {
            dist          : {
                expand    : true,
                cwd       : 'site/themes/automato/static/svg/',
                src       : '**/*.svg',
                dest      : 'site/themes/automato/static/',
                options   : "mode": {
                  "symbol": true,
                  "log": "verbose",
                  "inline": true,
                }
            }
        }

        watch:
            options:
                atBegin: true
                livereload: true
            less:
                files: ['site/themes/automato/static/less/*.less']
                tasks: 'less:dev'
            coffee:
                files: ['coffee/*.coffee']
                tasks: ['coffee', 'copy:coffee']
            images:
                files: ['img/**']
                tasks: 'responsive_images'
            hugo:
                files: ['site/**']
                tasks: 'hugo:dev'
            all:
                files: ['Gruntfile.coffee']
                tasks: 'dev'
        connect:
            mysite:
                options:
                    hostname: '127.0.0.1'
                    port: 8080
                    protocol: 'http'
                    base: 'build/dev'
                    livereload: true
        'gh-pages': {
            options: {
                base: 'build/dist'
            },
            src: ['**']
        }
        'favicons': {
          options: {
            html: 'site/themes/automato/layouts/partials/favicon.html',
            HTMLPrefix: "{{.Site.BaseURL}}assets/favicons/",
            tileBlackWhite:false,
            appleTouchBackgroundColor:"none",
            trueColor: true,
            precomposed: true,
          },
          icons: {
            src: 'site/themes/automato/static/assets/favicon.png',
            dest: 'site/themes/automato/static/assets/favicons'
          },
        }

    grunt.registerTask 'hugo', (target) ->
        done = @async()
        args = ['--source=site', "--destination=../build/#{target}"]
        if target == 'dev'
            args.push '--baseUrl=http://127.0.0.1:8080'
            args.push '--buildDrafts=false'
            args.push '--buildFuture=false'
        hugo = require('child_process').spawn 'hugo', args, stdio: 'inherit'
        (hugo.on e, -> done(true)) for e in ['exit', 'error']

    grunt.loadNpmTasks plugin for plugin in [
        'grunt-contrib-coffee'
        'grunt-contrib-uglify'
        'grunt-contrib-copy'
        'grunt-contrib-less'
        'grunt-contrib-watch'
        'grunt-contrib-connect'
        'grunt-responsive-images'
        'grunt-svg-sprite'
        'grunt-gh-pages'
        'grunt-favicons'
    ]
    grunt.registerTask 'dev', ['less:dev', 'coffee', 'copy:coffee', 'svg_sprite','responsive_images', 'hugo:dev']
    grunt.registerTask 'default', ['less:dist', 'coffee', 'copy:coffee', 'uglify','svg_sprite', 'responsive_images','hugo:dist']
    grunt.registerTask 'edit', ['connect', 'watch']
    grunt.registerTask 'deploy', ['gh-pages']
    grunt.registerTask 'favicon', ['favicons']

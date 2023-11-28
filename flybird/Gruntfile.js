/*global module:false*/
module.exports = function(grunt) {
    var sourceFiles = [
        '/clumsy-bird-master/js/game.js',
        '/clumsy-bird-master/js/entities/entities.js',
        '/clumsy-bird-master/js/entities/HUD.js',
        '/clumsy-bird-master/js/screens/title.js',
        '/clumsy-bird-master/js/screens/play.js',
        '/clumsy-bird-master/js/screens/gameover.js',
    ];

    // Project configuration.
    grunt.initConfig({
        uglify: {
            options: {
                report: 'min',
                preserveComments: 'some'
            },
            dist: {
                files: {
                    '/clumsy-bird-master/build/clumsy-min.js': [
                        sourceFiles
                    ]
                }
            }
        },

        jshint: {
            options: {
                jshintrc: ".jshintrc"
            },

            beforeConcat: {
                files: {
                    src: sourceFiles
                }
            },

            afterConcat: {
                files: {
                    src: [ sourceFiles ]
                }
            }
        },

        connect : {
            root : {
                options : {
                    port : process.env.PORT || 8001,
                    keepalive : true,
                    host: '*'
                }
            }
        },

        clean: {
            dist: [
                '/clumsy-bird-master/build/clumsy-min.js'
            ],
        },

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks("grunt-contrib-connect");


    // Default task.
    grunt.registerTask('default', ['uglify']);
    grunt.registerTask('lint', ['jshint:beforeConcat', 'concat', 'jshint:afterConcat']);
};

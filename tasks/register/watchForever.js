module.exports = function(grunt){
  grunt.registerTask('start', [
    'compileAssets',
    'linkAssetsBuild',
    'clean:build',
    'copy:build',
    'forever:server:start'
  ]);
  //restart server and wait for changes
  grunt.registerTask('startWatch',[
    'restart',
    'watch:server'
  ]);

  grunt.registerTask('restart', [
    'forever:server:restart'
  ]);

  grunt.registerTask('stop', [
    'forever:server:stop'
  ]);
};

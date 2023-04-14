const gulp = require('gulp')
const ts = require('gulp-typescript')
const replace = require('gulp-replace')

const fs = require('fs')
const path = require('path')

const tsProject = ts.createProject('tsconfig.json')

gulp.task('buildTs', () => {
  return gulp.src('./func/**/*.ts')
    .pipe(tsProject())
    .pipe(gulp.dest('./func'))
})

gulp.task('mvJs', () => {
  return gulp.src('./func/**/*.js')
    // .pipe(babel(babelConfig))
    .pipe(replace('../package.json', './package.json'))
    .pipe(gulp.dest('.'))
})

gulp.task('mvLodash', () => {
  return gulp.src('./lodash/**/*.js')
    // .pipe(babel(babelConfig))
    .pipe(gulp.dest('./lib/'))
})

gulp.task('mvDts',()=>{
  return gulp.src('./func/**/*.d.ts')
    .pipe(gulp.dest('.'))
})

const whiteFile = ['gulpfile.js', '.eslintrc.js', 'package.json', 'tsconfig.json', 'babel.config.js', 'vue.config.js']
gulp.task('clean',async ()=>{
  let files = fs.readdirSync(path.resolve(__dirname,'.'))
  files.forEach(file=>{
    if (whiteFile.indexOf(file)>=0) {
      return
    }
    if (file.indexOf('.js') > 0 || file.indexOf('.d.ts') > 0) {
      fs.unlinkSync(path.resolve(__dirname,'./',file))
    }
  })
  try {
    fs.rmdirSync(path.resolve(__dirname,'./internal'),{force:true,recursive:true})
    fs.rmdirSync(path.resolve(__dirname,'./encryption'),{force:true,recursive:true})
    fs.rmdirSync(path.resolve(__dirname,'./async-validator'),{force:true,recursive:true})
    fs.rmdirSync(path.resolve(__dirname,'./crypto'),{force:true,recursive:true})
    fs.rmdirSync(path.resolve(__dirname,'./validator'),{force:true,recursive:true})
  } catch (e) {
    // do nothing
  }
  cleanFunc()
  await void 0
})

gulp.task('build', gulp.series('clean', 'buildTs', 'mvJs', 'mvDts'))


function cleanFunc () {
  const files = fs.readdirSync(path.resolve(__dirname,'./func'))
  //
  files.forEach(file=>{
    if (fs.statSync(path.resolve(__dirname, './func/' + file)).isDirectory()) {
      return
    }
    if (file.endsWith('.ts') && !file.endsWith('.d.ts')) {
      // console.log(file.replace('.ts','.js'))
      try {
        fs.rmSync(path.resolve(__dirname,'./func/'+file.replace('.ts','.js')))
      } catch (e) {
      }
      try {
        fs.rmSync(path.resolve(__dirname,'./func/'+file.replace('.ts','.d.ts')))
      }catch (e) {
      }
    }
    try {
      fs.rmSync(path.resolve(__dirname,'./func/validator/index.d.ts'))
    }catch (e) {
    }
    try {
      fs.rmSync(path.resolve(__dirname,'./func/validator/index.js'))
    }catch (e) {
    }
  })
}

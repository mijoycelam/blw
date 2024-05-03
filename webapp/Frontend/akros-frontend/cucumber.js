module.exports = {
  default: '--require src/app/e2eTest/step/**/*.js --require src/app/e2eTest/support/**/*.js src/app/e2eTest/features/*.feature --format json:report.json'
}

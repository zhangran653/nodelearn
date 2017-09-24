// 模块内部的私有空间

function $require(id) {
  //1.先找到文件，如果文件不存在
  const fs = require('fs');
  const path  = require('path')
  const filename = path.join(__dirname,id);
  const dirname = path.dirname(filename);
  //2.读取文件内容，内容是js代码
  let code = fs.readFileSync(filename, 'utf8');

  //3.执行代码
  let module = {id: filename, exports: {}};
  let exports = module.exports;
  code = `(function($require,module,exports,__dirname,__filename){
    ${code}
  })($require,module,exports,dirname,filename)`;
  eval(code);


  //4.返回值
  return module.exports;
}

const m3  = $require('./m3.js');
m3.say('asdfa');
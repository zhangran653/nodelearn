// module对象
const fs = require('fs');

//console.log(m);
var area = [];

fs.readFile('/Users/zhangran/Downloads/district.txt', 'utf8', function (err, data) {
    var lines = data.split('\n');

    for (var line of lines) {
        if (line.indexOf(' ') != 0) {//省
            let code_name = line.trim().replace(/\s+/g, ' ').split(' ');
            let code = code_name[0];
            let name = code_name[1];
            let province = {
                'code': code,
                'name': name,
                'options': []
            }
            area.push(province);
        } else if (line.indexOf('  ') == 0 && line.indexOf('    ') != 0) {//市
            //console.log(line);
            let code_name = line.trim().replace(/\s+/g, ' ').split(' ');
            let code = code_name[0];
            let name = code_name[1];

            let city = {
                'code': code,
                'name': name,
                'options': []
            }
            area[area.length - 1].options.push(city);


        } else if (line.indexOf('    ') == 0) {//区
            //console.log(line);
            let code_name = line.trim().replace(/\s+/g, ' ').split(' ');
            let code = code_name[0];
            let name = code_name[1];
            let county = {
                'code': code,
                'name': name
            }
            let cityOptions = area[area.length - 1].options;
            cityOptions[cityOptions.length - 1].options.push(county);
        }


    }


    console.log(JSON.stringify(area));
    //console.log(area)
});



function a() {
    console.log('a......')
}

function b() {
    console.log('b.......')
}

while (true) {
    a();
    b();
}


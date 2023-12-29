class CWS {
    box_x(x) {
        const bx2 = cws.processingClass("box-x");
        const bx = document.querySelectorAll('.cws');
        bx.forEach(function (bx1, index1) {
            bx[index1].style.width = `${bx2[index1]}`;
        });
    }
    box_y(y) {
        const by2 = cws.processingClass("box-y");

        const by = document.querySelectorAll('.cws');
        by.forEach(function (by1, index1) {
            by[index1].style.height = `${by2[index1]}`;
        });
    }
    box_clr(color) {
        const bg2 = cws.processingClass("bg");

        const bg = document.querySelectorAll('.cws');

        bg.forEach(function (bg1, index1) {
            bg[index1].style.background = `${bg2[index1]}`;
        });
    }
}

CWS.prototype.processingClass = function GetClassValues(expression) {
    const mainPro = document.querySelectorAll('.cws');
        let process1 = [];
        let process2 = [];
        let process3 = [];
        let process4 = [];
        let two = [];
        let one = [];
        let process5 = null;
        let ex = `${expression}`;

        for (let i = 0; i < mainPro.length; i++) {
            process1.push(mainPro[i].getAttribute('class'));
        }
        let output = null;

        for (let i = 0; i < process1.length; i++) {
            process2.push(process1[i].split(' '));
        }

        for (let i = 0; i < process2.length; i++) {
            process2[i].filter(function (val) {
                if (val.startsWith(expression)) {
                    process3.push(val);
                }
            });
        }

        for (let i = 0; i < process3.length; i++) {
            process4.push(process3[i].split('-'));
        }

        for (let i = 0; i < process4.length; i++) {
            two.push(process4[i][2]);
        }
        for (let i = 0; i < process4.length; i++) {
            one.push(process4[i][1]);
        }

        if (ex.includes('-')) {
            process5 = two;
        }else {
            process5 = one;
        }

        output = process5;
        return output;
}

const cws = new CWS();
cws.box_x();
cws.box_y();
cws.box_clr();
console.log(cws.processingClass("bg"));
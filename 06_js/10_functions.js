func1();

function func1() {
    console.log('1', this)
}

const func2 = (num = 12) => {
    // console.log('func2', num);
    console.log('2', this)
};

func2(222);
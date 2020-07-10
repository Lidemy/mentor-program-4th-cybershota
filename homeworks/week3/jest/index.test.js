// 重新發PR
const hw1 = require('./hw1');
const hw2 = require('./hw2');
const hw3 = require('./hw3');
const hw4 = require('./hw4');
const hw5 = require('./hw5');

global.console = {
  log: jest.fn(),
};

describe('hw1：好多星星', () => {
  it('印出 1 顆星星', () => {
    console.log(hw1(['1']));
    expect(console.log).toHaveBeenCalledWith('*');
  });

  it('印出遞增的 5 排星星', () => {
    console.log(hw1(['5']));
    expect(console.log).toHaveBeenCalledWith('*');
    expect(console.log).toHaveBeenCalledWith('**');
    expect(console.log).toHaveBeenCalledWith('***');
    expect(console.log).toHaveBeenCalledWith('****');
    expect(console.log).toHaveBeenCalledWith('*****');
  });
});

describe('hw2：水仙花數', () => {
  it('5 ~ 200 水仙花數', () => {
    console.log(hw2(['5 200']));
    expect(console.log).toHaveBeenCalledWith(5);
    expect(console.log).toHaveBeenCalledWith(6);
    expect(console.log).toHaveBeenCalledWith(7);
    expect(console.log).toHaveBeenCalledWith(8);
    expect(console.log).toHaveBeenCalledWith(9);
    expect(console.log).toHaveBeenCalledWith(153);
  });

  it('300 ~ 2000 水仙花數', () => {
    console.log(hw2(['300 2000']));
    expect(console.log).toHaveBeenCalledWith(370);
    expect(console.log).toHaveBeenCalledWith(371);
    expect(console.log).toHaveBeenCalledWith(407);
    expect(console.log).toHaveBeenCalledWith(1634);
  });
});

describe('hw3：判斷質數', () => {
  it('1 ~ 5 的質數', () => {
    console.log(hw3(['5', '1', '2', '3', '4', '5']));
    expect(console.log).toHaveBeenCalledWith('Composite');
    expect(console.log).toHaveBeenCalledWith('Prime');
    expect(console.log).toHaveBeenCalledWith('Prime');
    expect(console.log).toHaveBeenCalledWith('Composite');
    expect(console.log).toHaveBeenCalledWith('Prime');
  });

  it('11 ~ 15 的質數', () => {
    console.log(hw3(['5', '11', '12', '13', '14', '15']));
    expect(console.log).toHaveBeenCalledWith('Prime');
    expect(console.log).toHaveBeenCalledWith('Composite');
    expect(console.log).toHaveBeenCalledWith('Prime');
    expect(console.log).toHaveBeenCalledWith('Composite');
    expect(console.log).toHaveBeenCalledWith('Composite');
  });
});

describe('hw4：判斷迴文', () => {
  it('abbbba', () => {
    console.log(hw4(['abbbba']));
    expect(console.log).toHaveBeenCalledWith('True');
  });
  it('ac', () => {
    console.log(hw4(['ac']));
    expect(console.log).toHaveBeenCalledWith('False');
  });
});

describe('hw5：聯誼順序比大小', () => {
  it('基本數值測試', () => {
    console.log(hw5(['3', '1 2 1', '1 2 -1', '2 2 1']));
    expect(console.log).toHaveBeenCalledWith('B');
    expect(console.log).toHaveBeenCalledWith('A');
    expect(console.log).toHaveBeenCalledWith('DRAW');
  });

  it('超大數值測試', () => {
    console.log(
      hw5([
        '3',
        '1000000000000000000000000000000000000000000000000000000000 2 1',
        '1 20000000000000000000000000000000000000000000000000000000 -1',
        '2000000000000000000000000000000000000000000000000000000000 2000000000000000000000000000000000000000000000000000000000 1',
        // eslint-disable-next-line comma-dangle
      ])
    );
    expect(console.log).toHaveBeenCalledWith('A');
    expect(console.log).toHaveBeenCalledWith('A');
    expect(console.log).toHaveBeenCalledWith('DRAW');
  });
});

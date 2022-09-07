process.stdin.resume();
process.stdin.setEncoding('utf8');

var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const ward_list = [];
let input_lines = [];
reader.on('line', (line) => {
  input_lines = line.split(" ");
  // 一行で2個読み取る
  ward_list.push(new WardName(input_lines.slice(0, 4)))
  ward_list.push(new WardName(input_lines.slice(4, 8)))
});

reader.on('close', () => {
  console.log(JSON.stringify(ward_list));
});

/**
 *  名称案
 */
class WardName {
  /**
   * @param {Array} input 要素数4の配列
   */
  constructor(input) {
    /**
     * rank: 順位
     * name: 名称案
     * ruby: よみがな
     * count: 応募数
     */
    [this.rank, this.name, this.ruby, this.count] = input
    // 読みがなが空(ひらがな区、カタカナ区)の場合、名前からコピー
    if (this.count === undefined && this.ruby !== undefined) {
      this.count = this.ruby
      this.ruby = this.name.replace(/区$/g, "く")
    }
    if (this.count !== undefined) {
      this.count = this.count.replace(/,/g, "");
    }
  }
}

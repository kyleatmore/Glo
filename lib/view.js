class View {
  constructor($gl0el) {
    this.$gl0el = $gl0el
    this.setUpButtons();
    this.startScreen();
    this.randomColorString = this.randomColorString.bind(this);
    this.setUpButtons = this.setUpButtons.bind(this);
    this.startScreen = this.startScreen.bind(this);

    this.demo1 = this.demo1.bind(this);
    this.demo2 = this.demo2.bind(this);
    this.demo3 = this.demo3.bind(this);
    this.demo4 = this.demo4.bind(this);
    window.addEventListener("keydown", this.handleKeyEvent.bind(this));
  }

    handleKeyEvent(event) {
      event.preventDefault();

      switch(event.keyCode) {
        case 37:
          this.demo2();
          break;
        case 38:
          this.demo1();
          break;
        case 39:
          this.demo3();
          break;
        case 40:
          this.demo4();
          break;
        case 27:
          this.setUpBoard();
          this.setUpButtons();
          break;

      }
    }

  randomColorString(){
    return '#' + Math.random().toString(16).substr(-6);
  };

  setUpBoard() {
    this.$gl0el.empty();
    const $gl0div1 = $gl0("<div>");
    const $gl0h1 = $gl0("<h1>");

    $gl0div1.addClass('title-wrapper');
    $gl0h1.addClass('title');

    $gl0h1.append("GLO");
    $gl0div1.append($gl0h1);
    this.$gl0el.append($gl0div1);
  }

  startScreen() {
    this.$gl0el.empty();
    const $gl0wrapper = $gl0("<div>");
    const $gl0Button1 = $gl0("<button>");
    const $gl0Button2 = $gl0("<button>");
    $gl0wrapper.addClass('button-wrapper')
    $gl0Button1.append("Welcome to GLO!");
    $gl0Button2.append("Use the arrow keys to see what GLO can do!");
    $gl0wrapper.append($gl0Button1);
    $gl0wrapper.append($gl0Button2);
    this.$gl0el.append($gl0wrapper);
  }

  setUpButtons() {
    const $gl0div3 = $gl0("<div>");
    this.$gl0el.append($gl0div3);
  }


  demo1() {
    this.$gl0el.empty();
    this.setUpBoard();
    this.setUpButtons();
    let classes = ['list-els1', 'list-els2', 'list-els3', 'list-els4', 'list-els5', 'list-els6'];
    const $gl0ul1 = $gl0("<ul>");
    $gl0ul1.addClass('group1');

    for (let rowIdx = 0; rowIdx < 15; rowIdx++) {
      for (let colIdx = 0; colIdx < 24; colIdx++) {
        let $gl0li = $gl0("<li>");
        $gl0li.addClass(classes[Math.floor(Math.random() * 6)]);
        $gl0li.css('background-color', `${this.randomColorString()}`);
        $gl0ul1.append($gl0li);
      }
    }
    this.$gl0el.append($gl0ul1);
  }


  demo2() {
    this.$gl0el.empty();
    this.setUpBoard();
    this.setUpButtons();
    const $gl0ul2 = $gl0("<ul>");
    $gl0ul2.addClass('group2');


    for (let rowIdx = 0; rowIdx < 10; rowIdx++) {
      for (let colIdx = 0; colIdx < 20; colIdx++) {
        let $gl0li = $gl0("<li>");
        $gl0li.addClass('bounceIn');
        $gl0ul2.append($gl0li);
      }
    }
    this.$gl0el.append($gl0ul2);
  }


  demo3() {
    this.$gl0el.empty();
    this.setUpBoard();
    this.setUpButtons();
    const $gl0title = this.$gl0el.find('h1');
    const $gl0titleDiv = $gl0('<div>');
    $gl0titleDiv.addClass('title-wrapper');

    const $gl0ul3 = $gl0("<ul>");
    $gl0ul3.addClass('group3');

    for (let rowIdx = 0; rowIdx < 6; rowIdx++) {
      for (let colIdx = 0; colIdx < 10; colIdx++) {
        let $gl0li = $gl0("<li>");
        $gl0li.addClass('tada');
        $gl0ul3.append($gl0li);
      }
    }
    this.$gl0el.append($gl0ul3);
  }

  demo4() {
    this.$gl0el.empty();
    this.setUpBoard();
    this.setUpButtons();
    const $gl0title = $gl0('h1');
    $gl0title.addClass('tada');
  }

}


export default View;

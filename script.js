const btn = document.querySelector(".dropdown__button");
const dropdownList = document.querySelector(".dropdown__list");
const checkbox = document.querySelector(".checked");

btn.addEventListener("click", () => {
  dropdownList.classList.toggle("dropdown__list-visible");
  btn.classList.toggle("dropdown__button-active");
});

const checkboxes = document.querySelectorAll(
  '.checkboxGroup input[type="checkbox"]'
);
const checkboxes1 = document.querySelectorAll(
  '#content-1 input[type="checkbox"]'
);
const checkboxes2 = document.querySelectorAll(
  '#content-2 input[type="checkbox"]'
);
const checkboxes3 = document.querySelectorAll(
  '#content-3 input[type="checkbox"]'
);
const checkboxes4 = document.querySelectorAll(
  '#content-4 input[type="checkbox"]'
);

const rowItemBlock1 = document.querySelector("#content-1 .elementGroupScroll");
const rowItemBlock2 = document.querySelector("#content-2 .elementGroupScroll");
const rowItemBlock3 = document.querySelector("#content-3 .elementGroupScroll");
const rowItemBlock4 = document.querySelector("#content-4 .elementGroupScroll");

const rowItems = document.querySelectorAll(".elementGroup .row-item");
const count = document.querySelector(".count");

const rowItemsClose1 = document.querySelectorAll("#content-1 .row-item-close");
const rowItemsClose2 = document.querySelectorAll("#content-2 .row-item-close");
const rowItemsClose3 = document.querySelectorAll("#content-3 .row-item-close");
const rowItemsClose4 = document.querySelectorAll("#content-4 .row-item-close");

let c = 0,
  c1 = 0,
  c2 = 0,
  c3 = 0,
  c4 = 0;

checkboxes1.forEach((checkbox) => {
  checkbox.addEventListener("change", function (e) {
    const rowItem1 = document.querySelector(
      `#content-1 .row-item[data-id="${this.id}"]`
    );
    const rowItemClose1 = document.querySelector(
      `#content-1 .row-item-close[data-id="${this.id}"]`
    );
    if (this.checked) {
      rowItemBlock1.style.display = "flex";
      rowItem1.style.display = "block";
      rowItemClose1.style.display = "block";
      rowItem1.innerHTML = `${this.value}`;
      count.style.display = "flex";

      c = c + 1;
      c1 = c1 + 1;
      count.innerText = c;
    } else {
      rowItem1.style.display = "none";
      rowItemClose1.style.display = "none";
      c = c - 1;
      c1 = c1 - 1;
      count.innerText = c;
      if (c1 === 0) {
        rowItemBlock1.style.display = "none";
      }
      if (c === 0) {
        count.style.display = "none";
      }
    }
  });
});

rowItemsClose1.forEach((rowItemClose) => {
  rowItemClose.addEventListener("click", function () {
    const checkbox = document.querySelector(
      `.checkboxGroup input[id="${this.dataset.id}"]`
    );
    const rowItemClose1 = document.querySelector(
      `.elementGroup .row-item-close[data-id="${this.dataset.id}"]`
    );
    const rowItem1 = document.querySelector(
      `.elementGroup .row-item[data-id="${this.dataset.id}"]`
    );
    checkbox.checked = !checkbox.checked;
    rowItemClose1.style.display = "none";
    rowItem1.style.display = "none";
    c = c - 1;
    c1 = c1 - 1;
    count.innerText = c;
    if (c1 === 0) {
      rowItemBlock1.style.display = "none";
    }
    if (c === 0) {
      count.style.display = "none";
    }
  });
});

checkboxes2.forEach((checkbox) => {
  checkbox.addEventListener("change", function (e) {
    const rowItem2 = document.querySelector(
      `#content-2 .row-item[data-id="${this.id}"]`
    );
    const rowItemClose2 = document.querySelector(
      `#content-2 .row-item-close[data-id="${this.id}"]`
    );
    if (this.checked) {
      rowItemBlock2.style.display = "flex";
      rowItem2.style.display = "block";
      rowItemClose2.style.display = "block";
      rowItem2.innerHTML = `${this.value}`;
      count.style.display = "flex";

      c = c + 1;
      c2 = c2 + 1;
      count.innerText = c;
    } else {
      rowItem2.style.display = "none";
      rowItemClose2.style.display = "none";
      c = c - 1;
      c2 = c2 - 1;
      count.innerText = c;
      if (c2 === 0) {
        rowItemBlock2.style.display = "none";
      }
      if (c === 0) {
        count.style.display = "none";
      }
    }
  });
});

rowItemsClose2.forEach((rowItemClose) => {
  rowItemClose.addEventListener("click", function () {
    const checkbox = document.querySelector(
      `.checkboxGroup input[id="${this.dataset.id}"]`
    );
    const rowItemClose2 = document.querySelector(
      `.elementGroup .row-item-close[data-id="${this.dataset.id}"]`
    );
    const rowItem2 = document.querySelector(
      `.elementGroup .row-item[data-id="${this.dataset.id}"]`
    );
    checkbox.checked = !checkbox.checked;
    rowItemClose2.style.display = "none";
    rowItem2.style.display = "none";
    c = c - 1;
    c2 = c2 - 1;
    count.innerText = c;
    if (c2 === 0) {
      rowItemBlock2.style.display = "none";
    }
    if (c === 0) {
      count.style.display = "none";
    }
  });
});

checkboxes3.forEach((checkbox) => {
  checkbox.addEventListener("change", function (e) {
    const rowItem3 = document.querySelector(
      `#content-3 .row-item[data-id="${this.id}"]`
    );
    const rowItemClose3 = document.querySelector(
      `#content-3 .row-item-close[data-id="${this.id}"]`
    );
    if (this.checked) {
      rowItemBlock3.style.display = "flex";
      rowItem3.style.display = "block";
      rowItemClose3.style.display = "block";
      rowItem3.innerHTML = `${this.value}`;
      count.style.display = "flex";

      c = c + 1;
      c3 = c3 + 1;
      count.innerText = c;
    } else {
      rowItem3.style.display = "none";
      rowItemClose3.style.display = "none";
      c = c - 1;
      c3 = c3 - 1;
      count.innerText = c;
      if (c3 === 0) {
        rowItemBlock3.style.display = "none";
      }
      if (c === 0) {
        count.style.display = "none";
      }
    }
  });
});

rowItemsClose3.forEach((rowItemClose) => {
  rowItemClose.addEventListener("click", function () {
    const checkbox = document.querySelector(
      `.checkboxGroup input[id="${this.dataset.id}"]`
    );
    const rowItemClose3 = document.querySelector(
      `.elementGroup .row-item-close[data-id="${this.dataset.id}"]`
    );
    const rowItem3 = document.querySelector(
      `.elementGroup .row-item[data-id="${this.dataset.id}"]`
    );
    checkbox.checked = !checkbox.checked;
    rowItemClose3.style.display = "none";
    rowItem3.style.display = "none";
    c = c - 1;
    c3 = c3 - 1;
    count.innerText = c;
    if (c3 === 0) {
      rowItemBlock3.style.display = "none";
    }
    if (c === 0) {
      count.style.display = "none";
    }
  });
});

checkboxes4.forEach((checkbox) => {
  checkbox.addEventListener("change", function (e) {
    const rowItem4 = document.querySelector(
      `#content-4 .row-item[data-id="${this.id}"]`
    );
    const rowItemClose4 = document.querySelector(
      `#content-4 .row-item-close[data-id="${this.id}"]`
    );
    if (this.checked) {
      rowItemBlock4.style.display = "flex";
      rowItem4.style.display = "block";
      rowItemClose4.style.display = "block";
      rowItem4.innerHTML = `${this.value}`;
      count.style.display = "flex";

      c = c + 1;
      c4 = c4 + 1;
      count.innerText = c;
    } else {
      rowItem4.style.display = "none";
      rowItemClose4.style.display = "none";
      c = c - 1;
      c4 = c4 - 1;
      count.innerText = c;
      if (c4 === 0) {
        rowItemBlock4.style.display = "none";
      }
      if (c === 0) {
        count.style.display = "none";
      }
    }
  });
});

rowItemsClose4.forEach((rowItemClose) => {
  rowItemClose.addEventListener("click", function () {
    const checkbox = document.querySelector(
      `.checkboxGroup input[id="${this.dataset.id}"]`
    );
    const rowItemClose4 = document.querySelector(
      `.elementGroup .row-item-close[data-id="${this.dataset.id}"]`
    );
    const rowItem4 = document.querySelector(
      `.elementGroup .row-item[data-id="${this.dataset.id}"]`
    );
    checkbox.checked = !checkbox.checked;
    rowItemClose4.style.display = "none";
    rowItem4.style.display = "none";
    c = c - 1;
    c4 = c4 - 1;
    count.innerText = c;
    if (c4 === 0) {
      rowItemBlock4.style.display = "none";
    }
    if (c === 0) {
      count.style.display = "none";
    }
  });
});


(function ($) {
  $(window).on("load", function () {
      $(".mycustom-scroll").mCustomScrollbar({
        axis: "y",
        theme: "dark",
        scrollInertia: "330",
        mouseWheel: {
            deltaFactor: 300
        }
    });
  });
})(jQuery);

// https://wazacs.tistory.com/34 블로그에서 가져옴 select

const label = document.querySelectorAll('.label');
label.forEach(function (lb) {
  lb.addEventListener('click', (e) => {
    let optionList = lb.nextElementSibling;
    let optionItems = optionList.querySelectorAll('.optionItem');
    clickLabel(lb, optionItems);
  });
});
const clickLabel = (lb, optionItems) => {
  if (lb.parentNode.classList.contains('active')) {
    lb.parentNode.classList.remove('active');
    optionItems.forEach((opt) => {
      opt.removeEventListener('click', () => {
        handleSelect(lb, opt);
      });
    });
  } else {
    lb.parentNode.classList.add('active');
    optionItems.forEach((opt) => {
      opt.addEventListener('click', () => {
        handleSelect(lb, opt);
      });
    });
  }
};
const handleSelect = (label, item) => {
  label.innerHTML = item.textContent;
  label.parentNode.classList.remove('active');
};

// 클릭시 달력
// https://www.daterangepicker.com/
$(function () {
  $('input[name="daterange"]').daterangepicker(
    {
      opens: 'left',
    },
    function (start, end, label) {
      console.log(
        'A new date selection was made: ' +
          start.format('YYYY-MM-DD') +
          ' to ' +
          end.format('YYYY-MM-DD')
      );
    }
  );
});

// 버튼 증가

function count(type) {
  // 결과를 표시할 element
  const resultElement = document.getElementById('result');

  // 현재 화면에 표시된 값
  let number = resultElement.innerText;

  // 더하기/빼기
  if (type === 'plus') {
    number = parseInt(number) + 1;
  } else if (type === 'minus') {
    number = parseInt(number) - 1;
  }

  // 결과 출력
  resultElement.innerText = number;
}

new Vue({
  el: '#app',
  data: {
    count: 0,
  },
  methods: {
    countUp: function () {
      this.count++;
    },
    countDown: function () {
      this.count--;
    },
  },
});

new Vue({
  el: '#adult',
  data: {
    count: 0,
  },
  methods: {
    countUp: function () {
      this.count++;
    },
    countDown: function () {
      this.count--;
    },
  },
});

new Vue({
  el: '#children',
  data: {
    count: 0,
  },
  methods: {
    countUp: function () {
      this.count++;
    },
    countDown: function () {
      this.count--;
    },
  },
});

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
var CDate = new Date();
var today = new Date();
var selectCk = 0;

var buildcalendar = function () {
  var htmlDates = '';
  var prevLast = new Date(CDate.getFullYear(), CDate.getMonth(), 0); //지난 달의 마지막 날
  var thisFirst = new Date(CDate.getFullYear(), CDate.getMonth(), 1); //이번 달의 첫쨰 날
  var thisLast = new Date(CDate.getFullYear(), CDate.getMonth() + 1, 0); //이번 달의 마지막 날
  document.querySelector('.year').innerHTML = CDate.getFullYear() + '년'; // year에 년도 출력
  document.querySelector('.month').innerHTML = CDate.getMonth() + 1 + '월'; //month에 월 출력
  const dates = [];
  if (thisFirst.getDay() != 0) {
    for (var i = 0; i < thisFirst.getDay(); i++) {
      dates.unshift(prevLast.getDate() - i); // 지난 달 날짜 채우기
    }
  }
  for (var i = 1; i <= thisLast.getDate(); i++) {
    dates.push(i); // 이번 달 날짜 채우기
  }
  for (var i = 1; i <= 13 - thisLast.getDay(); i++) {
    dates.push(i); // 다음 달 날짜 채우기 (나머지 다 채운 다음 출력할 때 42개만 출력함)
  }

  for (var i = 0; i < 42; i++) {
    if (i < thisFirst.getDay()) {
      htmlDates += '<div class="date last">' + dates[i] + '</div>';
    } else if (
      today.getDate() == dates[i] &&
      today.getMonth() == CDate.getMonth() &&
      today.getFullYear() == CDate.getFullYear()
    ) {
      htmlDates +=
        '<div id="date_' +
        dates[i] +
        '" class="date today" onclick="fn_selectDate(' +
        dates[i] +
        ');">' +
        dates[i] +
        '</div>';
    } else if (i >= thisFirst.getDay() + thisLast.getDate()) {
      htmlDates += '<div class="date next">' + dates[i] + '</div>';
    } else {
      htmlDates +=
        '<div id="date_' +
        dates[i] +
        '" class="date" onclick="fn_selectDate(' +
        dates[i] +
        ');">' +
        dates[i] +
        '</div>';
    }
  }
  document.querySelector('.dates').innerHTML = htmlDates;
};

function prevCal() {
  CDate.setMonth(CDate.getMonth() - 1);
  buildcalendar();
}
function nextCal() {
  CDate.setMonth(CDate.getMonth() + 1);
  buildcalendar();
}

function fn_selectDate(date) {
  var year = CDate.getFullYear();
  var month = CDate.getMonth() + 1;
  var date_txt = '';
  if (CDate.getMonth + 1 < 10) {
    month = '0' + (CDate.getMonth() + 1);
  }
  if (date < 10) {
    date_txt = '0' + date;
  }

  if (selectCk == 0) {
    $('.date').css('background-color', '');
    $('.date').css('color', '');
    $('#date_' + date).css('background-color', 'red');
    $('#date_' + date).css('color', 'white');

    $('#period_1').val(year + '-' + month + '-' + date);
    $('#period_2').val('');
    selectCk = date;
  } else {
    $('#date_' + date).css('background-color', 'red');
    $('#date_' + date).css('color', 'white');
    for (var i = selectCk + 1; i < date; i++) {
      $('#date_' + i).css('background-color', '#FFDDDD');
    }

    $('#period_2').val(year + '-' + month + '-' + date);
    selectCk = 0;
  }
}

buildcalendar();

// 달력 들어갔다 나왔다 버튼
$(document).ready(function () {
  $('#button').click(function () {
    $('.calendar').toggle();
  });
});
// 버튼 증가

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

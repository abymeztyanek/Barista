var carousalV = document.getElementById('verticalWrapperId'),
    carousalH = document.getElementById('horizontalWrapperId'),
    cardsLength = 6; // Should always be equal to cards length

document.getElementById('leftBtnId').addEventListener('click', function(e) {
  e.preventDefault();
  let sl = carousalH.scrollLeft,
      ssH = carousalH.scrollWidth / cardsLength,
      
      st = carousalV.scrollTop,
      ssV = carousalV.scrollHeight / cardsLength;
  
  if ((sl - ssH) <= 0) {
    carousalH.scrollTo({ left: 0, behaviour: 'smooth' });
  } else {
    carousalH.scrollTo({ left: sl - ssH, behaviour: 'smooth' });
  }
  
  if ((st - ssV) <= 0) {
    carousalV.scrollTo({ top: 0, behaviour: 'smooth' });
  } else {
    carousalV.scrollTo({ top: st - ssV, behaviour: 'smooth' });
  }
});

document.getElementById('rightBtnId').addEventListener('click', function(e) {
  e.preventDefault();
  let sl = carousalH.scrollLeft,
      cw = carousalH.scrollWidth,
      ssH = cw / cardsLength,

      st = carousalV.scrollTop,
      ch = carousalV.scrollHeight,
      ssV = ch / cardsLength;
  
  if ((sl + ssH) >= cw) {
    carousalH.scrollTo({ left: cw, behaviour: 'smooth' });
  } else {
    carousalH.scrollTo({ left: sl + ssH, behaviour: 'smooth' });
  }
  
  if ((st + ssV) >= ch) {
    carousalV.scrollTo({ top: ch, behaviour: 'smooth' });
  } else {
    carousalV.scrollTo({ top: st + ssV, behaviour: 'smooth' });
  }
});

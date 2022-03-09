const toFavour = document.querySelector('.container');
toFavour.addEventListener('click', async (event) => {
  event.preventDefault();

  if (event.target.classList.contains('add_button')) {
    //     console.log(event.target);
    //     console.log(event.target.closest('.sockscard').dataset.socksid);
    // console.log(123);
    const resp = await fetch('/user/addtofavour', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        socksid2: event.target.closest('.sockscard').dataset.socksid,
      }),
    });

    if (resp.status === 200) {
      console.log('ok');
    } else {
      window.location.href = '/user/signup';
    }
  }

  if (event.target.classList.contains('add_tocart')) {
    // console.log(event.target);
    // console.log(event.target.closest('.sockscard').dataset.socksid);
    try {
      const resp = await fetch('/user/addtocart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          socksid1: event.target.closest('.sockscard').dataset.socksid,
        }),
      });
      console.log(resp.status);
      if (resp.status === 200) {
        console.log('ok');
      } else {
        window.location.href = '/user/signup';
      }
    } catch (error) {
      console.log(error);
    }
  }
});

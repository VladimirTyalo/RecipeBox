
const url = 'https://bacontoday.com/wp-content/uploads/2016/09/dry-cured-back-bacon.jpg';

fetch(url)
    .then(res => {
      console.log(res);
      res.json()
    })
    .then(json => { 
    
      console.log(json);
      
    }).catch(err => {
      console.log(err);
    });
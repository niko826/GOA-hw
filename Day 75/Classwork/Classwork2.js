/*fetch() ფუნქცია — თანამედროვე მეთოდია HTTP მოთხოვნების (GET, POST და სხვა) გასაგზავნად JavaScript-ში. ის ხსნის ქსელური რესურსების მოთხოვნას და ამუშავებს პასუხს Promise-ის სახით*/


/*მაგალითი:*/

fetch('https://fakestoreapi.com/products')
  .then(response => {
    // 2) then(): ეს ნაწილს მაშინ ვწერდით, როცა მხოლოდ მოთხოვნამ ჰედერები წარმატებით მიიღო
    // Response.ok და Response.status საშუალებას გვაძლევს, შევამოწმოთ HTTP სტატუსიც.
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // აამუშავეთ JSON პასუხად, რაც ასევე Promise-ია
    return response.json();
  })
  .then(data => {
    // 3) მეორე then(): აქ გვყავს უკვე "parsed" JSON მონაცემები
    console.log('Products:', data);
  })
  .catch(error => {
    // 4) catch(): აქ ვმართავთ ყველაფერს — ქსელის შეცდომებს ან ჩვენი throw-ების შედეგად
    console.error('Fetch error:', error);
  })
  .finally(() => {
    // 5) finally(): ყოველთვის შესრულდება — წარმატებაზე, შეცდომაზე, ყველაფერი
    console.log('Fetch attempt finished.');
  });

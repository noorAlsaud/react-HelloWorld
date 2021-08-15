// new gridjs.Grid ({

//     columns: ["Name", "Email", "Phone Number"],
//     data: [
//         {  name: 'John', email: 'john@example.com', phoneNumber: '(353) 01 222 3333' },
//         { name: 'Mark', email: 'mark@gmail.com', phoneNumber: '(01) 22 888 4444' },
//       ],

//       pagination: {
//           limit: 1,
//       },
//       sort: true,
//       search: true,
//       table: {
//           'font-size' : '15px'
//       },

//       language: {
//         'search': {
//           'placeholder': '🔍 Search...'
//         },
//         'pagination': {
//           'results': () => 'Records'
//         }
//       }

// }).render(document.getElementById("wrapper"))

const grid = new Grid({
    columns: ['Title', 'Director', 'Producer'],
    server: {
      url: 'https://swapi.dev/api/films/',
      then: data => data.results.map(movie => [movie.title, movie.director, movie.producer])
    } 
  });
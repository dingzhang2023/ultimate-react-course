const data = [
	{
		id: 1,
		title: 'The Lord of the Rings',
		publicationDate: '1954-07-29',
		author: 'J. R. R. Tolkien',
		genres: [
			'fantasy',
			'high-fantasy',
			'adventure',
			'fiction',
			'novels',
			'literature',
		],
		hasMovieAdaptation: true,
		pages: 1216,
		translations: {
			spanish: 'El señor de los anillos',
			chinese: '魔戒',
			french: 'Le Seigneur des anneaux',
		},
		reviews: {
			goodreads: {
				rating: 4.52,
				ratingsCount: 630994,
				reviewsCount: 13417,
			},
			librarything: {
				rating: 4.53,
				ratingsCount: 47166,
				reviewsCount: 452,
			},
		},
	},
	{
		id: 2,
		title: 'The Cyberiad',
		publicationDate: '1965-01-01',
		author: 'Stanislaw Lem',
		genres: [
			'science fiction',
			'humor',
			'speculative fiction',
			'short stories',
			'fantasy',
		],
		hasMovieAdaptation: false,
		pages: 295,
		translations: {},
		reviews: {
			goodreads: {
				rating: 4.16,
				ratingsCount: 11663,
				reviewsCount: 812,
			},
			librarything: {
				rating: 4.13,
				ratingsCount: 2434,
				reviewsCount: 0,
			},
		},
	},
	{
		id: 3,
		title: 'Dune',
		publicationDate: '1965-01-01',
		author: 'Frank Herbert',
		genres: ['science fiction', 'novel', 'adventure'],
		hasMovieAdaptation: true,
		pages: 658,
		translations: {
			spanish: '',
		},
		reviews: {
			goodreads: {
				rating: 4.25,
				ratingsCount: 1142893,
				reviewsCount: 49701,
			},
		},
	},
	{
		id: 4,
		title: "Harry Potter and the Philosopher's Stone",
		publicationDate: '1997-06-26',
		author: 'J. K. Rowling',
		genres: ['fantasy', 'adventure'],
		hasMovieAdaptation: true,
		pages: 223,
		translations: {
			spanish: 'Harry Potter y la piedra filosofal',
			korean: '해리 포터와 마법사의 돌',
			bengali: 'হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন',
			portuguese: 'Harry Potter e a Pedra Filosofal',
		},
		reviews: {
			goodreads: {
				rating: 4.47,
				ratingsCount: 8910059,
				reviewsCount: 140625,
			},
			librarything: {
				rating: 4.29,
				ratingsCount: 120941,
				reviewsCount: 1960,
			},
		},
	},
	{
		id: 5,
		title: 'A Game of Thrones',
		publicationDate: '1996-08-01',
		author: 'George R. R. Martin',
		genres: ['fantasy', 'high-fantasy', 'novel', 'fantasy fiction'],
		hasMovieAdaptation: true,
		pages: 835,
		translations: {
			korean: '왕좌의 게임',
			polish: 'Gra o tron',
			portuguese: 'A Guerra dos Tronos',
			spanish: 'Juego de tronos',
		},
		reviews: {
			goodreads: {
				rating: 4.44,
				ratingsCount: 2295233,
				reviewsCount: 59058,
			},
			librarything: {
				rating: 4.36,
				ratingsCount: 38358,
				reviewsCount: 1095,
			},
		},
	},
];

function getBooks() {
	return data;
}

function getBook(id) {
	return data.find((d) => d.id === id);
}

// Destrucutring
// const book = getBook(1);
// const { title, author, pages, genres } = book;
// console.log(title, author, pages);

// // array destructuring ...要么在第一位，要么在最后一位
// const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
// console.log(primaryGenre, secondaryGenre, otherGenres);

// const newGenres = [...genres, 'epic fantasy'];
// console.log(newGenres);

// // overwrite a property ...book must in the 1st position
// const updatedBook = {
// 	...book,
// 	// Add a new property
// 	moviePublicationDate: '1982-06-25',
// 	// Overwrite a property
// 	pages: 300,
// };

// updatedBook;

// const summary = `${title} is a book `;
// summary;

// // Ternary operator
// const pagesRange = pages > 1000 ? 'long' : 'short';
// pagesRange;

// // Arrow function
// // Short circuit evaluation
// console.log(true && 'something');

// // falsy: null undefined 0 ''
// console.log(0 && 'Something');

// const spanishTranslation = book.translations.spanish || 'No translation';
// spanishTranslation;

// // JS option and chaining
// const count = book.reviews?.librarything?.ratingsCount || 0;
// count;

// // Map
// const books = getBooks();
// const x = [1, 2, 3, 4, 5].map((e) => e * 2);
// console.log(x);

// const titles = books.map(({ title }) => title);
// titles;
// const essentialData = books.map(({ title, author, reviews }) => ({
// 	title,
// 	author,
// 	reviews: reviews?.librarything?.ratingsCount || 0,
// }));

// essentialData;

// // Filter
// const longBooksWithMovie = books.filter(
// 	({ pages, hasMovieAdaptation }) => pages > 500 && hasMovieAdaptation
// );
// longBooksWithMovie;

// const adventureBooks = books
// 	.filter(({ genres }) => genres.includes('adventure'))
// 	.map(({ title }) => title);
// adventureBooks;

// // Reduce
// const pagesAllBooks = books.reduce((acc, { pages }) => acc + pages, 0);
// pagesAllBooks;

// // Sort
// const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages); // - ascending, + descending
// books;
// sortedByPages;

// // 1. Add book to array immutable
// const newBook = {
// 	id: 6,
// 	title: 'The Lord of the Rings',
// 	publicationDate: '1954-07-29',
// 	author: 'J. R. R. Tolkien',
// 	genres: ['fantasy', 'high-fantasy', 'adventure', 'fiction'],
// 	hasMovieAdaptation: true,
// 	pages: 1216,
// };

// const newBooks = [...books, newBook];
// newBooks;

// // 2. delete a book
// const booksAfterDelete = books.filter(({ id }) => id !== 3);
// booksAfterDelete;

// // 3. update a book
// const updatedBooks = books.map((book) =>
// 	book.id === 1 ? { ...book, pages: 300 } : book
// );
// updatedBooks;

// Async Promise Object
// fetch('https://jsonplaceholder.typicode.com/todos')
// 	.then((res) => res.json())
// 	.then((data) => console.log(data));

// console.log('I am here!!!')

// async wait to replace
async function getTodos() {
	const res = await fetch('https://jsonplaceholder.typicode.com/todos');
	const data = await res.json();
	console.log(data);
}

const todos = getTodos();
console.log(todos);

console.log('I am here!!!');

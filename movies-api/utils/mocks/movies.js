const moviesMock = [{
  "id": "a8b46293-50ee-4c06-8197-ccd0bd3b1879",
  "title": "Carrington",
  "year": 2006,
  "cover": "http://dummyimage.com/228x162.png/5fa2dd/ffffff",
  "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  "duration": 2056,
  "contentRating": "R",
  "source": "https://msu.edu/hendrerit/at/vulputate.xml",
  "tags": [
    "Adventure|Sci-Fi",
    "Comedy",
    "Comedy|Drama|Romance"
  ]
}, {
  "id": "8b1c52e0-2675-472e-a4d0-020b228806a1",
  "title": "Long Voyage Home, The",
  "year": 1997,
  "cover": "http://dummyimage.com/167x228.bmp/dddddd/000000",
  "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  "duration": 1905,
  "contentRating": "PG-13",
  "source": "https://hubpages.com/turpis.png",
  "tags": [
    "Action|Crime|Mystery|Thriller",
    "Crime|Drama|Romance",
    "Children|Drama",
    "Drama",
    "Drama"
  ]
}, {
  "id": "bb8406c2-5db7-4d5d-bd7d-c4a25171aaf8",
  "title": "Mr. 3000",
  "year": 1986,
  "cover": "http://dummyimage.com/217x198.bmp/cc0000/ffffff",
  "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  "duration": 2023,
  "contentRating": "R",
  "source": "https://geocities.jp/sed/vel/enim/sit/amet/nunc/viverra.html",
  "tags": [
    "Crime|Drama|Film-Noir|Mystery",
    "Action|Adventure|Fantasy",
    "Drama|War",
    "Horror|Mystery|Thriller"
  ]
}, {
  "id": "5896cfef-6710-4e7d-ac31-03c0da5f6d4f",
  "title": "Pirate, The",
  "year": 1998,
  "cover": "http://dummyimage.com/108x146.jpg/5fa2dd/ffffff",
  "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
  "duration": 1922,
  "contentRating": "NC-17",
  "source": "http://unicef.org/platea.jsp",
  "tags": [
    "Comedy|Horror",
    "Drama|Romance",
    "Action|Crime|Drama",
    "Comedy",
    "Comedy|Western"
  ]
}, {
  "id": "da86cfb7-eca9-4204-a0f5-595cc3fbd204",
  "title": "Troll",
  "year": 2009,
  "cover": "http://dummyimage.com/125x229.png/5fa2dd/ffffff",
  "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
  "duration": 1909,
  "contentRating": "NC-17",
  "source": "http://xinhuanet.com/commodo.aspx",
  "tags": [
    "Drama",
    "Adventure|Children|Drama",
    "Comedy|Drama"
  ]
}, {
  "id": "b12cc6e6-5f8c-4834-b36c-cd2cbfadbac1",
  "title": "Gods Must Be Crazy III, The (a.k.a. Crazy Safari) (Fei zhou he shang)",
  "year": 2007,
  "cover": "http://dummyimage.com/227x189.png/dddddd/000000",
  "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
  "duration": 2017,
  "contentRating": "PG",
  "source": "https://shareasale.com/nec/euismod/scelerisque/quam/turpis/adipiscing/lorem.jpg",
  "tags": [
    "Drama",
    "Comedy|Romance",
    "Animation",
    "Comedy"
  ]
}, {
  "id": "6394f0ec-945c-489e-bd71-050f7d334b7c",
  "title": "Birdsong (Cant dels ocells, El)",
  "year": 2009,
  "cover": "http://dummyimage.com/118x172.jpg/5fa2dd/ffffff",
  "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  "duration": 2040,
  "contentRating": "PG-13",
  "source": "http://wix.com/risus/auctor/sed/tristique.png",
  "tags": [
    "Drama",
    "Animation|Fantasy"
  ]
}, {
  "id": "f0070b83-237e-41e4-ab0a-e440edfe8434",
  "title": "Chinese Puzzle (Casse-tête chinois)",
  "year": 2003,
  "cover": "http://dummyimage.com/234x118.bmp/5fa2dd/ffffff",
  "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
  "duration": 1985,
  "contentRating": "PG-13",
  "source": "http://google.ru/egestas/metus/aenean/fermentum/donec/ut.html",
  "tags": [
    "Horror",
    "Sci-Fi|Thriller",
    "Drama|Romance"
  ]
}, {
  "id": "addbfa36-df41-4f57-bd5b-88068783544e",
  "title": "Miracles",
  "year": 1992,
  "cover": "http://dummyimage.com/139x161.bmp/dddddd/000000",
  "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  "duration": 1962,
  "contentRating": "PG",
  "source": "http://yandex.ru/cras.png",
  "tags": [
    "Drama|Romance",
    "(no genres listed)",
    "Comedy|Romance"
  ]
}, {
  "id": "d90d882c-5900-48da-bc52-27d043b99359",
  "title": "April Captains (Capitães de Abril)",
  "year": 2007,
  "cover": "http://dummyimage.com/185x186.png/5fa2dd/ffffff",
  "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
  "duration": 2054,
  "contentRating": "PG",
  "source": "https://harvard.edu/et/ultrices/posuere/cubilia.jsp",
  "tags": [
    "Comedy|Crime"
  ]
  }];

function filteredMoviesMock(tag) {
  return moviesMock.filter(movie => movie.tags.includes(tag));
}

class MoviesServicesMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }

  async createMovie() {
    return Promise.resolve(moviesMock[0]);
  }
}

module.exports = {
  moviesMock,
  filteredMoviesMock,
  MoviesServicesMock
};
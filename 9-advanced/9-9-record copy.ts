{
  type PageInfo2 = {
    title: string;
  }

  type Page2 = 'home'|'about'|'contact';

  // <키,밸류>
  const nav: Record<Page2, PageInfo2> ={
    home:{title:'ㅁㄴㅇ'},
    about:{title:'ㅁㄴㅇ'},
    contact:{title:'ㅇㅁㄴ'},
  }

  type Product2 = 'cat' | 'dog';
  type NewProduct2 = Capitalize<Product2>; // Cat / Dog
}
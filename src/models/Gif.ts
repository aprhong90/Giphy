interface Original {
  url: string;
}

interface Images {
  original: Original;
}

export default interface Gif {
  id: string;
  title: string;
  userName: string;
  import_datetime: string;
  url: string;
  images: Images;
}
